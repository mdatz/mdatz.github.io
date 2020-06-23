function fillExisting(){
	
	//If Form Variables still Exist, fill the HTML Elements with the Stored Values
	document.getElementById("parentGaurdian1Initial").value = sessionStorage.getItem("Parent/Gaurdian 1 Initial Review");
	document.getElementById("parentGaurdian1First").value = sessionStorage.getItem("Parent/Gaurdian 1 First Review");
	document.getElementById("parentGaurdian1Final").value = sessionStorage.getItem("Parent/Gaurdian 1 Final Review");
	document.getElementById("parentGaurdian2Initial").value = sessionStorage.getItem("Parent/Gaurdian 2 Initial Review");
	document.getElementById("parentGaurdian2First").value = sessionStorage.getItem("Parent/Gaurdian 2 First Review");
	document.getElementById("parentGaurdian2Final").value = sessionStorage.getItem("Parent/Gaurdian 2 Final Review");
	document.getElementById("preschoolTeacherInitial").value = sessionStorage.getItem("Preschool Teacher Initial Review");
	document.getElementById("preschoolTeacherFirst").value = sessionStorage.getItem("Preschool Teacher First Review");
	document.getElementById("preschoolTeacherFinal").value = sessionStorage.getItem("Preschool Teacher Final Review");
	document.getElementById("certificatedTeacherInitial").value = sessionStorage.getItem("Certificated Teacher Initial Review");
	document.getElementById("certificatedTeacherFirst").value = sessionStorage.getItem("Certificated Teacher First Review");
	document.getElementById("certificatedTeacherFinal").value = sessionStorage.getItem("Certificated Teacher Final Review");
	document.getElementById("developmentalAssistantInitial").value = sessionStorage.getItem("Developmental Assistant Initial Review");
	document.getElementById("developmentalAssistantFirst").value = sessionStorage.getItem("Developmental Assistant First Review");
	document.getElementById("developmentalAssistantFinal").value = sessionStorage.getItem("Developmental Assistant Final Review");
	document.getElementById("SLPathologistInitial").value = sessionStorage.getItem("Speech-Language Pathologist Initial Review");
	document.getElementById("SLPathologistFirst").value = sessionStorage.getItem("Speech-Language Pathologist First Review");
	document.getElementById("SLPathologistFinal").value = sessionStorage.getItem("Speech-Language Pathologist Final Review");
	document.getElementById("occupationalTherapistInitial").value = sessionStorage.getItem("Occupational Therapist Initial Review");
	document.getElementById("occupationalTherapistFirst").value = sessionStorage.getItem("Occupational Therapist First Review");
	document.getElementById("occupationalTherapistFinal").value = sessionStorage.getItem("Occupational Therapist Final Review");
	document.getElementById("physiotherapistInitial").value = sessionStorage.getItem("Physiotherapist Initial Review");
	document.getElementById("physiotherapistFirst").value = sessionStorage.getItem("Physiotherapist First Review");
	document.getElementById("physiotherapistFinal").value = sessionStorage.getItem("Physiotherapist Final Review");
	document.getElementById("psychologistInitial").value = sessionStorage.getItem("Psychologist Initial Review");
	document.getElementById("psychologistFirst").value = sessionStorage.getItem("Psychologist First Review");
	document.getElementById("psychologistFinal").value = sessionStorage.getItem("Psychologist Final Review");
	document.getElementById("behaviourSpecialistInitial").value = sessionStorage.getItem("Behaviour Specialist Initial Review");
	document.getElementById("behaviourSpecialistFirst").value = sessionStorage.getItem("Behaviour Specialist First Review");
	document.getElementById("behaviourSpecialistFinal").value = sessionStorage.getItem("Behaviour Specialist Final Review");
	document.getElementById("date1").value = sessionStorage.getItem("Transition Program Date");
	document.getElementById("transitionProgram").value = sessionStorage.getItem("Transition Program");
	document.getElementById("ECSOperator").value = sessionStorage.getItem("Receiving Private ECS Operator");
	document.getElementById("ECSOperatorFinalDate").value = sessionStorage.getItem("Receiving Private ECS Operator Final Date");
	document.getElementById("kindergartenConsultant").value = sessionStorage.getItem("Kindergarten Consultant/Strategist");
	document.getElementById("kindergartenConsultantFinalDate").value = sessionStorage.getItem("Kindergarten Consultant/Strategist Final Date");
	document.getElementById("kindergartenRepresentative").value = sessionStorage.getItem("Kindergarten Representative");
	document.getElementById("kindergartenRepresentativeFinalDate").value = sessionStorage.getItem("Kindergarten Representative Final Date");
}

function next(){
	
	//Remove any existing items and add as new key
	sessionStorage.removeItem("Parent/Gaurdian 1 Initial Review");
	sessionStorage.setItem("Parent/Gaurdian 1 Initial Review", document.getElementById("parentGaurdian1Initial").value);

	sessionStorage.removeItem("Parent/Gaurdian 1 First Review");
	sessionStorage.setItem("Parent/Gaurdian 1 First Review", document.getElementById("parentGaurdian1First").value);

	sessionStorage.removeItem("Parent/Gaurdian 1 Final Review");
	sessionStorage.setItem("Parent/Gaurdian 1 Final Review", document.getElementById("parentGaurdian1Final").value);


	sessionStorage.removeItem("Parent/Gaurdian 2 Initial Review");
	sessionStorage.setItem("Parent/Gaurdian 2 Initial Review", document.getElementById("parentGaurdian2Initial").value);

	sessionStorage.removeItem("Parent/Gaurdian 2 First Review");
	sessionStorage.setItem("Parent/Gaurdian 2 First Review", document.getElementById("parentGaurdian2First").value);

	sessionStorage.removeItem("Parent/Gaurdian 2 Final Review");
	sessionStorage.setItem("Parent/Gaurdian 2 Final Review", document.getElementById("parentGaurdian2Final").value);
	
	
	sessionStorage.removeItem("Preschool Teacher Initial Review");
	sessionStorage.setItem("Preschool Teacher Initial Review", document.getElementById("preschoolTeacherInitial").value);

	sessionStorage.removeItem("Preschool Teacher First Review");
	sessionStorage.setItem("Preschool Teacher First Review", document.getElementById("preschoolTeacherFirst").value);

	sessionStorage.removeItem("Preschool Teacher Final Review");
	sessionStorage.setItem("Preschool Teacher Final Review", document.getElementById("preschoolTeacherFinal").value);
	
	
	sessionStorage.removeItem("Certificated Teacher Initial Review");
	sessionStorage.setItem("Certificated Teacher Initial Review", document.getElementById("certificatedTeacherInitial").value);
	
	sessionStorage.removeItem("Certificated Teacher First Review");
	sessionStorage.setItem("Certificated Teacher First Review", document.getElementById("certificatedTeacherFirst").value);
	
	sessionStorage.removeItem("Certificated Teacher Final Review");
	sessionStorage.setItem("Certificated Teacher Final Review", document.getElementById("certificatedTeacherFinal").value);
	
	
	sessionStorage.removeItem("Developmental Assistant Initial Review");
	sessionStorage.setItem("Developmental Assistant Initial Review", document.getElementById("developmentalAssistantInitial").value);
	
	sessionStorage.removeItem("Developmental Assistant First Review");
	sessionStorage.setItem("Developmental Assistant First Review", document.getElementById("developmentalAssistantFirst").value);
	
	sessionStorage.removeItem("Developmental Assistant Final Review");
	sessionStorage.setItem("Developmental Assistant Final Review", document.getElementById("developmentalAssistantFinal").value);
	
	
	sessionStorage.removeItem("Speech-Language Pathologist Initial Review");
	sessionStorage.setItem("Speech-Language Pathologist Initial Review", document.getElementById("SLPathologistInitial").value);
	
	sessionStorage.removeItem("Speech-Language Pathologist First Review");
	sessionStorage.setItem("Speech-Language Pathologist First Review", document.getElementById("SLPathologistFirst").value);

	sessionStorage.removeItem("Speech-Language Pathologist Final Review");
	sessionStorage.setItem("Speech-Language Pathologist Final Review", document.getElementById("SLPathologistFinal").value);


	sessionStorage.removeItem("Occupational Therapist Initial Review");
	sessionStorage.setItem("Occupational Therapist Initial Review", document.getElementById("occupationalTherapistInitial").value);

	sessionStorage.removeItem("Occupational Therapist First Review");
	sessionStorage.setItem("Occupational Therapist First Review", document.getElementById("occupationalTherapistFirst").value);
	
	sessionStorage.removeItem("Occupational Therapist Final Review");
	sessionStorage.setItem("Occupational Therapist Final Review", document.getElementById("occupationalTherapistFinal").value);
	
	
	sessionStorage.removeItem("Physiotherapist Initial Review");
	sessionStorage.setItem("Physiotherapist Initial Review", document.getElementById("physiotherapistInitial").value);	
	
	sessionStorage.removeItem("Physiotherapist First Review");
	sessionStorage.setItem("Physiotherapist First Review", document.getElementById("physiotherapistFirst").value);	
	
	sessionStorage.removeItem("Physiotherapist Final Review");
	sessionStorage.setItem("Physiotherapist Final Review", document.getElementById("physiotherapistFinal").value);	


	sessionStorage.removeItem("Psychologist Initial Review");
	sessionStorage.setItem("Psychologist Initial Review", document.getElementById("psychologistInitial").value);	
	
	sessionStorage.removeItem("Psychologist First Review");
	sessionStorage.setItem("Psychologist First Review", document.getElementById("psychologistFirst").value);
	
	sessionStorage.removeItem("Psychologist Final Review");
	sessionStorage.setItem("Psychologist Final Review", document.getElementById("psychologistFinal").value);
	

	sessionStorage.removeItem("Behaviour Specialist Initial Review");
	sessionStorage.setItem("Behaviour Specialist Initial Review", document.getElementById("behaviourSpecialistInitial").value);
	
	sessionStorage.removeItem("Behaviour Specialist First Review");
	sessionStorage.setItem("Behaviour Specialist First Review", document.getElementById("behaviourSpecialistFirst").value);
	
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
	
}

function previous(){
	
	//Remove any existing items and add as new key
	sessionStorage.removeItem("Parent/Gaurdian 1 Initial Review");
	sessionStorage.setItem("Parent/Gaurdian 1 Initial Review", document.getElementById("parentGaurdian1Initial").value);

	sessionStorage.removeItem("Parent/Gaurdian 1 First Review");
	sessionStorage.setItem("Parent/Gaurdian 1 First Review", document.getElementById("parentGaurdian1First").value);

	sessionStorage.removeItem("Parent/Gaurdian 1 Final Review");
	sessionStorage.setItem("Parent/Gaurdian 1 Final Review", document.getElementById("parentGaurdian1Final").value);


	sessionStorage.removeItem("Parent/Gaurdian 2 Initial Review");
	sessionStorage.setItem("Parent/Gaurdian 2 Initial Review", document.getElementById("parentGaurdian2Initial").value);

	sessionStorage.removeItem("Parent/Gaurdian 2 First Review");
	sessionStorage.setItem("Parent/Gaurdian 2 First Review", document.getElementById("parentGaurdian2First").value);

	sessionStorage.removeItem("Parent/Gaurdian 2 Final Review");
	sessionStorage.setItem("Parent/Gaurdian 2 Final Review", document.getElementById("parentGaurdian2Final").value);
	
	
	sessionStorage.removeItem("Preschool Teacher Initial Review");
	sessionStorage.setItem("Preschool Teacher Initial Review", document.getElementById("preschoolTeacherInitial").value);

	sessionStorage.removeItem("Preschool Teacher First Review");
	sessionStorage.setItem("Preschool Teacher First Review", document.getElementById("preschoolTeacherFirst").value);

	sessionStorage.removeItem("Preschool Teacher Final Review");
	sessionStorage.setItem("Preschool Teacher Final Review", document.getElementById("preschoolTeacherFinal").value);
	
	
	sessionStorage.removeItem("Certificated Teacher Initial Review");
	sessionStorage.setItem("Certificated Teacher Initial Review", document.getElementById("certificatedTeacherInitial").value);
	
	sessionStorage.removeItem("Certificated Teacher First Review");
	sessionStorage.setItem("Certificated Teacher First Review", document.getElementById("certificatedTeacherFirst").value);
	
	sessionStorage.removeItem("Certificated Teacher Final Review");
	sessionStorage.setItem("Certificated Teacher Final Review", document.getElementById("certificatedTeacherFinal").value);
	
	
	sessionStorage.removeItem("Developmental Assistant Initial Review");
	sessionStorage.setItem("Developmental Assistant Initial Review", document.getElementById("developmentalAssistantInitial").value);
	
	sessionStorage.removeItem("Developmental Assistant First Review");
	sessionStorage.setItem("Developmental Assistant First Review", document.getElementById("developmentalAssistantFirst").value);
	
	sessionStorage.removeItem("Developmental Assistant Final Review");
	sessionStorage.setItem("Developmental Assistant Final Review", document.getElementById("developmentalAssistantFinal").value);
	
	
	sessionStorage.removeItem("Speech-Language Pathologist Initial Review");
	sessionStorage.setItem("Speech-Language Pathologist Initial Review", document.getElementById("SLPathologistInitial").value);
	
	sessionStorage.removeItem("Speech-Language Pathologist First Review");
	sessionStorage.setItem("Speech-Language Pathologist First Review", document.getElementById("SLPathologistFirst").value);

	sessionStorage.removeItem("Speech-Language Pathologist Final Review");
	sessionStorage.setItem("Speech-Language Pathologist Final Review", document.getElementById("SLPathologistFinal").value);


	sessionStorage.removeItem("Occupational Therapist Initial Review");
	sessionStorage.setItem("Occupational Therapist Initial Review", document.getElementById("occupationalTherapistInitial").value);

	sessionStorage.removeItem("Occupational Therapist First Review");
	sessionStorage.setItem("Occupational Therapist First Review", document.getElementById("occupationalTherapistFirst").value);
	
	sessionStorage.removeItem("Occupational Therapist Final Review");
	sessionStorage.setItem("Occupational Therapist Final Review", document.getElementById("occupationalTherapistFinal").value);
	
	
	sessionStorage.removeItem("Physiotherapist Initial Review");
	sessionStorage.setItem("Physiotherapist Initial Review", document.getElementById("physiotherapistInitial").value);	
	
	sessionStorage.removeItem("Physiotherapist First Review");
	sessionStorage.setItem("Physiotherapist First Review", document.getElementById("physiotherapistFirst").value);	
	
	sessionStorage.removeItem("Physiotherapist Final Review");
	sessionStorage.setItem("Physiotherapist Final Review", document.getElementById("physiotherapistFinal").value);	


	sessionStorage.removeItem("Psychologist Initial Review");
	sessionStorage.setItem("Psychologist Initial Review", document.getElementById("psychologistInitial").value);	
	
	sessionStorage.removeItem("Psychologist First Review");
	sessionStorage.setItem("Psychologist First Review", document.getElementById("psychologistFirst").value);
	
	sessionStorage.removeItem("Psychologist Final Review");
	sessionStorage.setItem("Psychologist Final Review", document.getElementById("psychologistFinal").value);
	

	sessionStorage.removeItem("Behaviour Specialist Initial Review");
	sessionStorage.setItem("Behaviour Specialist Initial Review", document.getElementById("behaviourSpecialistInitial").value);
	
	sessionStorage.removeItem("Behaviour Specialist First Review");
	sessionStorage.setItem("Behaviour Specialist First Review", document.getElementById("behaviourSpecialistFirst").value);
	
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


