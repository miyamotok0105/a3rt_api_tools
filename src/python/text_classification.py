# -*- coding: utf-8 -*-
#! /usr/bin/env python
#use python2.7 lang.
#and set env like this.
#export A3RT_API_KEY_Text_Classification="XXXXXXXXXXXXXX"

import os
import json
import string
import codecs
import requests

def getAppInfo(sApiKey, text):

    sURL = "https://api.a3rt.recruit-tech.co.jp/text_classification/v1/classify"
    params = {'apikey' : sApiKey, 'model_id' : "default",'text' : text}
    stRes = requests.get(sURL,params=params)

    return stRes

if __name__ == '__main__':
	sApiKey = os.environ.get('A3RT_API_KEY_Text_Classification')
	text = "馬が走っています。"
	stRes = getAppInfo(sApiKey, text)
	data = json.loads(stRes.text)
	print(data)

