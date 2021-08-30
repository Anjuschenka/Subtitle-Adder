<!--
author:   Your Name

email:    your@mail.org

version:  0.0.1

language: en

narrator: US English Female

script: http://localhost:3000/home/newliaIndex.js
script: http://localhost:3000/home/usefullFunctions.js
script: http://localhost:3000/home/discriptionTypes.js

link: http://localhost:3000/home/style.css

script: https://cdn.jsdelivr.net/gh/kaptn-seebar/english-lia@latest/base.js


comment:  Try to write a short comment about
          your course, multiline is also okay.
-->

# Image Import
The application will help you learn how to propperly describe an image. In order to use this tool, please insert a link to an image you'd like to describe below:

You may find such a link by copying the direct image parth to it from a website (Example: https://i.pinimg.com/originals/38/b0/c7/38b0c7ff528df3d3f8f5e2799d507063.jpg )

* Now, please insert the link into the textbox below:
<lia-keep><span id="LoadImage"></span></lia-keep>

<lia-keep></br></br></br></lia-keep>

* **If you already have an ongoing project though, you'd probably want to reload where you left of... please do so below**
<lia-keep> <span id="LoadProject"></span> </lia-keep> 

<script input="hidden"> PageOneScript() </script>



# Image Description
Let's see... your Image should be displayed below:


<lia-keep><img id="ImageLocation"></lia-keep>
<script input="hidden"> insertImage() </script>

* If not, please make sure you finish the "Image Import" Page of this presentation 



## Image Discription Part 1:
<img id="ImageLocation">

<div id="Task1"></div>

<lia-keep><textarea rows="10" id="DescrPart1"></textarea></lia-keep>

<script input="hidden"> insertImage() </script>
<script input="hidden"> PageDescriptionScript("DescrPart1", ProgramSelect, 0, "Task1") </script>

## Image Discription Part 2:
<img id="ImageLocation">

<div id="Task2"></div>

<lia-keep><textarea rows="10" id="DescrPart2"></textarea></lia-keep>

<script input="hidden"> insertImage() </script>
<script input="hidden"> PageDescriptionScript("DescrPart2", ProgramSelect, 1, "Task2") </script>

## Image Discription Part 3:
<img id="ImageLocation">

<div id="Task3"></div>

<lia-keep><textarea rows="10" id="DescrPart3"></textarea></lia-keep>

<script input="hidden"> insertImage() </script>
<script input="hidden"> PageDescriptionScript("DescrPart3", ProgramSelect, 2, "Task3") </script>

## Image Discription Part 4:
<img id="ImageLocation">

<div id="Task4"></div>

<lia-keep><textarea rows="10" id="DescrPart4"></textarea></lia-keep>

<script input="hidden"> insertImage() </script>
<script input="hidden"> PageDescriptionScript("DescrPart4", ProgramSelect, 3, "Task4") </script>

## Image Discription Part 5:
<img id="ImageLocation">

<div id="Task5"></div>

<lia-keep><textarea rows="10" id="DescrPart5"></textarea></lia-keep>

<script input="hidden"> insertImage() </script>
<script input="hidden"> PageDescriptionScript("DescrPart5", ProgramSelect, 4, "Task5") </script>

# Corrections:

Now that we have the majority done, let's get you looking over what you've done...

| Image | 
|---------------------------------|
|  |
|  |
|  |
|  |
|  |
