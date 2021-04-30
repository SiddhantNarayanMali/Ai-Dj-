leftX = 0;
leftY = 0;
rightX = 0;
rightY = 0;
function preload()
{
    HarryPotter = loadSound("music.mp3");
    PeterPan = loadSound("music2.mp3");
}

function setup()
{
    Canvas = createCanvas(550,550);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();
    Posenet = ml5.poseNet(Video, ModelL);
    Posenet.on('pose', Poses);
}
function ModelL()
{
    console.log("Posenet is Initiallized");
}
function Poses(result)
{
    if (result > 0)
    {
        console.log(result);
        leftX = result[0].pose.leftWrist.x;
        leftY = result[0].pose.leftWrist.y;
        rightX = result[0].pose.rightWrist.x;
        rightY = result[0].pose.rightWrist.y;
    }
}
function draw()
{
    image(Video,0,0,550,550);
}