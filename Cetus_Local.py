#!/usr/bin/env python3
# from Main import Main
from nmt_chatbot.inference import inference

while True:
    # Get input string from user
    input_string = input("Say something: ")

    # Call MainRunner With Input String and let the AI magic happen!
    responseFromCetus = inference(input_string)

    # Print Response
    print(responseFromCetus)
