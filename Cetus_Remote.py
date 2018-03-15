#!/usr/bin/env python3
# from Main.Main import Main
import requests
# from config import api_server

###########################################################################
# Cetus Console Application
# This is how you can talk to Cetus remotely using a terminal
#
# To run the this console application:
#   1.  pip install requests
#   2.  make sure that you are configured to point to the correct api server location (config.py)
#   3.  ./Cetus_Remote.py
#       
# References: http://docs.python-requests.org/en/master/user/quickstart/
#
###########################################################################
while True:
    # Get input string from user
    # TODO Input validation
    input_string = input("Say something: ")
    api_server = 'http://184.105.3.121:3001/cetus'

    # Send input_string to Cetus API via HTTP
    payload = {'userText': input_string}
    req = requests.get(api_server, params = payload)

    # Print Response from Cetus
    print("\n(Cetus)", req.text, "\n")
