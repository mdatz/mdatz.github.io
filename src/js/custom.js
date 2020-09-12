function display_Home(){
	document.getElementById("main-text").style.display = "block";
	document.getElementById("container-A").style.display = "none";
	document.getElementById("container-B").style.display = "none";
}

function display_About(){
	document.getElementById("main-text").style.display = "none";
	document.getElementById("container-A").style.display = "block";
	document.getElementById("container-B").style.display = "none";
}

function display_Contact(){

	document.getElementById("main-text").style.display = "none";
	document.getElementById("container-A").style.display = "none";
	document.getElementById("container-B").style.display = "block";
}
