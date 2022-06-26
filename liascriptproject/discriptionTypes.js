const descriptionType = {};

descriptionType.video = function(num) {
    if(num == 0) { return "To capture the attention of your readers, you should start with a good introduction phrase(s).<br><br>Here are some examples you may use:<br>If you look at this picture, you will see...<br>In the picture you can see...<br>The picture shows...<br>"; }
    if(num == 1) { return "Now that we have the attention of your reader, and we have a general understanding on what is been displayed, you should start looking at details.<br><br>Here are some examples on how to continue:<br>The image we are looking at has been painted/taken at...<br>When you look at the image, you can see that it is a black and white...<br>This picture is a... picture and has been taken by...<br>"; }
    if(num == 2) { return "Okay... we should now have finished the introduction of your description.<Br><Br>So, now please describe the picture and use phrases like:<br>In the foreground of the picture you will...<Br>In the background you can see that...<Br>In the right/left/center...<br>Between ... there is ...<br>At the top/At the bottom there is...<br>";}
    if(num == 3) { return "Now we know what we see on the picture. Lets focus now on who is doing what or what is going on.<br><br>To take some examples:<br>The... is talking to...<br>... is gesturing to...<br>";}
    if(num == 4) { return "So, that all is fine and dandy, lets now focus on what you are thinking... What do you think is the meaning of the picture?<br><br>Here are some examples:<br>It seems as if...<br>... might be a simbole of ... because...<br>I (don't) like ... because<br>... makes me think of ...<br>";}
    console.log("picture only has 5 entries...");
    return -1;
}