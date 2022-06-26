<!--
author:   Naumann Marco

email:    marconaumann@t-online.de

version:  0.0.2

language: en

narrator: US English Female

script: /LiaScriptImageDescriber/imageDescriberFunctions.js
script: /LiaScriptImageDescriber/ImageDescriber.js
script: /LiaScriptImageDescriber/userTasks.js
script: https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js

link: /LiaScriptImageDescriber/style.css
link: /LiaScriptImageDescriber/print.css

script: https://cdn.jsdelivr.net/gh/kaptn-seebar/english-lia@latest/base.js
import: https://raw.githubusercontent.com/liaTemplates/TextAnalysis/main/README.md

test: @Textanalysis.FULL

comment:  This is a small tool, which will help the user to learn how to propperly describe an image, a piece of code, or an graph.
-->

# Video Describer
For the current iteration of this program, below you find your first experimental video to which you shall add the text.

 <iframe src="https://video.tu-freiberg.de/media/embed?key=c49c659861d64aa2c74bc20540819db0&width=560&height=315&autoplay=false&controls=true&autolightsoff=false&loop=false&chapters=false&playlist=false&related=false&responsive=false&t=30" data-src="" class="iframeLoaded" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no" aria-label="media embed code" style=""></iframe>

Task - Attention  
================
        
To capture the attention of your readers, you should start with a good introduction phrase(s). <br/>
Here are some examples you may use:

* If you look at this picture, you will see...
* In the picture you can see...   
* The picture shows... 
            
<textarea id="graphTextArea1" oninput="TBonChange(this)">Please enter text here!</textArea>
<br/>
<br/>

Task - Details
==============

Now that we have the attention of your reader, and we have a general understanding on what is been displayed, you should start looking at details. <br/>
Here are some examples on how to continue:

* The image we are looking at has been painted/taken at...
* When you look at the image, you can see that it is a black and white...
* This picture is a... picture and has been taken by...

<textarea id="graphTextArea2" oninput="TBonChange(this)">Please enter text here!</textArea>
<br/>
<br/>

Okay... we should now have finished the intorduction of your discription. <br/>
So, now please describe the picture and use phrases like:

* In the foreground of the picture you will...
* In the background you can see that...
* In the right/left/center...
* Between ... there is...
* At the top/At the bottom there is...

<textarea id="graphTextArea3" oninput="TBonChange(this)">Please enter text here!</textArea>
<br/>
<br/>

Now we know what we see on the picture. Let's focus now on who is doing what or what is going on. <br/>
To take some examples: <br/>

* The... is talking to...
* ... is gesturing to...

<textarea id="graphTextArea4" oninput="TBonChange(this)">Please enter text here!</textArea>
<br/>
<br/>

Task-Your Opinion
=================

So, that all is fine and dandy, lets now focus on what you are thinking... <br/>
What do you think is the meaning of the picture? <br/>
Here are some examples: <br/>

* It seems as if...
* ... might be a symbol of ... because...
* I (don't) like ... because
* ... makes me think of ...

<textarea id="graphTextArea5" oninput="TBonChange(this)">Please enter text here!</textArea>
<br/>
<br/>

# Text Analysis

On this page, you shall have an automated evaluation of your text below:
<div id="TestPlace"></div>

<script> PlaceTest() </script>

# Print / Save it!

If you want to save your work, so you may come back later to it... please press the button below:
<div id="Saver">If you can see this, then PlaceSaver() function has not loaded</div>
<script>PlaceSaver()</script>

---

If you want to print your work, you can do so below, though maybe add some nice information like... your name and stuff first :)

Name:

<input id="NameBox" oninput="OnNameChange(this)">

Matrikel Number:

<input id="MatBox" oninput="OnNameChange(this)">



<div id="Printer">If you can see this, the PlacePrinter() function has not loaded properly...</div>

<script> PlacePrinter() </script>