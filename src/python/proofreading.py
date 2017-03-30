# -*- coding: utf-8 -*-
#! /usr/bin/env python
#use python2.7 lang.
#and set env like this.
#export A3RT_API_KEY_Proofreading="XXXXXXXXXXXXXX"

import os
import json
import string
import codecs
import requests

def getAppInfo(sApiKey, text):

    sURL = "https://api.a3rt.recruit-tech.co.jp/proofreading/v1/typo"
    params = {'apikey' : sApiKey,'sentence' : text}
    stRes = requests.get(sURL,params=params)

    return stRes

if __name__ == '__main__':
	sApiKey = os.environ.get('A3RT_API_KEY_Proofreading')
	text = "馬が走るいます。"
	stRes = getAppInfo(sApiKey, text)
	data = json.loads(stRes.text)
	print(data)

