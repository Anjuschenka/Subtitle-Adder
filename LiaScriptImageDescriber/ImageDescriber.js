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
    sp.innerHTML = Textanalysis("speakingtime", text);
    console.log(Textanalysis("speakingtime", text));
    console.log(typeof(text));
}

/*function placeSelect() {
    let typeSelect = createTypeSelect(["Picture", "Graph", "Code"]);
    typeSelect.id = "TypeSelect";
    document.getElementById("TypeSelectorPlace").innerHTML = "";
    document.getElementById("TypeSelectorPlace").appendChild(typeSelect);

    if(intervallRunning == 1) return; 
    setInterval(fillTBwithInitialContent, 100);
    intervallRunning = 1;
}*/

/*function placeLinkReader() {
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
}*/

function readFile(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        let res = reader.result;
        console.log(res);
        let List = res.split("\n");
        console.log(List);
        document.getElementById("TitleTextArea").value = List[0];
        document.getElementById("AttentionTextArea").value = List[1];
        document.getElementById("IntroductionTextArea").value = List[2];
        document.getElementById("ExecutionTextArea").value = List[3];
        document.getElementById("DetailsTextArea").value = List[4];
        document.getElementById("EndTextArea").value = List[5];
    };
    reader.onerror = function() {
        console.log(reader.error);
    };
}

function PlaceReader(){
    let btn = document.createElement("button");
    btn.onclick = function() {
        var Dok = document.getElementById("uploadfile");
        readFile(Dok);
    };
    btn.innerHTML = "Upload here!";
    document.getElementById("Uploader").innerHTML = "";
    document.getElementById("Uploader").appendChild(btn);
}

/*function userTask() {
    switch(document.getElementById("TypeSelect").value) {
        case "Picture":
            return userTasks.graph();
        case "Graph":
            return "ToDo Graph";
        case "Code": 
            return "ToDo Code";
    }
}*/

function TBonChange(tb) {
    TBcontent[tb.id] = tb.value;
}

function OnNameChange(tb) {
    NameContent[tb.id] = tb.value;
}

function PlaceSpeak(id) {
    if(document.getElementById(id).lastChild!=null) console.log(document.getElementById(id).lastChild.nodeType)
    //if(document.getElementById(id).hasChildNodes()) return;

    console.log(id)
    document.getElementById(id).innerText = "";

    let btn2 = document.createElement("button");
    btn2.innerHTML = "Speaking Time";
    let newDiv = document.createElement("div");
    
    newDiv.id = id + "SpeakingTime";
    
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

function AppendText(name, text){
    let attention = document.getElementById(name);
    let paragraph = document.createElement("p");
    console.log("Appending: " + attention.value);
    paragraph.innerHTML = attention.value;
    text = text.concat(attention.value);
    text = text.concat(" \n ");
    //document.getElementById("TestPlace").appendChild(paragraph);
    return text;
}

function CreateText(){
    let text = "";
    text = AppendText("TitleTextArea", text);
    text = AppendText("AttentionTextArea", text);
    text = AppendText("IntroductionTextArea", text);
    text = AppendText("ExecutionTextArea", text);
    text = AppendText("DetailsTextArea", text);
    text = AppendText("EndTextArea", text);
    return text;
}

function PrepareText(text){
    text = text.toLowerCase();
    text = text.replace(".","");
    text = text.replace(",","");
    text = text.replace("?","");
    text = text.replace("!","");
    text = text.replace("-","");
    return text;
}

function PlaceSaver() {
    let text = CreateText();

    console.log(text)
    var filename = "Subtitles.txt";

    let btn = document.createElement("button");
    btn.onclick = function() {
        DownloadFile(filename, text);
    };
    btn.innerHTML = "Download here!";
    document.getElementById("Saver").innerHTML = "";
    document.getElementById("Saver").appendChild(btn);
}

function DownloadFile(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);    
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
    w.close();
}