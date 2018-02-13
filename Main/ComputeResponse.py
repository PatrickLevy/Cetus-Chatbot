#!/usr/bin/env python3

from myPremadeEstimator import main
###########################################
# Compute Response Function(s)
# @input: parsed input string
# @output: response to display to user
###########################################
def ComputeResponse(categoryData):
    # Default return string
    returnString = "Sorry, I'm still learning how to talk. Say something else."
    
    # Use categories to determine response
    if categoryData["greetingWord"] == 1:
        returnString = "Hey, what's up?"
    elif categoryData["goodbyeWord"] == 1:
        returnString = "Talk to you later"
    elif categoryData["questionWord"] == 1:
        returnString = "Hmmm, good question. I don't know the answer."
    elif categoryData["questionMark"] == 1:
        returnString = "Hmmm, good question. I don't know the answer."
    elif categoryData["period"] == 1:
        returnString = "Hmmm... that's interesiting."
    elif categoryData["exclamationPoint"] == 1:
        returnString = "Wow! Tell me more!"

    # TODO - Use ML to generate a response based on teh input string
    #main()

    return returnString
