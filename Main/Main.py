#!/usr/bin/env python3
from .ComputeResponse import ComputeResponse
from .QuestionParser import QuestionParser

##########################################################
# Main Driver Program
# This main function will be called directly from:
#   - Cetus_Local.py (When we want to run everything locally without the api, web site, etc.)
#   - API.py (When an incoming chat request is recieved from our web application or Cetus_Remote)
###########################################################

def Main(chat_input_string):

    # Parse and Tokenize Input String
    parsedData = QuestionParser(chat_input_string)

    # Generate Response
    response = ComputeResponse(parsedData)

    # Return to wherever this chat request came from (API or Cetus_Local)
    return response



