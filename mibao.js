const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
	menu.classList.toggle('is-active')
	menuLinks.classList.toggle('active');
});

var pics = [
			"mibao pics/bailey2.jpg",
			"mibao pics/mibao-glam.jpg",
			"mibao pics/mibao-play.jpg",
			"mibao pics/mibao-sus.jpg",
			"mibao pics/mibao-pose.jpg",
			"mibao pics/mibao-bed.jpg",
			"mibao pics/mibao-pensive.jpg",
			"mibao pics/mibao-beach.jpg",
			"mibao pics/mibao-carrot.jpg",
			"mibao pics/mibao-jedi.jpg",
			"mibao pics/mibao-lol.jpg",
			"mibao pics/mibao-attentive.jpg"
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

const countElement = document.getElementById('count');

updateVisitCount();

function updateVisitCount(){
	fetch('https://api.countapi.xyz/update/gnnort.github.io/mibao/?amount=1')
		.then(res => res.json())
		.then(res => {
			countElement.innerHTML = res.value;
		});

}