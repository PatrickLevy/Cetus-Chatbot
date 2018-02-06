#!/usr/bin/env python3

###########################################
# Compute Response Function(s)
# @input: parsed input string
# @output: response to display to user
###########################################
def ComputeResponse(categoryData):
    # Debug
    # print('categoryData', categoryData)
    
    # Default return string
    returnString = "Sorry, I'm still learning how to talk. Say something else."
    
    # Use categories to determine response
    if categoryData["greeting"] == 1:
        returnString = "Hey, what's up?"
    elif categoryData["goodbye"] == 1:
        returnString = "Talk to you later"
    elif categoryData["question"] == 1:
        returnString = "Hmmm, good question. I don't know the answer."
    elif categoryData["statement"] == 1:
        returnString = "Wow, tell me more!"

    # TODO - Use ML to generate a response based on teh input string

    return returnString
