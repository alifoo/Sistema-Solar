let angle = 0;
let yellow = [255, 255, 0];
let blue = [50, 150, 255];
let gray = [160, 160, 160];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  
  //    VETORES    //
  center = createVector(200, 200);
  earth = createVector(100,100);
  moon = createVector(30, 30);
  
  
  strokeWeight(3);
}

function draw() {
  background(0);
  
  
  push();
    Corpos();  //    CÍRCULOS    //
  
  pop();
  
  pop();
  
  pop();
  
  if(keyIsDown(87)){
    center.y -= 1;
  } if(keyIsDown(83)){
    center.y += 1;
  } if(keyIsDown(68)){
    center.x += 1;
  } if(keyIsDown(65)){
    center.x -= 1;
  }
  
  
  angle += 1;
}

function Corpos(){
  
  //    SOL    //
  translate(center);

  fill(yellow);
  ellipse(0, 0, 60, 60);
  
  //    TERRA    //
  Terra();
  
}

function Terra(){
  
  //    TERRA    //
  push();
  rotate(angle);
    
  fill(blue);
  ellipse(earth.x, earth.y, 40, 40);
  
  //    LUA    //
  Lua();
}

function Lua(){
  
  //    LUA    //
  push();
  translate(earth);
  rotate(-2.5*angle);
  
  fill(gray);
  ellipse(moon.x, moon.y, 20, 20);
}
