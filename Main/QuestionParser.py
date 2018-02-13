#!/usr/bin/env python3

###########################################
# Question Parser Function(s)
# @input: Raw user input string
# @output: parsed string that can be fed into our AI module
###########################################
def parseInput(inputString):
    # Categories
    greetingWord = 0
    goodbyeWord = 0
    questionWord = 0
    questionMark = 0
    period = 0
    exclamationPoint = 0

    # Definitions
    greetingWords = ["hi", "hello", "what's up"]
    goodbyeWords = ["bye", "later", "good night"]
    questionWords = ["who", "what", "where", "when", "why", "how"]

    # Check for greetings
    if any(word in inputString for word in greetingWords):
        greetingWord = 1
    
    # Check for goodbyes
    elif any(word in inputString for word in goodbyeWords):
        goodbyeWord = 1
    
    # Check for question words
    if any(word in inputString for word in questionWords):
        questionWord = 1
    
    # Check for last character punctuation
    lastChar = inputString[-1:]
    if lastChar == "?":
        questionMark = 1
    if lastChar in ["."]:
        period = 1
    if lastChar in ["!"]:
        exclamationPoint = 1

    return {
        "greetingWord": greetingWord,
        "goodbyeWord": goodbyeWord,
        "questionWord": questionWord,
        "questionMark": questionMark,
        "period": period,
        "exclamationPoint": exclamationPoint,
    }

###########################################
# Question Parser Function(s)
# @input: Raw user input string
# @output: parsed string that can be fed into our AI module
###########################################
def QuestionParser(inputString):
    # categorize input string
    parsed = parseInput(inputString)

    return parsed