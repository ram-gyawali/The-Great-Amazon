let formerMaca = document.getElementById('formerMaca'),
	laterMaca = document.getElementById('laterMaca'),
	nativeGuy = document.getElementsByClassName('natives'),
	fish = document.getElementById('fish'),
	music = document.getElementById('music'),
	margin=formerMaca.offsetLeft,
	cruise=document.getElementById("cruise")
	smallCruise = document.getElementById('smallOne'),
	crocodileMove = document.getElementById('crocodile'),
	cruiseLeft = cruise.offsetLeft,
	smallCruiseLeft = smallCruise.offsetLeft,
	txt = document.getElementsByClassName('text'),
	one = document.getElementById('one'),
	two = document.getElementById('two'),
	three = document.getElementById('three'),
	four = document.getElementById('four'),
	five = document.getElementById('five'),
	bullets = document.getElementsByClassName('bullets')[0];
	scroll=cruiseLeft-300,
	guitar=  new Audio("audio/classic_music.mp3");

window.scrollTo(scroll,0);



 // 	two.onclick = function(event){

	// 	cruise.style.left=1455 + "px";

	// 	smallCruise.style.left=52.2 + "px";
	// 	txt[1].style.display = 'block';
	// 	event.preventDefault();
	// 	window.scrollTo(1155,0);
	// }

//move the cruise all(start,stop,rotate)

function moving(e){
	//right Arrow and end point
 	if(e.keyCode == 39 && cruiseLeft < 6630){
 		var formerMaca = document.getElementById('formerMaca');

 		margin+=5;

 		formerMaca.style.marginLeft = margin+"px";

 		cruiseLeft += 15;
 		smallCruiseLeft += .6;

 		if(cruiseLeft >= 590){
 			txt[0].style.display = 'block';
 		}
 		if(cruiseLeft >= 1070){
 			txt[0].style.display = 'none';
 		}
 		if(cruiseLeft >=1445){
 			txt[1].style.display = 'block';
 			one.classList.remove('active');
 			two.classList.add('active');
 		}
 		if(cruiseLeft >= 1940){
 			txt[1].style.display = 'none';
 		}

 		if(cruiseLeft >= 3880){
 			txt[2].style.display = 'block';
 		}

 		if(cruiseLeft >= 4365){
 			txt[2].style.display = 'none';
 		}

 		if(cruiseLeft >= 5075){
 			txt[3].style.display = 'block';
 			crocodileMove.classList.add('crocodileMove');
 		}

 		if(cruiseLeft >= 5575 ){
 			txt[3].style.display = 'none';
 		}

 		if(cruiseLeft >= 2275){
 			nativeGuy[0].classList.add('nat');
 		}

 		if(cruiseLeft >= 2675){
 			music.classList.add('playMusic');

 			guitar.play();
 			two.classList.remove('active');
 			three.classList.add('active');
 		}

 		if(cruiseLeft >= 3825){
 			guitar.pause();
 			fish.classList.add('fishPlay');
 		}

 		if(cruiseLeft >= 4710){
	 		nativeGuy[1].classList.add('nat');
	 		three.classList.remove('active');
	 		four.classList.add('active');
 		}


 		if(cruiseLeft >= 6175){
 			laterMaca.classList.add('later_maca_Animate');
 			four.classList.remove('active');
 			five.classList.add('active');
 		}

 	 	e.preventDefault();
 		cruise.style.left=cruiseLeft+"px";
 		smallCruise.style.left=smallCruiseLeft+"px";
 		var scroll=cruiseLeft-300;
 		window.scrollTo(scroll,0);
 		// console.log(scroll);


 		// if(cruiseLeft >=6000){
 		// 	laterMaca.classList.add('later_maca_Animate');
 		// 	// formerMaca.classList.toggle('later_maca_Animate');
 	}

 	if(e.keyCode == 37 && cruiseLeft!=525){			//left arrow && start point
 		cruise.classList.add("addTransformGo");
 		cruiseLeft-=15;
 		smallCruiseLeft-=.6;
 		cruise.style.left=cruiseLeft+"px";
 		smallCruise.style.left = smallCruiseLeft+"px";
 		e.preventDefault();
 		var scroll = cruiseLeft - 300;
 		window.scrollTo(scroll,0);
 	}

 	if(e.keyCode == 38){	//Up Arrow
 		e.preventDefault();
 	 	cruise.classList.toggle("addTransformGo");
 	}

 	if(e.keyCode == 40){	//Down Arrow
 	 	e.preventDefault();
 	 	cruise.classList.toggle('addTransformReturn');
 	}

}

document.onkeydown = function(w){
	moving(w);
	formerMaca.className = "former_maca_Animate";
}

one.onclick = function(event){
	cruise.style.left=600 + "px";
	smallCruise.style.left=18.000000000000004 + "px";
	txt[0].style.display = 'block';
	event.preventDefault();
	window.scrollTo(300,0);
	one.classList.add('active');
	two.classList.remove('active');
	three.classList.remove('active');
	four.classList.remove('active');
	five.classList.remove('active');
}

two.onclick = function(event){
 	cruise.style.left=1455 + "px";
	smallCruise.style.left=52.2 + "px";
	txt[1].style.display = 'block';
	event.preventDefault();
	window.scrollTo(1155,0);
	two.classList.add('active');
	one.classList.remove('active');
	three.classList.remove('active');
	four.classList.remove('active');
	five.classList.remove('active');

}

three.onclick = function(event){
	cruise.style.left=2675 + "px";
	smallCruise.style.left=101.39999999999975 + "px";
	txt[2].style.display = 'block';
	event.preventDefault();
	window.scrollTo(2385,0);
	music.classList.add('playMusic');
	three.classList.add('active');
	two.classList.remove('active');
	one.classList.remove('active');
	four.classList.remove('active');
	five.classList.remove('active');
}

four.onclick = function(event){
	cruise.style.left=5100 + "px";
	smallCruise.style.left=197.99999999999883 + "px";
	txt[3].style.display = 'block';
	event.preventDefault();
	window.scrollTo(4800,0);
	four.classList.add('active');
	three.classList.remove('active');
	one.classList.remove('active');
	two.classList.remove('active');
	five.classList.remove('active');
}

five.onclick = function(event){
	cruise.style.left=6630 + "px";
	smallCruise.style.left=259.1999999999984+ "px";
	event.preventDefault();
	window.scrollTo(6330,0);
	five.classList.add('active');
	four.classList.remove('active');
	one.classList.remove('active');
	two.classList.remove('active');
	three.classList.remove('active');
}
