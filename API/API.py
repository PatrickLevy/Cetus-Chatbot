#!/usr/bin/env python3
from flask import Flask
from Main.Main import Main
app = Flask(__name__)

#####################################################
# Cetus API
# This will be our API for handling http requests
# from our web application and/or console application
#####################################################

# 1. Listen for incoming GET requests

# 2. Call MainRunner function to get response

# 3. Return response via http 


# Leaving this around for now as a way to verify the api is running
@app.route("/")
def hello():
    return "Hello World!!!!"

# Route for chatting with the bot
@app.route("/cetus")
def sayhi():
    response = Main('Hi cetus')
    return response