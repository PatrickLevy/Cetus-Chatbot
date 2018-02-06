#!/usr/bin/env python3

###########################################
# Question Parser Function(s)
# @input: Raw user input string
# @output: parsed string that can be fed into our AI module
###########################################
def categorizeInput(inputString):
    # Categories
    greeting = 0
    goodbye = 0
    question = 0
    statement = 0

    # Definitions
    greetingWords = ["hi", "hello", "what's up"]
    goodbyeWords = ["bye", "later", "good night"]
    questionWords = ["who", "what", "where", "when", "how", "why"]

    # Check for greetings or goodbyes
    if any(word in inputString for word in greetingWords):
        greeting = 1
    elif any(word in inputString for word in goodbyeWords):
        goodbye = 1
    
    # Check for question words
    if any(word in inputString for word in questionWords):
        question = 1
    
    # Check for last character punctuation
    lastChar = inputString[-1:]
    if lastChar == "?":
        question = 1
    if lastChar in [".", "!"]:
        statement = 1

    return {"greeting": greeting, "goodbye": goodbye, "question": question, "statement": statement}

###########################################
# Question Parser Function(s)
# @input: Raw user input string
# @output: parsed string that can be fed into our AI module
###########################################
def QuestionParser(inputString):
    # categorize input string
    categorized = categorizeInput(inputString)

    # TODO - Do more stuff! This is pretty lame!
    
    return categorized