<!--
author:   Naumann Marco

email:    marconaumann@t-online.de

version:  0.0.2

language: en

narrator: US English Female

script: https://cdn.jsdelivr.net/gh/Nethiri/EnglishImageDescriber@main/LiaScriptImageDescriber/imageDescriberFunctions.js
script: https://cdn.jsdelivr.net/gh/Nethiri/EnglishImageDescriber@main/LiaScriptImageDescriber/ImageDescriber.js
script: https://cdn.jsdelivr.net/gh/Nethiri/EnglishImageDescriber@main/LiaScriptImageDescriber/userTasks.js

link: https://cdn.jsdelivr.net/gh/Nethiri/EnglishImageDescriber@main/LiaScriptImageDescriber/style.css
link: https://cdn.jsdelivr.net/gh/Nethiri/EnglishImageDescriber@main/LiaScriptImageDescriber/print.css

script: https://cdn.jsdelivr.net/gh/kaptn-seebar/english-lia@latest/base.js
import: https://raw.githubusercontent.com/liaTemplates/TextAnalysis/main/README.md

test: @Textanalysis.FULL

comment:  This is a small tool, which will help the user to learn how to propperly describe an image, a piece of code, or an graph.
-->

# Welcome
This tool will help you in describing images, graphs and code.<br>
For general usability, we would recomend using the darkmode of Liascript, as this tool has been designed with this color pattern in mind.

# Image Describer

To begin your describing adventures you need to figure out what you want to describe.
You can either describe a picture, an graph or a piece of code...

**What do you want to describe:**

<div id="TypeSelectorPlace">if you can see this, the function placeSelect() has not loaded properly...</div>

<script>placeSelect();</script>

---
Now that we have the general idea of what you want to do, we need the very object you would like to train describing on.  

For the current iteration of this program, please insert a Link into the input box below which is a direct link to an image of what you want to describe.

Here is an example Link: https://www.seekpng.com/png/detail/176-1761248_elder-goddess-little-pony-mlp-magnaluna.png

**Link to your Image:**
<div id="ImageLinkPlace">if you can see this, the function placeLinkReader() has not loaded propperly... </div>

<script>placeLinkReader();</script>

---
Some of you may already have started a project earlier... if that is the case... feel free to open it here...
<div id="FileReaderPlace">if you can see this, the function placeFileReader() has not worked properly...</div>

<script>placeFileReader()</script>

---

Once you have entered everything correctly, a script, generated just for you, should display your tasks below.

<div id="UserTaskPlace">if you can see this, the function userTask() has not worked properly...</div>

<script modify="false">
setTimeout(function() {
    document.getElementById("UserTaskPlace").innerHTML = "";
    document.getElementById("LaunchButton").onclick = function() {
        ImgUrlLink = document.getElementById("LinkTextBox").value;
        send.liascript(userTask());
    }
    document.getElementById("LinkTextBox").addEventListener("change", function() {
        ImgUrlLink = document.getElementById("LinkTextBox").value;
        send.liascript(userTask());
    });
    if(ImgUrlLink != undefined){
        send.liascript(userTask());
    }

}, 1000);
"";
</script>

# Last minute edits

<div id="TextEditor">If you can see this, then TextEditor() did not load properly... </div>

<script>TextEditor()</script>

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
