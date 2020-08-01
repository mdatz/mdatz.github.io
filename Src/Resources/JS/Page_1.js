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

		//Populate Session Storage
		child_name = dict['Child Name'].split(" ");
		sessionStorage.setItem("Child First Name", child_name[0]);
		sessionStorage.setItem("Child Middle Name", child_name[1]);
		sessionStorage.setItem("Child Last Name", child_name[2]);
		
		//Refresh Page Contents
		fillExisting();
	}
	
	reader.readAsText(input_form);
}

function previous() {
	//No Previous Page for Page 1
}