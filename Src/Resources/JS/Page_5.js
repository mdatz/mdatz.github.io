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
	
	if(sessionStorage.getItem("Long Term Goal 4") != null){document.getElementById("goal4").value = sessionStorage.getItem("Long Term Goal 4");}
	document.getElementById("goalBaseline4").value = sessionStorage.getItem("Baseline Goal 4");
	if(sessionStorage.getItem("Short Term Objective Goal 4") != null){document.getElementById("shortTermObjective4").value = sessionStorage.getItem("Short Term Objective Goal 4");}
	document.getElementById("objectiveReview4").value = sessionStorage.getItem("Objective Review Goal 4");
	if(sessionStorage.getItem("Accommodations and Strategies Goal 4") != null){document.getElementById("goalStrategy4").value = sessionStorage.getItem("Accommodations and Strategies Goal 4");}
	
	if(sessionStorage.getItem("Long Term Goal 5") != null){document.getElementById("goal5").value = sessionStorage.getItem("Long Term Goal 5");}
	document.getElementById("goalBaseline5").value = sessionStorage.getItem("Baseline Goal 5");
	if(sessionStorage.getItem("Short Term Objective Goal 5") != null){document.getElementById("shortTermObjective5").value = sessionStorage.getItem("Short Term Objective Goal 5");}
	document.getElementById("objectiveReview5").value = sessionStorage.getItem("Objective Review Goal 5");
	if(sessionStorage.getItem("Accommodations and Strategies Goal 5") != null){document.getElementById("goalStrategy5").value = sessionStorage.getItem("Accommodations and Strategies Goal 5");}
	
	if(sessionStorage.getItem("Long Term Goal 6") != null){document.getElementById("goal6").value = sessionStorage.getItem("Long Term Goal 6");}
	document.getElementById("goalBaseline6").value = sessionStorage.getItem("Baseline Goal 6");
	if(sessionStorage.getItem("Short Term Objective Goal 6") != null){document.getElementById("shortTermObjective6").value = sessionStorage.getItem("Short Term Objective Goal 6");}
	document.getElementById("objectiveReview6").value = sessionStorage.getItem("Objective Review Goal 6");
	if(sessionStorage.getItem("Accommodations and Strategies Goal 6") != null){document.getElementById("goalStrategy6").value = sessionStorage.getItem("Accommodations and Strategies Goal 6");}
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
	
	sessionStorage.removeItem("Long Term Goal 4");
	var goalOption4 = document.getElementById("goal4");
	sessionStorage.setItem("Long Term Goal 4", goalOption4.options[goalOption4.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 4");
	sessionStorage.setItem("Baseline Goal 4", document.getElementById("goalBaseline4").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 4");
	var goalObjective4 = document.getElementById("shortTermObjective4");
	sessionStorage.setItem("Short Term Objective Goal 4", goalObjective4.options[goalObjective4.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 4");
	sessionStorage.setItem("Objective Review Goal 4", document.getElementById("objectiveReview4").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 4");
	var goalAccommodation4 = document.getElementById("goalStrategy4");
	sessionStorage.setItem("Accommodations and Strategies Goal 4", goalAccommodation4.options[goalAccommodation4.selectedIndex].text);
	

	sessionStorage.removeItem("Long Term Goal 5");
	var goalOption5 = document.getElementById("goal5");
	sessionStorage.setItem("Long Term Goal 5", goalOption5.options[goalOption5.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 5");
	sessionStorage.setItem("Baseline Goal 5", document.getElementById("goalBaseline5").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 5");
	var goalObjective5 = document.getElementById("shortTermObjective5");
	sessionStorage.setItem("Short Term Objective Goal 5", goalObjective5.options[goalObjective5.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 5");
	sessionStorage.setItem("Objective Review Goal 5", document.getElementById("objectiveReview5").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 5");
	var goalAccommodation5 = document.getElementById("goalStrategy5");
	sessionStorage.setItem("Accommodations and Strategies Goal 5", goalAccommodation5.options[goalAccommodation5.selectedIndex].text);
	
	
	sessionStorage.removeItem("Long Term Goal 6");
	var goalOption6 = document.getElementById("goal6");
	sessionStorage.setItem("Long Term Goal 6", goalOption6.options[goalOption6.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 6");
	sessionStorage.setItem("Baseline Goal 6", document.getElementById("goalBaseline6").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 6");
	var goalObjective6 = document.getElementById("shortTermObjective6");
	sessionStorage.setItem("Short Term Objective Goal 6", goalObjective6.options[goalObjective6.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 6");
	sessionStorage.setItem("Objective Review Goal 6", document.getElementById("objectiveReview6").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 6");
	var goalAccommodation6 = document.getElementById("goalStrategy6");
	sessionStorage.setItem("Accommodations and Strategies Goal 6", goalAccommodation6.options[goalAccommodation6.selectedIndex].text);

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


	sessionStorage.removeItem("Long Term Goal 4");
	var goalOption4 = document.getElementById("goal4");
	sessionStorage.setItem("Long Term Goal 4", goalOption4.options[goalOption4.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 4");
	sessionStorage.setItem("Baseline Goal 4", document.getElementById("goalBaseline4").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 4");
	var goalObjective4 = document.getElementById("shortTermObjective4");
	sessionStorage.setItem("Short Term Objective Goal 4", goalObjective4.options[goalObjective4.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 4");
	sessionStorage.setItem("Objective Review Goal 4", document.getElementById("objectiveReview4").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 4");
	var goalAccommodation4 = document.getElementById("goalStrategy4");
	sessionStorage.setItem("Accommodations and Strategies Goal 4", goalAccommodation4.options[goalAccommodation4.selectedIndex].text);
	

	sessionStorage.removeItem("Long Term Goal 5");
	var goalOption5 = document.getElementById("goal5");
	sessionStorage.setItem("Long Term Goal 5", goalOption5.options[goalOption5.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 5");
	sessionStorage.setItem("Baseline Goal 5", document.getElementById("goalBaseline5").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 5");
	var goalObjective5 = document.getElementById("shortTermObjective5");
	sessionStorage.setItem("Short Term Objective Goal 5", goalObjective5.options[goalObjective5.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 5");
	sessionStorage.setItem("Objective Review Goal 5", document.getElementById("objectiveReview5").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 5");
	var goalAccommodation5 = document.getElementById("goalStrategy5");
	sessionStorage.setItem("Accommodations and Strategies Goal 5", goalAccommodation5.options[goalAccommodation5.selectedIndex].text);
	
	
	sessionStorage.removeItem("Long Term Goal 6");
	var goalOption6 = document.getElementById("goal6");
	sessionStorage.setItem("Long Term Goal 6", goalOption6.options[goalOption6.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 6");
	sessionStorage.setItem("Baseline Goal 6", document.getElementById("goalBaseline6").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 6");
	var goalObjective6 = document.getElementById("shortTermObjective6");
	sessionStorage.setItem("Short Term Objective Goal 6", goalObjective6.options[goalObjective6.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 6");
	sessionStorage.setItem("Objective Review Goal 6", document.getElementById("objectiveReview6").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 6");
	var goalAccommodation6 = document.getElementById("goalStrategy6");
	sessionStorage.setItem("Accommodations and Strategies Goal 6", goalAccommodation6.options[goalAccommodation6.selectedIndex].text);


	return location.href = "./Page_4.html";
}

function goals1(){
	document.getElementById("goals1").style.display = "block";
	document.getElementById("goals2").style.display = "none";
}

function goals2(){
	document.getElementById("goals2").style.display = "block";
	document.getElementById("goals1").style.display = "none";
}


