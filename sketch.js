var bubbles = [];
var song;
var analyser;
var mapMouseX, mapMouseY;
var pieces, radius;
var r;
var g;
var b;
var a;
var slider;
var button;


function preload() {
	song = loadSound("gasstation.mp3");
	myFont = loadFont('BlackHanSans-Regular.ttf');
	loadFont('BlackHanSans-Regular.ttf')
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	
	let col = color(0, 0, 0, 255);
	let txtcol = color(250, 250, 250, 255);
	let button = createButton ("PLAY / PAUSE");
	button.mousePressed (togglePlaying);
	button.style('font-size', '15px');
	button.style('font-family', 'BlackHanSans-Regular');
	button.style('color', txtcol);
	button.style('background-color', col);
	button.position(130, 775);
	button.size(180,50);

	slider = createSlider(0, 0.5, 0.10, 0.01);
	slider.position(330, 790);

	
	
	analyser = new p5.Amplitude();
	fft = new p5.FFT();
}


function togglePlaying() {
	if (!song.isPlaying()) {
		song.play();
		console.log("speelt af");
	

	}
	else {
		song.pause();
		console.log("speelt niet af");
	
	}
}


function draw() {
	background(0);

	song.setVolume(slider.value());

	r = random(5, 207); // r is a random number between 0 - 255
	g = random(35,189); // g is a random number betwen 100 - 200
	b = random(255, 200); // b is a random number between 0 - 100
	a = random(50,100); // a is a random number between 200 - 255
	renderBubbles();
  
	translate(windowWidth / 1.5, windowHeight / 2);
	level = analyser.getLevel();
	fft.analyze();

	var bass = fft.getEnergy("bass");
	var treble = fft.getEnergy("treble");
	var mid = fft.getEnergy("mid");

	var mapMid = map(mid, 0, 255, -100, 200);
	var scaleMid = map(mid, 0, 255, 1, 1.5);

	var mapTreble = map(treble, 0, 255, 200, 300);
	var scaleTreble = map(treble, 0, 255, 0, 1);

	var mapbass = map(bass, 0, 255, 100, 200);
	var scalebass = map(bass, 0, 255, 0.05, 1.2);

	mapMouseX = map(mouseX, 0, width, 30, 50);
	mapMouseXbass = map(mouseX, 0, width, 3, 6);
	mapMouseY = map(mouseY, 0, height, 2, 5);

	pieces = 20;
	radius = 100;

	for (i = 0; i < pieces; i += 0.1) {

		rotate(TWO_PI / (pieces / 2));

		noFill();

		/*----------  BASS - Blue circles ----------*/
		push();
		stroke(color(5, 110, 223));
		rotate(frameCount * 0.005);
		strokeWeight(0.5);
		circles(mapbass + i, mapbass - i, mapMouseXbass * i, 50);
		pop();


		/*----------  MID - Magenta spirograph circles ----------*/
		push();
		stroke(color(207, 61, 255));
		rotate(frameCount * 0.002);
		strokeWeight(0.2);
		circles(mapMid + i / 50, mapMid - i * 50, mapMouseX * i, 100);
		pop();


		/*----------  TREBLE - Purple circles ----------*/
		push();
		stroke(color(106, 75, 202));
		strokeWeight(0.6);
		// scale(mouseX * 0.0008);
		rotate(frameCount * -0.005);
		// rotate((mouseX * 0.002));
		circles(mapTreble + i / 2, mapTreble - i / 2, mapMouseY * i / 2, 25);
		pop();

	}

    textSize(25);
    strokeWeight(5);
	textFont(myFont);
    textLeading(25);
	let title = 'Gas Station - JUNE';
  	let v1 = '\n시원한 바람이 지나가면\n이 밤의 끝을 볼 수 있을까\n양팔을 벌리고 눈을 감으면\n어디로든 갈 수 있는 걸까\n\n생각은 꼬리를 물고선\n내 몸을 조여\n여긴 너무 어두우니깐\n\n내일의 아침이 올까\n지금 난 두려우니깐\n네가 내 옆에 있어 주면 돼\n\n난 나를 돌아봐\n우린 다 가득 채워지길 원해\n난 눈을 감았다가 뜨면\n모든 게 다 바뀌어버리면\n좋겠\n\n난 끄덕끄덕 대며 \n내 몸을 스쳐 가는\n공기를 느끼면서';
  	let v6 = '\n가벼운 발걸음은\n색다른 이 기분을\n더 느끼게 해줘서\n\n따분하고 지루한 일상 속에\n언제나 그랬듯 익숙해지네\n그래서 어디로든 떠날 건데\n난 네가 도와줬음 좋겠는데\n\n난 나를 돌아봐\n우린 다 가득 채워지길 원해\n난 눈을 감았다가 뜨면\n모든 게 다 바뀌어버리면 좋겠어\n\n난 끄덕끄덕 대며\n내 몸을 스쳐 가는\n공기를 느끼면서\n\n가벼운 발걸음은\n색다른 이 기분을\n더 느끼게 해줘서';

	stroke(color(250, 250, 250, 90));
	fill(250, 250, 255);
	text(title, -1150, -350, 500, 900);
	stroke(color(111, 210, 255, 100));
	fill(111, 210, 255);
	text(v1, -1150, -310, 500, 900);
	text(v6, -830, -310, 500, 900);
  // Text wraps within text box
}

function circles(x, y, radius, npoints) {
	var angle = TWO_PI / npoints;
	beginShape();
	for (var a = 0; a < TWO_PI; a += angle) {
		var sx = x + cos(a) * radius;
		var sy = y + sin(a) * radius;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}

function renderBubbles() {
	bubbles.forEach(bubble => {
		bubble.update();
		bubble.show();
	});
}

function mouseMoved() {
	createBubbles();
}

function createBubbles() {
	for(let x = 0;x < 1;x++) {
		createBubble();
	}
} 

function createBubble() {
	let pos = createVector(mouseX, mouseY);
	let vel = createVector(random(-1,1), random(-1,1));
	let col = color(r, g, b, a);
	let radius = random(10, 30);
	bubbles.push(new Bubble(pos, vel, col, radius));
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

var Bubble = (function() {
	
	function Bubble(pos, vel, col, radius) {
		this.pos = pos;
		this.vel = vel;
		this.col = col;
		this.radius = radius;
	}
	
	Bubble.prototype.show = function() {
		noStroke();
		fill(this.col);
		ellipse(this.pos.x, this.pos.y,this.radius, this.radius);
	}
	
	Bubble.prototype.update = function() {
		this.pos.add(this.vel);
		// this.edges();
	}
	
	Bubble.prototype.edges = function() {
		if (this.pos.x - (this.radius / 2) < 0 || this.pos.x + (this.radius / 2) > width) {
			this.vel.x *= -1;
		}
		
		if(this.pos.y - (this.radius / 2) < 0 || this.pos.y + (this.radius / 2) > height) {
			this.vel.y *= -1;
		}
	}
	
	return Bubble;
})();