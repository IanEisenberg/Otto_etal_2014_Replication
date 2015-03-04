# -*- coding: utf-8 -*-
"""
Created on Wed Feb 18 11:52:40 2015

@author: Ian
"""
#cd '/Users/Ian/Box Sync/Programming/Experiments/Otto_etal_2014_Replication'

import json
import numpy as np 
import pandas
import re
import os
files = os.listdir('../sandbox-results/')
subj_lookup = {}
curr_subj = 1

for file in files:
    subj_id = '%03d' % curr_subj
    subj_lookup[subj_id] = file    
    
    f = open('../sandbox-results/' + file)
    data = json.load(f)
    df = pandas.DataFrame(data['answer'])
    
    #reduced the data set
    df_trials = df[df.type.notnull()]
    
    #Create a stroop dataset
    #first three are final action keys, second three were used for some practice
    color_choice = {82: 'red', 66: 'blue', 71: 'green', 37: 'red', 40: 'blue', 39: 'green'}
    stroop_trials = [df_trials.type[i][0:6] == 'stroop' for i in df_trials.index]
    stroop_df = df_trials[stroop_trials]
    stroop_df['color_choice'] = [color_choice[key] for key in stroop_df.key_press]
    
    #extract word color and word text from stimulus string
    probe = re.compile(r'.*color:(.*)">(.*)</p>')
    stroop_df['word_color'] = [probe.match(stimulus).group(1) for stimulus in stroop_df.stimulus]
    stroop_df['word_text'] = [probe.match(stimulus).group(2).lower() for stimulus in stroop_df.stimulus]
    stroop_df['congruent'] = stroop_df.word_color==stroop_df.word_text
    stroop_df['correct'] = stroop_df.color_choice == stroop_df.word_color
    stroop_df = stroop_df.drop(['stimulus','global_params','internal_chunk_id','key_press','time_elapsed','trial_count','trial_index', 'trial_index_global','trial_type'],axis = 1)
    stroop_df['type']=[word[7:] for word in stroop_df.type]
    stroop_df['repeat_stim']= np.sum(stroop_df.shift(1)[['word_color','word_text']] == stroop_df[['word_color','word_text']],1)==2
    stroop_df['id'] = subj_id
    stroop_df.index = range(len(stroop_df))
    stroop_df.index.name = 'trial'
    
    #ensure that subject had >75% accuracy on the stroop
    if np.mean(stroop_df.query('type != "practice"')['correct'])<.75:
        continue
   
    #Create a decision task dataset
    decision_trials = df_trials[np.logical_not(stroop_trials)]
    decision_trials.index = range(len(decision_trials))
    #refactor jsPsych trials into a more understandable trial type
    
    global_params = decision_trials[decision_trials.global_params.notnull()].global_params
    practice_start = global_params.index[0]
    task_start = global_params.index[1]
    probe = re.compile(r".*decision-stim' src= '(images/.*png).*(images/.*png).*")
    
    
    #make practice dataframe
    #get stims
    stims = global_params[practice_start]['stims']
    actions = global_params[practice_start]['actions']
    practice_trials=[]
    
    #get index of "decision_first" trials
    start_index = [decision_trials.index[i] for i in range(practice_start+1,task_start) if decision_trials.type[i]=='decision_first']
    for i in start_index:
        trial_dict = {}
        trial_dict['id'] = subj_id
        trial_dict['trial_count'] = decision_trials['trial_count'][i]
        if decision_trials.key_press[i] != -1:
            trial_dict['fs_stims'] = (stims.index(probe.match(decision_trials.stimulus[i]).group(1)), stims.index(probe.match(decision_trials.stimulus[i]).group(2)))
            trial_dict['fs_choice'] = trial_dict['fs_stims'][actions.index(decision_trials.key_press[i])]
            trial_dict['fs_RT'] = decision_trials.rt[i]
            trial_dict['ss_stims'] = (stims.index(probe.match(decision_trials.stimulus[i+1]).group(1)), stims.index(probe.match(decision_trials.stimulus[i+1]).group(2)))
            if decision_trials.key_press[i+1] != -1:
                trial_dict['ss_choice'] = trial_dict['ss_stims'][actions.index(decision_trials.key_press[i+1])]
                trial_dict['ss_RT'] = decision_trials.rt[i+1]
                trial_dict['FB'] = int(not 'red' in decision_trials.stimulus[i+2])
    
            else:
                trial_dict['ss_choice'] = -1
                trial_dict['FB'] = -1
        else:
            trial_dict['fs_stims'] = (stims.index(probe.match(decision_trials.stimulus[i]).group(1)), stims.index(probe.match(decision_trials.stimulus[i]).group(2)))
            trial_dict['fs_choice'] = -1
            trial_dict['ss_stims'] = -1
            trial_dict['ss_choice'] = -1
            trial_dict['ss_RT'] = -1
            trial_dict['FB'] = -1
        practice_trials.append(trial_dict)
    
    practice_df = pandas.DataFrame(practice_trials)
    practice_df['switch'] = (practice_df.fs_choice.shift(1)!=practice_df.fs_choice).astype(int)
    practice_df.set_value(0,'switch', None)
    practice_df.set_index(practice_df['trial_count'], inplace=True)
    practice_df.drop('trial_count', axis = 1, inplace = True)    
    transition = []
    for i in practice_df.index:
        if practice_df.fs_choice[i] == 0:
            if practice_df.ss_stims.ix[i] == (2,3) or practice_df.ss_stims.ix[i] == (3,2):
                transition.append('common')
            else:
                transition.append('rare')
        elif practice_df.fs_choice[i] == 1:
            if practice_df.ss_stims.ix[i] == (2,3) or practice_df.ss_stims.ix[i] == (3,2):
                transition.append('rare')
            else:
                transition.append('common')
        else:
            transition.append(np.nan)
    practice_df['transition'] = transition
    
    
    #make task dataframe
    #get stims
    stims = global_params[task_start]['stims']
    actions = global_params[task_start]['actions']
    task_trials=[]
    
    #get index of "decision_first" trials
    start_index = [decision_trials.index[i] for i in range(task_start+1,len(decision_trials)) if decision_trials.type[i]=='decision_first']
    for i in start_index:
        trial_dict = {}
        trial_dict['id'] = subj_id
        trial_dict['trial_count'] = decision_trials['trial_count'][i]
        if decision_trials.key_press[i] != -1:
            trial_dict['fs_stims'] = (stims.index(probe.match(decision_trials.stimulus[i]).group(1)), stims.index(probe.match(decision_trials.stimulus[i]).group(2)))
            trial_dict['fs_choice'] = trial_dict['fs_stims'][actions.index(decision_trials.key_press[i])]
            trial_dict['fs_RT'] = decision_trials.rt[i]
            trial_dict['ss_stims'] = (stims.index(probe.match(decision_trials.stimulus[i+1]).group(1)), stims.index(probe.match(decision_trials.stimulus[i+1]).group(2)))
            if decision_trials.key_press[i+1] != -1:
                trial_dict['ss_choice'] = trial_dict['ss_stims'][actions.index(decision_trials.key_press[i+1])]
                trial_dict['ss_RT'] = decision_trials.rt[i+1]
                trial_dict['FB'] = int(not 'red' in decision_trials.stimulus[i+2])
            else:
                trial_dict['ss_choice'] = -1
                trial_dict['FB'] = -1
        else:
            trial_dict['fs_stims'] = (stims.index(probe.match(decision_trials.stimulus[i]).group(1)), stims.index(probe.match(decision_trials.stimulus[i]).group(2)))
            trial_dict['fs_choice'] = -1
            trial_dict['ss_stims'] = (-1,-1)
            trial_dict['ss_choice'] = -1
            trial_dict['ss_RT'] = -1
            trial_dict['FB'] = -1
        task_trials.append(trial_dict)
    
    decision_df = pandas.DataFrame(task_trials)
    decision_df['Switch'] = (decision_df.fs_choice.shift(1)!=decision_df.fs_choice).astype(int)
    decision_df.set_value(0,'switch', None)
    decision_df.set_index(decision_df['trial_count'], inplace=True)
    decision_df.drop('trial_count', axis = 1, inplace = True)
    #add a column for rare vs. common transitions. A rare transition is
    #first stage 0 -> second-stage 4 or 5, and common is second stage 2 or 3
    transition = []
    for i in decision_df.index:
        if decision_df.fs_choice[i] == 0:
            if decision_df.ss_stims.ix[i] == (2,3) or decision_df.ss_stims.ix[i] == (3,2):
                transition.append('common')
            else:
                transition.append('rare')
        elif decision_df.fs_choice[i] == 1:
            if decision_df.ss_stims.ix[i] == (2,3) or decision_df.ss_stims.ix[i] == (3,2):
                transition.append('rare')
            else:
                transition.append('common')
        else:
            transition.append(np.nan)
    decision_df['transition'] = transition
    decision_df
            
    
    
    #ensure that subjects did not miss more than 20 response deadlines    
    if np.sum(decision_df['ss_choice']==-1)>20:
        continue
    
    #concat practice and task trials into one df
    decision_final_df=pandas.concat([practice_df,decision_df], keys = ['practice','task'], names = ['type','trial'])
    stroop_df.to_csv('../Data/' + subj_id +'_stroop_df.csv')
    decision_final_df.to_csv('../Data/' + subj_id +'_decision_df.csv')

    curr_subj+=1
    

pandas.DataFrame.from_dict(subj_lookup, orient = 'index').to_csv('../Data/subj_lookup.csv')









