function display_Home(){
	
	var incoming = document.querySelectorAll('#main-text');

	var timeline = anime.timeline({
		easing: 'easeOutExpo',
		duration: 750
	});

	let animation_in = anime({
		targets: incoming,
		translateY:[300,0],
		duration: 750,
	});

	timeline.add(animation_in);

	document.getElementById("main-text").style.display = "block";
	document.getElementById("container-A").style.display = "none";
}
