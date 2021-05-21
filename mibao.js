
var pics = [
			"mibao pics/bailey2.jpg",
			"mibao pics/mibao-glam.jpg",
			"mibao pics/mibao-play.jpg",
			"mibao pics/mibao-sus.jpg"
			];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
											img.src = pics[counter];
											counter += 1;
											if(counter === pics.length){
												counter = 0;
											}
										});
