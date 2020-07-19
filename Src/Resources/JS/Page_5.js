function fillExisting(){
	
	//If Form Variables still Exist, fill the HTML Elements with the Stored Values
	if(sessionStorage.getItem("Long Term Goal 1") != null){document.getElementById("goal1").value = sessionStorage.getItem("Long Term Goal 1");}
	document.getElementById("goalBaseline1").value = sessionStorage.getItem("Baseline Goal 1");
	if(sessionStorage.getItem("Short Term Objective Goal 1.1") != null){document.getElementById("shortTermObjective1_1").value = sessionStorage.getItem("Short Term Objective Goal 1.1");}
	if(sessionStorage.getItem("Short Term Objective Goal 1.2") != null){document.getElementById("shortTermObjective1_2").value = sessionStorage.getItem("Short Term Objective Goal 1.2");}
	if(sessionStorage.getItem("Short Term Objective Goal 1.3") != null){document.getElementById("shortTermObjective1_3").value = sessionStorage.getItem("Short Term Objective Goal 1.3");}		
	document.getElementById("objectiveReview1").value = sessionStorage.getItem("Objective Review Goal 1");
	if(sessionStorage.getItem("Accommodations and Strategies Goal 1.1") != null){document.getElementById("goalStrategy1_1").value = sessionStorage.getItem("Accommodations and Strategies Goal 1.1");}
	if(sessionStorage.getItem("Accommodations and Strategies Goal 1.2") != null){document.getElementById("goalStrategy1_2").value = sessionStorage.getItem("Accommodations and Strategies Goal 1.2");}
	if(sessionStorage.getItem("Accommodations and Strategies Goal 1.3") != null){document.getElementById("goalStrategy1_3").value = sessionStorage.getItem("Accommodations and Strategies Goal 1.3");}
	
	if(sessionStorage.getItem("Long Term Goal 2") != null){document.getElementById("goal2").value = sessionStorage.getItem("Long Term Goal 2");}
	document.getElementById("goalBaseline2").value = sessionStorage.getItem("Baseline Goal 2");
	if(sessionStorage.getItem("Short Term Objective Goal 2.1") != null){document.getElementById("shortTermObjective2_1").value = sessionStorage.getItem("Short Term Objective Goal 2.1");}
	if(sessionStorage.getItem("Short Term Objective Goal 2.2") != null){document.getElementById("shortTermObjective2_2").value = sessionStorage.getItem("Short Term Objective Goal 2.2");}
	if(sessionStorage.getItem("Short Term Objective Goal 2.3") != null){document.getElementById("shortTermObjective2_3").value = sessionStorage.getItem("Short Term Objective Goal 2.3");}	
	document.getElementById("objectiveReview2").value = sessionStorage.getItem("Objective Review Goal 2");
	if(sessionStorage.getItem("Accommodations and Strategies Goal 2.1") != null){document.getElementById("goalStrategy2_1").value = sessionStorage.getItem("Accommodations and Strategies Goal 2.1");}
	if(sessionStorage.getItem("Accommodations and Strategies Goal 2.2") != null){document.getElementById("goalStrategy2_2").value = sessionStorage.getItem("Accommodations and Strategies Goal 2.2");}
	if(sessionStorage.getItem("Accommodations and Strategies Goal 2.3") != null){document.getElementById("goalStrategy2_3").value = sessionStorage.getItem("Accommodations and Strategies Goal 2.3");}
	
	if(sessionStorage.getItem("Long Term Goal 3") != null){document.getElementById("goal3").value = sessionStorage.getItem("Long Term Goal 3");}
	document.getElementById("goalBaseline3").value = sessionStorage.getItem("Baseline Goal 3");
	if(sessionStorage.getItem("Short Term Objective Goal 3.1") != null){document.getElementById("shortTermObjective3_1").value = sessionStorage.getItem("Short Term Objective Goal 3.1");}
	if(sessionStorage.getItem("Short Term Objective Goal 3.2") != null){document.getElementById("shortTermObjective3_2").value = sessionStorage.getItem("Short Term Objective Goal 3.2");}
	if(sessionStorage.getItem("Short Term Objective Goal 3.3") != null){document.getElementById("shortTermObjective3_3").value = sessionStorage.getItem("Short Term Objective Goal 3.3");}	
	document.getElementById("objectiveReview3").value = sessionStorage.getItem("Objective Review Goal 3");
	if(sessionStorage.getItem("Accommodations and Strategies Goal 3.1") != null){document.getElementById("goalStrategy3_1").value = sessionStorage.getItem("Accommodations and Strategies Goal 3.1");}
	if(sessionStorage.getItem("Accommodations and Strategies Goal 3.2") != null){document.getElementById("goalStrategy3_2").value = sessionStorage.getItem("Accommodations and Strategies Goal 3.2");}
	if(sessionStorage.getItem("Accommodations and Strategies Goal 3.3") != null){document.getElementById("goalStrategy3_3").value = sessionStorage.getItem("Accommodations and Strategies Goal 3.3");}
	
	if(sessionStorage.getItem("Long Term Goal 4") != null){document.getElementById("goal4").value = sessionStorage.getItem("Long Term Goal 4");}
	document.getElementById("goalBaseline4").value = sessionStorage.getItem("Baseline Goal 4");
	if(sessionStorage.getItem("Short Term Objective Goal 4.1") != null){document.getElementById("shortTermObjective4_1").value = sessionStorage.getItem("Short Term Objective Goal 4.1");}
	if(sessionStorage.getItem("Short Term Objective Goal 4.2") != null){document.getElementById("shortTermObjective4_2").value = sessionStorage.getItem("Short Term Objective Goal 4.2");}
	if(sessionStorage.getItem("Short Term Objective Goal 4.3") != null){document.getElementById("shortTermObjective4_3").value = sessionStorage.getItem("Short Term Objective Goal 4.3");}	
	document.getElementById("objectiveReview4").value = sessionStorage.getItem("Objective Review Goal 4");
	if(sessionStorage.getItem("Accommodations and Strategies Goal 4.1") != null){document.getElementById("goalStrategy4_1").value = sessionStorage.getItem("Accommodations and Strategies Goal 4.1");}
	if(sessionStorage.getItem("Accommodations and Strategies Goal 4.2") != null){document.getElementById("goalStrategy4_2").value = sessionStorage.getItem("Accommodations and Strategies Goal 4.2");}
	if(sessionStorage.getItem("Accommodations and Strategies Goal 4.3") != null){document.getElementById("goalStrategy4_3").value = sessionStorage.getItem("Accommodations and Strategies Goal 4.3");}
}

function next(){
	
	//Remove any existing items and add as new key
	sessionStorage.removeItem("Long Term Goal 1");
	var goalOption1 = document.getElementById("goal1");
	sessionStorage.setItem("Long Term Goal 1", goalOption1.options[goalOption1.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 1");
	sessionStorage.setItem("Baseline Goal 1", document.getElementById("goalBaseline1").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 1.1");
	var goalObjective1_1 = document.getElementById("shortTermObjective1_1");
	sessionStorage.setItem("Short Term Objective Goal 1.1", goalObjective1_1.options[goalObjective1_1.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 1.2");
	var goalObjective1_2 = document.getElementById("shortTermObjective1_2");
	sessionStorage.setItem("Short Term Objective Goal 1.2", goalObjective1_2.options[goalObjective1_2.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 1.3");
	var goalObjective1_3 = document.getElementById("shortTermObjective1_3");
	sessionStorage.setItem("Short Term Objective Goal 1.3", goalObjective1_3.options[goalObjective1_3.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 1");
	sessionStorage.setItem("Objective Review Goal 1", document.getElementById("objectiveReview1").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 1.1");
	var goalAccommodation1_1 = document.getElementById("goalStrategy1_1");
	sessionStorage.setItem("Accommodations and Strategies Goal 1.1", goalAccommodation1_1.options[goalAccommodation1_1.selectedIndex].text);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 1.2");
	var goalAccommodation1_2 = document.getElementById("goalStrategy1_2");
	sessionStorage.setItem("Accommodations and Strategies Goal 1.2", goalAccommodation1_2.options[goalAccommodation1_2.selectedIndex].text);

	sessionStorage.removeItem("Accommodations and Strategies Goal 1.3");
	var goalAccommodation1_3 = document.getElementById("goalStrategy1_3");
	sessionStorage.setItem("Accommodations and Strategies Goal 1.3", goalAccommodation1_3.options[goalAccommodation1_3.selectedIndex].text);


	sessionStorage.removeItem("Long Term Goal 2");
	var goalOption2 = document.getElementById("goal2");
	sessionStorage.setItem("Long Term Goal 2", goalOption2.options[goalOption2.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 2");
	sessionStorage.setItem("Baseline Goal 2", document.getElementById("goalBaseline2").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 2.1");
	var goalObjective2_1 = document.getElementById("shortTermObjective2_1");
	sessionStorage.setItem("Short Term Objective Goal 2.1", goalObjective2_1.options[goalObjective2_1.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 2.2");
	var goalObjective2_2 = document.getElementById("shortTermObjective2_2");
	sessionStorage.setItem("Short Term Objective Goal 2.2", goalObjective2_2.options[goalObjective2_2.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 2.3");
	var goalObjective2_3 = document.getElementById("shortTermObjective2_3");
	sessionStorage.setItem("Short Term Objective Goal 2.3", goalObjective2_3.options[goalObjective2_3.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 2");
	sessionStorage.setItem("Objective Review Goal 2", document.getElementById("objectiveReview2").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 2.1");
	var goalAccommodation2_1 = document.getElementById("goalStrategy2_1");
	sessionStorage.setItem("Accommodations and Strategies Goal 2.1", goalAccommodation2_1.options[goalAccommodation2_1.selectedIndex].text);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 2.2");
	var goalAccommodation2_2 = document.getElementById("goalStrategy2_2");
	sessionStorage.setItem("Accommodations and Strategies Goal 2.2", goalAccommodation2_2.options[goalAccommodation2_2.selectedIndex].text);

	sessionStorage.removeItem("Accommodations and Strategies Goal 2.3");
	var goalAccommodation2_3 = document.getElementById("goalStrategy2_3");
	sessionStorage.setItem("Accommodations and Strategies Goal 2.3", goalAccommodation2_3.options[goalAccommodation2_3.selectedIndex].text);
	
	
	sessionStorage.removeItem("Long Term Goal 3");
	var goalOption3 = document.getElementById("goal3");
	sessionStorage.setItem("Long Term Goal 3", goalOption3.options[goalOption3.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 3");
	sessionStorage.setItem("Baseline Goal 3", document.getElementById("goalBaseline3").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 3.1");
	var goalObjective3_1 = document.getElementById("shortTermObjective3_1");
	sessionStorage.setItem("Short Term Objective Goal 3.1", goalObjective3_1.options[goalObjective3_1.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 3.2");
	var goalObjective3_2 = document.getElementById("shortTermObjective3_2");
	sessionStorage.setItem("Short Term Objective Goal 3.2", goalObjective3_2.options[goalObjective3_2.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 3.3");
	var goalObjective3_3 = document.getElementById("shortTermObjective3_3");
	sessionStorage.setItem("Short Term Objective Goal 3.3", goalObjective3_3.options[goalObjective3_3.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 3");
	sessionStorage.setItem("Objective Review Goal 3", document.getElementById("objectiveReview3").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 3.1");
	var goalAccommodation3_1 = document.getElementById("goalStrategy3_1");
	sessionStorage.setItem("Accommodations and Strategies Goal 3.1", goalAccommodation3_1.options[goalAccommodation3_1.selectedIndex].text);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 3.2");
	var goalAccommodation3_2 = document.getElementById("goalStrategy3_2");
	sessionStorage.setItem("Accommodations and Strategies Goal 3.2", goalAccommodation3_2.options[goalAccommodation3_2.selectedIndex].text);

	sessionStorage.removeItem("Accommodations and Strategies Goal 3.3");
	var goalAccommodation3_3 = document.getElementById("goalStrategy3_3");
	sessionStorage.setItem("Accommodations and Strategies Goal 3.3", goalAccommodation3_3.options[goalAccommodation3_3.selectedIndex].text);
	
	sessionStorage.removeItem("Long Term Goal 4");
	var goalOption4 = document.getElementById("goal4");
	sessionStorage.setItem("Long Term Goal 4", goalOption4.options[goalOption4.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 4");
	sessionStorage.setItem("Baseline Goal 4", document.getElementById("goalBaseline4").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 4.1");
	var goalObjective4_1 = document.getElementById("shortTermObjective4_1");
	sessionStorage.setItem("Short Term Objective Goal 4.1", goalObjective4_1.options[goalObjective4_1.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 4.2");
	var goalObjective4_2 = document.getElementById("shortTermObjective4_2");
	sessionStorage.setItem("Short Term Objective Goal 4.2", goalObjective4_2.options[goalObjective4_2.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 4.3");
	var goalObjective4_3 = document.getElementById("shortTermObjective4_3");
	sessionStorage.setItem("Short Term Objective Goal 4.3", goalObjective4_3.options[goalObjective4_3.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 4");
	sessionStorage.setItem("Objective Review Goal 4", document.getElementById("objectiveReview4").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 4.1");
	var goalAccommodation4_1 = document.getElementById("goalStrategy4_1");
	sessionStorage.setItem("Accommodations and Strategies Goal 4.1", goalAccommodation4_1.options[goalAccommodation4_1.selectedIndex].text);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 4.2");
	var goalAccommodation4_2 = document.getElementById("goalStrategy4_2");
	sessionStorage.setItem("Accommodations and Strategies Goal 4.2", goalAccommodation4_2.options[goalAccommodation4_2.selectedIndex].text);

	sessionStorage.removeItem("Accommodations and Strategies Goal 4.3");
	var goalAccommodation4_3 = document.getElementById("goalStrategy4_3");
	sessionStorage.setItem("Accommodations and Strategies Goal 4.3", goalAccommodation4_3.options[goalAccommodation4_3.selectedIndex].text);
	

	return location.href = "./Page_6.html";
}

function previous(){
	
	//Remove any existing items and add as new key
	sessionStorage.removeItem("Long Term Goal 1");
	var goalOption1 = document.getElementById("goal1");
	sessionStorage.setItem("Long Term Goal 1", goalOption1.options[goalOption1.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 1");
	sessionStorage.setItem("Baseline Goal 1", document.getElementById("goalBaseline1").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 1.1");
	var goalObjective1_1 = document.getElementById("shortTermObjective1_1");
	sessionStorage.setItem("Short Term Objective Goal 1.1", goalObjective1_1.options[goalObjective1_1.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 1.2");
	var goalObjective1_2 = document.getElementById("shortTermObjective1_2");
	sessionStorage.setItem("Short Term Objective Goal 1.2", goalObjective1_2.options[goalObjective1_2.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 1.3");
	var goalObjective1_3 = document.getElementById("shortTermObjective1_3");
	sessionStorage.setItem("Short Term Objective Goal 1.3", goalObjective1_3.options[goalObjective1_3.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 1");
	sessionStorage.setItem("Objective Review Goal 1", document.getElementById("objectiveReview1").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 1.1");
	var goalAccommodation1_1 = document.getElementById("goalStrategy1_1");
	sessionStorage.setItem("Accommodations and Strategies Goal 1.1", goalAccommodation1_1.options[goalAccommodation1_1.selectedIndex].text);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 1.2");
	var goalAccommodation1_2 = document.getElementById("goalStrategy1_2");
	sessionStorage.setItem("Accommodations and Strategies Goal 1.2", goalAccommodation1_2.options[goalAccommodation1_2.selectedIndex].text);

	sessionStorage.removeItem("Accommodations and Strategies Goal 1.3");
	var goalAccommodation1_3 = document.getElementById("goalStrategy1_3");
	sessionStorage.setItem("Accommodations and Strategies Goal 1.3", goalAccommodation1_3.options[goalAccommodation1_3.selectedIndex].text);


	sessionStorage.removeItem("Long Term Goal 2");
	var goalOption2 = document.getElementById("goal2");
	sessionStorage.setItem("Long Term Goal 2", goalOption2.options[goalOption2.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 2");
	sessionStorage.setItem("Baseline Goal 2", document.getElementById("goalBaseline2").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 2.1");
	var goalObjective2_1 = document.getElementById("shortTermObjective2_1");
	sessionStorage.setItem("Short Term Objective Goal 2.1", goalObjective2_1.options[goalObjective2_1.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 2.2");
	var goalObjective2_2 = document.getElementById("shortTermObjective2_2");
	sessionStorage.setItem("Short Term Objective Goal 2.2", goalObjective2_2.options[goalObjective2_2.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 2.3");
	var goalObjective2_3 = document.getElementById("shortTermObjective2_3");
	sessionStorage.setItem("Short Term Objective Goal 2.3", goalObjective2_3.options[goalObjective2_3.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 2");
	sessionStorage.setItem("Objective Review Goal 2", document.getElementById("objectiveReview2").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 2.1");
	var goalAccommodation2_1 = document.getElementById("goalStrategy2_1");
	sessionStorage.setItem("Accommodations and Strategies Goal 2.1", goalAccommodation2_1.options[goalAccommodation2_1.selectedIndex].text);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 2.2");
	var goalAccommodation2_2 = document.getElementById("goalStrategy2_2");
	sessionStorage.setItem("Accommodations and Strategies Goal 2.2", goalAccommodation2_2.options[goalAccommodation2_2.selectedIndex].text);

	sessionStorage.removeItem("Accommodations and Strategies Goal 2.3");
	var goalAccommodation2_3 = document.getElementById("goalStrategy2_3");
	sessionStorage.setItem("Accommodations and Strategies Goal 2.3", goalAccommodation2_3.options[goalAccommodation2_3.selectedIndex].text);
	
	
	sessionStorage.removeItem("Long Term Goal 3");
	var goalOption3 = document.getElementById("goal3");
	sessionStorage.setItem("Long Term Goal 3", goalOption3.options[goalOption3.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 3");
	sessionStorage.setItem("Baseline Goal 3", document.getElementById("goalBaseline3").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 3.1");
	var goalObjective3_1 = document.getElementById("shortTermObjective3_1");
	sessionStorage.setItem("Short Term Objective Goal 3.1", goalObjective3_1.options[goalObjective3_1.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 3.2");
	var goalObjective3_2 = document.getElementById("shortTermObjective3_2");
	sessionStorage.setItem("Short Term Objective Goal 3.2", goalObjective3_2.options[goalObjective3_2.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 3.3");
	var goalObjective3_3 = document.getElementById("shortTermObjective3_3");
	sessionStorage.setItem("Short Term Objective Goal 3.3", goalObjective3_3.options[goalObjective3_3.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 3");
	sessionStorage.setItem("Objective Review Goal 3", document.getElementById("objectiveReview3").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 3.1");
	var goalAccommodation3_1 = document.getElementById("goalStrategy3_1");
	sessionStorage.setItem("Accommodations and Strategies Goal 3.1", goalAccommodation3_1.options[goalAccommodation3_1.selectedIndex].text);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 3.2");
	var goalAccommodation3_2 = document.getElementById("goalStrategy3_2");
	sessionStorage.setItem("Accommodations and Strategies Goal 3.2", goalAccommodation3_2.options[goalAccommodation3_2.selectedIndex].text);

	sessionStorage.removeItem("Accommodations and Strategies Goal 3.3");
	var goalAccommodation3_3 = document.getElementById("goalStrategy3_3");
	sessionStorage.setItem("Accommodations and Strategies Goal 3.3", goalAccommodation3_3.options[goalAccommodation3_3.selectedIndex].text);
	
	sessionStorage.removeItem("Long Term Goal 4");
	var goalOption4 = document.getElementById("goal4");
	sessionStorage.setItem("Long Term Goal 4", goalOption4.options[goalOption4.selectedIndex].text);
	
	sessionStorage.removeItem("Baseline Goal 4");
	sessionStorage.setItem("Baseline Goal 4", document.getElementById("goalBaseline4").value);
	
	sessionStorage.removeItem("Short Term Objective Goal 4.1");
	var goalObjective4_1 = document.getElementById("shortTermObjective4_1");
	sessionStorage.setItem("Short Term Objective Goal 4.1", goalObjective4_1.options[goalObjective4_1.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 4.2");
	var goalObjective4_2 = document.getElementById("shortTermObjective4_2");
	sessionStorage.setItem("Short Term Objective Goal 4.2", goalObjective4_2.options[goalObjective4_2.selectedIndex].text);
	
	sessionStorage.removeItem("Short Term Objective Goal 4.3");
	var goalObjective4_3 = document.getElementById("shortTermObjective4_3");
	sessionStorage.setItem("Short Term Objective Goal 4.3", goalObjective4_3.options[goalObjective4_3.selectedIndex].text);
	
	sessionStorage.removeItem("Objective Review Goal 4");
	sessionStorage.setItem("Objective Review Goal 4", document.getElementById("objectiveReview4").value);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 4.1");
	var goalAccommodation4_1 = document.getElementById("goalStrategy4_1");
	sessionStorage.setItem("Accommodations and Strategies Goal 4.1", goalAccommodation4_1.options[goalAccommodation4_1.selectedIndex].text);
	
	sessionStorage.removeItem("Accommodations and Strategies Goal 4.2");
	var goalAccommodation4_2 = document.getElementById("goalStrategy4_2");
	sessionStorage.setItem("Accommodations and Strategies Goal 4.2", goalAccommodation4_2.options[goalAccommodation4_2.selectedIndex].text);

	sessionStorage.removeItem("Accommodations and Strategies Goal 4.3");
	var goalAccommodation4_3 = document.getElementById("goalStrategy4_3");
	sessionStorage.setItem("Accommodations and Strategies Goal 4.3", goalAccommodation4_3.options[goalAccommodation4_3.selectedIndex].text);
	

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


function shortTermObjective1_1(){
	document.getElementById("shortTermObjective1_1").style.display = "block";
	document.getElementById("shortTermObjective1_2").style.display = "none";
	document.getElementById("shortTermObjective1_3").style.display = "none";
}

function shortTermObjective1_2(){
	document.getElementById("shortTermObjective1_2").style.display = "block";
	document.getElementById("shortTermObjective1_1").style.display = "none";
	document.getElementById("shortTermObjective1_3").style.display = "none";
}

function shortTermObjective1_3(){
	document.getElementById("shortTermObjective1_3").style.display = "block";
	document.getElementById("shortTermObjective1_2").style.display = "none";
	document.getElementById("shortTermObjective1_1").style.display = "none";
}

function shortTermAccomodation1_1(){
	document.getElementById("goalStrategy1_1").style.display = "block";
	document.getElementById("goalStrategy1_2").style.display = "none";
	document.getElementById("goalStrategy1_3").style.display = "none";
}

function shortTermAccomodation1_2(){
	document.getElementById("goalStrategy1_2").style.display = "block";
	document.getElementById("goalStrategy1_1").style.display = "none";
	document.getElementById("goalStrategy1_3").style.display = "none";
}


function shortTermAccomodation1_3(){
	document.getElementById("goalStrategy1_3").style.display = "block";
	document.getElementById("goalStrategy1_2").style.display = "none";
	document.getElementById("goalStrategy1_1").style.display = "none";
}


function shortTermObjective2_1(){
	document.getElementById("shortTermObjective2_1").style.display = "block";
	document.getElementById("shortTermObjective2_2").style.display = "none";
	document.getElementById("shortTermObjective2_3").style.display = "none";
}

function shortTermObjective2_2(){
	document.getElementById("shortTermObjective2_2").style.display = "block";
	document.getElementById("shortTermObjective2_1").style.display = "none";
	document.getElementById("shortTermObjective2_3").style.display = "none";
}

function shortTermObjective2_3(){
	document.getElementById("shortTermObjective2_3").style.display = "block";
	document.getElementById("shortTermObjective2_2").style.display = "none";
	document.getElementById("shortTermObjective2_1").style.display = "none";
}

function shortTermAccomodation2_1(){
	document.getElementById("goalStrategy2_1").style.display = "block";
	document.getElementById("goalStrategy2_2").style.display = "none";
	document.getElementById("goalStrategy2_3").style.display = "none";
}

function shortTermAccomodation2_2(){
	document.getElementById("goalStrategy2_2").style.display = "block";
	document.getElementById("goalStrategy2_1").style.display = "none";
	document.getElementById("goalStrategy2_3").style.display = "none";
}


function shortTermAccomodation2_3(){
	document.getElementById("goalStrategy2_3").style.display = "block";
	document.getElementById("goalStrategy2_2").style.display = "none";
	document.getElementById("goalStrategy2_1").style.display = "none";
}


function shortTermObjective3_1(){
	document.getElementById("shortTermObjective3_1").style.display = "block";
	document.getElementById("shortTermObjective3_2").style.display = "none";
	document.getElementById("shortTermObjective3_3").style.display = "none";
}

function shortTermObjective3_2(){
	document.getElementById("shortTermObjective3_2").style.display = "block";
	document.getElementById("shortTermObjective3_1").style.display = "none";
	document.getElementById("shortTermObjective3_3").style.display = "none";
}

function shortTermObjective3_3(){
	document.getElementById("shortTermObjective3_3").style.display = "block";
	document.getElementById("shortTermObjective3_2").style.display = "none";
	document.getElementById("shortTermObjective3_1").style.display = "none";
}

function shortTermAccomodation3_1(){
	document.getElementById("goalStrategy3_1").style.display = "block";
	document.getElementById("goalStrategy3_2").style.display = "none";
	document.getElementById("goalStrategy3_3").style.display = "none";
}

function shortTermAccomodation3_2(){
	document.getElementById("goalStrategy3_2").style.display = "block";
	document.getElementById("goalStrategy3_1").style.display = "none";
	document.getElementById("goalStrategy3_3").style.display = "none";
}


function shortTermAccomodation3_3(){
	document.getElementById("goalStrategy3_3").style.display = "block";
	document.getElementById("goalStrategy3_2").style.display = "none";
	document.getElementById("goalStrategy3_1").style.display = "none";
}


function shortTermObjective4_1(){
	document.getElementById("shortTermObjective4_1").style.display = "block";
	document.getElementById("shortTermObjective4_2").style.display = "none";
	document.getElementById("shortTermObjective4_3").style.display = "none";
}

function shortTermObjective4_2(){
	document.getElementById("shortTermObjective4_2").style.display = "block";
	document.getElementById("shortTermObjective4_1").style.display = "none";
	document.getElementById("shortTermObjective4_3").style.display = "none";
}

function shortTermObjective4_3(){
	document.getElementById("shortTermObjective4_3").style.display = "block";
	document.getElementById("shortTermObjective4_2").style.display = "none";
	document.getElementById("shortTermObjective4_1").style.display = "none";
}

function shortTermAccomodation4_1(){
	document.getElementById("goalStrategy4_1").style.display = "block";
	document.getElementById("goalStrategy4_2").style.display = "none";
	document.getElementById("goalStrategy4_3").style.display = "none";
}

function shortTermAccomodation4_2(){
	document.getElementById("goalStrategy4_2").style.display = "block";
	document.getElementById("goalStrategy4_1").style.display = "none";
	document.getElementById("goalStrategy4_3").style.display = "none";
}

function shortTermAccomodation4_3(){
	document.getElementById("goalStrategy4_3").style.display = "block";
	document.getElementById("goalStrategy4_2").style.display = "none";
	document.getElementById("goalStrategy4_1").style.display = "none";
}
