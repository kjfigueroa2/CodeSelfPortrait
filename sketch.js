//Code Self Portrait Project - Kaila Figueroa



//setup
function setup() {
  createCanvas(700, 700);

  textSize(24);
  textAlign(LEFT);
}

//draw
function draw() {
  background(204,169,221);

  //calling specific feature functions
  drawNeck();
  drawHead();
  drawHair();
  drawEyebrows();
  drawEyes();
  drawNose();
  drawMouth();
  drawBeautyMark();
}

//neck function
function drawNeck(){
  fill(251,237,203);
  rect(257, 455, 155, 155, 20);
}

//head function
function drawHead(){
  ellipse(333, 333, 300, 335);
}

//hair function
function drawHair(){
  fill(20,13,7);
  strokeJoin(ROUND);
  beginShape();
  vertex(331, 132);
  vertex(215, 173);
  vertex(160, 244);
  vertex(155, 645);
  vertex(230, 627);
  vertex(230, 254);
  vertex(330, 186);
  vertex(434, 254);
  vertex(440, 627);
  vertex(502, 645);
  vertex(500, 244);
  vertex(443,173);
  endShape(CLOSE);
}

//eyebrows function
function drawEyebrows(){
  //left eyebrow
  fill(20,13,7);
  strokeJoin(ROUND);
  beginShape();
  vertex(305, 265);
  vertex(246, 265);
  vertex(233, 280);
  vertex(250, 272);
  vertex(305, 272);
  endShape(CLOSE);

  //right eyebrow
  strokeJoin(ROUND);
  beginShape();
  vertex(355, 265);
  vertex(415, 265);
  vertex(430, 280);
  vertex(410, 272);
  vertex(355, 272);
  endShape(CLOSE);
}

//eyes function
function drawEyes(){
  //left eye
  fill(255,255,255);
  ellipse(272, 300, 60, 45);
  fill(43,29,20);
  ellipse(272,300,35,35);
  fill(0);
  ellipse(272,300,15,15);

  //right eye
  fill(255,255,255);
  ellipse(386, 300, 60, 45);
  fill(43,29,20);
  ellipse(386, 300, 35, 35);
  fill(0);
  ellipse(386,300,15,15);
}

//nose function
function drawNose(){
  fill(0);
  ellipse(317,385,10,5);
  ellipse(340,385,10,5);
  noFill();
  arc(313, 383, 20, 15, HALF_PI, PI);
  arc(345, 383, 20, 15, 0, HALF_PI);
  line(315,349, 315, 370);
  line(342,349, 342, 370);
}

//mouth function
function drawMouth(){
  fill(255,182,193);
  strokeJoin(ROUND);
  beginShape();
  vertex(318, 420);
  vertex(288, 425);
  vertex(318, 445);
  vertex(340, 445);
  vertex(371, 425);
  vertex(340, 420);
  vertex(330, 425);
  endShape(CLOSE);
  //lipline
  fill(0);
  line(296, 430, 363, 430);
}

//beauty mark function
function drawBeautyMark(){
  fill(0);
  circle(370,445,5,5);
}

