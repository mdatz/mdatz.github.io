function fillExisting() {
	
	flatpickr(document.getElementById("preschoolStart"),{enableTime: true, noCalendar: true, dateFormat: "H:i", time_24hr: true});
	flatpickr(document.getElementById("preschoolEnd"),{enableTime: true, noCalendar: true, dateFormat: "H:i", time_24hr: true});
	flatpickr(document.getElementById("KiDSStart"),{enableTime: true, noCalendar: true, dateFormat: "H:i", time_24hr: true});
	flatpickr(document.getElementById("KiDSEnd"),{enableTime: true, noCalendar: true, dateFormat: "H:i", time_24hr: true});
	flatpickr(document.getElementById("homeProgrammingStart"),{enableTime: true, noCalendar: true, dateFormat: "H:i", time_24hr: true});
	flatpickr(document.getElementById("homeProgrammingEnd"),{enableTime: true, noCalendar: true, dateFormat: "H:i", time_24hr: true});
	
	var Preschool_Attendance = sessionStorage.getItem("Preschool Attendance String").split("");
	var KA_Attendance = sessionStorage.getItem("KA Attendance String").split("");
	var HA_Attendance = sessionStorage.getItem("HA Attendance String").split("");
	
	for(i = 0; i < (Preschool_Attendance.length); i++){
		if(Preschool_Attendance[i] == 1){
			sessionStorage.setItem("PAMonday", true);
		}
		if(Preschool_Attendance[i] == 2){
			sessionStorage.setItem("PATuesday", true);
		}
		if(Preschool_Attendance[i] == 3){
			sessionStorage.setItem("PAWednesday", true);
		}
		if(Preschool_Attendance[i] == 4){
			sessionStorage.setItem("PAThursday", true);
		}
		if(Preschool_Attendance[i] == 5){
			sessionStorage.setItem("PAFriday", true);
		}
	}
	
	for(i = 0; i < (KA_Attendance.length); i++){
		if(KA_Attendance[i] == 1){
			sessionStorage.setItem("KAMonday", true);
		}
		if(KA_Attendance[i] == 2){
			sessionStorage.setItem("KATuesday", true);
		}
		if(KA_Attendance[i] == 3){
			sessionStorage.setItem("KAWednesday", true);
		}
		if(KA_Attendance[i] == 4){
			sessionStorage.setItem("KAThursday", true);
		}
		if(KA_Attendance[i] == 5){
			sessionStorage.setItem("KAFriday", true);
		}
	}
	
	for(i = 0; i < (HA_Attendance.length); i++){
		if(HA_Attendance[i] == 1){
			sessionStorage.setItem("HAMonday", true);
		}
		if(HA_Attendance[i] == 2){
			sessionStorage.setItem("HATuesday", true);
		}
		if(HA_Attendance[i] == 3){
			sessionStorage.setItem("HAWednesday", true);
		}
		if(HA_Attendance[i] == 4){
			sessionStorage.setItem("HAThursday", true);
		}
		if(HA_Attendance[i] == 5){
			sessionStorage.setItem("HAFriday", true);
		}
	}
	
	if(sessionStorage.length != 0){
		//If Form Variables still Exist, fill the HTML Elements with the Stored Values
		document.getElementById("preschoolName").value = sessionStorage.getItem("Preschool Name");
		if(sessionStorage.getItem("PAMonday") == 'true'){document.getElementById("customCheck1").checked = true;}
		if(sessionStorage.getItem("PATuesday") == 'true'){document.getElementById("customCheck2").checked = true;}
		if(sessionStorage.getItem("PAWednesday") == 'true'){document.getElementById("customCheck3").checked = true;}
		if(sessionStorage.getItem("PAThursday") == 'true'){document.getElementById("customCheck4").checked = true;}
		if(sessionStorage.getItem("PAFriday") == 'true'){document.getElementById("customCheck5").checked = true;}
		document.getElementById("preschoolStart").value = sessionStorage.getItem("Preschool Start Time");
		document.getElementById("preschoolEnd").value = sessionStorage.getItem("Preschool End Time");
		if(sessionStorage.getItem("KAMonday") == 'true'){document.getElementById("customCheck11").checked = true;}
		if(sessionStorage.getItem("KATuesday") == 'true'){document.getElementById("customCheck12").checked = true;}
		if(sessionStorage.getItem("KAWednesday") == 'true'){document.getElementById("customCheck13").checked = true;}
		if(sessionStorage.getItem("KAThursday") == 'true'){document.getElementById("customCheck14").checked = true;}
		if(sessionStorage.getItem("KAFriday") == 'true'){document.getElementById("customCheck15").checked = true;}
		document.getElementById("KiDSStart").value = sessionStorage.getItem("KiDS Start Time");
		document.getElementById("KiDSEnd").value = sessionStorage.getItem("KiDS End Time");
		if(sessionStorage.getItem("HAMonday") == 'true'){document.getElementById("customCheck21").checked = true;}
		if(sessionStorage.getItem("HATuesday") == 'true'){document.getElementById("customCheck22").checked = true;}
		if(sessionStorage.getItem("HAWednesday") == 'true'){document.getElementById("customCheck23").checked = true;}
		if(sessionStorage.getItem("HAThursday") == 'true'){document.getElementById("customCheck24").checked = true;}
		if(sessionStorage.getItem("HAFriday") == 'true'){document.getElementById("customCheck25").checked = true;}
		document.getElementById("homeProgrammingStart").value = sessionStorage.getItem("Home Programming Start Time");
		document.getElementById("homeProgrammingEnd").value = sessionStorage.getItem("Home Programming End Time");	
		document.getElementById("preschoolTeacher").value = sessionStorage.getItem("Preschool Teacher");	
		document.getElementById("certificatedTeacher").value = sessionStorage.getItem("Certificated Teacher");	
		document.getElementById("developmentalAssistant").value = sessionStorage.getItem("Developmental Assistant");	
		document.getElementById("speechPathologist").value = sessionStorage.getItem("Speech Pathologist");	
		document.getElementById("occupationalTherapist").value = sessionStorage.getItem("Occupational Therapist");	
		document.getElementById("physiotherapist").value = sessionStorage.getItem("Physiotherapist");	
		document.getElementById("psychologist").value = sessionStorage.getItem("Psychologist");	
		document.getElementById("behaviouralSpecialist").value = sessionStorage.getItem("Behavioural Specialist");	
	}else{
		//console.log("Session Storage length is 0!");
	}
}
		
function next() {
	
	//Remove any existing items and add as new key
	sessionStorage.removeItem("Preschool Name");
	sessionStorage.setItem("Preschool Name", document.getElementById("preschoolName").value);
	
	//Reset Attendance Check Boxes
	sessionStorage.removeItem("Preschool Attendance String");
	sessionStorage.setItem("Preschool Attendance String", "");
	sessionStorage.removeItem("PAMonday");
	sessionStorage.removeItem("PATuesday");
	sessionStorage.removeItem("PAWednesday");
	sessionStorage.removeItem("PAThursday");
	sessionStorage.removeItem("PAFriday");
	var selection1 = document.getElementsByName("PAttendance");
	for(i = 0; i < selection1.length; i++){
		if(i == 0){if(selection1[i].checked){sessionStorage.setItem("PAMonday",true);sessionStorage.setItem("Preschool Attendance String",(sessionStorage.getItem("Preschool Attendance String") + "1"));}else{sessionStorage.setItem("PAMonday",false);}}
		if(i == 1){if(selection1[i].checked){sessionStorage.setItem("PATuesday",true);sessionStorage.setItem("Preschool Attendance String",(sessionStorage.getItem("Preschool Attendance String") + "2"));}else{sessionStorage.setItem("PATuesday",false);}}
		if(i == 2){if(selection1[i].checked){sessionStorage.setItem("PAWednesday",true);sessionStorage.setItem("Preschool Attendance String",(sessionStorage.getItem("Preschool Attendance String") + "3"));}else{sessionStorage.setItem("PAWednesday",false);}}
		if(i == 3){if(selection1[i].checked){sessionStorage.setItem("PAThursday",true);sessionStorage.setItem("Preschool Attendance String",(sessionStorage.getItem("Preschool Attendance String") + "4"));}else{sessionStorage.setItem("PAThursday",false);}}
		if(i == 4){if(selection1[i].checked){sessionStorage.setItem("PAFriday",true);sessionStorage.setItem("Preschool Attendance String",(sessionStorage.getItem("Preschool Attendance String") + "5"));}else{sessionStorage.setItem("PAFriday",false);}}
	}
	
	sessionStorage.removeItem("Preschool Start Time");
	sessionStorage.setItem("Preschool Start Time", document.getElementById("preschoolStart").value);

	sessionStorage.removeItem("Preschool End Time");
	sessionStorage.setItem("Preschool End Time", document.getElementById("preschoolEnd").value);
	
	sessionStorage.removeItem("KA Attendance String");
	sessionStorage.setItem("KA Attendance String", "");
	sessionStorage.removeItem("KAMonday");
	sessionStorage.removeItem("KATuesday");
	sessionStorage.removeItem("KAWednesday");
	sessionStorage.removeItem("KAThursday");
	sessionStorage.removeItem("KAFriday");
	var selection2 = document.getElementsByName("KAttendance");
	for(i = 0; i < selection2.length; i++){
		if(i == 0){if(selection2[i].checked){sessionStorage.setItem("KAMonday",true);sessionStorage.setItem("KA Attendance String",(sessionStorage.getItem("KA Attendance String") + "1"));}else{sessionStorage.setItem("KAMonday",false);}}
		if(i == 1){if(selection2[i].checked){sessionStorage.setItem("KATuesday",true);sessionStorage.setItem("KA Attendance String",(sessionStorage.getItem("KA Attendance String") + "2"));}else{sessionStorage.setItem("KATuesday",false);}}
		if(i == 2){if(selection2[i].checked){sessionStorage.setItem("KAWednesday",true);sessionStorage.setItem("KA Attendance String",(sessionStorage.getItem("KA Attendance String") + "3"));}else{sessionStorage.setItem("KAWednesday",false);}}
		if(i == 3){if(selection2[i].checked){sessionStorage.setItem("KAThursday",true);sessionStorage.setItem("KA Attendance String",(sessionStorage.getItem("KA Attendance String") + "4"));}else{sessionStorage.setItem("KAThursday",false);}}
		if(i == 4){if(selection2[i].checked){sessionStorage.setItem("KAFriday",true);sessionStorage.setItem("KA Attendance String",(sessionStorage.getItem("KA Attendance String") + "5"));}else{sessionStorage.setItem("KAFriday",false);}}
	}
	
	sessionStorage.removeItem("KiDS Start Time");
	sessionStorage.setItem("KiDS Start Time", document.getElementById("KiDSStart").value);

	sessionStorage.removeItem("KiDS End Time");
	sessionStorage.setItem("KiDS End Time", document.getElementById("KiDSEnd").value);
	
	sessionStorage.removeItem("HA Attendance String");
	sessionStorage.setItem("HA Attendance String", "");
	sessionStorage.removeItem("HAMonday");
	sessionStorage.removeItem("HATuesday");
	sessionStorage.removeItem("HAWednesday");
	sessionStorage.removeItem("HAThursday");
	sessionStorage.removeItem("HAFriday");
	var selection3 = document.getElementsByName("HAttendance");
	for(i = 0; i < selection3.length; i++){
		if(i == 0){if(selection3[i].checked){sessionStorage.setItem("HAMonday",true);sessionStorage.setItem("HA Attendance String",(sessionStorage.getItem("HA Attendance String") + "1"));}else{sessionStorage.setItem("HAMonday",false);}}
		if(i == 1){if(selection3[i].checked){sessionStorage.setItem("HATuesday",true);sessionStorage.setItem("HA Attendance String",(sessionStorage.getItem("HA Attendance String") + "2"));}else{sessionStorage.setItem("HATuesday",false);}}
		if(i == 2){if(selection3[i].checked){sessionStorage.setItem("HAWednesday",true);sessionStorage.setItem("HA Attendance String",(sessionStorage.getItem("HA Attendance String") + "3"));}else{sessionStorage.setItem("HAWednesday",false);}}
		if(i == 3){if(selection3[i].checked){sessionStorage.setItem("HAThursday",true);sessionStorage.setItem("HA Attendance String",(sessionStorage.getItem("HA Attendance String") + "4"));}else{sessionStorage.setItem("HAThursday",false);}}
		if(i == 4){if(selection3[i].checked){sessionStorage.setItem("HAFriday",true);sessionStorage.setItem("HA Attendance String",(sessionStorage.getItem("HA Attendance String") + "5"));}else{sessionStorage.setItem("HAFriday",false);}}
	}
	
	sessionStorage.removeItem("Home Programming Start Time");
	sessionStorage.setItem("Home Programming Start Time", document.getElementById("homeProgrammingStart").value);

	sessionStorage.removeItem("Home Programming End Time");
	sessionStorage.setItem("Home Programming End Time", document.getElementById("homeProgrammingEnd").value);	
	
	sessionStorage.removeItem("Preschool Teacher");
	sessionStorage.setItem("Preschool Teacher", document.getElementById("preschoolTeacher").value);
	
	sessionStorage.removeItem("Certificated Teacher");
	sessionStorage.setItem("Certificated Teacher", document.getElementById("certificatedTeacher").value);	

	sessionStorage.removeItem("Developmental Assistant");
	sessionStorage.setItem("Developmental Assistant", document.getElementById("developmentalAssistant").value);
	
	sessionStorage.removeItem("Speech Pathologist");
	sessionStorage.setItem("Speech Pathologist", document.getElementById("speechPathologist").value);

	sessionStorage.removeItem("Occupational Therapist");
	sessionStorage.setItem("Occupational Therapist", document.getElementById("occupationalTherapist").value);
	
	sessionStorage.removeItem("Physiotherapist");
	sessionStorage.setItem("Physiotherapist", document.getElementById("physiotherapist").value);
	
	sessionStorage.removeItem("Psychologist");
	sessionStorage.setItem("Psychologist", document.getElementById("psychologist").value);
	
	sessionStorage.removeItem("Behavioural Specialist");
	sessionStorage.setItem("Behavioural Specialist", document.getElementById("behaviouralSpecialist").value);
	
	//Return the next page
	return location.href = "./Page_3.html";
}

function previous() {
	
	//Remove any existing items and add as new key
	sessionStorage.removeItem("Preschool Name");
	sessionStorage.setItem("Preschool Name", document.getElementById("preschoolName").value);
	
		//Reset Attendance Check Boxes
	sessionStorage.removeItem("Preschool Attendance String");
	sessionStorage.setItem("Preschool Attendance String", "");
	sessionStorage.removeItem("PAMonday");
	sessionStorage.removeItem("PATuesday");
	sessionStorage.removeItem("PAWednesday");
	sessionStorage.removeItem("PAThursday");
	sessionStorage.removeItem("PAFriday");
	var selection1 = document.getElementsByName("PAttendance");
	for(i = 0; i < selection1.length; i++){
		if(i == 0){if(selection1[i].checked){sessionStorage.setItem("PAMonday",true);sessionStorage.setItem("Preschool Attendance String",(sessionStorage.getItem("Preschool Attendance String") + "1"));}else{sessionStorage.setItem("PAMonday",false);}}
		if(i == 1){if(selection1[i].checked){sessionStorage.setItem("PATuesday",true);sessionStorage.setItem("Preschool Attendance String",(sessionStorage.getItem("Preschool Attendance String") + "2"));}else{sessionStorage.setItem("PATuesday",false);}}
		if(i == 2){if(selection1[i].checked){sessionStorage.setItem("PAWednesday",true);sessionStorage.setItem("Preschool Attendance String",(sessionStorage.getItem("Preschool Attendance String") + "3"));}else{sessionStorage.setItem("PAWednesday",false);}}
		if(i == 3){if(selection1[i].checked){sessionStorage.setItem("PAThursday",true);sessionStorage.setItem("Preschool Attendance String",(sessionStorage.getItem("Preschool Attendance String") + "4"));}else{sessionStorage.setItem("PAThursday",false);}}
		if(i == 4){if(selection1[i].checked){sessionStorage.setItem("PAFriday",true);sessionStorage.setItem("Preschool Attendance String",(sessionStorage.getItem("Preschool Attendance String") + "5"));}else{sessionStorage.setItem("PAFriday",false);}}
	}
	
	sessionStorage.removeItem("Preschool Start Time");
	sessionStorage.setItem("Preschool Start Time", document.getElementById("preschoolStart").value);

	sessionStorage.removeItem("Preschool End Time");
	sessionStorage.setItem("Preschool End Time", document.getElementById("preschoolEnd").value);
	
	sessionStorage.removeItem("KA Attendance String");
	sessionStorage.setItem("KA Attendance String", "");
	sessionStorage.removeItem("KAMonday");
	sessionStorage.removeItem("KATuesday");
	sessionStorage.removeItem("KAWednesday");
	sessionStorage.removeItem("KAThursday");
	sessionStorage.removeItem("KAFriday");
	var selection2 = document.getElementsByName("KAttendance");
	for(i = 0; i < selection2.length; i++){
		if(i == 0){if(selection2[i].checked){sessionStorage.setItem("KAMonday",true);sessionStorage.setItem("KA Attendance String",(sessionStorage.getItem("KA Attendance String") + "1"));}else{sessionStorage.setItem("KAMonday",false);}}
		if(i == 1){if(selection2[i].checked){sessionStorage.setItem("KATuesday",true);sessionStorage.setItem("KA Attendance String",(sessionStorage.getItem("KA Attendance String") + "2"));}else{sessionStorage.setItem("KATuesday",false);}}
		if(i == 2){if(selection2[i].checked){sessionStorage.setItem("KAWednesday",true);sessionStorage.setItem("KA Attendance String",(sessionStorage.getItem("KA Attendance String") + "3"));}else{sessionStorage.setItem("KAWednesday",false);}}
		if(i == 3){if(selection2[i].checked){sessionStorage.setItem("KAThursday",true);sessionStorage.setItem("KA Attendance String",(sessionStorage.getItem("KA Attendance String") + "4"));}else{sessionStorage.setItem("KAThursday",false);}}
		if(i == 4){if(selection2[i].checked){sessionStorage.setItem("KAFriday",true);sessionStorage.setItem("KA Attendance String",(sessionStorage.getItem("KA Attendance String") + "5"));}else{sessionStorage.setItem("KAFriday",false);}}
	}
	
	sessionStorage.removeItem("KiDS Start Time");
	sessionStorage.setItem("KiDS Start Time", document.getElementById("KiDSStart").value);

	sessionStorage.removeItem("KiDS End Time");
	sessionStorage.setItem("KiDS End Time", document.getElementById("KiDSEnd").value);
	
	sessionStorage.removeItem("HA Attendance String");
	sessionStorage.setItem("HA Attendance String", "");
	sessionStorage.removeItem("HAMonday");
	sessionStorage.removeItem("HATuesday");
	sessionStorage.removeItem("HAWednesday");
	sessionStorage.removeItem("HAThursday");
	sessionStorage.removeItem("HAFriday");
	var selection3 = document.getElementsByName("HAttendance");
	for(i = 0; i < selection3.length; i++){
		if(i == 0){if(selection3[i].checked){sessionStorage.setItem("HAMonday",true);sessionStorage.setItem("HA Attendance String",(sessionStorage.getItem("HA Attendance String") + "1"));}else{sessionStorage.setItem("HAMonday",false);}}
		if(i == 1){if(selection3[i].checked){sessionStorage.setItem("HATuesday",true);sessionStorage.setItem("HA Attendance String",(sessionStorage.getItem("HA Attendance String") + "2"));}else{sessionStorage.setItem("HATuesday",false);}}
		if(i == 2){if(selection3[i].checked){sessionStorage.setItem("HAWednesday",true);sessionStorage.setItem("HA Attendance String",(sessionStorage.getItem("HA Attendance String") + "3"));}else{sessionStorage.setItem("HAWednesday",false);}}
		if(i == 3){if(selection3[i].checked){sessionStorage.setItem("HAThursday",true);sessionStorage.setItem("HA Attendance String",(sessionStorage.getItem("HA Attendance String") + "4"));}else{sessionStorage.setItem("HAThursday",false);}}
		if(i == 4){if(selection3[i].checked){sessionStorage.setItem("HAFriday",true);sessionStorage.setItem("HA Attendance String",(sessionStorage.getItem("HA Attendance String") + "5"));}else{sessionStorage.setItem("HAFriday",false);}}
	}
	
	sessionStorage.removeItem("Home Programming Start Time");
	sessionStorage.setItem("Home Programming Start Time", document.getElementById("homeProgrammingStart").value);

	sessionStorage.removeItem("Home Programming End Time");
	sessionStorage.setItem("Home Programming End Time", document.getElementById("homeProgrammingEnd").value);	
	
	sessionStorage.removeItem("Preschool Teacher");
	sessionStorage.setItem("Preschool Teacher", document.getElementById("preschoolTeacher").value);
	
	sessionStorage.removeItem("Certificated Teacher");
	sessionStorage.setItem("Certificated Teacher", document.getElementById("certificatedTeacher").value);	

	sessionStorage.removeItem("Developmental Assistant");
	sessionStorage.setItem("Developmental Assistant", document.getElementById("developmentalAssistant").value);
	
	sessionStorage.removeItem("Speech Pathologist");
	sessionStorage.setItem("Speech Pathologist", document.getElementById("speechPathologist").value);

	sessionStorage.removeItem("Occupational Therapist");
	sessionStorage.setItem("Occupational Therapist", document.getElementById("occupationalTherapist").value);
	
	sessionStorage.removeItem("Physiotherapist");
	sessionStorage.setItem("Physiotherapist", document.getElementById("physiotherapist").value);
	
	sessionStorage.removeItem("Psychologist");
	sessionStorage.setItem("Psychologist", document.getElementById("psychologist").value);
	
	sessionStorage.removeItem("Behavioural Specialist");
	sessionStorage.setItem("Behavioural Specialist", document.getElementById("behaviouralSpecialist").value);
	
	//Return the previous page
	return location.href = "./Page_1.html";
}