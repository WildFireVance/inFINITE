var cccimagedb = [
"images/frontmage.png",
"images/backmage.png",
"images/lsidemage.png",
"images/rsidemage.png",
"images/grass_0.png",
"images/grass_1.png",
"images/grass_2.png",
"images/grass_3.png",
"images/grass_4.png",
"images/grass_5.png",
"images/sand_0.png",
"images/sand_1.png",
"images/sand_2.png",
"images/sand_3.png",
"images/sand_4.png",
"images/sand_5.png",
"images/sand_6.png",
"images/sand_7.png",
"images/sand_8.png",
"images/snow_0.png",
"images/snow_1.png",
"images/snow_2.png"
];

var imglist = [];

// Image initializer:
function imginit(imgurl){
	var proximage = new Image();
	proximage.src = imgurl;
	return proximage;
}

for(var i = 0; i < cccimagedb.length; i++){
	imglist.push(imginit(cccimagedb[i]));
}