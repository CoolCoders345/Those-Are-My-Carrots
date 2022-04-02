var rabbit, rabbitImg
var mole, moleImg
var carrot, carrotImg
var bg, bg, Img
var t1, t2, t3
var c1, c2, c3
var edges
var s,c
var carrotGroup
var score = 0

function preload(){
bgImg = loadImage("bg2.png")
moleImg = loadImage("mole.png")
rabbitImg = loadImage("bunny.png")
carrotImg = loadImage("carrot.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight-20)
    bg = createSprite(displayWidth,700,1000,1000)
    bg.addImage(bgImg)
    bg.scale = 5

    mole = createSprite(70,90)
    mole.addImage(moleImg)
    mole.scale = 0.08

    rabbit = createSprite(windowWidth-500,80)
    rabbit.addImage(rabbitImg)
    rabbit.scale = 0.09

    t1 = createSprite(100,30,3000,30)
    t2 = createSprite(200,115,30,200)
    t3 = createSprite(168,229,200,30)
    t4 = createSprite(124,117,150,30)
    t5 = createSprite(262,313,30,200)
    t6 = createSprite(44,360,200,30)
    t7 = createSprite(129,450,30,200)
    t8 = createSprite(48,640,200,30)
    t42 = createSprite(251,651,30,200)
    t9 = createSprite(372,119,30,200)
    t10 = createSprite(384,137,200,30)
    t11 = createSprite(560,140,30,200)
    t12 = createSprite(401,325,300,30)
    t13 = createSprite(658,191,30,300)
    t14 = createSprite(348,565,200,30)
    t15 = createSprite(363,630,30,100)
    t16 = createSprite(380,400,30,150)
    t17 = createSprite(444,409,150,30)
    t18 = createSprite(1401,121,30,200)
    t19 = createSprite(1416,313,200,30)
    t20 = createSprite(1406,368,30,100)
    t21 = createSprite(1420,494,200,30)
    t22 = createSprite(1316,137,200,30)
    t23 = createSprite(750,140,200,30)
    t24 = createSprite(960,98,30,150)
    t25 = createSprite(1070,97,30,150)
    t26 = createSprite(767,230,30,200)
    t27 = createSprite(590,650,30,300)
    t28 = createSprite(470,704,30,90)
    t29 = createSprite(676,560,150,30)
    t30 = createSprite(680,654,200,30)
    t31 = createSprite(856,246,200,30)
    t32 = createSprite(1106,284,150,30)
    t33 = createSprite(1168,282,30,150)
    t34 = createSprite(738,448,200,30)
    t35 = createSprite(1412,670,30,170)
    t36 = createSprite(1022,549,300,30)
    t37 = createSprite(1000,459,30,150)
    t38 = createSprite(1095,453,200,30)
    t39 = createSprite(924,613,30,100)
    t40 = createSprite(1056,613,30,100)
    t41 = createSprite(1298,664,200,30)
    t43 = createSprite(711,726,2200,30)
    //t42 = createSprite(windowWidth-10,windowHeight-100,30,1500)
    carrotGroup = new Group()
    createMultCarrots()
    
   
    
  
}

function draw() {
 background("brown")
 fill(0)
 
    if(keyDown(LEFT_ARROW)){
        rabbit.x = rabbit.x-8 
    }
    if(keyDown(RIGHT_ARROW)){
        rabbit.x = rabbit.x+8
    }
    if(keyDown(UP_ARROW)){
        rabbit.y = rabbit.y-8
    }
    if(keyDown(DOWN_ARROW)){
        rabbit.y = rabbit.y+8
    }
    
  
 text("x",100, 100)
    edges= createEdgeSprites()
  //  mole.collide(edges)
   // rabbit.collide(edges)
   
    drawSprites()
    MazeCollision(t1)
    MazeCollision(t2)
    MazeCollision(t3)
    MazeCollision(t4)
    MazeCollision(t5)
    MazeCollision(t6)
    MazeCollision(t7)
    MazeCollision(t8)
    MazeCollision(t9)
    MazeCollision(t10)
    MazeCollision(t11)
    MazeCollision(t12)
    MazeCollision(t13)
    MazeCollision(t14)
    MazeCollision(t15)
    MazeCollision(t16)
    MazeCollision(t17)
    MazeCollision(t18)
    MazeCollision(t19)
    MazeCollision(t20)
    MazeCollision(t21)
    MazeCollision(t22)
    MazeCollision(t23)
    MazeCollision(t24)
    MazeCollision(t25)
    MazeCollision(t26)
    MazeCollision(t27)
    MazeCollision(t28)
    MazeCollision(t29)
    MazeCollision(t30)
    MazeCollision(t31)
    MazeCollision(t32)
    MazeCollision(t33)
    MazeCollision(t34)
    MazeCollision(t35)
    MazeCollision(t36)
    MazeCollision(t37)
    MazeCollision(t38)
    MazeCollision(t39)
    MazeCollision(t40)
    MazeCollision(t41)
    MazeCollision(t42)
    MazeCollision(t43)
    handleCarrotCollision()
    moleControls()
    if(rabbit.x >windowWidth-100){
        rabbit.x = 0
        rabbit.y = rabbit.y
    }
    if(rabbit.x < 0){
        rabbit.x = windowWidth-150
        rabbit.y = rabbit.y
    }
    if(mole.x >windowWidth-100){
        mole.x = 0
        mole.y = mole.y
    }
    if(mole.x < 0){
        mole.x = windowWidth-150
        mole.y = mole.y
    }
    if(mole.isTouching(rabbit)){
        gameOver()
    }
    if(score==100){
        gameOver2()
    }
    text("x:"+ mouseX+"y:"+ mouseY,mouseX, mouseY)
    textSize(20)
    fill("RED")
    text("SCORE:"+score,windowWidth-150,40)
   
   
}
function MazeCollision(maze){
    rabbit.collide(maze)
    carrotGroup.collide(maze)
    mole.collide(maze)
}
function createCarrot(x,y){
    var c  = createSprite(x,y)
    c.addImage(carrotImg)
    c.scale = 0.1
    carrotGroup.add(c)
  
}
function createMultCarrots(){
   for(i=0;i<100;i++){
        createCarrot(random(0,windowWidth),random(30,windowHeight))
   }
}
function handleCarrotCollision() {
    // Adding fuel
    rabbit.overlap(carrotGroup, function(collector, collected) {
        score+=1
      //collected is the sprite in the group collectibles that triggered
      //the event
      collected.remove();
    })}
function moleControls(){
    if(keyDown("W")){
        mole.y = mole.y-6
    }
    if(keyDown("S")){
        mole.y = mole.y+6
    }
    if(keyDown("D")){
        mole.x = mole.x+6
    }
    if(keyDown("A")){
        mole.x = mole.x-6
    }
}
function gameOver(){
    swal({
        title: `MOLE WINS`,
        text: "The Mole Caught The Rabbit",
        confirmButtonText:"Play Again?"
    },
    function (isConfirm){
        if(isConfirm){
            location.reload()
        }
    }
    )
}
function gameOver2(){
    swal({
        title: `RABBIT WINS`,
        text: "The Rabbit Collected All The Carrots!",
        confirmButtonText:"Play Again?"
    },
    function (isConfirm){
        if(isConfirm){
            location.reload()
        }
    }
    )
}