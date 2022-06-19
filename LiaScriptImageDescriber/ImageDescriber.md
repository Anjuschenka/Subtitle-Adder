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
This tool will help you add spoken text to a video.<br>
For general usability, we would recommend using the darkmode of Liascript, as this tool has been designed with this colour pattern in mind.

# Video Describer
For the current iteration of this program, below you find your first experimental video to which you shall add the text.

 <iframe src="https://video.tu-freiberg.de/media/embed?key=c49c659861d64aa2c74bc20540819db0&width=560&height=315&autoplay=false&controls=true&autolightsoff=false&loop=false&chapters=false&playlist=false&related=false&responsive=false&t=30" data-src="" class="iframeLoaded" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no" aria-label="media embed code" style=""></iframe>

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
