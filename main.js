function preload(){
    img = loadImage('Dolphin.png');
}

function setup() {
    canvas = createCanvas(440, 220);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 440, 220);
    fill("#FF0000");
    text("Dolphin", 45, 75);
    noFill();
    stroke("red");
    rect(30, 60, 450, 350 );
}