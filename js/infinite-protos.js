/*
	Welp,
	Part of Project inFINITE - by the Illogic Gate Team
	
	The peoples who made this:
	cccfire
	rofoot
	OST

	Version 1
	Hey look, all the prototypes are in a special file now, how neat and tidy.
	New stuff:
	setup()
	update()
	render()
	main()
*/
var thinglist = []; //oh boy. All "things" will be put here.
var colliderlist = []; //All things that are tangible to the player will be put here.

function Player(){
	this.speed = 175;
	this.ax = 50;
	this.ay = 50;
	this.awidth = 32;
	this.aheight = 32;
	this.collider = new Collider(this,this.ax,this.ay,this.awidth,this.aheight);
	this.id = "player";
}  
Player.prototype = {
 	get x() {
   		return this.ax;
   	},
   	set x(value) {
   		this.ax = value;
		this.collider.x = value;
   	},
	get y() {
   		return this.ay;
   	},
   	set y(value) {
   		this.ay = value;
		this.collider.y = value;
   	},
}



function Thing(){
	this.width;
	this.height;
	thinglist.push(this);
}

function Personality(){
	this.law;
	this.loyalty;
	this.honesty;
	this.tradition;
	this.independence;
	this.effort;
}




function Collider(calld,x,y,width,height){
	this.user = calld;
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.colliderindex = colliderlist.length;
	
	this.checkCollision = function(){
		var nocollision = true;
		//if(!nocollision){
		for(var i = 0; i < colliderlist.length; i++){
			if(i != this.colliderindex
			&& this.x < colliderlist[i].collider.x + colliderlist[i].collider.width
			&& this.x + this.width > colliderlist[i].collider.x
			&& this.y < colliderlist[i].collider.y + colliderlist[i].collider.height
			&& this.y + this.height > colliderlist[i].collider.y
			){
				nocollision = false;
			}
		}
	//}
		return nocollision;
	}
	this.checkCollisionPoint = function(ax,ay){
		var nocollision = true;
		//if(!nocollision){
		for(var i = 0; i < colliderlist.length; i++){
			console.log(colliderlist[i]);
			if(i != this.colliderindex
			&& ax < colliderlist[i].x + colliderlist[i].width
			&& ax + this.width > colliderlist[i].x
			&& ay < colliderlist[i].y + colliderlist[i].height
			&& ay + this.height > colliderlist[i].y
			){
				nocollision = false;
			}
		}
	//}
		return nocollision;
	}
	colliderlist.push(this);
}


//extends Thing. Base prototype for all NPCs.
function NPC(){
	Thing.call(this);
	this.name;
	this.head;
	this.body;
	this.personal = new Personality();
}
NPC.prototype = Object.create(Thing.prototype);
NPC.prototype.constructor = NPC;

//extends NPC. Base prototype for all Matt NPCs.
function Matt(){
	NPC.call(this);
	this.name = "Matt";
}
Matt.prototype = Object.create(NPC.prototype);
Matt.prototype.constructor = Matt;


function BatMatt(){
	Matt.call(this);
	this.name = "BatMatt";
}
BatMatt.prototype = Object.create(Matt.prototype);
BatMatt.prototype.constructor = BatMatt;


//extends NPC. Base prototype for all Sally NPCs.
function Sally(){
	NPC.call(this);
	this.name = "Sally";
}
Sally.prototype = Object.create(NPC.prototype);
Sally.prototype.constructor = Sally;

//makes a random NPC. It be a factory function!
function createRandomNPC(){
	var randomnpc = new NPC();
	return randomnpc;
}

function CollideRect(x,y,width,height){
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.collider = new Collider(this,x,y,width,height);
	this.id = "colliderect";
}


function Theme(){
	this.npcs = [];
}