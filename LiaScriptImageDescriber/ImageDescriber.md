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

<div id="Uploader" class="example-screen">If you can see this, then something has not loaded</div>

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

<script>
    let paragraph = document.createElement("p");
    let reworkDiv = document.createElement("div");
    reworkDiv.setAttribute("class","rework")
    let head = document.createElement("h3");
    let info = document.createElement("h4");
    head.innerHTML="Frequently used words are highlighted";
    info.innerHTML = "Hover over a word to see synonyms. If a word can have different meanings, each is listed in a seperate line. Each meaning is marked as noun, adjective or verb in [square brackets].";
    let hline = document.createElement("hr");
    let titleText = document.getElementById("TitleTextArea").value;
    let title = document.createElement("h3");
    title.innerHTML = titleText;
    
    paragraph.appendChild(head);
    paragraph.appendChild(info);
    paragraph.appendChild(hline);
    reworkDiv.appendChild(paragraph);
    reworkDiv.appendChild(title);

    paragraph = document.createElement("p");
    
    //Anhängen von dem ganzen Text und zugehörige Analyse
    let array = PrepareText(CreateText()).split(" ");
    for(let i = 0; i<array.length; i++){
        if(array[i] == "\n"){
            reworkDiv.appendChild(paragraph);
            paragraph = document.createElement("p");
        }
        else{
        let matches = 0;
        let result = 0;
        for(let j = 0; j<i; j++){
            if(array[j] == array[i]) matches++;
        }
        let nextSpan = document.createElement("span");
        let textArray = CreateText().split(" ");
        nextSpan.innerHTML = textArray[i] + " ";
        for(let j=0; j<array.length; j++) if(array[j] == array[i]) result++;
            console.log(array[i] +" at index " + i + " found " + result + " times");
        if(result > array.length/20 && result > 1){
            console.log(array[i] + " is frequently used");
            nextSpan.setAttribute("class", "frequent");
            nextSpan.setAttribute("style","background:red");
            let currWord = array[i].toLowerCase();
            if(Object.hasOwn(thesaurus, currWord)) nextSpan.setAttribute("title", thesaurus[currWord]);
            else nextSpan.setAttribute("title", "No synonyms found!");
        }
        if(matches == 0) {
            console.log(array[i] +" was found " + result + " times");
        }

        paragraph.appendChild(nextSpan);
        }
    }
    console.log(reworkDiv);
    if(document.getElementById("TestPlace").querySelector(".rework")) document.getElementById("TestPlace").querySelector(".rework").remove();
    document.getElementById("TestPlace").appendChild(reworkDiv);
</script>

<script>  
        let array = Array.of("Attention", "Introduction", "Execution", "Details", "End");
        let fullText ="";
        for(let i=0; i<5; i++){
            
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

<div class="example-screen">
If you want to save your work, so you may come back later to it... please press the button below:
</div>

<div id="Saver" class="example-screen">If you can see this, then PlaceSaver() function has not loaded</div>

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

<iframe id = "Final_Video" src="https://video.tu-freiberg.de/media/embed?key=c49c659861d64aa2c74bc20540819db0&width=560&height=315&autoplay=false&controls=true&autolightsoff=false&loop=false&chapters=false&playlist=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no" aria-label="media embed code" style=""></iframe>

<script>
    let Paragraph = class {
        constructor(text, time1, time2) {
            this.text = text;
            this.time1 = time1;
            this.time2 = time2;
        }
    };
//console.log(Paragraph.name); not necessary, I think

let Text_Attention = document.getElementById("Attention").value;
let Speak_Attention = Textanalysis("speakingtime", Text_Attention);
let Time_Attention = parseInt(Speak_Attention[46])*600 + parseInt(Speak_Attention[47])*60 + parseInt(Speak_Attention[49])*10 + parseInt(Speak_Attention[50]);
let Time1_Attention = 0;
let Time2_Attention = Time1_Attention + Time_Attention;

let Text_Introduction = document.getElementById("Introduction").value;
let Speak_Introduction = Textanalysis("speakingtime", Text_Introduction);
let Time_Introduction = parseInt(Speak_Introduction[46])*600 + parseInt(Speak_Introduction[47])*60 + parseInt(Speak_Introduction[49])*10 + parseInt(Speak_Introduction[50]);
let Time1_Introduction = Time2_Attention;
let Time2_Introduction = Time1_Introduction + Time_Introduction;

let Text_Execution = document.getElementById("Execution").value;
let Speak_Execution = Textanalysis("speakingtime", Text_Execution);
let Time_Execution = parseInt(Speak_Execution[46])*600 + parseInt(Speak_Execution[47])*60 + parseInt(Speak_Execution[49])*10 + parseInt(Speak_Execution[50]);
let Time1_Execution = Time2_Introduction;
let Time2_Execution = Time1_Execution + Time_Execution;

let Text_Details = document.getElementById("Details").value;
let Speak_Details = Textanalysis("speakingtime", Text_Details);
let Time_Details = parseInt(Speak_Details[46])*600 + parseInt(Speak_Details[47])*60 + parseInt(Speak_Details[49])*10 + parseInt(Speak_Details[50]);
let Time1_Details = Time2_Execution;
let Time2_Details = Time1_Details + Time_Details;

let Text_End = document.getElementById("End").value;
let Speak_End = Textanalysis("speakingtime", Text_End);
let Time_End = parseInt(Speak_End[46])*600 + parseInt(Speak_End[47])*60 + parseInt(Speak_End[49])*10 + parseInt(Speak_End[50]);
let Time1_End = Time2_Details;
let Time2_End = Time1_End + Time_End;

let attention = Paragraph(Text_Attention, Time1_Attention, Time2_Attention);
let introduction = Paragraph(Text_Introduction, Time1_Introduction, Time2_Introduction);
let execution = Paragraph(Text_Execution, Time1_Execution, Time2_Execution);
let details = Paragraph(Text_Details, Time1_Details, Time2_Details);
let end = Paragraph(Text_End, Time1_End, Time2_End);

function Play_Video(){
    let btn2 = document.createElement("button");
    btn2.innerHTML = "Play Video";
    btn2.onclick = function() {
        var currentDateTime = new Date();
        console.log("Video is started at" + currentDateTime);
        var resultInSeconds=currentDateTime.getTime() / 1000;
        let t1 = attention.Time1 += resultInSeconds;
        let t2 = introduction.Time1 += resultInSeconds;
        let t3 = execution.Time1 += resultInSeconds;
        let t4 = details.Time1 += resultInSeconds;
        let t5 = end.Time1 += resultInSeconds;
        let vid = document.getElementById("Final_Video");
        vid.play();
    }
    document.getElementById(id).appendChild(btn2);
}

//Button, der gleichzeitig Video startet und die Systemzeit einspeichert. Diese wird auf alle Zeiten der Paragraphen addiert, woraufhin der jeweils angezeigte Text im entsprechenden Zeitraum angezeigt und anschließend wieder ausgeblendet wird.
</script>