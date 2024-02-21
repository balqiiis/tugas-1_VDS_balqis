let k;
function setup(){
//sensitive software    
    createCanvas(400,500);
    background(215, 227, 252);

    k = 0;
}

function draw(){
    stroke(255,255,255);
    line(200,499,200,0);

    //Donal non animate
    fill(39,158,255);
    stroke(215, 227, 252);
    ellipse(100,155,70,40);
    ellipse(60,235,25,20);
    ellipse(133,235,25,20);
    fill(32,28,88);
    stroke(32,28,88);
    ellipse(100,162,60,30);
    fill(255,255,255);
    stroke(255,255,255);
    ellipse(100,200,100,90);
    fill(253,231,103);
    arc(100,215,35,20, 0, 3)
    arc(100,215,35,25, 3, 0);
    fill(0);
    ellipse(90,195,10,10);
    ellipse(110,195,10,10);
    fill(255, 235, 216);
    ellipse(120,205,10,5);
    ellipse(80,205,10,5);
    fill(184, 0, 0);
    stroke(184, 0, 0);
    ellipse(100,235,3,3);
    ellipse(93,235,8,10);
    ellipse(107,235,8,10);
    ellipse(104,235,4,6);
    ellipse(96,235,4,6);
    stroke(236, 177, 89);
    line(83,215,116,215);
    fill(118,69,59);
    stroke(200);
    rect(43,229,15,20);

    //Donna non animate
    fill(242, 133, 133);
    stroke(215, 227, 252);
    ellipse(59,390,25,20);
    ellipse(133,390,25,20);
    fill(255);
    stroke(255,255,255);
    ellipse(100,355,95,80);
    fill(253,231,103);
    arc(100,370,30,15, 0, PI);
    arc(100,370,30,20, PI, 0);
    fill(0);
    ellipse(88,354,10,10);
    ellipse(112,354,10,10);
    fill(255, 235, 216);
    ellipse(120,360,10,5);
    ellipse(80,360,10,5);
    fill(255,5,90);
    ellipse(100,320,6,7);
    fill(242, 133, 133);
    stroke(242, 133, 133);
    ellipse(105,320,7,11);
    ellipse(95,320,7,11);
    ellipse(88,320,15,25);
    ellipse(112,320,15,25);
    stroke(236, 177, 89);
    line(86,370,114,370);
    fill(118,69,59);
    stroke(215, 227, 252);
    rect(43,229,15,20);
    fill(0);
    stroke(0);
    line(88,348,88,350);
    line(86,348,86,350);
    line(112,348,112,350);
    line(114,348,114,350);
    fill(118,0,0);
    stroke(215, 227, 252);
    rect(47,380,15,20);

    //donal animate
    fill(39,158,255);
    stroke(39,158,255);
    ellipse(299,155,70,40);
    ellipse(330,235,25,20);
    var x = 260 + 2* Math.sin(PI/250*k)
    k += 1;
    fill(39,158,255);
    stroke(215, 227, 252)
    ellipse(x,235,25,20);
    fill(32,28,88);
    stroke(32,28,88);
    ellipse(299,162,60,30);
    fill(255,255,255);
    stroke(255,255,255);
    ellipse(299,200,100,90);
    fill(255, 0, 77);
    arc(299,214,30,15,0,PI);
    fill(253,231,103);
    arc(299,214,35,25, PI, 0);
    fill(0);
    ellipse(290,195,10,10);
    ellipse(310,195,10,10);
    fill(250, 235, 216);
    ellipse(319,205,10,5);
    ellipse(279,205,10,5);
    fill(184, 0, 0);
    stroke(184, 0, 0);
    ellipse(300,235,3,4);
    ellipse(293,235,8,10);
    ellipse(307,235,8,10);
    ellipse(304,235,4,6);
    ellipse(296,235,4,6)
    var x = 243 + 3* Math.sin(PI/250*k)
    k += 1;
    fill(118,69,59);
    stroke(215, 227, 252);
    rect(x,229,15,20);
    var y = 215 + 3* Math.sin(PI/250*k)
    k += 1;
    fill(253,231,103);
    stroke(253,231,103);
    arc(299,y,33,19, 0, PI);
    stroke(236, 177, 89);
    line(315,214,283,214);

    //Donna animate
    var y = 390 + 3* Math.sin(PI/250*k)
    k += 1;
    fill(242, 133, 133);
    stroke(215, 227, 252);
    ellipse(260,y,25,20);
    ellipse(332,390,25,20);
    fill(255);
    stroke(255,255,255);
    ellipse(299,355,95,80);
    fill(255, 0, 77);
    arc(299,370,25,15,0,PI);
    var y = 372 + 2* Math.sin(PI/250*k)
    k += 1;
    fill(253,231,103);
    arc(299,y,30,15, 0, PI);
    arc(299,370,30,20, PI, 0);
    fill(0);
    ellipse(288,353,10,10);
    ellipse(312,353,10,10);
    fill(255, 235, 216);
    ellipse(320,360,10,5);
    ellipse(280,360,10,5);
    fill(255,5,90);
    ellipse(299,320,6,7);
    fill(242, 133, 133);
    stroke(242, 133, 133);
    ellipse(304,320,7,11);
    ellipse(294,320,7,11);
    ellipse(311,320,15,25);
    ellipse(287,320,15,25);
    stroke(236, 177, 89);
    line(285,370,313,370);
    fill(0);
    stroke(0);
    line(312,347,312,350);
    line(314,347,314,350);
    line(288,347,288,350);
    line(286,347,286,350);
    var y = 380 + 3* Math.sin(PI/250*k)
    k += 1;
    fill(118,0,0);
    stroke(215, 227, 252);
    rect(247,y,15,20);
}