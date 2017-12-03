function CTools(){
	
	//Took this from stackexchange. Would've built it myself, but this is basically exactly what I would've done, so why reinvent the wheel?
	this.wrapText = function(text, maxWidth, ctx) {
		//turn text variable into a list of words, with " " as the separator.
		var words = text.split(' '),
			lines = [], //a list of strings
			line = "";
		if (ctx.measureText(text).width < maxWidth) {
			return [text]; //If the string fits already just screw this and end the function.
		}
		//Otherwise, wrap the text.
		while (words.length > 0) { //Basically loops through all the words. For() wouldn't work here because we're removing elements from lists
			while (ctx.measureText(words[0]).width >= maxWidth) { //This part makes sure that words[0] isn't fatter than a line. If it is, it makes it less fat by taking off letters and putting it in the next line until it's not too fat.
				var tmp = words[0]; //Creates a proxy of words[0]
				words[0] = tmp.slice(0, -1); 
				if (words.length > 1) {
					words[1] = tmp.slice(-1) + words[1]; 
				} else {
					words.push(tmp.slice(-1));
				}
			}
			if (ctx.measureText(line + words[0]).width < maxWidth) {
				line += words.shift() + " "; //Adds words[0] to the line if it doesn't make it too fat.
			} else { //Otherwise, add the line to the list of lines.
				lines.push(line);
				line = "";
			}
			if (words.length === 0) { //If there's no more words, add whatever's in the current line to the list of lines.
				lines.push(line);
			}
		}
		return lines;
	}
	
	this.randomInt = function(min, max){
		return Math.random() * ((max + 1) - min) + min;
	}
	
	this.colliderCheck = function(x,y,colliders){
		var nocollision = true;
		//if(!nocollision){
		for(var i = 0; i < colliders.length; i++){
			if(i != colliderindex
			&& colliders[i].x + 20 < this.x + 32
			&& colliders[i].x + 24 > this.x 
			&& colliders[i].y + 14 < this.y + 32
			&& 64 + colliders[i].y > this.y){
				nocollision = false;
			}
		}
	//}
		return nocollision;
	}
	
}
