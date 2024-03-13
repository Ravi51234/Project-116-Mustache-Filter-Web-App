noseX = 0;
noseY = 0;

function preload(){
    mustache = loadImage("https://i.postimg.cc/MH4f8pgZ/Moustache-PNG-Pic.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 180;
        noseY = results[0].pose.nose.y - 150;
        console.log("The X coordinate of nose is - ", noseX);
        console.log("The Y coordinate of nose is - ", noseY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 100, 100);
}

function take_snapshot(){
    save("My_Filtered_Image");
}