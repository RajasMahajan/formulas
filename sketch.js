var Button1;
var Button2;
var Button3;
var Button4;
var Button5;
var SCREEN=0;
var FORMULA1=1;
var FORMULA2=2;
var FORMULA3=3;
gamestate=0;
function setup() {
  createCanvas(400, 400);
 
 
}

function draw() {
  background("blue");
 if(gamestate===0){
   
 Button1=createSprite(90,90,80,50);
 Button2=createSprite(270,90,80,50);
text("Volt",80,60)
text("CLICK",254,60)
}

  if(mousePressedOver(Button1)){
    gamestate=1;
  }
if(gamestate===1){
//  Button1.visible = false;
  text("Volt - unit of electrical potential or motive force-potential is ",40,200)
  text("reqired to send one ampere of current throught one ohm of resistance.",10,220)
}
if(gamestate===2){
  //Button2.visible = false;
  text("",10,220)
  
}
  
  drawSprites()
}