objects = 0;
object = [];

function preload(){
    son3 = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectdec = ml5.objectDetector("cocossd", fine);
}

santa = "";

function fine() {
    santa = "t";
    console.log("EVRYTHING IS FINEEEEE");
   
}

function justgettheresult(error, result) {
    if (error) {
        console.error("you know its a error so solve it already fine this is the problem = " + error);
    }

    console.log(result);

    object = result;
    objects = object.length;
}

function draw() {

    image(video, 0, 0, 600, 450);

    if (santa != "") {
        objectdec.detect(video, justgettheresult);
        for (i = 0; i < objects; i++) {
            if(object[i].label == "person"){
                son3.stop();
                console.log("baby driver vroom vroom");
                document.getElementById("babystatus").innerHTML = "Baby Is Present And Within The Frame";
            }
            else{
                console.log("BABY DROVE AWAY!!!");
                son3.play();
                document.getElementById("babystatus").innerHTML = "Baby Is Not Present Within Frame";
            }  
            if(objects <= 0){
                console.log("BABY DROVE AWAY!!!");
                son3.play();
                document.getElementById("babystatus").innerHTML = "Baby Is Not Present Within Frame";
            }
        }
        i = 0;
    }
}