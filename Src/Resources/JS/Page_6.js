
//Global Variable for Number of Goals used
var num_goals;

function createForm(){
	
	//Handle PDF Form Data
	var templatePDF = this.response;
	var fields = pdfform().list_fields(templatePDF);
	
	//Debugging Output
	//console.log(fields);
	
	//Create Buffer With Form Variables
	//Page 1 --------------------------
	fields['Child Name'] = [sessionStorage.getItem("Child First Name") + " " + sessionStorage.getItem("Child Middle Name") + " " + sessionStorage.getItem("Child Last Name")]; 
	fields['Child DOB'] = [sessionStorage.getItem("Child Date of Birth")];
	fields['Child September Age'] = [sessionStorage.getItem("Child Date on September")];
	fields['Year of ECS'] = [sessionStorage.getItem("ECS Year")];
	fields['Eligibility Code'] = [sessionStorage.getItem("Elegibility Code")];
	fields['Fathers Name'] = [sessionStorage.getItem("Father Name")];
	fields['Fathers Home Address'] = [sessionStorage.getItem("Father Address")];
	fields['Fathers Home Phone'] = [sessionStorage.getItem("Father Home Number")];
	fields['Fathers Work Phone'] = [sessionStorage.getItem("Father Work Number")];
	fields['Fathers Cell Phone'] = [sessionStorage.getItem("Father Cell Number")];
	fields['Fathers Email'] = [sessionStorage.getItem("Father Email")];
	fields['Mothers Name'] = [sessionStorage.getItem("Mother Name")];
	fields['Mothers Home Address'] = [sessionStorage.getItem("Mother Address")];
	fields['Mothers Home Phone'] = [sessionStorage.getItem("Mother Home Number")];
	fields['Mothers Work Phone'] = [sessionStorage.getItem("Mother Work Number")];
	fields['Mothers Cell Phone'] = [sessionStorage.getItem("Mother Cell Number")];
	fields['Mothers Email'] = [sessionStorage.getItem("Mother Email")];
	
	//Page 2 --------------------------
	fields['Preschool Name'] = [sessionStorage.getItem("Preschool Name")];
	
	//Fill Radio Button Set 1 (true = checked, false = unchecked)
	fields['Preschool Start']  = [sessionStorage.getItem("Preschool Start Time")];
	fields['Preschool End']  = [sessionStorage.getItem("Preschool End Time")];
	
	if(sessionStorage.getItem("PAMonday") == 'false'){
		fields['Preschool Monday'] = [false];
	}else{
		fields['Preschool Monday'] = [true];
	}
	if(sessionStorage.getItem("PATuesday") == 'false'){
		fields['Preschool Tuesday'] = [false];
	}else{
		fields['Preschool Tuesday'] = [true];
	}
	if(sessionStorage.getItem("PAWednesday") == 'false'){
		fields['Preschool Wednesday'] = [false];
	}else{
		fields['Preschool Wednesday'] = [true];
	}	
	if(sessionStorage.getItem("PAThursday") == 'false'){
		fields['Preschool Thursday'] = [false];
	}else{
		fields['Preschool Thursday'] = [true];
	}	
	if(sessionStorage.getItem("PAFriday") == 'false'){
		fields['Preschool Friday'] = [false];
	}else{
		fields['Preschool Friday'] = [true];
	}	
	
	//Fill Radio Button Set 2 (true = checked, false = unchecked)
	fields['Kids Playtime Start']  = [sessionStorage.getItem("KiDS Start Time")];
	fields['Kids Playtime End']  = [sessionStorage.getItem("KiDS End Time")];
	
	if(sessionStorage.getItem("KAMonday") == 'false'){
		fields['Kids Playtime Monday'] = [false];
	}else{
		fields['Kids Playtime Monday'] = [true];
	}
	if(sessionStorage.getItem("KATuesday") == 'false'){
		fields['Kids Playtime Tuesday'] = [false];
	}else{
		fields['Kids Playtime Tuesday'] = [true];
	}
	if(sessionStorage.getItem("KAWednesday") == 'false'){
		fields['Kids Playtime Wednesday'] = [false];
	}else{
		fields['Kids Playtime Wednesday'] = [true];
	}	
	if(sessionStorage.getItem("KAThursday") == 'false'){
		fields['Kids Playtime Thursday'] = [false];
	}else{
		fields['Kids Playtime Thursday'] = [true];
	}	
	if(sessionStorage.getItem("KAFriday") == 'false'){
		fields['Kids Playtime Friday'] = [false];
	}else{
		fields['Kids Playtime Friday'] = [true];
	}	

	//Fill Radio Button Set 3 (true = checked, false = unchecked)
	fields['Home Programming Start']  = [sessionStorage.getItem("Home Programming Start Time")];
	fields['Home Programming End']  = [sessionStorage.getItem("Home Programming End Time")];
	
	if(sessionStorage.getItem("HAMonday") == 'false'){
		fields['Home Programming Monday'] = [false];
	}else{
		fields['Home Programming Monday'] = [true];
	}
	if(sessionStorage.getItem("HATuesday") == 'false'){
		fields['Home Programming Tuesday'] = [false];
	}else{
		fields['Home Programming Tuesday'] = [true];
	}
	if(sessionStorage.getItem("HAWednesday") == 'false'){
		fields['Home Programming Wednesday'] = [false];
	}else{
		fields['Home Programming Wednesday'] = [true];
	}	
	if(sessionStorage.getItem("HAThursday") == 'false'){
		fields['Home Programming Thursday'] = [false];
	}else{
		fields['Home Programming Thursday'] = [true];
	}	
	if(sessionStorage.getItem("HAFriday") == 'false'){
		fields['Home Programming Friday'] = [false];
	}else{
		fields['Home Programming Friday'] = [true];
	}	

	fields['Preschool Teacher Name'] = [sessionStorage.getItem("Preschool Teacher")];
	fields['Certificated Teacher Name'] = [sessionStorage.getItem("Certificated Teacher")];
	fields['Developmental Assistant Name'] = [sessionStorage.getItem("Developmental Assistant")];
	fields['Speech-Language Pathologist Name'] = [sessionStorage.getItem("Speech Pathologist")];
	fields['Occupational Therapist Name'] = [sessionStorage.getItem("Occupational Therapist")];
	fields['Physiotherapist Name'] = [sessionStorage.getItem("Physiotherapist")];
	fields['Psychologist Name'] = [sessionStorage.getItem("Psychologist")];
	fields['Child Development Specialist Name'] = [sessionStorage.getItem("Behavioural Specialist")];
	
	//Page 3 --------------------------
	fields['Previous Preschool 1'] = [sessionStorage.getItem("Preschool Name 1")];
	fields['Previous Preschool 1 Start'] = [sessionStorage.getItem("Preschool Start Date 1")];
	fields['Previous Preschool 1 End'] = [sessionStorage.getItem("Preschool End Date 1")];
	
	fields['Previous Preschool 2'] = [sessionStorage.getItem("Preschool Name 2")];
	fields['Previous Preschool 2 Start'] = [sessionStorage.getItem("Preschool Start Date 2")];
	fields['Previous Preschool 2 End'] = [sessionStorage.getItem("Preschool End Date 2")];
	
	fields['Previous Preschool 3'] = [sessionStorage.getItem("Preschool Name 3")];
	fields['Previous Preschool 3 Start'] = [sessionStorage.getItem("Preschool Start Date 3")];
	fields['Previous Preschool 3 End'] = [sessionStorage.getItem("Preschool End Date 3")];
	
	fields['Family Information'] = [sessionStorage.getItem("Family Information")];
	fields['Family Doctor Name'] = [sessionStorage.getItem("Family Doctor")];
	fields['Family Doctor Last Visit'] = [sessionStorage.getItem("Last Family Doctor Visit")];
	
	fields['Pediatrician Name'] = [sessionStorage.getItem("Pediatrician")];
	fields['Pediatrician Last Visit'] = [sessionStorage.getItem("Last Pediatrician Visit")];
	
	fields['Hearing Screen Name'] = [sessionStorage.getItem("Hearing Screen")];
	fields['Hearing Screen Last Visit'] = [sessionStorage.getItem("Last Hearing Screen Visit")];
	
	fields['Vision Screen Name'] = [sessionStorage.getItem("Vision Screen")];
	fields['Vision Screen Last Visit'] = [sessionStorage.getItem("Last Vision Screen Visit")];
	
	fields['Allergies'] = [sessionStorage.getItem("Allergies")];
	fields['Medication'] = [sessionStorage.getItem("Medications")];
	fields['Other Information'] = [sessionStorage.getItem("Other Medical Information")];
	
	fields['Childs Strengths'] = [sessionStorage.getItem("Child's Strengths")];
	fields['Childs Areas of Growth'] = [sessionStorage.getItem("Child's Areas of Growth")];
	fields['Parent Priorities'] = [sessionStorage.getItem("Parent Priorities")];
	
	//Page 4 --------------------------
	fields['Initial SLP Therapist'] = [sessionStorage.getItem("Initial CELF Test Therapist")];	
	fields['Initial SLP Date'] = [sessionStorage.getItem("Initial CELF Test Date")];	
	fields['Initial SLP Result'] = [sessionStorage.getItem("Initial CELF Test Result")];	
	
	fields['Final SLP Therapist'] = [sessionStorage.getItem("Final CELF Test Therapist")];	
	fields['Final SLP Date'] = [sessionStorage.getItem("Final CELF Test Date")];	
	fields['Final SLP Result'] = [sessionStorage.getItem("Final CELF Test Result")];	

	fields['Final PLS Therapist'] = [sessionStorage.getItem("Final PLS Test Therapist")];	
	fields['Final PLS Date'] = [sessionStorage.getItem("Final PLS Test Date")];	
	fields['Final PLS Result'] = [sessionStorage.getItem("Final PLS Test Result")];	
	
	fields['Final GFTA Therapist'] = [sessionStorage.getItem("Final GFTA Test Therapist")];	
	fields['Final GFTA Date'] = [sessionStorage.getItem("Final GFTA Test Date")];	
	fields['Final GFTA Result'] = [sessionStorage.getItem("Final GFTA Test Result")];
	
	fields['Initial PDMS Therapist'] = [sessionStorage.getItem("Initial PDMS Test Therapist")];	
	fields['Initial PDMS Date'] = [sessionStorage.getItem("Initial PDMS Test Date")];	
	fields['Initial PDMS Result'] = [sessionStorage.getItem("Initial PDMS Test Result")];

	fields['Final PDMS Therapist'] = [sessionStorage.getItem("Final PDMS Test Therapist")];	
	fields['Final PDMS Date'] = [sessionStorage.getItem("Final PDMS Test Date")];	
	fields['Final PDMS Result'] = [sessionStorage.getItem("Final PDMS Test Result")];

	fields['Final MFUN Therapist'] = [sessionStorage.getItem("Final MFUN Test Therapist")];	
	fields['Final MFUN Date'] = [sessionStorage.getItem("Final MFUN Test Date")];	
	fields['Final MFUN Result'] = [sessionStorage.getItem("Final MFUN Test Result")];
	
	fields['Final SP2 Therapist'] = [sessionStorage.getItem("Final SP2 Test Therapist")];	
	fields['Final SP2 Date'] = [sessionStorage.getItem("Final SP2 Test Date")];	
	fields['Final SP2 Result'] = [sessionStorage.getItem("Final SP2 Test Result")];
	
	fields['Initial Assessment Review Date'] = [sessionStorage.getItem("Initial Review Date")];	
	fields['First Assessment Review Date'] = [sessionStorage.getItem("First Review Date")];	
	fields['Final Assessment Review Date'] = [sessionStorage.getItem("Final Review Date")];
	
	//Check Goal 1
	if(num_goals == 1){
		fields['Long Term Goal 4'] = [sessionStorage.getItem("Long Term Goal 1")];
		fields['Baseline Goal 4'] = [sessionStorage.getItem("Baseline Goal 1")];
		fields['Goal 4 Short Term 1'] = [sessionStorage.getItem("Short Term Objective Goal 1.1")];
		fields['Goal 4 Short Term 2'] = [sessionStorage.getItem("Short Term Objective Goal 1.2")];
		fields['Goal 4 Short Term 3'] = [sessionStorage.getItem("Short Term Objective Goal 1.3")];
		fields['Goal 4 Review'] = [sessionStorage.getItem("Objective Review Goal 1")];
		fields['Goal 4 Accommodation 1'] = [sessionStorage.getItem("Accommodations and Strategies Goal 1.1")];
		fields['Goal 4 Accommodation 2'] = [sessionStorage.getItem("Accommodations and Strategies Goal 1.2")];
		fields['Goal 4 Accommodation 3'] = [sessionStorage.getItem("Accommodations and Strategies Goal 1.3")];
	}
	
	//Check Goal 2
	if(num_goals == 2){
		fields['Long Term Goal 3'] = [sessionStorage.getItem("Long Term Goal 1")];
		fields['Baseline Goal 3'] = [sessionStorage.getItem("Baseline Goal 1")];
		fields['Goal 3 Short Term 1'] = [sessionStorage.getItem("Short Term Objective Goal 1.1")];
		fields['Goal 3 Short Term 2'] = [sessionStorage.getItem("Short Term Objective Goal 1.2")];
		fields['Goal 3 Short Term 3'] = [sessionStorage.getItem("Short Term Objective Goal 1.3")];
		fields['Goal 3 Review'] = [sessionStorage.getItem("Objective Review Goal 1")];
		fields['Goal 3 Accommodation 1'] = [sessionStorage.getItem("Accommodations and Strategies Goal 1.1")];
		fields['Goal 3 Accommodation 2'] = [sessionStorage.getItem("Accommodations and Strategies Goal 1.2")];
		fields['Goal 3 Accommodation 3'] = [sessionStorage.getItem("Accommodations and Strategies Goal 1.3")];
		
		fields['Long Term Goal 4'] = [sessionStorage.getItem("Long Term Goal 2")];
		fields['Baseline Goal 4'] = [sessionStorage.getItem("Baseline Goal 2")];
		fields['Goal 4 Short Term 1'] = [sessionStorage.getItem("Short Term Objective Goal 2.1")];
		fields['Goal 4 Short Term 2'] = [sessionStorage.getItem("Short Term Objective Goal 2.2")];
		fields['Goal 4 Short Term 3'] = [sessionStorage.getItem("Short Term Objective Goal 2.3")];
		fields['Goal 4 Review'] = [sessionStorage.getItem("Objective Review Goal 2")];
		fields['Goal 4 Accommodation 1'] = [sessionStorage.getItem("Accommodations and Strategies Goal 2.1")];
		fields['Goal 4 Accommodation 2'] = [sessionStorage.getItem("Accommodations and Strategies Goal 2.2")];
		fields['Goal 4 Accommodation 3'] = [sessionStorage.getItem("Accommodations and Strategies Goal 2.3")];
	}
	
	//Check Goal 3
	if(num_goals == 3){
		fields['Long Term Goal 2'] = [sessionStorage.getItem("Long Term Goal 1")];
		fields['Baseline Goal 2'] = [sessionStorage.getItem("Baseline Goal 1")];
		fields['Goal 2 Short Term 1'] = [sessionStorage.getItem("Short Term Objective Goal 1.1")];
		fields['Goal 2 Short Term 2'] = [sessionStorage.getItem("Short Term Objective Goal 1.2")];
		fields['Goal 2 Short Term 3'] = [sessionStorage.getItem("Short Term Objective Goal 1.3")];
		fields['Goal 2 Review'] = [sessionStorage.getItem("Objective Review Goal 1")];
		fields['Goal 2 Accommodation 1'] = [sessionStorage.getItem("Accommodations and Strategies Goal 1.1")];
		fields['Goal 2 Accommodation 2'] = [sessionStorage.getItem("Accommodations and Strategies Goal 1.2")];
		fields['Goal 2 Accommodation 3'] = [sessionStorage.getItem("Accommodations and Strategies Goal 1.3")];
		
		fields['Long Term Goal 3'] = [sessionStorage.getItem("Long Term Goal 2")];
		fields['Baseline Goal 3'] = [sessionStorage.getItem("Baseline Goal 2")];
		fields['Goal 3 Short Term 1'] = [sessionStorage.getItem("Short Term Objective Goal 2.1")];
		fields['Goal 3 Short Term 2'] = [sessionStorage.getItem("Short Term Objective Goal 2.2")];
		fields['Goal 3 Short Term 3'] = [sessionStorage.getItem("Short Term Objective Goal 2.3")];
		fields['Goal 3 Review'] = [sessionStorage.getItem("Objective Review Goal 2")];
		fields['Goal 3 Accommodation 1'] = [sessionStorage.getItem("Accommodations and Strategies Goal 2.1")];
		fields['Goal 3 Accommodation 2'] = [sessionStorage.getItem("Accommodations and Strategies Goal 2.2")];
		fields['Goal 3 Accommodation 3'] = [sessionStorage.getItem("Accommodations and Strategies Goal 2.3")];
		
		fields['Long Term Goal 4'] = [sessionStorage.getItem("Long Term Goal 3")];
		fields['Baseline Goal 4'] = [sessionStorage.getItem("Baseline Goal 3")];
		fields['Goal 4 Short Term 1'] = [sessionStorage.getItem("Short Term Objective Goal 3.1")];
		fields['Goal 4 Short Term 2'] = [sessionStorage.getItem("Short Term Objective Goal 3.2")];
		fields['Goal 4 Short Term 3'] = [sessionStorage.getItem("Short Term Objective Goal 3.3")];
		fields['Goal 4 Review'] = [sessionStorage.getItem("Objective Review Goal 3")];
		fields['Goal 4 Accommodation 1'] = [sessionStorage.getItem("Accommodations and Strategies Goal 3.1")];
		fields['Goal 4 Accommodation 2'] = [sessionStorage.getItem("Accommodations and Strategies Goal 3.2")];
		fields['Goal 4 Accommodation 3'] = [sessionStorage.getItem("Accommodations and Strategies Goal 3.3")];
	}
	
	//Check Goal 4
	if(num_goals == 4){
		fields['Long Term Goal 1'] = [sessionStorage.getItem("Long Term Goal 1")];
		fields['Baseline Goal 1'] = [sessionStorage.getItem("Baseline Goal 1")];
		fields['Goal 1 Short Term 1'] = [sessionStorage.getItem("Short Term Objective Goal 1.1")];
		fields['Goal 1 Short Term 2'] = [sessionStorage.getItem("Short Term Objective Goal 1.2")];
		fields['Goal 1 Short Term 3'] = [sessionStorage.getItem("Short Term Objective Goal 1.3")];
		fields['Goal 1 Review'] = [sessionStorage.getItem("Objective Review Goal 1")];
		fields['Goal 1 Accommodation 1'] = [sessionStorage.getItem("Accommodations and Strategies Goal 1.1")];
		fields['Goal 1 Accommodation 2'] = [sessionStorage.getItem("Accommodations and Strategies Goal 1.2")];
		fields['Goal 1 Accommodation 3'] = [sessionStorage.getItem("Accommodations and Strategies Goal 1.3")];
		
		fields['Long Term Goal 2'] = [sessionStorage.getItem("Long Term Goal 2")];
		fields['Baseline Goal 2'] = [sessionStorage.getItem("Baseline Goal 2")];
		fields['Goal 2 Short Term 1'] = [sessionStorage.getItem("Short Term Objective Goal 2.1")];
		fields['Goal 2 Short Term 2'] = [sessionStorage.getItem("Short Term Objective Goal 2.2")];
		fields['Goal 2 Short Term 3'] = [sessionStorage.getItem("Short Term Objective Goal 2.3")];
		fields['Goal 2 Review'] = [sessionStorage.getItem("Objective Review Goal 2")];
		fields['Goal 2 Accommodation 1'] = [sessionStorage.getItem("Accommodations and Strategies Goal 2.1")];
		fields['Goal 2 Accommodation 2'] = [sessionStorage.getItem("Accommodations and Strategies Goal 2.2")];
		fields['Goal 2 Accommodation 3'] = [sessionStorage.getItem("Accommodations and Strategies Goal 2.3")];
		
		fields['Long Term Goal 3'] = [sessionStorage.getItem("Long Term Goal 3")];
		fields['Baseline Goal 3'] = [sessionStorage.getItem("Baseline Goal 3")];
		fields['Goal 3 Short Term 1'] = [sessionStorage.getItem("Short Term Objective Goal 3.1")];
		fields['Goal 3 Short Term 2'] = [sessionStorage.getItem("Short Term Objective Goal 3.2")];
		fields['Goal 3 Short Term 3'] = [sessionStorage.getItem("Short Term Objective Goal 3.3")];
		fields['Goal 3 Review'] = [sessionStorage.getItem("Objective Review Goal 3")];
		fields['Goal 3 Accommodation 1'] = [sessionStorage.getItem("Accommodations and Strategies Goal 3.1")];
		fields['Goal 3 Accommodation 2'] = [sessionStorage.getItem("Accommodations and Strategies Goal 3.2")];
		fields['Goal 3 Accommodation 3'] = [sessionStorage.getItem("Accommodations and Strategies Goal 3.3")];		

		fields['Long Term Goal 4'] = [sessionStorage.getItem("Long Term Goal 4")];
		fields['Baseline Goal 4'] = [sessionStorage.getItem("Baseline Goal 4")];
		fields['Goal 4 Short Term 1'] = [sessionStorage.getItem("Short Term Objective Goal 4.1")];
		fields['Goal 4 Short Term 2'] = [sessionStorage.getItem("Short Term Objective Goal 4.2")];
		fields['Goal 4 Short Term 3'] = [sessionStorage.getItem("Short Term Objective Goal 4.3")];
		fields['Goal 4 Review'] = [sessionStorage.getItem("Objective Review Goal 4")];
		fields['Goal 4 Accommodation 1'] = [sessionStorage.getItem("Accommodations and Strategies Goal 4.1")];
		fields['Goal 4 Accommodation 2'] = [sessionStorage.getItem("Accommodations and Strategies Goal 4.2")];
		fields['Goal 4 Accommodation 3'] = [sessionStorage.getItem("Accommodations and Strategies Goal 4.3")];		
	}
	
	fields['Early Learning Accommodations'] = [sessionStorage.getItem("Early Learning Accommodations")];
	
	//Page 6 --------------------------
	fields['Transition Planning Date'] = [sessionStorage.getItem("Transition Program Date")];
	fields['Transition Planning Program'] = [sessionStorage.getItem("Transition Program")];
	
	fields['Private ECS Operator Date'] = [sessionStorage.getItem("Receiving Private ECS Operator Final Date")];
	fields['Kindergarten Consultant Date'] = [sessionStorage.getItem("Kindergarten Consultant/Strategist Final Date")];
	fields['Kindergarten Representative Date'] = [sessionStorage.getItem("Kindergarten Representative Final Date")];
	
	//Fill PDF Footers
	fields['Footer 2'] = [sessionStorage.getItem("Child Last Name") + ", " + sessionStorage.getItem("Child First Name")];
	fields['Footer 3'] = [sessionStorage.getItem("Child Last Name") + ", " + sessionStorage.getItem("Child First Name")];
	fields['Footer 4'] = [sessionStorage.getItem("Child Last Name") + ", " + sessionStorage.getItem("Child First Name")];
	fields['Footer 5'] = [sessionStorage.getItem("Child Last Name") + ", " + sessionStorage.getItem("Child First Name")];
	fields['Footer 6'] = [sessionStorage.getItem("Child Last Name") + ", " + sessionStorage.getItem("Child First Name")];
	fields['Footer 7'] = [sessionStorage.getItem("Child Last Name") + ", " + sessionStorage.getItem("Child First Name")];
	fields['Footer 8'] = [sessionStorage.getItem("Child Last Name") + ", " + sessionStorage.getItem("Child First Name")];
	fields['Footer 9'] = [sessionStorage.getItem("Child Last Name") + ", " + sessionStorage.getItem("Child First Name")];
	fields['Footer 10'] = [sessionStorage.getItem("Child Last Name") + ", " + sessionStorage.getItem("Child First Name")];
	fields['Footer 11'] = [sessionStorage.getItem("Child Last Name") + ", " + sessionStorage.getItem("Child First Name")];
	
	//Fill Goal Dates
	fields['Goal 1 End Date'] = ['2021'];
	fields['Goal 2 End Date'] = ['2021'];
	fields['Goal 3 End Date'] = ['2021'];
	fields['Goal 4 End Date'] = ['2021'];
	fields['PUF Header Year'] = ["2020 - 2021"];
	fields['Next September Year'] = ["September 1, 2020"];
	
	//Create Output PDF	
	var finalBuffer = pdfform().transform(templatePDF, fields);
	var finalPDF = new Blob([finalBuffer], {type: 'application/pdf'});
	
	//Generate File Names
	var date = new Date();
	var file_name = [sessionStorage.getItem("Child First Name") + "_" + sessionStorage.getItem("Child Middle Name") + "_" + sessionStorage.getItem("Child Last Name") + "_" + date.getDate() + "_" + date.getMonth() + "_" + date.getFullYear() + "_" + date.getHours() + 
					"_" + date.getMinutes() + ".pdf"];
	
	saveAs(finalPDF, file_name); 
}



function submitForm(){
	
	//Create PDF Request
	var pdfhttp = new XMLHttpRequest();
	pdfhttp.addEventListener("load", createForm);
	
	//Check for Number of Goals
	var formURL = "https://mdatz.github.io/Src/Resources/Forms/Template_4_Goals.pdf";
	
	if(num_goals == 3){
		formURL = "https://mdatz.github.io/Src/Resources/Forms/Template_3_Goals.pdf";
	}
	if(num_goals == 2){
		formURL = "https://mdatz.github.io/Src/Resources/Forms/Template_2_Goals.pdf";
	}
	if(num_goals == 1){
		formURL = "https://mdatz.github.io/Src/Resources/Forms/Template_1_Goals.pdf";
	}
	
	//Send Request for Hosted PDF Template
	pdfhttp.open("GET", formURL, true);
	pdfhttp.responseType = "arraybuffer";
	pdfhttp.send();

}

function fillExisting(){
		
	//Check for Number of Goals
	num_goals = 4;
	
	if(sessionStorage.getItem("Long Term Goal 4") == ["None"]){
		num_goals = 3;
	}
	if(sessionStorage.getItem("Long Term Goal 3") == ["None"]){
		num_goals = 2;
	}
	if(sessionStorage.getItem("Long Term Goal 2") == ["None"]){
		num_goals = 1;
	}
	
	//If Form Variables still Exist, fill the HTML Elements with the Stored Values
	document.getElementById("date1").value = sessionStorage.getItem("Transition Program Date");
	document.getElementById("transitionProgram").value = sessionStorage.getItem("Transition Program");
	document.getElementById("ECSOperator").value = sessionStorage.getItem("Receiving Private ECS Operator");
	document.getElementById("ECSOperatorFinalDate").value = sessionStorage.getItem("Receiving Private ECS Operator Final Date");
	document.getElementById("kindergartenConsultant").value = sessionStorage.getItem("Kindergarten Consultant/Strategist");
	document.getElementById("kindergartenConsultantFinalDate").value = sessionStorage.getItem("Kindergarten Consultant/Strategist Final Date");
	document.getElementById("kindergartenRepresentative").value = sessionStorage.getItem("Kindergarten Representative");
	document.getElementById("kindergartenRepresentativeFinalDate").value = sessionStorage.getItem("Kindergarten Representative Final Date");
	
	flatpickr(document.getElementById("ECSOperatorFinalDate"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("kindergartenConsultantFinalDate"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("kindergartenRepresentativeFinalDate"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("date1"),{dateFormat: "Y-m-d"});
}

function next(){
	
	//Remove any existing items and add as new key	
	sessionStorage.removeItem("Transition Program Date");
	sessionStorage.setItem("Transition Program Date", document.getElementById("date1").value);
	
	sessionStorage.removeItem("Transition Program");
	sessionStorage.setItem("Transition Program", document.getElementById("transitionProgram").value);
	
	
	sessionStorage.removeItem("Receiving Private ECS Operator");
	sessionStorage.setItem("Receiving Private ECS Operator", document.getElementById("ECSOperator").value);
	
	sessionStorage.removeItem("Receiving Private ECS Operator Final Date");
	sessionStorage.setItem("Receiving Private ECS Operator Final Date", document.getElementById("ECSOperatorFinalDate").value);
	

	sessionStorage.removeItem("Kindergarten Consultant/Strategist");
	sessionStorage.setItem("Kindergarten Consultant/Strategist", document.getElementById("kindergartenConsultant").value);
	
	sessionStorage.removeItem("Kindergarten Consultant/Strategist Final Date");
	sessionStorage.setItem("Kindergarten Consultant/Strategist Final Date", document.getElementById("kindergartenConsultantFinalDate").value);
	

	sessionStorage.removeItem("Kindergarten Representative");
	sessionStorage.setItem("Kindergarten Representative", document.getElementById("kindergartenRepresentative").value);
	
	sessionStorage.removeItem("Kindergarten Representative Final Date");
	sessionStorage.setItem("Kindergarten Representative Final Date", document.getElementById("kindergartenRepresentativeFinalDate").value);
	
	submitForm();
	
}

function previous(){
	
	//Remove any existing items and add as new key	
	sessionStorage.removeItem("Transition Program Date");
	sessionStorage.setItem("Transition Program Date", document.getElementById("date1").value);
	
	sessionStorage.removeItem("Transition Program");
	sessionStorage.setItem("Transition Program", document.getElementById("transitionProgram").value);
	
	
	sessionStorage.removeItem("Receiving Private ECS Operator");
	sessionStorage.setItem("Receiving Private ECS Operator", document.getElementById("ECSOperator").value);
	
	sessionStorage.removeItem("Receiving Private ECS Operator Final Date");
	sessionStorage.setItem("Receiving Private ECS Operator Final Date", document.getElementById("ECSOperatorFinalDate").value);
	

	sessionStorage.removeItem("Kindergarten Consultant/Strategist");
	sessionStorage.setItem("Kindergarten Consultant/Strategist", document.getElementById("kindergartenConsultant").value);
	
	sessionStorage.removeItem("Kindergarten Consultant/Strategist Final Date");
	sessionStorage.setItem("Kindergarten Consultant/Strategist Final Date", document.getElementById("kindergartenConsultantFinalDate").value);
	

	sessionStorage.removeItem("Kindergarten Representative");
	sessionStorage.setItem("Kindergarten Representative", document.getElementById("kindergartenRepresentative").value);
	
	sessionStorage.removeItem("Kindergarten Representative Final Date");
	sessionStorage.setItem("Kindergarten Representative Final Date", document.getElementById("kindergartenRepresentativeFinalDate").value);
	
	
	location.href = "./Page_5.html";
}

function markAttendance(currentAttendance){
	
	//Update Signature Button If Signed
	if(currentSignature == "Parent_1/Initial_Signature"){
		document.getElementById("Parent_1_Initial").className = "btn btn-success";
	}else if(currentSignature == "Parent_2/Initial_Signature"){
		document.getElementById("Parent_2_Initial").className = "btn btn-success";
	}else if(currentSignature == "Preschool_Teacher/Initial_Signature"){
		document.getElementById("Preschool_Teacher_Initial").className = "btn btn-success";
	}else if(currentSignature == "Certificated_Teacher/Initial_Signature"){
		document.getElementById("Certificated_Teacher_Initial").className = "btn btn-success";
	}else if(currentSignature == "Developmental_Assistant/Initial_Signature"){
		document.getElementById("Developmental_Assistant_Initial").className = "btn btn-success";
	}else if(currentSignature == "Speech_Language_Pathologist/Initial_Signature"){
		document.getElementById("Speech_Pathologist_Initial").className = "btn btn-success";
	}else if(currentSignature == "Occupational_Therapist/Initial_Signature"){
		document.getElementById("Occupational_Therapist_Initial").className = "btn btn-success";
	}else if(currentSignature == "Physiotherapist/Initial_Signature"){
		document.getElementById("Physiotherapist_Initial").className = "btn btn-success";
	}else if(currentSignature == "Psychologist/Initial_Signature"){
		document.getElementById("Psychologist_Initial").className = "btn btn-success";
	}else if(currentSignature == "Child_Developmental_Specialist/Initial_Signature"){
		document.getElementById("Developmental_Specialist_Initial").className = "btn btn-success";
	}
	
}


