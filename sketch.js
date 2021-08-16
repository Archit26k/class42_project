var iss , spacecraft;
var hasDocked = false;

function preload(){

  issImg = loadImage("Images/iss.png")
  bgImg = loadImage("Images/spacebg.jpg")
  s1Img = loadImage("Images/spacecraft1.png")
  s2Img = loadImage("Images/spacecraft2.png")
  s3Img = loadImage("Images/spacecraft3.png")
  s4Img = loadImage("Images/spacecraft4.png")


}
function setup() {
  createCanvas(800,400);
            
  spacecraft = createSprite(285 , 240);
  spacecraft.addImage(s1Img)
  spacecraft.scale = 0.15;  


  iss = createSprite(330 , 130)
  iss.addImage(issImg)
  iss.scale = 0.50;
  // createSprite(400, 200, 50, 50);


}



function draw() {
  background(bgImg);  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1 , 1);
  
    if (keyDown("UP_ARROW")) {
        spacecraft.y = spacecraft.y-2;
        spacecraft.addImage(s2Img)
    }
    if (keyDown("DOWN_ARROW")) {
        spacecraft.addImage(s1Img)
        spacecraft.y = spacecraft.y+2;
  } 
   if (keyDown("RIGHT_ARROW")) {
        spacecraft.addImage(s3Img)
        spacecraft.x = spacecraft.x+2;
  }  
  if (keyDown("LEFT_ARROW")) {
        spacecraft.addImage(s4Img)
        spacecraft.x = spacecraft.x-2;
        console.log(spacecraft.x   , spacecraft.y)
  }
//   if (spacecraft.x === 280 && spacecraft.y === 260) {
//     hasDocked = true;
// }
if(spacecraft.y <=(iss.y+70) && spacecraft.x<= (iss.x-10)){
 
  hasDocked = true;
 
}
  }

if(hasDocked === true){
  fill(255 ,10 ,40)
  text("docking Successful", 200 , 300 )
}
 
 
  drawSprites();
}