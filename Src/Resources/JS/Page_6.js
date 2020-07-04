
function createForm(){
	
	//Handle PDF Form Data
	var templatePDF = this.response;
	var fields = pdfform().list_fields(templatePDF);
	
	//Create Buffer With Form Variables
	//Page 1 --------------------------
	fields['Child Name'] = [sessionStorage.getItem("Child First Name") + " " + sessionStorage.getItem("Child Middle Name") + " " + sessionStorage.getItem("Child Last Name")]; 
	fields['Child DOB'] = [sessionStorage.getItem("Child Date of Birth")];
	fields['Child September Age'] = [sessionStorage.getItem("Child Date on September")];
	fields['Years of ECS'] = [sessionStorage.getItem("ECS Year")];
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
	
	//console.log(fields);
	
	var finalBuffer = pdfform().transform(templatePDF, fields);
	var finalPDF = new Blob([finalBuffer], {type: 'application/pdf'});
	
	saveAs(finalPDF, 'test.pdf');
}

function submitForm(){
	
	//Create PDF Request
	var pdfhttp = new XMLHttpRequest();
	pdfhttp.addEventListener("load", createForm);
	
	//Send Request for Hosted PDF Template
	pdfhttp.open("GET", "https://mdatz.github.io/Src/Resources/Forms/Template.pdf", true);
	pdfhttp.responseType = "arraybuffer";
	pdfhttp.send();

}

function fillExisting(){
	
	//If Form Variables still Exist, fill the HTML Elements with the Stored Values
	document.getElementById("parentGaurdian1Initial").value = sessionStorage.getItem("Parent/Gaurdian 1 Initial Review");
	document.getElementById("parentGaurdian1Final").value = sessionStorage.getItem("Parent/Gaurdian 1 Final Review");
	document.getElementById("parentGaurdian2Initial").value = sessionStorage.getItem("Parent/Gaurdian 2 Initial Review");
	document.getElementById("parentGaurdian2Final").value = sessionStorage.getItem("Parent/Gaurdian 2 Final Review");
	document.getElementById("preschoolTeacherInitial").value = sessionStorage.getItem("Preschool Teacher Initial Review");
	document.getElementById("preschoolTeacherFinal").value = sessionStorage.getItem("Preschool Teacher Final Review");
	document.getElementById("certificatedTeacherInitial").value = sessionStorage.getItem("Certificated Teacher Initial Review");
	document.getElementById("certificatedTeacherFinal").value = sessionStorage.getItem("Certificated Teacher Final Review");
	document.getElementById("developmentalAssistantInitial").value = sessionStorage.getItem("Developmental Assistant Initial Review");
	document.getElementById("developmentalAssistantFinal").value = sessionStorage.getItem("Developmental Assistant Final Review");
	document.getElementById("SLPathologistInitial").value = sessionStorage.getItem("Speech-Language Pathologist Initial Review");
	document.getElementById("SLPathologistFinal").value = sessionStorage.getItem("Speech-Language Pathologist Final Review");
	document.getElementById("occupationalTherapistInitial").value = sessionStorage.getItem("Occupational Therapist Initial Review");
	document.getElementById("occupationalTherapistFinal").value = sessionStorage.getItem("Occupational Therapist Final Review");
	document.getElementById("physiotherapistInitial").value = sessionStorage.getItem("Physiotherapist Initial Review");
	document.getElementById("physiotherapistFinal").value = sessionStorage.getItem("Physiotherapist Final Review");
	document.getElementById("psychologistInitial").value = sessionStorage.getItem("Psychologist Initial Review");
	document.getElementById("psychologistFinal").value = sessionStorage.getItem("Psychologist Final Review");
	document.getElementById("behaviourSpecialistInitial").value = sessionStorage.getItem("Behaviour Specialist Initial Review");
	document.getElementById("behaviourSpecialistFinal").value = sessionStorage.getItem("Behaviour Specialist Final Review");
	document.getElementById("date1").value = sessionStorage.getItem("Transition Program Date");
	document.getElementById("transitionProgram").value = sessionStorage.getItem("Transition Program");
	document.getElementById("ECSOperator").value = sessionStorage.getItem("Receiving Private ECS Operator");
	document.getElementById("ECSOperatorFinalDate").value = sessionStorage.getItem("Receiving Private ECS Operator Final Date");
	document.getElementById("kindergartenConsultant").value = sessionStorage.getItem("Kindergarten Consultant/Strategist");
	document.getElementById("kindergartenConsultantFinalDate").value = sessionStorage.getItem("Kindergarten Consultant/Strategist Final Date");
	document.getElementById("kindergartenRepresentative").value = sessionStorage.getItem("Kindergarten Representative");
	document.getElementById("kindergartenRepresentativeFinalDate").value = sessionStorage.getItem("Kindergarten Representative Final Date");
	
	flatpickr(document.getElementById("parentGaurdian1Initial"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("parentGaurdian1Final"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("parentGaurdian2Initial"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("parentGaurdian2Final"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("preschoolTeacherInitial"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("preschoolTeacherFinal"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("certificatedTeacherInitial"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("certificatedTeacherFinal"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("developmentalAssistantInitial"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("developmentalAssistantFinal"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("SLPathologistInitial"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("SLPathologistFinal"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("occupationalTherapistInitial"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("occupationalTherapistFinal"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("physiotherapistInitial"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("physiotherapistFinal"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("psychologistInitial"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("psychologistFinal"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("behaviourSpecialistInitial"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("behaviourSpecialistFinal"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("ECSOperatorFinalDate"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("kindergartenConsultantFinalDate"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("kindergartenRepresentativeFinalDate"),{dateFormat: "Y-m-d"});
	flatpickr(document.getElementById("date1"),{dateFormat: "Y-m-d"});
}

function next(){
	
	//Remove any existing items and add as new key
	sessionStorage.removeItem("Parent/Gaurdian 1 Initial Review");
	sessionStorage.setItem("Parent/Gaurdian 1 Initial Review", document.getElementById("parentGaurdian1Initial").value);

	sessionStorage.removeItem("Parent/Gaurdian 1 Final Review");
	sessionStorage.setItem("Parent/Gaurdian 1 Final Review", document.getElementById("parentGaurdian1Final").value);


	sessionStorage.removeItem("Parent/Gaurdian 2 Initial Review");
	sessionStorage.setItem("Parent/Gaurdian 2 Initial Review", document.getElementById("parentGaurdian2Initial").value);

	sessionStorage.removeItem("Parent/Gaurdian 2 Final Review");
	sessionStorage.setItem("Parent/Gaurdian 2 Final Review", document.getElementById("parentGaurdian2Final").value);
	
	
	sessionStorage.removeItem("Preschool Teacher Initial Review");
	sessionStorage.setItem("Preschool Teacher Initial Review", document.getElementById("preschoolTeacherInitial").value);

	sessionStorage.removeItem("Preschool Teacher Final Review");
	sessionStorage.setItem("Preschool Teacher Final Review", document.getElementById("preschoolTeacherFinal").value);
	
	
	sessionStorage.removeItem("Certificated Teacher Initial Review");
	sessionStorage.setItem("Certificated Teacher Initial Review", document.getElementById("certificatedTeacherInitial").value);
	
	sessionStorage.removeItem("Certificated Teacher Final Review");
	sessionStorage.setItem("Certificated Teacher Final Review", document.getElementById("certificatedTeacherFinal").value);
	
	
	sessionStorage.removeItem("Developmental Assistant Initial Review");
	sessionStorage.setItem("Developmental Assistant Initial Review", document.getElementById("developmentalAssistantInitial").value);
	
	sessionStorage.removeItem("Developmental Assistant Final Review");
	sessionStorage.setItem("Developmental Assistant Final Review", document.getElementById("developmentalAssistantFinal").value);
	
	
	sessionStorage.removeItem("Speech-Language Pathologist Initial Review");
	sessionStorage.setItem("Speech-Language Pathologist Initial Review", document.getElementById("SLPathologistInitial").value);

	sessionStorage.removeItem("Speech-Language Pathologist Final Review");
	sessionStorage.setItem("Speech-Language Pathologist Final Review", document.getElementById("SLPathologistFinal").value);


	sessionStorage.removeItem("Occupational Therapist Initial Review");
	sessionStorage.setItem("Occupational Therapist Initial Review", document.getElementById("occupationalTherapistInitial").value);
	
	sessionStorage.removeItem("Occupational Therapist Final Review");
	sessionStorage.setItem("Occupational Therapist Final Review", document.getElementById("occupationalTherapistFinal").value);
	
	
	sessionStorage.removeItem("Physiotherapist Initial Review");
	sessionStorage.setItem("Physiotherapist Initial Review", document.getElementById("physiotherapistInitial").value);	
	
	sessionStorage.removeItem("Physiotherapist Final Review");
	sessionStorage.setItem("Physiotherapist Final Review", document.getElementById("physiotherapistFinal").value);	


	sessionStorage.removeItem("Psychologist Initial Review");
	sessionStorage.setItem("Psychologist Initial Review", document.getElementById("psychologistInitial").value);	
	
	sessionStorage.removeItem("Psychologist Final Review");
	sessionStorage.setItem("Psychologist Final Review", document.getElementById("psychologistFinal").value);
	

	sessionStorage.removeItem("Behaviour Specialist Initial Review");
	sessionStorage.setItem("Behaviour Specialist Initial Review", document.getElementById("behaviourSpecialistInitial").value);
	
	sessionStorage.removeItem("Behaviour Specialist Final Review");
	sessionStorage.setItem("Behaviour Specialist Final Review", document.getElementById("behaviourSpecialistFinal").value);
	
	
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
	sessionStorage.removeItem("Parent/Gaurdian 1 Initial Review");
	sessionStorage.setItem("Parent/Gaurdian 1 Initial Review", document.getElementById("parentGaurdian1Initial").value);

	sessionStorage.removeItem("Parent/Gaurdian 1 Final Review");
	sessionStorage.setItem("Parent/Gaurdian 1 Final Review", document.getElementById("parentGaurdian1Final").value);


	sessionStorage.removeItem("Parent/Gaurdian 2 Initial Review");
	sessionStorage.setItem("Parent/Gaurdian 2 Initial Review", document.getElementById("parentGaurdian2Initial").value);

	sessionStorage.removeItem("Parent/Gaurdian 2 Final Review");
	sessionStorage.setItem("Parent/Gaurdian 2 Final Review", document.getElementById("parentGaurdian2Final").value);
	
	
	sessionStorage.removeItem("Preschool Teacher Initial Review");
	sessionStorage.setItem("Preschool Teacher Initial Review", document.getElementById("preschoolTeacherInitial").value);

	sessionStorage.removeItem("Preschool Teacher Final Review");
	sessionStorage.setItem("Preschool Teacher Final Review", document.getElementById("preschoolTeacherFinal").value);
	
	
	sessionStorage.removeItem("Certificated Teacher Initial Review");
	sessionStorage.setItem("Certificated Teacher Initial Review", document.getElementById("certificatedTeacherInitial").value);
	
	sessionStorage.removeItem("Certificated Teacher Final Review");
	sessionStorage.setItem("Certificated Teacher Final Review", document.getElementById("certificatedTeacherFinal").value);
	
	
	sessionStorage.removeItem("Developmental Assistant Initial Review");
	sessionStorage.setItem("Developmental Assistant Initial Review", document.getElementById("developmentalAssistantInitial").value);
	
	sessionStorage.removeItem("Developmental Assistant Final Review");
	sessionStorage.setItem("Developmental Assistant Final Review", document.getElementById("developmentalAssistantFinal").value);
	
	
	sessionStorage.removeItem("Speech-Language Pathologist Initial Review");
	sessionStorage.setItem("Speech-Language Pathologist Initial Review", document.getElementById("SLPathologistInitial").value);

	sessionStorage.removeItem("Speech-Language Pathologist Final Review");
	sessionStorage.setItem("Speech-Language Pathologist Final Review", document.getElementById("SLPathologistFinal").value);


	sessionStorage.removeItem("Occupational Therapist Initial Review");
	sessionStorage.setItem("Occupational Therapist Initial Review", document.getElementById("occupationalTherapistInitial").value);
	
	sessionStorage.removeItem("Occupational Therapist Final Review");
	sessionStorage.setItem("Occupational Therapist Final Review", document.getElementById("occupationalTherapistFinal").value);
	
	
	sessionStorage.removeItem("Physiotherapist Initial Review");
	sessionStorage.setItem("Physiotherapist Initial Review", document.getElementById("physiotherapistInitial").value);	

	sessionStorage.removeItem("Physiotherapist Final Review");
	sessionStorage.setItem("Physiotherapist Final Review", document.getElementById("physiotherapistFinal").value);	


	sessionStorage.removeItem("Psychologist Initial Review");
	sessionStorage.setItem("Psychologist Initial Review", document.getElementById("psychologistInitial").value);	
	
	sessionStorage.removeItem("Psychologist Final Review");
	sessionStorage.setItem("Psychologist Final Review", document.getElementById("psychologistFinal").value);
	

	sessionStorage.removeItem("Behaviour Specialist Initial Review");
	sessionStorage.setItem("Behaviour Specialist Initial Review", document.getElementById("behaviourSpecialistInitial").value);
	
	sessionStorage.removeItem("Behaviour Specialist Final Review");
	sessionStorage.setItem("Behaviour Specialist Final Review", document.getElementById("behaviourSpecialistFinal").value);
	
	
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

//Global Signature Pad Variable
var signaturePad;

function openSignaturePad(){
	document.getElementById("SignaturePad").style.display = "block";
	
	var canvas = document.getElementById("signatureCanvas");
	signaturePad = new SignaturePad(canvas, {backgroundColor: 'rgb(255,255,255)'});
	
	var ratio =  Math.max(window.devicePixelRatio || 1, 1);

	canvas.width = canvas.offsetWidth * ratio;
	canvas.height = canvas.offsetHeight * ratio;
	canvas.getContext("2d").scale(ratio, ratio);

	signaturePad.clear();
}

function closeSignaturePad(){
	document.getElementById("SignaturePad").style.display = "none";
}

function undoSignature(){
	var signature = signaturePad.toData();

	if (signature) {
		signature.pop();
		signaturePad.fromData(signature);
	}
}

function clearSignature(){
	signaturePad.clear();
}

function submitSignature(){
	
}


