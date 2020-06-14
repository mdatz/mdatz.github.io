function fillExisting(){
	
	//If Form Variables still Exist, fill the HTML Elements with the Stored Values
	if(sessionStorage.getItem("Long Term Goal 1") != null){document.getElementById("goal1").value = sessionStorage.getItem("Long Term Goal 1");}
	document.getElementById("goalBaseline1").value = sessionStorage.getItem("Baseline Goal 1");
	if(sessionStorage.getItem("Short Term Objective Goal 1") != null){document.getElementById("shortTermObjective1").value = sessionStorage.getItem("Short Term Objective Goal 1");}
	document.getElementById("objectiveReview1").value = sessionStorage.getItem("Objective Review Goal 1");
	if(sessionStorage.getItem("Accommodations and Strategies Goal 1") != null){document.getElementById("goalStrategy1").value = sessionStorage.getItem("Accommodations and Strategies Goal 1");}
	
	if(sessionStorage.getItem("Long Term Goal 2") != null){document.getElementById("goal2").value = sessionStorage.getItem("Long Term Goal 2");}
	document.getElementById("goalBaseline2").value = sessionStorage.getItem("Baseline Goal 2");
	if(sessionStorage.getItem("Short Term Objective Goal 2") != null){document.getElementById("shortTermObjective2").value = sessionStorage.getItem("Short Term Objective Goal 2");}
	document.getElementById("objectiveReview2").value = sessionStorage.getItem("Objective Review Goal 2");
	if(sessionStorage.getItem("Accommodations and Strategies Goal 2") != null){document.getElementById("goalStrategy2").value = sessionStorage.getItem("Accommodations and Strategies Goal 2");}
	
	if(sessionStorage.getItem("Long Term Goal 3") != null){document.getElementById("goal3").value = sessionStorage.getItem("Long Term Goal 3");}
	document.getElementById("goalBaseline3").value = sessionStorage.getItem("Baseline Goal 3");
	if(sessionStorage.getItem("Short Term Objective Goal 3") != null){document.getElementById("shortTermObjective3").value = sessionStorage.getItem("Short Term Objective Goal 3");}
	document.getElementById("objectiveReview3").value = sessionStorage.getItem("Objective Review Goal 3");
	if(sessionStorage.getItem("Accommodations and Strategies Goal 3") != null){document.getElementById("goalStrategy3").value = sessionStorage.getItem("Accommodations and Strategies Goal 3");}
}

function next(){
	
	//Remove any existing items and add as new key
	sessionStorage.removeItem("Long Term Goal 1");
	var goalOption1 = document.getElementById("goal1");
	sessionStorage.setItem("Long Term Goal 1", goalOption1.options[goalOption1.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 1");
	sessionStorage.setItem("Baseline Goal 1", document.getElementById("goalBaseline1").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 1");
	var goalObjective1 = document.getElementById("shortTermObjective1");
	sessionStorage.setItem("Short Term Objective Goal 1", goalObjective1.options[goalObjective1.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 1");
	sessionStorage.setItem("Objective Review Goal 1", document.getElementById("objectiveReview1").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 1");
	var goalAccommodation1 = document.getElementById("goalStrategy1");
	sessionStorage.setItem("Accommodations and Strategies Goal 1", goalAccommodation1.options[goalAccommodation1.selectedIndex].text);
	

	sessionStorage.removeItem("Long Term Goal 2");
	var goalOption2 = document.getElementById("goal2");
	sessionStorage.setItem("Long Term Goal 2", goalOption2.options[goalOption2.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 2");
	sessionStorage.setItem("Baseline Goal 2", document.getElementById("goalBaseline2").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 2");
	var goalObjective2 = document.getElementById("shortTermObjective2");
	sessionStorage.setItem("Short Term Objective Goal 2", goalObjective2.options[goalObjective2.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 2");
	sessionStorage.setItem("Objective Review Goal 2", document.getElementById("objectiveReview2").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 2");
	var goalAccommodation2 = document.getElementById("goalStrategy2");
	sessionStorage.setItem("Accommodations and Strategies Goal 2", goalAccommodation2.options[goalAccommodation2.selectedIndex].text);
	
	
	sessionStorage.removeItem("Long Term Goal 3");
	var goalOption3 = document.getElementById("goal3");
	sessionStorage.setItem("Long Term Goal 3", goalOption3.options[goalOption3.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 3");
	sessionStorage.setItem("Baseline Goal 3", document.getElementById("goalBaseline3").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 3");
	var goalObjective3 = document.getElementById("shortTermObjective3");
	sessionStorage.setItem("Short Term Objective Goal 3", goalObjective3.options[goalObjective3.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 3");
	sessionStorage.setItem("Objective Review Goal 3", document.getElementById("objectiveReview3").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 3");
	var goalAccommodation3 = document.getElementById("goalStrategy3");
	sessionStorage.setItem("Accommodations and Strategies Goal 3", goalAccommodation3.options[goalAccommodation3.selectedIndex].text);
	
	
	return location.href = "./Page_6.html";
}

function previous(){
	
	//Remove any existing items and add as new key
	sessionStorage.removeItem("Long Term Goal 1");
	var goalOption1 = document.getElementById("goal1");
	sessionStorage.setItem("Long Term Goal 1", goalOption1.options[goalOption1.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 1");
	sessionStorage.setItem("Baseline Goal 1", document.getElementById("goalBaseline1").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 1");
	var goalObjective1 = document.getElementById("shortTermObjective1");
	sessionStorage.setItem("Short Term Objective Goal 1", goalObjective1.options[goalObjective1.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 1");
	sessionStorage.setItem("Objective Review Goal 1", document.getElementById("objectiveReview1").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 1");
	var goalAccommodation1 = document.getElementById("goalStrategy1");
	sessionStorage.setItem("Accommodations and Strategies Goal 1", goalAccommodation1.options[goalAccommodation1.selectedIndex].text);
	

	sessionStorage.removeItem("Long Term Goal 2");
	var goalOption2 = document.getElementById("goal2");
	sessionStorage.setItem("Long Term Goal 2", goalOption2.options[goalOption2.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 2");
	sessionStorage.setItem("Baseline Goal 2", document.getElementById("goalBaseline2").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 2");
	var goalObjective2 = document.getElementById("shortTermObjective2");
	sessionStorage.setItem("Short Term Objective Goal 2", goalObjective2.options[goalObjective2.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 2");
	sessionStorage.setItem("Objective Review Goal 2", document.getElementById("objectiveReview2").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 2");
	var goalAccommodation2 = document.getElementById("goalStrategy2");
	sessionStorage.setItem("Accommodations and Strategies Goal 2", goalAccommodation2.options[goalAccommodation2.selectedIndex].text);
	
	
	sessionStorage.removeItem("Long Term Goal 3");
	var goalOption3 = document.getElementById("goal3");
	sessionStorage.setItem("Long Term Goal 3", goalOption3.options[goalOption3.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 3");
	sessionStorage.setItem("Baseline Goal 3", document.getElementById("goalBaseline3").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 3");
	var goalObjective3 = document.getElementById("shortTermObjective3");
	sessionStorage.setItem("Short Term Objective Goal 3", goalObjective3.options[goalObjective3.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 3");
	sessionStorage.setItem("Objective Review Goal 3", document.getElementById("objectiveReview3").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 3");
	var goalAccommodation3 = document.getElementById("goalStrategy3");
	sessionStorage.setItem("Accommodations and Strategies Goal 3", goalAccommodation3.options[goalAccommodation3.selectedIndex].text);


	return location.href = "./Page_4.html";
}