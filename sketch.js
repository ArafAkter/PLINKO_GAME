const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

var particles = []

function preload() {
  //  backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(480,700);
    engine = Engine.create();
    world = engine.world;
    rand = random(width/2-10,width/2+10)

    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);

  //  box1 = new Box(700,320,70,70);
   // box2 = new Box(920,320,70,70);
   // pig1 = new Pig(810, 350);
   // log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(700,240,70,70);


    bird = new Bird(200,-50);
    bird1 = new Bird(200,-500);
    bird2 = new Bird(200,-1000);
    bird3 = new Bird(200,-1500);
    bird4 = new Bird(200,-2000);
    bird5 = new Bird(200,-2500);
    bird6 = new Bird(200,-3000);
    bird7 = new Bird(200,-3500);
    bird8 = new Bird(200,-4000);
    bird9 = new Bird(200,-4500);
    bird10 = new Bird(200,-5000);
    bird11 = new Bird(200,-5500);
    bird12 = new Bird(200,-6000);
    bird13 = new Bird(200,-6500);
    bird14 = new Bird(200,-7000);
    bird15 = new Bird(200,-7500);
    bird16 = new Bird(200,-8000);
    bird17 = new Bird(200,-8500);
    bird18 = new Bird(200,-9000);
    bird19 = new Bird(200,-9500);
    bird20 = new Bird(200,-10000);
    bird21 = new Bird(200,-10500);
    bird22 = new Bird(200,-11000);
    bird23 = new Bird(200,-11500);
    bird24 = new Bird(200,-12000);
    bird25 = new Bird(200,-13000);
    bird26 = new Bird(200,-13500);
    bird27 = new Bird(200,-14000);
    bird28 = new Bird(200,-14500);

    bird29 = new Bird(200,-15000);
    bird30 = new Bird(200,-15500);
    bird31 = new Bird(200,-16000);
    bird32 = new Bird(200,-16500);
    bird33 = new Bird(200,-17000);
    bird34 = new Bird(200,-17500);
    bird35 = new Bird(200,-18000);
    bird36 = new Bird(200,-18500);
    bird37 = new Bird(200,-19000);
    bird38 = new Bird(200,-19500);
    bird39 = new Bird(50,-20000);
    bird40 = new Bird(200,-20500);
    bird41 = new Bird(50,-21000);
    bird42 = new Bird(200,-21500);
    bird43 = new Bird(50,-22000);
    bird44 = new Bird(200,-22500);
    bird45 = new Bird(200,-23000);
    bird46 = new Bird(200,-23500);
    bird47 = new Bird(100,-24000);
    bird48 = new Bird(200,-24500);
    bird49 = new Bird(200,-25000);
    bird50 = new Bird(50,-25500);
    bird51 = new Bird(50,-26000);
    bird52 = new Bird(200,-26500);
    bird53 = new Bird(50,-27000);
    bird54 = new Bird(200,-27500);
    bird55 = new Bird(200,-28000);
    bird56 = new Bird(50,-28500);
    bird57 = new Bird(200,-29000);

    bird58 = new Bird(50,-30000);
    bird59 = new Bird(200,-31000);
    bird60 = new Bird(200,-32000);
    bird61 = new Bird(200,-33000);
    bird62 = new Bird(200,-34000);
    bird63 = new Bird(100,-35000);
    bird64 = new Bird(200,-36000);
    bird65 = new Bird(200,-37000);
    bird66 = new Bird(200,-38000);
    bird67 = new Bird(200,-39000);
    bird68 = new Bird(200,-40000);
    bird69 = new Bird(200,-41000);
    bird70 = new Bird(200,-42000);
    bird71 = new Bird(200,-43000);
    bird72 = new Bird(200,-44000);
    bird73 = new Bird(200,-45000);
    bird74 = new Bird(200,-46000);
    bird75 = new Bird(200,-47000);
    bird76 = new Bird(200,-48000);
    bird77 = new Bird(200,-49000);
    bird78 = new Bird(200,-50000);
    bird79 = new Bird(200,-51000);
    bird80 = new Bird(200,-52000);
    bird81 = new Bird(200,-53000);
    bird82 = new Bird(200,-54000);
    bird83 = new Bird(200,-55000);
    bird84 = new Bird(200,-55500);
    bird85 = new Bird(200,-56000);
    bird86 = new Bird(210,-57000);

    bird87 = new Bird(200,-38000);
    bird88 = new Bird(100,-39000);
    bird89 = new Bird(200,-40000);
    bird90 = new Bird(100,-41000);
    bird91 = new Bird(200,-42000);
    bird92 = new Bird(200,-43000);
    bird93 = new Bird(100,-44000);
    bird94 = new Bird(200,-45000);
    bird95 = new Bird(100,-46000);
    bird96 = new Bird(200,-47000);
    bird97 = new Bird(100,-48000);
    bird98 = new Bird(200,-49000);
    bird99 = new Bird(200,-50000);
    bird100 = new Bird(200,-51000);
    bird101 = new Bird(100,-52000);
    bird102 = new Bird(200,-53000);
    bird103 = new Bird(200,-54000);
    bird104 = new Bird(200,-55000);
    bird105 = new Bird(200,-56000);
    bird106 = new Bird(210,-57000);
    bird107 = new Bird(100,-58000);
    bird108 = new Bird(200,-59000);
    bird109 = new Bird(200,-60000);
    bird110 = new Bird(200,-61000);
    bird111 = new Bird(100,-62000);
    bird112 = new Bird(200,-63000);
    bird113 = new Bird(200,-64500);
    bird114 = new Bird(200,-65000);
    bird115 = new Bird(200,-66000);

    bird116 = new Bird(100,-67000);
    bird117 = new Bird(200,-68000);
    bird118 = new Bird(100,-69000);
    bird119 = new Bird(200,-70000);
    bird120 = new Bird(200,-71000);
    bird121 = new Bird(200,-72000);
    bird122 = new Bird(100,-73000);
    bird123 = new Bird(200,-74000);
    bird124 = new Bird(200,-75000);
    bird125 = new Bird(200,-76000);
    bird126 = new Bird(200,-77000);
    bird127 = new Bird(210,-78000);
    bird128 = new Bird(100,-79000);
    bird129 = new Bird(200,-80000);
    bird130 = new Bird(200,-81000);
    bird131 = new Bird(200,-82000);
    bird132 = new Bird(100,-83000);
    bird133 = new Bird(200,-84000);
    bird134 = new Bird(200,-85500);
    bird135 = new Bird(200,-86000);
    bird136 = new Bird(200,-87000);


    //log6 = new Log(230,180,80, PI/2);
    //slingshot = new SlingShot(bird.body,{x:200, y:50});

    plinkoa1 = new Ground(50,-75)
    plinkoa2 = new Ground(100,-75)
    plinkoa3 = new Ground(150,-75)
    plinkoa4 = new Ground(200,-75)
    plinkoa5 = new Ground(250,-75)
    plinkoa6 = new Ground(300,-75)
    plinkoa7 = new Ground(350,-75)
    plinkoa8 = new Ground(400,-75)

  //  plinkoa9 = new Ground(75,-125)
   // plinkoa10 = new Ground(125,-125)
    plinkoa11 = new Ground(475,-125)
  //  plinkoa12 = new Ground(225,-125)
    //plinkoa13 = new Ground(275,-125)
  //  plinkoa14 = new Ground(325,-125)
    plinkoa15 = new Ground(375,-125)
    plinkoa16 = new Ground(425,-125)

    //plinkoa17 = new Ground(50,175)
    //plinkoa18 = new Ground(100,175)
    //plinkoa19 = new Ground(150,175)
 //   plinkoa20 = new Ground(230,175)
   // plinkoa21 = new Ground(260,175)
    plinkoa22 = new Ground(340,175)
    plinkoa23 = new Ground(400,175)
    plinkoa24 = new Ground(440,175)

     //row 1
  plinko1 = new Ground(50,75)
  plinko2 = new Ground(100,75)
  plinko3 = new Ground(150,75)
  plinko4 = new Ground(200,75)
  plinko5 = new Ground(250,75)
  plinko6 = new Ground(300,75)
  plinko7 = new Ground(350,75)
  plinko8 = new Ground(400,75)
  //row 2
  plinko9 = new Ground(75,125)
  plinko10 = new Ground(125,125)
  plinko11 = new Ground(175,125)
  plinko12 = new Ground(225,125)
  plinko13 = new Ground(275,125)
  plinko14 = new Ground(325,125)
  plinko15 = new Ground(375,125)
  plinko16 = new Ground(425,125)
//row 3
  plinko17 = new Ground(50,175)
  plinko18 = new Ground(100,175)
  plinko19 = new Ground(150,175)
  plinko20 = new Ground(200,175)
  plinko21 = new Ground(250,175)
  plinko22 = new Ground(300,175)
  plinko23 = new Ground(350,175)
  plinko24 = new Ground(400,175)
//row 4
plinko25 = new Ground(75,225)
plinko26 = new Ground(125,225)
plinko27 = new Ground(175,225)
plinko28 = new Ground(225,225)
plinko29 = new Ground(275,225)
plinko30 = new Ground(325,225)
plinko31 = new Ground(375,225)
plinko32 = new Ground(425,225)

var options = {
    isStatic: true
}
this.body = Bodies.rectangle(width/2,height,width,10,options);

platform = new Platform(width/2,height,width,10)

platform1 = new Platform(0,550,10,height * 200)
platform2 = new Platform(80,600,10,240)
platform3 = new Platform(160,600,10,240)
platform4 = new Platform(240,600,10,240)
platform5 = new Platform(320,600,10,240)
platform6 = new Platform(400,600,10,240)
platform7 = new Platform(480,580,10,height * 200)


}

function draw(){
    background("skyblue");
    Engine.update(engine);
    
    //strokeWeight(4);
  //  box1.display();
//    box2.display();
    ground.display();
  //  pig1.display();
 //   log1.display();

 plinko1.display();
 plinko2.display();
 plinko3.display();
 plinko4.display();
 plinko5.display();
 plinko6.display();
 plinko7.display();
 plinko8.display();

 plinko9.display();
 plinko10.display();
 plinko11.display();
 plinko12.display();
 plinko13.display();
 plinko14.display();
 plinko15.display();
 plinko16.display();

 plinko17.display();
 plinko18.display();
 plinko19.display();
 plinko20.display();
 plinko21.display();
 plinko22.display();
 plinko23.display();
 plinko24.display(); 
 
 plinko25.display();
 plinko26.display();
 plinko27.display();
 plinko28.display();
 plinko29.display();
 plinko30.display();
 plinko31.display();
 plinko32.display(); 

 platform1.display();
 platform2.display();
 platform3.display();
 platform4.display();
 platform5.display();
 platform6.display();
 platform7.display();

 bird1.display();
 bird2.display();
 bird3.display();
 bird4.display();
 bird5.display();
 bird6.display();
 bird7.display();
 bird8.display();
 bird9.display();
 bird10.display();
 bird11.display();
 bird12.display();
 bird13.display();
 bird14.display();
 bird15.display();
 bird16.display();
 bird17.display();
 bird18.display();
 bird19.display();
 bird20.display();
 bird21.display();
 bird22.display();
 bird23.display();
 bird24.display();
 bird25.display();
 bird26.display();
 bird27.display();
 bird28.display();

 bird29.display();
 bird30.display();
 bird31.display();
 bird32.display();
 bird33.display();
 bird34.display();
 bird35.display();
 bird36.display();
 bird37.display();
 bird38.display();
 bird39.display();
 bird40.display();
 bird41.display();
 bird42.display();
 bird43.display();
 bird44.display();
 bird45.display();
 bird46.display();
 bird47.display();
 bird48.display();
 bird49.display();
 bird50.display();
 bird51.display();
 bird52.display();
 bird53.display();
 bird54.display();
 bird55.display();
 bird56.display();

 bird57.display();
 bird56.display();
 bird57.display();
 bird58.display();
 bird59.display();
 bird60.display();
 bird61.display();
 bird62.display();
 bird63.display();
 bird64.display();
 bird65.display();
 bird66.display();
 bird67.display();
 bird68.display();
 bird69.display();
 bird70.display();
 bird71.display();
 bird72.display();
 bird73.display();
 bird74.display();
 bird75.display();
 bird76.display();
 bird77.display();
 bird78.display();
 bird79.display();
 bird80.display();
 bird81.display();
 bird82.display();

 bird83.display();
 bird84.display();
 bird85.display();
 bird86.display();
 bird87.display();
 bird88.display();
 bird89.display();
 bird90.display();
 bird91.display();
 bird92.display();
 bird93.display();
 bird94.display();
 bird95.display();
 bird96.display();
 bird97.display();
 bird98.display();
 bird99.display();
 bird100.display();
 bird101.display();
 bird102.display();
 bird103.display();
 bird104.display();
 bird105.display();
 bird106.display();
 bird107.display();
 bird108.display();
 bird109.display();
 bird110.display();
 bird111.display();
 bird112.display();
 bird113.display();
 bird114.display();
 bird115.display();

 bird116.display();
 bird117.display();
 bird118.display();
 bird119.display();
 bird120.display();
 bird121.display();
 bird122.display();
 bird123.display();
 bird124.display();
 bird125.display();
 bird126.display();
 bird127.display();
 bird128.display();
 bird129.display();
 bird130.display();
 bird131.display();
 bird132.display();
 bird133.display();
 bird134.display();
 bird135.display();
 bird136.display();

 //bird110.display();

 platform.display();
    bird.display();
    bird1.display();
   // platform.display();
    //log6.display();
  //  slingshot.display();
  
  


  
}

function mouseDragged(){
//    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  //  slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){}
    //slingshot.attach(bird.body);
}