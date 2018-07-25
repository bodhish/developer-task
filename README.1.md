# Web Developer Task
 [pending]
## Trending Emoji's

Emoji's are everywhere now, from personal messaging apps(WhatsApp) to professional communication tools(Slack). 

We’d like you to build a platform that will display the most trending emoji's used by users in the platform.

### Task 1: Write a function to parse the input and find the emoji's used.

Create a function that will parse a given text to find emoji's in `assets/emojiList.json` and returns an array of emoji's used.

Example:

    Input: 
    
    Hi… :Smile: :excited_2:

    How's your life going? :slight smile:

    Done with your masters? :Smiley Cat:

    Hope everything is all right. :Sweat Smile:

    Output: 
    [😃,🙂,😺,😅]


        
Required:

1. The function should find the emoji's used from our list and return an array of emoji's.

2. Emoji's used which do not exist in our list (emojiList.json) should be ignored. For example, :excited_2: in the above example.


### Task 2: Build an Emoji API

This repository contains a simple Express server that has two end-points:

1. `POST /api/emoji` to parse a given text

2. `GET /api/emoji/trending` that returns the top 10 trending emoji's

Let's create an API that will keep a track of trending emoji's used. Use the function written in task 1 to find the emojis used and API end point should keep the count of number of times the emoji is used.

Required

1. The API should count the number of times an emoji is used. 
    
2. Using these tests, fill in the API endpoint handlers so that they function as the tests expect.

3. Use code from your previous task!

### Task 3: Build the frontend consuming the Emoji API 


We'd like you to get the front-end working!
Filling in the input with a text, and clicking the submit button should display the Top 10 trending emoji's in the output div.

Required

1. Use the API 

2. Display the top 10 emoji's used


### Additional Task During Pair-Programming Session