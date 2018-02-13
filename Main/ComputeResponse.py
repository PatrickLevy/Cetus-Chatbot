#!/usr/bin/env python3

import myPremadeEstimator
###########################################
# Compute Response Function(s)
# @input: parsed input string
# @output: response to display to user
###########################################
def ComputeResponse(categoryData):
    # Default return string
    returnString = "Sorry, I'm still learning how to talk. Say something else."

    # TODO - Use ML to generate a response based on teh input string
    statementType = myPremadeEstimator.makePredictionUsingSavedModel(categoryData)
    print('-------result---------')
    print(statementType)
    print('----------------------')

    if (statementType == 'greeting'):
        returnString = "Hey, what's up?"
    elif (statementType == 'goodbye'):
        returnString == "Talk to you later"
    elif (statementType == 'question'):
        returnString = "Hmmm, good question. I am not sure about that."
    elif (statementType == 'statement'):
        returnString = "Wow, that's really cool."
    elif (statementType == 'excitedStatement'):
        returnString = "Holy crap! That's really awesome!"
    elif (statementType == 'excitedGoodbye'):
        returnString = "See ya!"
    elif (statementType == 'excitedQuestion'):
        returnString = "Yikes man, settle down."
    

    return returnString
