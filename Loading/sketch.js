//sketch04 ( NYESTEEEEEEEEEE )
var myRec = new p5.SpeechRec(); 
	myRec.continuous = true; // continious recognition of input
	myRec.interimResults = true;

  var myVoice = new p5.Speech('Google UK English Male'); // Picks voice for program





  var X = 0;
  var loading = true;
  var V = 45;
  var Z = 1;
  var B = 0;
  var time = 0;
  var H = 1;
  var K = 1;
  var Random;

function preload(){

  img = loadImage("assets/files-coding-java-512.png")
  img2 = loadImage("assets/beautiful.png")
  img3 = loadImage("assets/wigflip-ds.png")
  img4 = loadImage("assets/laggy.png")
  img5 = loadImage("assets/Introduction1.png")
  img6 = loadImage("assets/start.png")
  img7 = loadImage("assets/Introduction2.png")
  img8 = loadImage("assets/end.png")
  img9 = loadImage("assets/ohno.png")
}

function setup() {
 createCanvas(820, 600);   
 background(255);
 frameRate (15);  
 myRec.onResult = parseResult; 
 myRec.start(); // starts voice recognition engine



image(img, 0, 0);

}

function draw() {

Random = Math.floor(Math.random() * 30) + 1  


  if (loading) {
 fill(10,80);  
 rect(0, 0, width, height);
 drawThrobber(V);  

  stroke(255);
	rect(250,430,300,32);


    push()
    fill(255,75);
    rect(250,430,X/100 * 3,32);
   // stroke(255);
    fill(255);

    X = X + Z;
    




if (time == 0){
  image(img6, 100, 0 , 400, 150);
}
if (time == 1){
  image(img5, 100, 0 , 400, 150);
}

if (time == 2){
  image(img7, 100, 0 , 400, 150);
}

if (time == 4){
  image(img8, 100, 0 , 400, 150);
}





 
if (B == 1){
image(img3, 100, 0, 400, 150);
}

if (B == 2){
image(img2, 100, 0, 400, 150);
    } 



image(img, 0, 75, 100, 150);


  push();
textSize(32);
text(X/100 + "%", 350, 457);
pop();


} else {

}

while (X > 9000 && K == 2) {
  X = 8000;
}



if (X > 10000) {
loading = false;
background (255);
} else if (X > 7900 && K == 2){
time = 5;
V = Random;
 image(img9, 100, 0, 400, 150);
}



}

//Debugging:
//console.log(B);
//console.log(X); 
//console.log(K); 
//console.log(H);



function parseResult()
	{
		
		// To avoid detecting issues i only check for the most recent word.
		var mostrecentword = myRec.resultString.split(' ').pop();
		if(mostrecentword.indexOf("XXX")!==-1) { XXXX}
		else if(mostrecentword.indexOf("you")!==-1) { Fuck(); }
		else if(mostrecentword.indexOf("beautiful")!==-1) {  Beautiful(); }
		else if(mostrecentword.indexOf("sorry")!==-1) { Sorry(); }
		else if(mostrecentword.indexOf("slow")!==-1) { Slow(); time = 3; }
    else if(mostrecentword.indexOf("begin")!==-1) { time = 1; }
    else if(mostrecentword.indexOf("next")!==-1) { time = 2; }
    else if(mostrecentword.indexOf("flower")!==-1) { tester(); }
		console.log(mostrecentword);
	}


  

function drawThrobber(num) {  
  push();
  translate(width/2, height/2);
  var cir = 360/num*(frameCount%num); 
  rotate(radians(cir));
  noStroke();
  fill(255,255,0); 
  ellipse(35,0,22,22);  
  pop();

}



var Slow = function(){
     Slow = function(){}; // kills the script after having been called once to avoid same keywords being triggered.
     myVoice.speak("You think a throbber can be your ally?. You merely adopted slow loading. I was born in it, molded by it. I didn’t see the end of the loading until I was already a man. by then it was nothing to me but a disappointment");
     Z = -10;
     B = 1;
     V = -9;
     
};

var Sorry = function(){
     Sorry = function(){}; // kills the script after having been called once to avoid same keywords being triggered.
     myVoice.speak("It's okay. i Forgive you, let me help you out with that loading screen. If you want it to go even faster, tell me that i'm beautiful");
     Z = 10;
     B = 2;
     V = 45;
};



var Beautiful = function(){
     Beautiful = function(){}; // kills the script after having been called once to avoid same keywords being triggered.
     myVoice.speak("That was cute. but telling me that i'm beautiful is cheap. you are being controlled by a robot and a paperclip right now, still i like you. so here you go. a faster loading screen");
     Z = 40;
     B = 3;
     V = 9;
     time = 4;
     K = 2;
};

var Fuck = function(){
     Fuck = function(){}; // kills the script after having been called once to avoid same keywords being triggered.
     myVoice.speak("What did you just call me? i'll let you know i graduated at the top of my class at throbber academy, that's it! you're done");
     H = 2;
     V = -9;
};

var tester = function(){
     tester = function(){}; // kills the script after having been called once to avoid same keywords being triggered.
     myVoice.speak("You found the secret keyword, you truly deserve to finish this loading screen. Good job");
     K = 3;
     V = 45;
};

