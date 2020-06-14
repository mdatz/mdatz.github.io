function fillExisting(){
	
	//If Form Variables still Exist, fill the HTML Elements with the Stored Values
	document.getElementById("preschoolName1").value = sessionStorage.getItem("Preschool Name 1");
	document.getElementById("preschoolStartDate1").value = sessionStorage.getItem("Preschool Start Date 1");
	document.getElementById("preschoolEndDate1").value = sessionStorage.getItem("Preschool End Date 1");
	document.getElementById("familyInformation").value = sessionStorage.getItem("Family Information");
	document.getElementById("familyDoctor").value = sessionStorage.getItem("Family Doctor");
	document.getElementById("familyDoctorVisit").value = sessionStorage.getItem("Last Family Doctor Visit");
	document.getElementById("pediatrician").value = sessionStorage.getItem("Pediatrician");
	document.getElementById("pediatricianVisit").value = sessionStorage.getItem("Last Pediatrician Visit");
	document.getElementById("hearingScreen").value = sessionStorage.getItem("Hearing Screen");
	document.getElementById("hearingScreenVisit").value = sessionStorage.getItem("Last Hearing Screen Visit");
	document.getElementById("visionScreen").value = sessionStorage.getItem("Vision Screen");
	document.getElementById("visionScreenVisit").value = sessionStorage.getItem("Last Vision Screen Visit");
	document.getElementById("medicalAllergies").value = sessionStorage.getItem("Allergies");
	document.getElementById("medicalMedications").value = sessionStorage.getItem("Medications");
	document.getElementById("medicalOther").value = sessionStorage.getItem("Other Medical Information");
	document.getElementById("childStrengths").value = sessionStorage.getItem("Child's Strengths");
	document.getElementById("childAreasGrowth").value = sessionStorage.getItem("Child's Areas of Growth");
	document.getElementById("parentPriorities").value = sessionStorage.getItem("Parent Priorities");
}

function next(){

	//Remove any existing items and add as new key
	sessionStorage.removeItem("Preschool Name 1");
	sessionStorage.setItem("Preschool Name 1", document.getElementById("preschoolName1").value);

	sessionStorage.removeItem("Preschool Start Date 1");
	sessionStorage.setItem("Preschool Start Date 1", document.getElementById("preschoolStartDate1").value);

	sessionStorage.removeItem("Preschool End Date 1");
	sessionStorage.setItem("Preschool End Date 1", document.getElementById("preschoolEndDate1").value);

	sessionStorage.removeItem("Family Information");
	sessionStorage.setItem("Family Information", document.getElementById("familyInformation").value);
	
	sessionStorage.removeItem("Family Doctor");
	sessionStorage.setItem("Family Doctor", document.getElementById("familyDoctor").value);
	
	sessionStorage.removeItem("Last Family Doctor Visit");
	sessionStorage.setItem("Last Family Doctor Visit", document.getElementById("familyDoctorVisit").value);
	
	sessionStorage.removeItem("Pediatrician");
	sessionStorage.setItem("Pediatrician", document.getElementById("pediatrician").value);
	
	sessionStorage.removeItem("Last Pediatrician Visit");
	sessionStorage.setItem("Last Pediatrician Visit", document.getElementById("pediatricianVisit").value);
	
	sessionStorage.removeItem("Hearing Screen");
	sessionStorage.setItem("Hearing Screen", document.getElementById("hearingScreen").value);
	
	sessionStorage.removeItem("Last Hearing Screen Visit");
	sessionStorage.setItem("Last Hearing Screen Visit", document.getElementById("hearingScreenVisit").value);

	sessionStorage.removeItem("Vision Screen");
	sessionStorage.setItem("Vision Screen", document.getElementById("visionScreen").value);
	
	sessionStorage.removeItem("Last Vision Screen Visit");
	sessionStorage.setItem("Last Vision Screen Visit", document.getElementById("visionScreenVisit").value);
	
	sessionStorage.removeItem("Allergies");
	sessionStorage.setItem("Allergies", document.getElementById("medicalAllergies").value);
	
	sessionStorage.removeItem("Medications");
	sessionStorage.setItem("Medications", document.getElementById("medicalMedications").value);
	
	sessionStorage.removeItem("Other Medical Information");
	sessionStorage.setItem("Other Medical Information", document.getElementById("medicalOther").value);

	sessionStorage.removeItem("Child's Strengths");
	sessionStorage.setItem("Child's Strengths", document.getElementById("childStrengths").value);

	sessionStorage.removeItem("Child's Areas of Growth");
	sessionStorage.setItem("Child's Areas of Growth", document.getElementById("childAreasGrowth").value);

	sessionStorage.removeItem("Parent Priorities");
	sessionStorage.setItem("Parent Priorities", document.getElementById("parentPriorities").value);

	return location.href = "./Page_4.html";
}

function previous(){

	//Remove any existing items and add as new key
	sessionStorage.removeItem("Preschool Name 1");
	sessionStorage.setItem("Preschool Name 1", document.getElementById("preschoolName1").value);

	sessionStorage.removeItem("Preschool Start Date 1");
	sessionStorage.setItem("Preschool Start Date 1", document.getElementById("preschoolStartDate1").value);

	sessionStorage.removeItem("Preschool End Date 1");
	sessionStorage.setItem("Preschool End Date 1", document.getElementById("preschoolEndDate1").value);

	sessionStorage.removeItem("Family Information");
	sessionStorage.setItem("Family Information", document.getElementById("familyInformation").value);
	
	sessionStorage.removeItem("Family Doctor");
	sessionStorage.setItem("Family Doctor", document.getElementById("familyDoctor").value);
	
	sessionStorage.removeItem("Last Family Doctor Visit");
	sessionStorage.setItem("Last Family Doctor Visit", document.getElementById("familyDoctorVisit").value);
	
	sessionStorage.removeItem("Pediatrician");
	sessionStorage.setItem("Pediatrician", document.getElementById("pediatrician").value);
	
	sessionStorage.removeItem("Last Pediatrician Visit");
	sessionStorage.setItem("Last Pediatrician Visit", document.getElementById("pediatricianVisit").value);
	
	sessionStorage.removeItem("Hearing Screen");
	sessionStorage.setItem("Hearing Screen", document.getElementById("hearingScreen").value);
	
	sessionStorage.removeItem("Last Hearing Screen Visit");
	sessionStorage.setItem("Last Hearing Screen Visit", document.getElementById("hearingScreenVisit").value);

	sessionStorage.removeItem("Vision Screen");
	sessionStorage.setItem("Vision Screen", document.getElementById("visionScreen").value);
	
	sessionStorage.removeItem("Last Vision Screen Visit");
	sessionStorage.setItem("Last Vision Screen Visit", document.getElementById("visionScreenVisit").value);
	
	sessionStorage.removeItem("Allergies");
	sessionStorage.setItem("Allergies", document.getElementById("medicalAllergies").value);
	
	sessionStorage.removeItem("Medications");
	sessionStorage.setItem("Medications", document.getElementById("medicalMedications").value);
	
	sessionStorage.removeItem("Other Medical Information");
	sessionStorage.setItem("Other Medical Information", document.getElementById("medicalOther").value);

	sessionStorage.removeItem("Child's Strengths");
	sessionStorage.setItem("Child's Strengths", document.getElementById("childStrengths").value);

	sessionStorage.removeItem("Child's Areas of Growth");
	sessionStorage.setItem("Child's Areas of Growth", document.getElementById("childAreasGrowth").value);

	sessionStorage.removeItem("Parent Priorities");
	sessionStorage.setItem("Parent Priorities", document.getElementById("parentPriorities").value);

	return location.href = "./Page_2.html";
}