# -*- coding: utf-8 -*-
"""
Created on Wed Feb 18 11:52:40 2015

@author: Ian
"""
import json
import pandas
f = open('../Data/test_save2.json')
data = json.load(f)
df = pandas.DataFrame(data)


df.global_params[2]['stims'] = [img[1:-1] for img in df.global_params[2]['stims']]
#left index
df.global_params[2]['stims'].index(df.stimulus[3][39:52])
#right index
df.global_params[2]['stims'].index(df.stimulus[3][-15:-2])
