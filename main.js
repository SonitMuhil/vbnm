function draw() {
    image(video, -190, -90, 500, 500);
}
function preload() {}

function setup() {
    createCanvas(150, 150);
    background(5);
    video = createCapture(VIDEO);
    video.hide();
}
function take_snapshot() {
    save('sister_name.png');
}
line(30, 0, 85, 20);
    stroke(126);
    line(85, 20, 85, 75);
    stroke(255);
    line(85, 75, 30, 75);