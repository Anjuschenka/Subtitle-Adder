let TBcontent = {};
let NameContent = {};
let ImgUrlLink = undefined;
let intervallRunning = 0;

function debug(){
    console.log("DEBUG");
}

function update(){
    let sp = document.getElementById("speak");
    let textDiv = document.getElementById("graphTextArea3");
    let text = textDiv.innerHTML;
    alert(text);
    sp.innerHTML=Textanalysis("speakingtime", text);
    console.log(Textanalysis("speakingtime", text));
    console.log(typeof(text));
}

function placeSelect() {
    let typeSelect = createTypeSelect(["Picture", "Graph", "Code"]);
    typeSelect.id = "TypeSelect";
    document.getElementById("TypeSelectorPlace").innerHTML = "";
    document.getElementById("TypeSelectorPlace").appendChild(typeSelect);

    if(intervallRunning == 1) return; 
    setInterval(fillTBwithInitialContent, 100);
    intervallRunning = 1;
}

function placeLinkReader() {
    let LinkInput = document.createElement("input");
    let LaunchButton = document.createElement("button");
    //LaunchButton.onclick = function() { userTask(); }
    LaunchButton.innerHTML = "Lets go!"
    LaunchButton.id = "LaunchButton";
    LinkInput.id = "LinkTextBox";
    if(ImgUrlLink != undefined){
        LinkInput.value = ImgUrlLink;
    }
    //LinkInput.addEventListener("change", function() {userTask()});
    document.getElementById("ImageLinkPlace").innerHTML = "";
    document.getElementById("ImageLinkPlace").appendChild(LinkInput);
    document.getElementById("ImageLinkPlace").appendChild(LaunchButton);
}

function placeFileReader() {
    let fileSelector = CreateFileSelector();
    document.getElementById("FileReaderPlace").innerHTML = "";
    document.getElementById("FileReaderPlace").appendChild(fileSelector);
}

function userTask() {
    switch(document.getElementById("TypeSelect").value) {
        case "Picture":
            return userTasks.graph();
        case "Graph":
            return "ToDo Graph";
        case "Code": 
            return "ToDo Code";
    }
}

function TBonChange(tb) {
    TBcontent[tb.id] = tb.value;
}

function OnNameChange(tb) {
    NameContent[tb.id] = tb.value;
}

function fillTBwithInitialContent() {
    let list = document.getElementsByTagName("textarea")
    for(let e of list) {
        if(TBcontent[e.id]==undefined) continue;
        if(e.hasMYinit) continue;
        e.value = TBcontent[e.id];
        e.hasMYinit = true;
    }
}

function TextEditor() {
    let placediv = document.getElementById("TextEditor");
    placediv.innerHTML = "";

    let keys = Object.keys(TBcontent);

    for(let k of keys) {
        let textDiv = document.createElement("div");
        textDiv.innerHTML = TBcontent[k];
        textDiv.onclick = function() {
            textDiv.innerHTML = "";
            let editor = document.createElement("textarea");
            editor.value = TBcontent[k];
            textDiv.appendChild(editor);
            editor.focus();
            editor.oninput = function() {TBcontent[k] = editor.value;}
            
            editor.addEventListener("focusout", function() {
                TBcontent[k] = editor.value;
                textDiv.innerHTML = TBcontent[k];
                textDiv.removeChild(editor);
            });
        }
        placediv.appendChild(textDiv);
    }
}

/*function PlaceSpeak(txt) {
    let txtdiv = document.createElement("div");
    txtdiv.value = Textanalysis("speakingtime", txt);
    txtdiv.id = "SpeakDiv";
}*/

function PlaceSpeak(id) {
    if(document.getElementById(id).lastChild!=null) console.log(document.getElementById(id).lastChild.nodeType)
    //if(document.getElementById(id).hasChildNodes()) return;

    console.log(id)
    document.getElementById(id).innerText = "";

    let btn2 = document.createElement("button");
    btn2.innerHTML = "Speaking Time";
    let newDiv = document.createElement("div");
    
    newDiv.id=id + "SpeakingTime";
    
    document.getElementById(id).appendChild(newDiv);

    btn2.onclick = function() {
        console.log(id + "TextArea")
        let txt = document.getElementById(id + "TextArea").value;
        console.log("Speaking time is calculated for:");
        console.log(txt);
        let text = Textanalysis("speakingtime", txt);
        console.log(text);
        document.getElementById(id + "SpeakingTime").innerHTML=text;
       
        
    }
    document.getElementById(id).appendChild(btn2);
}

function TextCompress() {
    let str = "";
    let keys = Object.keys(TBcontent);
    for(let k of keys) {
        str = str + TBcontent[k] + "\n";
    }
    return str;
}

function TestFULL(text) {
    let ret = {}
    ret["automatedReadabilityIndex"] = Textanalysis("automatedReadabilityIndex", text);
    ret["colemanLiauIndex"] = Textanalysis("colemanLiauIndex", text);
    ret["daleChallReadabilityScore"] = Textanalysis("daleChallReadabilityScore", text);
    ret["fleschKincaidGrade"] = Textanalysis("fleschKincaidGrade", text);
    ret["fleschReadingEase"] = Textanalysis("fleschReadingEase", text);
    ret["gunningFog"] = Textanalysis("gunningFog", text);
    ret["linsearWriteFormula"] = Textanalysis("linsearWriteFormula", text);
    ret["readabilityConsensus"] = Textanalysis("readabilityConsensus", text);
    ret["sentences"] = Textanalysis("sentences", text);
    ret["smogIndex"] = Textanalysis("smogIndex", text);
    ret["syllables"] = Textanalysis("syllables", text);
    ret["words"] = Textanalysis("words", text);
    ret["readingTime"] = Textanalysis("readingTime", text);
    ret["speakingtime"] = Textanalysis("speakingtime", text);
    return ret;
}

function PlaceTest() {
    let txtdiv = document.createElement("div");
    txtdiv.innerHTML = TextCompress();
    let testdiv = document.createElement("div");
    testdiv.id = "TestDiv"
    let testObject = TestFULL(TextCompress());
    let testKeys = Object.keys(testObject);

    for(let test of testKeys) {
        let testText = document.createElement("div");
        testText.innerHTML = testObject[test];
        testdiv.appendChild(testText);
    }

    document.getElementById("TestPlace").appendChild(testdiv);
    document.getElementById("TestPlace").appendChild(txtdiv);
}


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
    div_to_print.appendChild(table);
    //console.log(div_to_print.innerHTML);
    let printContent = div_to_print.innerHTML;
    let orginalContents = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = orginalContents;
    PlacePrinter();
}

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