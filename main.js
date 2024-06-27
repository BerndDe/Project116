noseX=0;
noseY=0;

function preload() {
   clown_nose = loadImage('https://i.postimg.cc/wjkvQQB5/pngtree-black-moustache-png-image-6403112.png') 
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 300)
    image(clown_nose, noseX-25, noseY-25, 50, 50);
}

function take_snapshot(){
    save('myMousetacheImage.png');
}

function modelLoaded() {
    console.log('PoseNet Is Intialized')
}

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            console.log("nose x = " + results[0].pose.nose.x);
            console.log("nose y = " + results[0].pose.nose.y);
        }
}