# Web Developer Task

Modified version:

Write function to return possible smileys given an input string
Implement API with a POST route that accepts and stores comments, and a GET route that returns stored comments.
Update UI scaffold to:

Use function in React UI to implement an auto-complete.
Update UI with message when a post comment button is pressed.
POST the message to the API for storage.
Reloading the UI should render stored messages.

Back story 
https://slack.engineering/rebuilding-slacks-emoji-picker-in-react-bfbd8ce6fbfe

## Emoji Search

All the companies use feedback forms to collect the user feedback on the products.

Emoji's are everywhere now, these text editors in the feedback forms are now expected to support emoji's.

We’d like you to build a text editor that will let users express more using emoji’s inline.

### Task 1: Write a function to search for emoji

Create a function that will search for emoji in the `assets/emojiList.json` file for a given input.
        
Required:

1. The function should return a list of emoji's with the title

    ```  
     Example:    
              😃 :Smile
              😅 :Sweat Smile             
              🙂 :Slight Smile
              😺 :Smiley Cat
    ```

2. The function should search the title and keyword(json file) to find the match.

3. Null responses should be handled with an appropriate message

### Task 2: Build an Emoji Search API

Use the function written in task 1 to create an API that will enable users to add a favorite tag for the selected emoji.

Required

1. GET request that will return a list of emoji's
    
2. POST request that will allow users to add a favorite tag for selected emoji
[NEEDS IMPROVEMENT]

### Task 3: Build the Text Editor, consuming the Emoji Search API 

The text editor in the task should 

1. Start listing the emoji's when the user starts typing with a colon

2. Replace the text with the emoji when user select an emoji



### Additional Task During Pair-Programming Session