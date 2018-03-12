function setup(){
	createCanvas(1400, 720);
	background(230);

	clearAllButton = createButton('Clear All');
	clearAllButton.position(20, 20, 60);
	rSlider = createSlider(0, 255, 100);
  	rSlider.position(100, 20);
  	gSlider = createSlider(0, 255, 0);
  	gSlider.position(100, 50);
  	bSlider = createSlider(0, 255, 255);
  	bSlider.position(100, 80);
}

function draw(){		
	clearAllButton.mousePressed(function(){
		clear();
		background(230);
	});

	var this.r = rSlider.value();
	var this.g = gSlider.value();
	var this.b = bSlider.value();

	text("red", rSlider.x * 2 + rSlider.width, 35);
	text("green", gSlider.x * 2 + gSlider.width, 65);
	text("blue", bSlider.x * 2 + bSlider.width, 95);
	// randomColor.mousePressed(function(){
	// 	console.log('lol');
	// 	this.brushColor = color(random(255), random(255), random(255));
	// });

	drawLine();
}

function drawLine(){
	if (mouseIsPressed){
		strokeWeight(8);
		stroke(color(this.r, this.g, this.b));
		line(pmouseX, pmouseY, mouseX, mouseY);	
	}
}
	