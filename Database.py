#!/usr/bin/env python3

#############################################################
# Utility for importing data into our database
#
# References: https://docs.python.org/2/library/sqlite3.html
#############################################################

import sqlite3
conn = sqlite3.connect('reddit_data.db')
import json

#####################################
# Create Database Table
#####################################
c = conn.cursor()

# Drop old version of table
c.execute('''DROP TABLE IF EXISTS RedditData''')

# Create db table
c.execute('''CREATE TABLE RedditData
             (body text, link_id text, score int, ups int, id text, parent_id text, gilded real)''')

######################################
# Read from file and input records
######################################
inputFile = open("./Data/Small_Sample_Set_RC_2005-12", "r")
print("Reading data from ./Data/Small_Sample_Set_RC_2005-12")
with inputFile:

    # Each line is a record
    lines = inputFile.readlines()

    # Loop through each line (which contains one super long json object record)
    for line in lines:
        jsonDoc = json.loads(line)

        # If the body has text, insert the row of data
        if (jsonDoc["body"] != "[deleted]"):
            print('doc inserted')
            c.execute("INSERT INTO RedditData (body, link_id, score, ups, id, parent_id, gilded) VALUES (?, ?, ?, ?, ?, ?, ?)",
            (jsonDoc["body"], jsonDoc["link_id"], jsonDoc["score"], jsonDoc["ups"], jsonDoc["id"], jsonDoc["parent_id"], jsonDoc["gilded"]))

######################################
# Save (commit) the changes to db
######################################
conn.commit()

# We can also close the connection if we are done with it.
# Just be sure any changes have been committed or they will be lost.
conn.close()