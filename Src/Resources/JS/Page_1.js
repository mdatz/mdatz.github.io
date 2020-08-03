function fillExisting() {
	
	flatpickr(document.getElementById("childDOB"),{dateFormat: "d-m-Y"});
	
	if(sessionStorage.length != 0){
		//If Form Variables still Exist, fill the HTML Elements with the Stored Values
		document.getElementById("childFirstName").value = sessionStorage.getItem("Child First Name");
		document.getElementById("childMiddleName").value = sessionStorage.getItem("Child Middle Name");
		document.getElementById("childLastName").value = sessionStorage.getItem("Child Last Name");
		document.getElementById("childDOB").value = sessionStorage.getItem("Child Date of Birth");
		document.getElementById("childDOS").value = sessionStorage.getItem("Child Date on September");
		
		if(sessionStorage.getItem("ECS Year") != null){
			if(sessionStorage.getItem("ECS Year") == "1"){
				document.getElementById("customRadio1").checked = true;
			}else if(sessionStorage.getItem("ECS Year") == "2"){
				document.getElementById("customRadio2").checked = true;
			}else if(sessionStorage.getItem("ECS Year") == "3"){
				document.getElementById("customRadio3").checked = true;
			}
		}
		
		document.getElementById("elegibilityCode").value = sessionStorage.getItem("Elegibility Code");
		
		document.getElementById("fatherName").value = sessionStorage.getItem("Father Name");
		document.getElementById("fatherAddress").value = sessionStorage.getItem("Father Address");
		document.getElementById("fatherHomeNumber").value = sessionStorage.getItem("Father Home Number");
		document.getElementById("fatherWorkNumber").value = sessionStorage.getItem("Father Work Number");
		document.getElementById("fatherCellNumber").value = sessionStorage.getItem("Father Cell Number");
		document.getElementById("fatherEmail").value = sessionStorage.getItem("Father Email");
		
		document.getElementById("motherName").value = sessionStorage.getItem("Mother Name");
		document.getElementById("motherAddress").value = sessionStorage.getItem("Mother Address");
		document.getElementById("motherHomeNumber").value = sessionStorage.getItem("Mother Home Number");
		document.getElementById("motherWorkNumber").value = sessionStorage.getItem("Mother Work Number");
		document.getElementById("motherCellNumber").value = sessionStorage.getItem("Mother Cell Number");
		document.getElementById("motherEmail").value = sessionStorage.getItem("Mother Email");
		
	}else{
		console.log("Session Storage length is 0!");
	}
}
		
function next() {
	//Remove any existing items and add as new key
	sessionStorage.removeItem("Child First Name");
	sessionStorage.setItem("Child First Name", document.getElementById("childFirstName").value);
	
	sessionStorage.removeItem("Child Middle Name");
	sessionStorage.setItem("Child Middle Name", document.getElementById("childMiddleName").value);
	
	sessionStorage.removeItem("Child Last Name");
	sessionStorage.setItem("Child Last Name", document.getElementById("childLastName").value);
	
	sessionStorage.removeItem("childDOB");
	sessionStorage.setItem("Child Date of Birth", document.getElementById("childDOB").value);

	sessionStorage.removeItem("childDOB");
	sessionStorage.setItem("Child Date on September", document.getElementById("childDOS").value);
	
	sessionStorage.removeItem("ECS Year");
	var selection = document.getElementsByName("customRadio");
	for(i = 0; i < selection.length; i++){
		if(selection[i].checked){
			sessionStorage.setItem("ECS Year", (i+1));
			break;
		}
	}

	sessionStorage.removeItem("Elegibility Code");
	sessionStorage.setItem("Elegibility Code", document.getElementById("elegibilityCode").value);
	
	sessionStorage.removeItem("Father Name");
	sessionStorage.setItem("Father Name", document.getElementById("fatherName").value);
	
	sessionStorage.removeItem("Father Address");
	sessionStorage.setItem("Father Address", document.getElementById("fatherAddress").value);
	
	sessionStorage.removeItem("Father Home Number");
	sessionStorage.setItem("Father Home Number", document.getElementById("fatherHomeNumber").value);
	
	sessionStorage.removeItem("Father Work Number");
	sessionStorage.setItem("Father Work Number", document.getElementById("fatherWorkNumber").value);
	
	sessionStorage.removeItem("Father Cell Number");
	sessionStorage.setItem("Father Cell Number", document.getElementById("fatherCellNumber").value);
	
	sessionStorage.removeItem("Father Email");
	sessionStorage.setItem("Father Email", document.getElementById("fatherEmail").value);
	
	sessionStorage.removeItem("Mother Name");
	sessionStorage.setItem("Mother Name", document.getElementById("motherName").value);
	
	sessionStorage.removeItem("Mother Address");
	sessionStorage.setItem("Mother Address", document.getElementById("motherAddress").value);
	
	sessionStorage.removeItem("Mother Home Number");
	sessionStorage.setItem("Mother Home Number", document.getElementById("motherHomeNumber").value);
	
	sessionStorage.removeItem("Mother Work Number");
	sessionStorage.setItem("Mother Work Number", document.getElementById("motherWorkNumber").value);
	
	sessionStorage.removeItem("Mother Cell Number");
	sessionStorage.setItem("Mother Cell Number", document.getElementById("motherCellNumber").value);
	
	sessionStorage.removeItem("Mother Email");
	sessionStorage.setItem("Mother Email", document.getElementById("motherEmail").value);
	
	//Return the next page
	return location.href = "./Page_2.html";
}

function loadForm(input){
	var input_form = input.files[0];
	
	var reader = new FileReader();
	reader.onload = function(){
		
		console.log(reader.result);
		
		//Create Dictionary of Previous Values
		var dict = {};
		const matches = reader.result.match(/((obj)[\s\S]*?(endobj))/g);
		matches.forEach(match => {
			const tIndex = match.indexOf('/T (');
			const vIndex = match.indexOf('/V (');
			if(tIndex > -1 && vIndex > -1) {
				const fieldNameSegment = match.substring(tIndex + 4);
				const fieldNameValue = fieldNameSegment.substring(0,fieldNameSegment.indexOf(')'));
				const valueSegment = match.substring(vIndex + 4);
				const dataValue = valueSegment.substring(0, valueSegment.indexOf(')'));
				dict[fieldNameValue] = dataValue;
			}
		});
		
		console.log(dict);
		sessionStorage.clear();
		
		//Populate Session Storage
		//Page 1
		child_name = dict['Child Name'].split(" ");
		sessionStorage.setItem("Child First Name", child_name[0]);
		sessionStorage.setItem("Child Middle Name", child_name[1]);
		sessionStorage.setItem("Child Last Name", child_name[2]);
		sessionStorage.setItem("Child Date of Birth", dict['Child DOB']);
		sessionStorage.setItem("Child Date on September", dict['Child September Age']);
		sessionStorage.setItem("ECS Year", dict['Year of ECS']);
		sessionStorage.setItem("Elegibility Code", dict['Eligibility Code']);
		sessionStorage.setItem("Father Name", dict['Fathers Name']);
		sessionStorage.setItem("Father Address", dict['Fathers Home Address']);
		sessionStorage.setItem("Father Home Number", dict['Fathers Home Phone']);
		sessionStorage.setItem("Father Work Number", dict['Fathers Work Phone']);
		sessionStorage.setItem("Father Cell Number", dict['Fathers Cell Phone']);
		sessionStorage.setItem("Father Email", dict['Fathers Email']);
		sessionStorage.setItem("Mother Name", dict['Mothers Name']);
		sessionStorage.setItem("Mother Address", dict['Mothers Home Address']);
		sessionStorage.setItem("Mother Home Number", dict['Mothers Home Phone']);
		sessionStorage.setItem("Mother Work Number", dict['Mothers Work Phone']);
		sessionStorage.setItem("Mother Cell Number", dict['Mothers Cell Phone']);
		sessionStorage.setItem("Mother Email", dict['Mothers Email']);
		
		//Page 2
		sessionStorage.setItem("Preschool Name", dict['Preschool Name']);
		sessionStorage.setItem("Preschool Start Time", dict['Preschool Start']);
		sessionStorage.setItem("Preschool End Time", dict['Preschool End']);
		
		sessionStorage.setItem("Preschool Attendance String", dict['Preschool Attendance Hidden']);
		sessionStorage.setItem("KA Attendance String", dict['Kids Playtime Attendance Hidden']);
		sessionStorage.setItem("HA Attendance String", dict['Home Programming Attendance Hidden']);
		
		sessionStorage.setItem("KiDS Start Time", dict['Kids Playtime Start']);
		sessionStorage.setItem("KiDS End Time", dict['Kids Playtime End']);
		
		sessionStorage.setItem("Home Programming Start Time", dict['Home Programming Start']);
		sessionStorage.setItem("Home Programming End Time", dict['Home Programming End']);
		
		sessionStorage.setItem("Preschool Teacher", dict['Preschool Teacher Name']);
		sessionStorage.setItem("Certificated Teacher", dict['Certificated Teacher Name']);
		sessionStorage.setItem("Developmental Assistant", dict['Developmental Assistant Name']);
		sessionStorage.setItem("Speech Pathologist", dict['Speech-Language Pathologist Name']);
		sessionStorage.setItem("Occupational Therapist", dict['Occupational Therapist Name']);
		sessionStorage.setItem("Physiotherapist", dict['Physiotherapist Name']);
		sessionStorage.setItem("Psychologist", dict['Psychologist Name']);
		sessionStorage.setItem("Behavioural Specialist", dict['Child Development Specialist Name']);
		
		//Page 3
		sessionStorage.setItem("Preschool Name 1", dict['Previous Preschool 1']);
		sessionStorage.setItem("Preschool Start Date 1", dict['Previous Preschool 1 Start']);
		sessionStorage.setItem("Preschool End Date 1", dict['Previous Preschool 1 End']);
		
		sessionStorage.setItem("Preschool Name 2", dict['Previous Preschool 2']);
		sessionStorage.setItem("Preschool Start Date 2", dict['Previous Preschool 2 Start']);
		sessionStorage.setItem("Preschool End Date 2", dict['Previous Preschool 2 End']);
		
		sessionStorage.setItem("Preschool Name 3", dict['Previous Preschool 3']);
		sessionStorage.setItem("Preschool Start Date 3", dict['Previous Preschool 3 Start']);
		sessionStorage.setItem("Preschool End Date 3", dict['Previous Preschool 3 End']);
		
		sessionStorage.setItem("Family Information", dict['Family Information']);
		sessionStorage.setItem("Family Doctor", dict['Family Doctor Name']);
		sessionStorage.setItem("Last Family Doctor Visit", dict['Family Doctor Last Visit']);
		
		sessionStorage.setItem("Pediatrician", dict['Pediatrician Name']);
		sessionStorage.setItem("Last Pediatrician Visit", dict['Pediatrician Last Visit']);
		
		sessionStorage.setItem("Hearing Screen", dict['Hearing Screen Name']);
		sessionStorage.setItem("Last Hearing Screen Visit", dict['Hearing Screen Last Visit']);
		
		sessionStorage.setItem("Vision Screen", dict['Vision Screen Name']);
		sessionStorage.setItem("Last Vision Screen Visit", dict['Vision Screen Last Visit']);
		
		sessionStorage.setItem("Allergies", dict['Allergies']);
		sessionStorage.setItem("Medications", dict['Medication']);
		sessionStorage.setItem("Other Medical Information", dict['Other Information']);
		
		sessionStorage.setItem("Child's Strengths", dict['Childs Strengths']);
		sessionStorage.setItem("Child's Areas of Growth", dict['Childs Areas of Growth']);
		sessionStorage.setItem("Parent Priorities", dict['Parent Priorities']);
		
		//Page 4
		sessionStorage.setItem("Initial CELF Test Therapist", dict['Initial SLP Therapist']);
		sessionStorage.setItem("Initial CELF Test Date", dict['Initial SLP Date']);
		sessionStorage.setItem("Initial CELF Test Result", dict['Initial SLP Result']);
		
		sessionStorage.setItem("Final CELF Test Therapist", dict['Final SLP Therapist']);
		sessionStorage.setItem("Final CELF Test Date", dict['Final SLP Date']);
		sessionStorage.setItem("Final CELF Test Result", dict['Final SLP Result']);
		
		sessionStorage.setItem("Final PLS Test Therapist", dict['Final PLS Therapist']);
		sessionStorage.setItem("Final PLS Test Date", dict['Final PLS Date']);
		sessionStorage.setItem("Final PLS Test Result", dict['Final PLS Result']);
		
		sessionStorage.setItem("Final GFTA Test Therapist", dict['Final GFTA Therapist']);
		sessionStorage.setItem("Final GFTA Test Date", dict['Final GFTA Date']);
		sessionStorage.setItem("Final GFTA Test Result", dict['Final GFTA Result']);
		
		sessionStorage.setItem("Initial PDMS Test Therapist", dict['Initial PDMS Therapist']);
		sessionStorage.setItem("Initial PDMS Test Date", dict['Initial PDMS Date']);
		sessionStorage.setItem("Initial PDMS Test Result", dict['Initial PDMS Result']);
		
		sessionStorage.setItem("Final PDMS Test Therapist", dict['Final PDMS Therapist']);
		sessionStorage.setItem("Final PDMS Test Date", dict['Final PDMS Date']);
		sessionStorage.setItem("Final PDMS Test Result", dict['Final PDMS Result']);
		
		sessionStorage.setItem("Final MFUN Test Therapist", dict['Final MFUN Therapist']);
		sessionStorage.setItem("Final MFUN Test Date", dict['Final MFUN Date']);
		sessionStorage.setItem("Final MFUN Test Result", dict['Final MFUN Result']);
		
		sessionStorage.setItem("Final SP2 Test Therapist", dict['Final SP2 Therapist']);
		sessionStorage.setItem("Final SP2 Test Date", dict['Final SP2 Date']);
		sessionStorage.setItem("Final SP2 Test Result", dict['Final SP2 Result']);
		
		sessionStorage.setItem("Initial Review Date", dict['Initial Assessment Review Date']);
		sessionStorage.setItem("First Review Date", dict['First Assessment Review Date']);
		sessionStorage.setItem("Final Review Date", dict['Final Assessment Review Date']);
		
		//Page 5
		sessionStorage.setItem("Long Term Goal 1",dict['Long Term Goal 1']);
		sessionStorage.setItem("Baseline Goal 1",dict['Baseline Goal 1']);
		sessionStorage.setItem("Short Term Objective Goal 1.1",dict['Goal 1 Short Term 1']);
		sessionStorage.setItem("Short Term Objective Goal 1.2",dict['Goal 1 Short Term 2']);
		sessionStorage.setItem("Short Term Objective Goal 1.3",dict['Goal 1 Short Term 3']);
		sessionStorage.setItem("Objective Review Goal 1",dict['Goal 1 Review']);
		sessionStorage.setItem("Accommodations and Strategies Goal 1.1",dict['Goal 1 Accommodation 1']);
		sessionStorage.setItem("Accommodations and Strategies Goal 1.2",dict['Goal 1 Accommodation 2']);
		sessionStorage.setItem("Accommodations and Strategies Goal 1.3",dict['Goal 1 Accommodation 3']);
		
		sessionStorage.setItem("Long Term Goal 2",dict['Long Term Goal 2']);
		sessionStorage.setItem("Baseline Goal 2",dict['Baseline Goal 2']);
		sessionStorage.setItem("Short Term Objective Goal 2.1",dict['Goal 2 Short Term 1']);
		sessionStorage.setItem("Short Term Objective Goal 2.2",dict['Goal 2 Short Term 2']);
		sessionStorage.setItem("Short Term Objective Goal 2.3",dict['Goal 2 Short Term 3']);
		sessionStorage.setItem("Objective Review Goal 2",dict['Goal 2 Review']);
		sessionStorage.setItem("Accommodations and Strategies Goal 2.1",dict['Goal 2 Accommodation 1']);
		sessionStorage.setItem("Accommodations and Strategies Goal 2.2",dict['Goal 2 Accommodation 2']);
		sessionStorage.setItem("Accommodations and Strategies Goal 2.3",dict['Goal 2 Accommodation 3']);
		
		sessionStorage.setItem("Long Term Goal 3",dict['Long Term Goal 3']);
		sessionStorage.setItem("Baseline Goal 3",dict['Baseline Goal 3']);
		sessionStorage.setItem("Short Term Objective Goal 3.1",dict['Goal 3 Short Term 1']);
		sessionStorage.setItem("Short Term Objective Goal 3.2",dict['Goal 3 Short Term 2']);
		sessionStorage.setItem("Short Term Objective Goal 3.3",dict['Goal 3 Short Term 3']);
		sessionStorage.setItem("Objective Review Goal 3",dict['Goal 3 Review']);
		sessionStorage.setItem("Accommodations and Strategies Goal 3.1",dict['Goal 3 Accommodation 1']);
		sessionStorage.setItem("Accommodations and Strategies Goal 3.2",dict['Goal 3 Accommodation 2']);
		sessionStorage.setItem("Accommodations and Strategies Goal 3.3",dict['Goal 3 Accommodation 3']);
		
		sessionStorage.setItem("Long Term Goal 4",dict['Long Term Goal 4']);
		sessionStorage.setItem("Baseline Goal 4",dict['Baseline Goal 4']);
		sessionStorage.setItem("Short Term Objective Goal 4.1",dict['Goal 4 Short Term 1']);
		sessionStorage.setItem("Short Term Objective Goal 4.2",dict['Goal 4 Short Term 2']);
		sessionStorage.setItem("Short Term Objective Goal 4.3",dict['Goal 4 Short Term 3']);
		sessionStorage.setItem("Objective Review Goal 4",dict['Goal 4 Review']);
		sessionStorage.setItem("Accommodations and Strategies Goal 4.1",dict['Goal 4 Accommodation 1']);
		sessionStorage.setItem("Accommodations and Strategies Goal 4.2",dict['Goal 4 Accommodation 2']);
		sessionStorage.setItem("Accommodations and Strategies Goal 4.3",dict['Goal 4 Accommodation 3']);
		
		//Page 6
		sessionStorage.setItem("Transition Program Date", dict['Transition Planning Date']);
		sessionStorage.setItem("Transition Program", dict['Transition Planning Program']);
		sessionStorage.setItem("Receiving Private ECS Operator Final Date", dict['Private ECS Operator Date']);
		sessionStorage.setItem("Kindergarten Consultant/Strategist Final Date", dict['Kindergarten Consultant Date']);
		sessionStorage.setItem("Kindergarten Representative Final Date", dict['Kindergarten Representative Date']);
		
		//Refresh Page Contents
		fillExisting();
	}
	
	reader.readAsText(input_form);
}

function previous() {
	//No Previous Page for Page 1
}