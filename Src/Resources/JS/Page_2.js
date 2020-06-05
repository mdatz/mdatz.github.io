function fillExisting() {
	if(sessionStorage.length != 0){
		//If Form Variables still Exist, fill the HTML Elements with the Stored Values
	}else{
		console.log("Session Storage length is 0!");
	}
}
		
function next() {
	
	//Return the next page
	return location.href = "./Page_3.html";
}

function previous() {
	return location.href = "./Page_1.html";
}