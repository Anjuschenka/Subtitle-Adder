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

<textarea id="VideoID">Please enter YouTube URL here!</textArea>


# Video Overview

<script>
       

    	var source = document.getElementById("VideoID").value;
        source = source.substring(source.indexOf("watch?v=")+8);
        document.getElementById("VideoFrame").setAttribute("src", "https://www.youtube.com/embed/" + source);

        var request = new XMLHttpRequest();
        request.open("GET", "https://ytscriptgrabberserver.herokuapp.com/?" + "vidID=" + source + "&" + "vidLangCode=" + "en", false);
        //request.responseType = 'json';
        request.send( null );
    
        var text = request.responseText;
    console.log(text);
    console.log(text.split('{\"text\": '));
    var textArray = text.split('{\"text\": ');
    var subtitles = textArray.map(x => x.substring(1, x.indexOf('\"start\"')-3) + " ");
    var times = textArray.map(x => x.substring(x.indexOf('\"start\"')+9, x.indexOf(', "duration": ')));
    console.log(subtitles);
    console.log(times);

    var paragraph = document.getElementById("CC");
    for(let i=1; i<subtitles.length; i++){
        let span = document.createElement("span");
        span.setAttribute("time", times[i]);
        span.innerHTML = subtitles[i];
        
        paragraph.appendChild(span);
    }
</script>

The goal of this short LiaScript-Course is to add the subtitles to a given video. In this first version you can follow the given structure. Under each text box you can see how long reading your text aloud would take. You should try to fit your text to the video so that it is not longer than the video and the texts fit to the actual video part.





<iframe id="VideoFrame"></iframe>

<script>
     

        
    </script>

Subtitles
================

<p id="CC">

</p>


Title
================

Give your text a short title that that hints the topic

<textarea id="TitleTextArea" oninput="TBonChange(this)">Please enter text here!</textArea>

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

<script>

//alert(thesaurus["0"]);



</script>


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
    let analysis = "";
    let main = document.getElementById("TestPlace");

    function appendText(name){
    let attention = document.getElementById(name);
    let paragraph = document.createElement("p");
    console.log("Appending: " + attention.value);
    paragraph.innerHTML = attention.value;

    analysis = analysis.concat(attention.value);
    analysis = analysis.concat(" \n ");
    //main.append(paragraph);
    }

    
    
    
    

    appendText("AttentionTextArea");
    appendText("IntroductionTextArea");
    appendText("ExecutionTextArea");
    appendText("DetailsTextArea");
    appendText("EndTextArea");

    console.log(analysis);
    let textArray = analysis.split(" ");
    analysis = analysis.toLowerCase();
    analysis = analysis.replace(".","");
    analysis = analysis.replace(",","");
    analysis = analysis.replace("?","");
    analysis = analysis.replace("!","");
    analysis = analysis.replace("-","");
    //analysis.replace("the", "");

    let array = analysis.split(" ");
    console.log(array);

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
<html>
<head>
    <style> 
        .test {
            display: none;
        }
    </style>
</head>

<body>

<div class="example-screen">
If you want to save your work, so you may come back later to it... please press the button below:
</div>

<div id="Saver" class="example-screen">If you can see this, then PlaceSaver() function has not loaded</div>


    


<script>
function PlaceSaver() {
    let btn = document.createElement("button");
    btn.onclick = function() {
        DownloadFile();
    };
    btn.innerHTML = "Download here!";
    document.getElementById("Saver").innerHTML = "";
    document.getElementById("Saver").appendChild(btn);
}

function DownloadFile() {
    let dataheap = {
        "source" : ImgUrlLink,
        "text" : TBcontent
    };

    let json = JSON.stringify(dataheap);
    json = [json];
    let blob1 = new Blob(json, {type: "text/plain, charset=utf8"});
    let isIE = false;
    if(isIE) {
        window.navigator.msSaveBlob(blob1, "ImageDiscriber.json");
    } else {
        let url = window.url || window.webkitURL;
        link = url.createObjectURL(blob1);
        var a = document.createElement("a");
        a.download = "ImageDiscriber.json";
        a.href = link;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

PlaceSaver()

</script>

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


function PlacePrinter() {
    let btn = document.createElement("button");
    btn.innerHTML = "Print";
    btn.onclick = function() {
        PrintDocument();
    }
    document.getElementById("Printer").innerHTML = "";
    document.getElementById("Printer").appendChild(btn);
    //todo
}

function PrintDocument() {
    let w = window.open();
    let div_to_print = document.createElement("div");
    let table = document.createElement("table");
    let tableRow1 = document.createElement("tr");
    //table row 1:
    //image
    let img = document.createElement("img");
    img.id = "pr_Img"
    img.src = ImgUrlLink;
    let colImage = document.createElement("td");
    colImage.appendChild(img);
    
    //author information
    let AuthorName = document.createElement("div");
    AuthorName.innerHTML = document.getElementById("NameBox").value;
    let MatrNb = document.createElement("div");
    MatrNb.innerHTML = document.getElementById("MatBox").value;

    let authorInfo = document.createElement("td");  
    authorInfo.appendChild(document.createTextNode("Name:"));
    authorInfo.appendChild(AuthorName);
    authorInfo.appendChild(document.createTextNode("Matrikl Nbr:"));
    authorInfo.appendChild(MatrNb);
    
    colImage.style = "width: 50%"
    authorInfo.style = "width: 50%"
    tableRow1.appendChild(colImage);
    tableRow1.appendChild(authorInfo);
    //table
    table.appendChild(tableRow1);

    let tableRow2 = document.createElement("tr");
    // table row 2:
    let tb_div = document.createElement("td"); 
    tb_div.colSpan = 2; 
    let printKeys = Object.keys(TBcontent);
    for(let printText of printKeys) {
        temp = document.createElement("div")
        let contentText = TBcontent[printText];
        contentText = contentText.split("\n");
        for(let txt of contentText) {
            temp.appendChild(document.createTextNode(txt));
            temp.appendChild(document.createElement("br"));
        }
        tb_div.appendChild(temp);
        tb_div.appendChild(document.createElement("br"));
    }
    tableRow2.appendChild(tb_div);
    table.appendChild(tableRow2);

    //Add text to the printing file:
    let textDiv = document.createElement("div");

    function createParagraph(name){
    let attention = document.getElementById(name);
    let paragraph = document.createElement("p");
    console.log("Appending: " + attention.value);
    paragraph.innerHTML = attention.value;

    //analysis = analysis.concat(attention.value);
    //analysis = analysis.concat(" \n ");
    //main.append(paragraph);
    return paragraph;
    }

    
    
    let printTitle = document.createElement("h3");
    printTitle.innerHTML = document.getElementById("TitleTextArea").value;


    textDiv.appendChild(printTitle);
    textDiv.appendChild(createParagraph("AttentionTextArea"));
    textDiv.appendChild(createParagraph("IntroductionTextArea"));
    textDiv.appendChild(createParagraph("ExecutionTextArea"));
    textDiv.appendChild(createParagraph("DetailsTextArea"));
    textDiv.appendChild(createParagraph("EndTextArea"));

    

    //Add all divs we want to have printed:
    
    div_to_print.appendChild(table);
    div_to_print.appendChild(textDiv);
    
    //console.log(div_to_print.innerHTML);
    let printContent = div_to_print.innerHTML;

    //w.document.body.appendChild(document.getElementsByClassName("print")[0]);

    w.document.body.appendChild(div_to_print);
    //w.document.write(document.getElementsByClassName("print")[0].innerH‌​TML);
    w.print();
    w.close();}

    PlacePrinter();
  </script>

# Play Video with Subtitles

<iframe src="https://video.tu-freiberg.de/media/embed?key=c49c659861d64aa2c74bc20540819db0&width=560&height=315&autoplay=false&controls=true&autolightsoff=false&loop=false&chapters=false&playlist=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no" aria-label="media embed code" style=""></iframe>

<script>
    let Paragraph = class {
        constructor(text, time) {
            this.text = text;
            this.time1 = time1;
            this.time2 = time2;
        }
    };
//console.log(Paragraph.name);
Text_Attention = getElementById("Attention").value;
Speak_Attention = Textanalysis("speakingtime", Text_Attention);
//Time_Attention bitte aus Speak_Attention herausfiltern als Sekunden
//Time1_Attention = 0;
//Time2_Attention = Time1_Attention + Time_Attention;
Text_Introduction = getElementById("Introduction").value;
Speak_Introduction = Textanalysis("speakingtime", Text_Introduction);
//Time_Introduction bitte aus Speak_Introduction herausfiltern als Sekunden
//Time1_Introduction = Time2_Attention;
//Time2_Introduction = Time1_Introduction + Time_Introduction;
Text_Execution = getElementById("Execution").value;
Speak_Execution = Textanalysis("speakingtime", Text_Execution);
//Time_Execution bitte aus Speak_Execution herausfiltern als Sekunden
//Time1_Execution = Time2_Introduction;
//Time2_Execution = Time1_Execution + Time_Execution;
Text_Details = getElementById("Details").value;
Speak_Details = Textanalysis("speakingtime", Text_Details);
//Time_Details bitte aus Speak_Details herausfiltern als Sekunden
//Time1_Details = Time2_Execution;
//Time2_Details = Time1_Details + Time_Details;
Text_End = getElementById("End").value;
Speak_End = Textanalysis("speakingtime", Text_End);
//Time_End bitte aus Speak_End herausfiltern als Sekunden
//Time1_End = Time2_Details;
//Time2_End = Time1_End + Time_End;

//Button, der gleichzeitig Video startet und die Systemzeit einspeichert. Diese wird auf alle Zeiten der Paragraphen addiert, woraufhin der jeweils angezeigte Text im entsprechenden Zeitraum angezeigt und anschließend wieder ausgeblendet wird.
</script>

</body>
</html>