var bubbles = [];

function setup() {
	createCanvas(displayWidth, displayHeight);
}

function draw() {
	background(0);
	renderBubbles();
  
    noFill();
    strokeWeight(50);
    stroke(color(300, 100, 200));
    bezier(-10, 300, 300, -250, 500, 750, 810, 200);
    strokeWeight(20);
    stroke(color(100, 100, 200));
    bezier(-10, 200, 300, 600, 450, 200, 810, 200);
    stroke(color(190, 190, 250));
    bezier(-10, 400, 300, 500, 500, 100, 810, 100);

    textSize(20);
    strokeWeight(5);
    stroke(color(250, 250, 250));
    textStyle(BOLD);
  let rl = '한 눈에 반할\n깜찍한 외모 그 이유뿐일까\n나만 보면\n할 말을 잃고 앓게 되는 거\n\n날카로운 눈빛과\n발톱은 필요치 않아\n이것 봐 봐\n네 맘을 파고든 흔적이 깊어\n\n그 어떤 비밀이든 내게\n무슨 얘기라도 털어놔도 돼\n알잖아 내 앞에선 언제라도\n아이가 되어도 돼요';
  fill(150, 150, 200);

  text(rl, 111, 120, 500, 900);
  // Text wraps within text box
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
	let vel = createVector(random(-7,7), random(-7,7));
	let col = color(250, 100);
	let radius = random(50, 200);
	bubbles.push(new Bubble(pos, vel, col, radius));
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
		this.edges();
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