<!--
author:   Anja Voigt

email:    anjvoi1@web.de

version:  0.0.1

language: en

narrator: US English Female

script: https://cdn.jsdelivr.net/gh/Anjuschenka/Subtitle-Adder@main/LiaScriptImageDescriber/imageDescriberFunctions.js
script: https://cdn.jsdelivr.net/gh/Anjuschenka/Subtitle-Adder@main/LiaScriptImageDescriber/ImageDescriber.js
script: https://cdn.jsdelivr.net/gh/Anjuschenka/Subtitle-Adder@main/LiaScriptImageDescriber/userTasks.js
script: https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js

link: https://cdn.jsdelivr.net/gh/Anjuschenka/Subtitle-Adder@main/LiaScriptImageDescriber/style.css
link: https://cdn.jsdelivr.net/gh/Anjuschenka/Subtitle-Adder@main/LiaScriptImageDescriber/print.css

script: https://cdn.jsdelivr.net/gh/kaptn-seebar/english-lia@latest/base.js
import: https://raw.githubusercontent.com/liaTemplates/TextAnalysis/main/README.md

test: @Textanalysis.FULL
persistent: True

comment:  This is a small tool, which will help the user to learn how to propperly describe an image, a piece of code, or an graph.
-->

# Video Describer
The goal of this short LiaScript-Course is to add the subtitles to a given video. In this first version you can follow the given structure. Under each text box you can see how long reading your text aloud would take. You should try to fit your text to the video so that it is not longer than the video and the texts fit to the actual video part.

 <iframe src="https://video.tu-freiberg.de/media/embed?key=c49c659861d64aa2c74bc20540819db0&width=560&height=315&autoplay=false&controls=true&autolightsoff=false&loop=false&chapters=false&playlist=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no" aria-label="media embed code" style=""></iframe>

Important vocabulary
================

Here are some words you may need for the following tasks:

* ammonium dichromate
* ammonia
* nitrogen
* powder
* solid
* gas
* sparks
* to sparkle
* to burn
* chrome(VI/III) oxide
* fireproof bowl
* carcinogenic
* dissociation
* apparatus
* to ignite
* to oxidize
* to reduce

Task 1 - Attention  
================
        
To capture the attention of your watchers, you should introduce them into the topic. <br/>
Here are some examples you may use:

* The experiment shown in this video...
* This videos shows ...
* In this video you can see ...
            
<textarea id="AttentionTextArea" oninput="TBonChange(this)">Please enter text here!</textArea>

<div id="Attention">If you can see this, the PlacePrinter() function has not loaded properly...</div>

<script> PlaceSpeak("Attention") </script>

Task - Introduction
==============

Now that we have the attention of your watchers, you should give a few more details about the experiment. You might say something about certain safety instructions, about the used substances or about an imagethe reaction looks like. <br/>
Here are some examples on how to continue:

* During the experiment you should especially be careful about...
* The reaction is a typical example of ... and is used for ...
* The reaction shows a typical characteristic of the (substance) that ...

<textarea id="IntroductionTextArea" oninput="TBonChange(this)">Please enter text here!</textArea>
<div id="Introduction"></div>

<script>
    PlaceSpeak("Introduction");
</script>

Task - Execution
==============

When the experiment starts, you should tell the watcher what is happening during the experiment. You can use phrases like

* Some (subtance) is put into / on ... by ...
* Then ... is added to ...
* The mixture is heated over a bunsen burner / in an oil bath over a heating plate / ...

<textarea id="ExecutionTextArea" oninput="TBonChange(this)" onchange="console.log(update(this.innerHTML))">Please enter text here!</textArea>

<div id="Execution"></div>

<script>
    PlaceSpeak("Execution");
    //let txt3 = document.getElementById("graphTextArea3").value;
    //function f3() {return Textanalysis("speakingtime", txt3);}
    //let btn3 = document.getElementById("Btn3");
    //btn3.onclick = f3();
</script>

Task - Details
==============

Now that your watchers have seen the experiment, you should tell a few more details about substances or history of the experiment itself. But try to be brief. Yor text shall fit to the length of the video.

<textarea id="DetailsTextArea" oninput="TBonChange(this)">Please enter text here!</textArea>

<div id="Details"></div>

<script>
    PlaceSpeak("Details");
    /*let txt4 = document.getElementById("graphTextArea4").value;
    function f4() {return Textanalysis("speakingtime", txt4);}
    let btn4 = document.getElementById("Btn4");
    btn4.onclick = f4();*/
</script>

Task - End
=================

At the absolute end of the video you can add your opinion on the experiment and thank for your watchers' interest.

<textarea id="EndTextArea" oninput="TBonChange(this)">Please enter text here!</textArea>

<div id="End"></div>

<script>
    PlaceSpeak("End");
    /*let txt5 = document.getElementById("graphTextArea5").value;
    function f5() {return Textanalysis("speakingtime", txt5);}
    let btn5 = document.getElementById("Btn5");
    btn5.onclick = f5();*/
</script>

# Text Analysis

On this page, you shall have an automated evaluation of your text below:
<div id="TestPlace"></div>

<script>  
        let array = Array.of("Attention", "Introduction", "Execution", "Details", "End");
        let fullText ="";
        for(let i=0; i<4; i++){
            
            let currID = array[i] + "TextArea";
            console.log(currID)
            
            if(!(document.getElementById(currID) == null)) fullText += document.getElementById(currID).value;
            
            console.log(currID)
        }
        
        console.log("Speaking time is calculated for:");
        console.log(fullText);
        let text = Textanalysis("speakingtime", fullText);
        console.log(text);
        document.getElementById("TestPlace").innerHTML=text;
</script>

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