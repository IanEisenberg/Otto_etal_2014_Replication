# -*- coding: utf-8 -*-
"""
Created on Wed Feb 18 11:52:40 2015

@author: Ian
"""
#cd '/Users/Ian/Box Sync/Programming/Experiments/Otto_etal_2014_Replication'

import json
import pandas
import re
f = open('../Data/test_save_full.json')
data = json.load(f)
df = pandas.DataFrame(data)


#reduced the data set
df_trials = df[df.type.notnull()]

#Create a stroop dataset
color_choice = {37: 'red', 40: 'blue', 39: 'green'}
stroop_trials = [df_trials.type[i][0:6] == 'stroop' for i in df_trials.index]
stroop_df = df_trials[stroop_trials]
stroop_df['color_choice'] = [color_choice[key] for key in stroop_df.key_press]

#extract word color and word text from stimulus string
probe = re.compile(r'.*color:(.*)">(.*)</p>')
stroop_df['word_color'] = [probe.match(stimulus).group(1) for stimulus in stroop_df.stimulus]
stroop_df['word_text'] = [probe.match(stimulus).group(2).lower() for stimulus in stroop_df.stimulus]
stroop_df['congruent'] = stroop_df.word_color==stroop_df.word_text
stroop_df = stroop_df.drop(['stimulus','global_params','internal_chunk_id','key_press','time_elapsed','trial_count','trial_index', 'trial_index_global','trial_type'],axis = 1)
stroop_df.index = range(len(stroop_df))


#Create a decision task dataset
decision_trials = df_trials[np.logical_not(stroop_trials)]
decision_trials.index = range(len(decision_trials))
#refactor jsPsych trials into a more understandable trial type

global_params = decision_trials[decision_trials.global_params.notnull()].global_params
practice_start = global_params.index[0]
task_start = global_params.index[1]

#make practice dataframe
#get stims
stims = [img[1:-1] for img in global_params[practice_start]['stims']]
actions = global_params[practice_start]['actions']
practice_trials=[]

#get index of "decision_first" trials
start_index = [decision_trials.index[i] for i in range(practice_start+1,task_start) if decision_trials.type[i]=='decision_first']
for i in start_index:
    trial_dict = {}
    if decision_trials.key_press[i] != -1:
        trial_dict['fs_stims'] = (stims.index(decision_trials.stimulus[i][39:52]), stims.index(decision_trials.stimulus[i][-21:-8]))
        trial_dict['fs_choice'] = actions.index(decision_trials.key_press[i])
        trial_dict['fs_RT'] = decision_trials.rt[i]
        trial_dict['ss_stims'] = (stims.index(decision_trials.stimulus[i+1][39:52]), stims.index(decision_trials.stimulus[i+1][-21:-8]))
        if decision_trials.key_press[i+1]:
            trial_dict['ss_choice'] = actions.index(decision_trials.key_press[i+1])
            trial_dict['ss_RT'] = decision_trials.rt[i+1]
            trial_dict['FB'] = int(not 'red' in decision_trials.stimulus[i+2])

        else:
            trial_dict['ss_choice'] = -1
            trial_dict['FB'] = -1
    else:
        trial_dict['ss_stims'] = -1
        trial_dict['ss_choice'] = -1
        trial_dict['ss_RT'] = -1
        trial_dict['FB'] = -1
    practice_trials.append(trial_dict)
     
       
#make task dataframe
#get stims
stims = [img[1:-1] for img in global_params[task_start]['stims']]
actions = global_params[task_start]['actions']
task_trials=[]

#get index of "decision_first" trials
start_index = [decision_trials.index[i] for i in range(task_start+1,len(decision_trials)) if decision_trials.type[i]=='decision_first']
for i in start_index:
    trial_dict = {}
    if decision_trials.key_press[i] != -1:
        trial_dict['fs_stims'] = (stims.index(decision_trials.stimulus[i][39:52]), stims.index(decision_trials.stimulus[i][-21:-8]))
        trial_dict['fs_choice'] = actions.index(decision_trials.key_press[i])
        trial_dict['fs_RT'] = decision_trials.rt[i]
        trial_dict['ss_stims'] = (stims.index(decision_trials.stimulus[i+1][39:52]), stims.index(decision_trials.stimulus[i+1][-21:-8]))
        if decision_trials.key_press[i+1]:
            trial_dict['ss_choice'] = actions.index(decision_trials.key_press[i+1])
            trial_dict['ss_RT'] = decision_trials.rt[i+1]
            trial_dict['FB'] = int(not 'red' in decision_trials.stimulus[i+2])
        else:
            trial_dict['ss_choice'] = -1
            trial_dict['FB'] = -1
    else:
        trial_dict['ss_stims'] = -1
        trial_dict['ss_choice'] = -1
        trial_dict['ss_RT'] = -1
        trial_dict['FB'] = -1
    task_trials.append(trial_dict)

decision_df = pandas.DataFrame(task_trials)
#remove trials where subject didn't respond in one of the two trials
no_response_trials = np.logical_or(decision_df.fs_stims.isnull(), decision_df.ss_stims.isnull());
#remove trials without response
decision_df = decision_df[np.logical_not(no_response_trials)]

#QA - check that the correct second stage came up 70% of the time after the relevant key was pressed
tmp = [decision_df.ss_stims[i][0] for i in decision_df.index if decision_df.fs_stims[i][int(decision_df.fs_choice[i])]==1]
sum([tmp[i] == 2 or tmp[i] == 3 for i in tmp])/len(tmp)








