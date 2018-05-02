# -*- coding: utf-8 -*-
#! /usr/bin/env python
#use python2.7 lang.
#and set env like this.
#export A3RT_API_KEY_Text_Suggest="XXXXXXXXXXXXXX"

import os
import requests

def getAppInfo(sApiKey, text):

    sURL = "https://api.a3rt.recruit-tech.co.jp/text_suggest/v2/predict"
    params = {'apikey' : sApiKey,'previous_description' : text}
    stRes = requests.get(sURL,params=params)

    return stRes


if __name__ == '__main__':
    sApiKey = os.environ.get('A3RT_API_KEY_Text_Suggest')
    text = "馬"
    stRes = getAppInfo(sApiKey, text)
    print(stRes.text)


