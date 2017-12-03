/*
	Welp,
	Project inFINITE - by the Illogic Gate Team
	
	The peoples who made this:
	cccfire
	rofoot
	OST

	Version 1
	Hey you know what, I could abstractamize like half of this and turn it into a 2d game engine. But no.
	New stuff:
	setup()
	update()
	render()
	main()
*/
//Well without further ado:

// Make the canvas and set it up:
var canvas = document.createElement("canvas");
// Makes the canvas fullscreen (when combined with css)
//*************************************************
canvas.width = document.documentElement.offsetWidth;
var body = document.body,
    html = document.documentElement;
canvas.height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
//*************************************************

// Them evil Global Variables go here
var debug = true;
var tool = new CTools();
var hero = new Player();
var multiplier = 1;
var keysDown = {};

// Do we want this? I'm not sure.
/* 
var defwidth = 1100;
var defheight = 600;
var widthratio = canvas.width/defwidth;
var heightratio = canvas.height/defheight;
*/



// Useful functions:
//********************



//********************

// Event Listeners:

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


// This be the setup function
function setup(){
	for(var i = 0; i < 15; i++){
		new CollideRect(tool.randomInt(0,canvas.width),tool.randomInt(0,canvas.height),tool.randomInt(30,200),tool.randomInt(30,200));
	}
	main();
}

// This be the update function that updates the states of the game objects and stuff
function update(modifier){
	if (68 in keysDown && 83 in keysDown) { // Player holding right and down
		//if (map[Math.floor((hero.x+(hero.speed + hero.weapon.spd + hero.armor.spd)/8 * modifier*multiplier)/64)][Math.floor((hero.y)/64)].passable&&check(hero.x+(hero.speed + hero.weapon.spd + hero.armor.spd)/3 * modifier*multiplier,hero.y)){
		//	var multiplier = map[Math.floor(hero.x/64)][Math.floor((hero.y)/64)].multiplier;
		if (hero.collider.checkCollisionPoint(hero.x + 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237),hero.y)){	
			hero.x += 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237);
		}

		if (hero.collider.checkCollisionPoint(hero.x, hero.y + 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237))){	
			hero.y += 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237);
		}
		//}
		debug&&console.log('right and down');

	}
	else if (68 in keysDown && 87 in keysDown) { // Player holding right and up

		if (hero.collider.checkCollisionPoint(hero.x + 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237),hero.y)){	
			hero.x += 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237);
		}

		if (hero.collider.checkCollisionPoint(hero.x, hero.y - 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237))){	
			hero.y -= 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237);
		}
		
		debug&&console.log('right and up');

	}
	else if (65 in keysDown && 83 in keysDown) { // Player holding left and down
		if (hero.collider.checkCollisionPoint(hero.x - 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237),hero.y)){	
			hero.x -= 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237);
		}

		if (hero.collider.checkCollisionPoint(hero.x, hero.y + 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237))){	
			hero.y += 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237);
		}
		
		debug&&console.log('left and down');
	}
	else if (65 in keysDown && 87 in keysDown) { // Player holding left and up
		if (hero.collider.checkCollisionPoint(hero.x - 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237),hero.y)){	
			hero.x -= 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237);
		}

		if (hero.collider.checkCollisionPoint(hero.x, hero.y - 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237))){	
			hero.y -= 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237);
		}
		debug&&console.log('left and up')
	}
	else if (87 in keysDown) { // Player holding up
		if (hero.collider.checkCollisionPoint(hero.x, hero.y - 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237))){	
			hero.y -= 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237);
		}
		debug&&console.log('up');
	}
	else if (83 in keysDown) { // Player holding down
		if (hero.collider.checkCollisionPoint(hero.x, hero.y + 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237))){	
			hero.y += 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237);
		}
		debug&&console.log('down');
	}
	else if (65 in keysDown) { // Player holding left
	 	if (hero.collider.checkCollisionPoint(hero.x - 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237),hero.y)){	
			hero.x -= 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237);
		}
		debug&&console.log('left');
	}
	else if (68 in keysDown) { // Player holding right
		if (hero.collider.checkCollisionPoint(hero.x + 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237),hero.y)){	
			hero.x += 2*(hero.speed)/3 * modifier*multiplier*(1/1.41421356237);
		}
		debug&&console.log('right');
	}
}

// This be the render function that draws everything and stuff!
function render(){
	ctx.fillStyle="#327189";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	//ctx.drawImage(imglist[0], hero.x, hero.y,32,32);
	ctx.fillStyle="#7f0000";
	for(var i = 0; i < colliderlist.length; i++){
		if(colliderlist[i].user.id == "colliderect"){
			ctx.fillStyle="#7f0000";
			ctx.fillRect(colliderlist[i].x,colliderlist[i].y,colliderlist[i].width,colliderlist[i].height);
		}
		else if(colliderlist[i].user.id == "player"){
			ctx.fillStyle="#3ffddb";
			ctx.fillRect(colliderlist[i].x,colliderlist[i].y,colliderlist[i].width,colliderlist[i].height);
		}
	}
	//console.log('hi');
}

// Represents the game loop
function main(){
	
	//This is so that even with lag, the game will still run relatively smoothly.
	var now = Date.now();
	var delta = now - then;
	//
	
	update(delta / 1000); //Do all the updating stuff
	render(); //Draw them stuffs

	then = now; //This too
	
	// Well we hurt each other then we do it again...
	requestAnimationFrame(main);
}

// Cross-browser support for requestAnimationFrame that I totally didn't plagiarize
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//Remember that thing about performance in spite of lag? Yup. That.
var then = Date.now();

//Time to do things
window.onload = function() {
setup();
}
