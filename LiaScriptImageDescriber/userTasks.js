const userTasks = {}

userTasks.graph = function() {
    return `
---------


Task - Attention  
================
        
To capture the attention of your readers, you should start with a good introduction phrase(s).\n
Here are some examples you may use:

* If you look at this picture, you will see...
* In the picture you can see...   
* The picture shows... 
            
<textarea id="graphTextArea1" oninput="TBonChange(this)">Please enter text here!</textArea> \n

Task - Details
==============

Now that we have the attention of your reader, and we have a general understanding on what is been displayed, you should start looking at details.  \n
Here are some examples on how to continue:  \n

* The image we are looking at has been painted/taken at...
* When you look at the image, you can see that it is a black and white...
* This picture is a... picture and has been taken by...

<textarea id="graphTextArea2" oninput="TBonChange(this)">Please enter text here!</textArea>  \n

Okay... we should now have finished the intorduction of your discription.\n
So, now please describe the picture and use phrases like:\n
* In the foreground of the picture you will...
* In the background you can see that...
* In the right/left/center...
* Between ... there is...
* At the top/At the bottom there is...

<textarea id="graphTextArea3" oninput="TBonChange(this)">Please enter text here!</textArea>  \n

Now we know what we see on the picture. Lets focus now on who is doing what or what is going on.\n
To take some examples:\n
* The... is talking to...
* ... is gesturing to...

<textarea id="graphTextArea4" oninput="TBonChange(this)">Please enter text here!</textArea>  \n

Task-Your Opinion
=================

So, that all is fine and dandy, lets now focus on what you are thinking...\n
What do you think is the meaning of the picture?\n
Here are some examples:\n
* It seems as if...
* ... might be a symbol of ... because...
* I (don't) like ... because
* ... makes me think of ...

<textarea id="graphTextArea5" oninput="TBonChange(this)">Please enter text here!</textArea>  \n

`
}