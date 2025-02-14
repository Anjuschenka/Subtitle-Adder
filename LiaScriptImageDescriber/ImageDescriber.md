<!--
author:   Anja Voigt

email:    anjvoi1@web.de

version:  0.0.1

language: en

narrator: US English Female






script: https://cdn.jsdelivr.net/gh/Anjuschenka/Subtitle-Adder@main/LiaScriptImageDescriber/imageDescriberFunctions.js
script: /LiaScriptImageDescriber/ImageDescriber.js
script: https://cdn.jsdelivr.net/gh/Anjuschenka/Subtitle-Adder@main/LiaScriptImageDescriber/userTasks.js
script: https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js
script: https://cdn.jsdelivr.net/gh/gelbeforelle/thesaurus@0.1.2-alpha/code.js
script: https://www.youtube.com//s//player//c4225c42//www-widgetapi.vflset//www-widgetapi.js

link: https://cdn.jsdelivr.net/gh/Anjuschenka/Subtitle-Adder@main/LiaScriptImageDescriber/style.css
link: https://cdn.jsdelivr.net/gh/Anjuschenka/Subtitle-Adder@main/LiaScriptImageDescriber/print.css

script: https://cdn.jsdelivr.net/gh/kaptn-seebar/english-lia@latest/base.js
import: https://raw.githubusercontent.com/liaTemplates/TextAnalysis/main/README.md

test: @Textanalysis.FULL
persistent: True

comment:  This is a small tool, which will help the user to learn how to propperly describe an image, a piece of code, or an graph.
-->

# Video Describer

Welcome to our tool to create subtitles for a video. For your first try, you will be given an experimental video and the structure for the subtitles. Your task is it to create the subtitles.

If you have already created the subtitles and downloaded them, you can upload the file here and edit them on the next page or see the evaluation on the page "Text Analysis".

Otherwise please go forward to the next page.

<p>
Please specify a file, or a set of files:<br>
<input type="file" name="datafile" size="20" id="uploadfile">
</p>

<div id="Uploader" class="example-screen">If you can see this, then the Upload-Function did not work</div>

<script> PlaceReader(); </script>

# Subtitle Creator

<iframe src="https://video.tu-freiberg.de/media/embed?key=c49c659861d64aa2c74bc20540819db0&width=560&height=315&autoplay=false&controls=true&autolightsoff=false&loop=false&chapters=false&playlist=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no" aria-label="media embed code" style=""></iframe>

The goal of this short LiaScript-Course is to add the subtitles to a given video. In this first version you can follow the given structure. Under each text box you can see how long reading your text aloud would take. You should try to fit your text to the video so that it is not longer than the video and the texts fit to the actual video part.

Task 0 - Title
================

To begin you should give your video a title that hints the topic before watching the video.

<textarea id="TitleTextArea" oninput="TBonChange(this)">Please enter text here!</textArea>

Task 1 - Attention  
================
        
To capture the attention of your watchers, you should introduce them into the topic. <br/>
Here are some examples you may use:

* The experiment shown in this video...
* This videos shows ...
* In this video you can see ...
            
<textarea id="AttentionTextArea" oninput="TBonChange(this)">Please enter text here!</textArea>

<div id="Attention"></div>

<script> PlaceSpeak("Attention") </script>


Task 2 - Introduction
==============

Now that we have the attention of your watchers, you should give a few more details about the experiment. You might say something about certain safety instructions, about the used substances or about an imagethe reaction looks like. <br/>
Here are some examples on how to continue:

* During the experiment you should especially be careful about...
* The reaction is a typical example of ... and is used for ...
* The reaction shows a typical characteristic of the (substance) that ...

<textarea id="IntroductionTextArea" oninput="TBonChange(this)">Please enter text here!</textArea>

<div id="Introduction"></div>

<script> PlaceSpeak("Introduction"); </script>

Task 3 - Execution
==============

When the experiment starts, you should tell the watcher what is happening during the experiment. You can use phrases like

* Some (subtance) is put into / on ... by ...
* Then ... is added to ...
* The mixture is heated over a bunsen burner / in an oil bath over a heating plate / ...

<textarea id="ExecutionTextArea" oninput="TBonChange(this)" >Please enter text here!</textArea>

<div id="Execution"></div>

<script> PlaceSpeak("Execution"); </script>

Task 4 - Details
==============

Now that your watchers have seen the experiment, you should tell a few more details about substances or history of the experiment itself. But try to be brief. Yor text shall fit to the length of the video.

<textarea id="DetailsTextArea" oninput="TBonChange(this)">Please enter text here!</textArea>

<div id="Details"></div>

<script> PlaceSpeak("Details"); </script>

Task 5 - End
=================

At the absolute end of the video you can add your opinion on the experiment and thank for your watchers' interest.

<textarea id="EndTextArea" oninput="TBonChange(this)">Please enter text here!</textArea>

<div id="End"></div>

<script> PlaceSpeak("End"); </script>

# Text Analysis

On this page, you shall have an automated evaluation of your text below:

<div id="TestPlace"></div>

<div id="Object" class="rework">
  <p id="Paragraph">
    <h3 id="Formated_Title">
      Frequently used words are highlighted
    </h3>
    <h4 id="Info">
      Hover over a word to see synonyms. If a word can have different meanings, each is listed in a seperate line. Each meaning is marked as noun, adjective or verb in [square brackets].
    </h4>
    <hr>
  </p>
  <h3 id="Title_new"></h3>
</div>

<script> Thesaurus(); </script>

<script> ShowSpeak(); </script>

# Print / Save it!

<div class="example-screen">
If you want to save your work, so you may come back later to it... please press the button below:
</div>

<div id="Saver" class="example-screen"></div>

<script> PlaceSaver() </script>

---

If you want to print your work, you can do so below, though maybe add some nice information like... your name and stuff first :)

Name:

<input id="NameBox" oninput="OnNameChange(this)" class="example-screen">

Matrikel Number:

<input id="MatBox" oninput="OnNameChange(this)" class="example-screen">

<div id="Printer" class="example-screen">If you can see this, the PlacePrinter() function has not loaded properly...</div>

<script>
    let TBcontent = {};
    let NameContent = {};
    let ImgUrlLink = "https://www.mebis.bayern.de/wp-content/uploads/sites/2/2015/05/Test_00.jpg";
    let intervallRunning = 0;

    PlacePrinter();
  </script>

# Play Video with Subtitles

Now you can display the video with subtitles.

<video id = "Final_Video" src="https://video.tu-freiberg.de/media/embed?key=c49c659861d64aa2c74bc20540819db0&width=560&height=315&autoplay=false&controls=true&autolightsoff=false&loop=false&chapters=false&playlist=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no" aria-label="media embed code" style=""></video>

<div id="Start"></div>

<div id="Final_Text"></div>

<script> Play_Video(); </script>

<script> Show_Text(document.getElementById("TitleTextArea").value); </script>