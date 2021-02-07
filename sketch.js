var gamestate=1

function preload(){
  load2=loadImage("images/load2.png")
  back1=loadImage("images/startingimage.png")
  tag1=loadImage("images/tagline.png")
  tag2=loadImage("images/sidebar.png")
}

function setup(){
  createCanvas(3000,900);
}

function draw(){
    background('white')
    if(gamestate===1){
back=createSprite(900,450,1200,800);
back.addImage(back1);
back.scale=0.65

play=createSprite(1400,815,150,150);
play.visible=false;

if(mousePressedOver(play)) {
  gamestate=2
}
 
    }

if(gamestate===2){
  back.visible=false ;
  loading=createSprite(650,450,20,20);
loading.addImage(load2)
loading.scale=0.2
loading.lifetime=0.05
gamestate=3
}
    if(gamestate===3){
      image(tag1,80,20)
      image(tag2,100,180,100,750)

    }
    









    drawSprites();
}   















