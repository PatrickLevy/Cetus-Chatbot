#!/usr/bin/env python3
from flask import Flask
from flask import request
from flask_cors import CORS
from Main.Main import Main
app = Flask(__name__)
CORS(app)

###########################################################################
# Cetus API
# This will be our API for handling http requests
# from our web application and/or console application
#
# To run the this api server:
#   1.  pip install Flask
#   2.  FLASK_APP=./API/API.py flask run  (from the root of the project)
#       
#       - app should be running on port 5000  (localhost:5000/cetus)
#
#       - FLASK_APP=./API/API.py flask run --host=138.68.45.183 --port=80
#
# References: http://flask.pocoo.org/
#
###########################################################################

# Route to verify that the api is running
@app.route("/")
def hello():
    return "I'm alive!!!!"

# Route for chatting with the bot
# pass data as "form data" - e.g. <domain>/cetus?userText=Hello!
@app.route("/cetus")
def talkToCetus():
    userText = request.args.get('userText')

    # Call Main function to get Cetus' response
    response = Main(userText)
    print('userText', userText)
    print('response', response)

    # Return response via http 
    return response
