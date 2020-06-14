function fillExisting(){
	
	//If Form Variables still Exist, fill the HTML Elements with the Stored Values
	document.getElementById("initialCELFTestResult").value = sessionStorage.getItem("Initial CELF Test Result");
	document.getElementById("initialCELFTestTherapist").value = sessionStorage.getItem("Initial CELF Test Therapist");
	document.getElementById("initialCELFTestDate").value = sessionStorage.getItem("Initial CELF Test Date");
	
	document.getElementById("finalCELFTestResult").value = sessionStorage.getItem("Final CELF Test Result");
	document.getElementById("finalCELFTestTherapist").value = sessionStorage.getItem("Final CELF Test Therapist");
	document.getElementById("finalCELFTestDate").value = sessionStorage.getItem("Final CELF Test Date");
	
	document.getElementById("finalPLSTestResult").value = sessionStorage.getItem("Final PLS Test Result");
	document.getElementById("finalPLSTestTherapist").value = sessionStorage.getItem("Final PLS Test Therapist");
	document.getElementById("finalPLSTestDate").value = sessionStorage.getItem("Final PLS Test Date");
	
	document.getElementById("finalGFTATestResult").value = sessionStorage.getItem("Final GFTA Test Result");
	document.getElementById("finalGFTATestTherapist").value = sessionStorage.getItem("Final GFTA Test Therapist");
	document.getElementById("finalGFTATestDate").value = sessionStorage.getItem("Final GFTA Test Date");
	
	document.getElementById("initialPDMSTestResult").value = sessionStorage.getItem("Initial PDMS Test Result");
	document.getElementById("initialPDMSTestTherapist").value = sessionStorage.getItem("Initial PDMS Test Therapist");
	document.getElementById("initialPDMSTestDate").value = sessionStorage.getItem("Initial PDMS Test Date");
	
	document.getElementById("finalPDMSTestResult").value = sessionStorage.getItem("Final PDMS Test Result");
	document.getElementById("finalPDMSTestTherapist").value = sessionStorage.getItem("Final PDMS Test Therapist");
	document.getElementById("finalPDMSTestDate").value = sessionStorage.getItem("Final PDMS Test Date");
	
	document.getElementById("finalMFUNTestResult").value = sessionStorage.getItem("Final MFUN Test Result");
	document.getElementById("finalMFUNTestTherapist").value = sessionStorage.getItem("Final MFUN Test Therapist");
	document.getElementById("finalMFUNTestDate").value = sessionStorage.getItem("Final MFUN Test Date");
	
	document.getElementById("finalSP2TestResult").value = sessionStorage.getItem("Final SP2 Test Result");
	document.getElementById("finalSP2TestTherapist").value = sessionStorage.getItem("Final SP2 Test Therapist");
	document.getElementById("finalSP2TestDate").value = sessionStorage.getItem("Final SP2 Test Date");
	
	document.getElementById("initialReviewDate").value = sessionStorage.getItem("Initial Review Date");
	document.getElementById("firstReviewDate").value = sessionStorage.getItem("First Review Date");
	document.getElementById("finalReviewDate").value = sessionStorage.getItem("Final Review Date");
}

function next(){
	
	//Remove any existing items and add as new key
	sessionStorage.removeItem("Initial CELF Test Result");
	sessionStorage.setItem("Initial CELF Test Result", document.getElementById("initialCELFTestResult").value);
	
	sessionStorage.removeItem("Initial CELF Test Therapist");
	sessionStorage.setItem("Initial CELF Test Therapist", document.getElementById("initialCELFTestTherapist").value);
	
	sessionStorage.removeItem("Initial CELF Test Date");
	sessionStorage.setItem("Initial CELF Test Date", document.getElementById("initialCELFTestDate").value);
	
	sessionStorage.removeItem("Final CELF Test Result");
	sessionStorage.setItem("Final CELF Test Result", document.getElementById("finalCELFTestResult").value);
	
	sessionStorage.removeItem("Final CELF Test Therapist");
	sessionStorage.setItem("Final CELF Test Therapist", document.getElementById("finalCELFTestTherapist").value);
	
	sessionStorage.removeItem("Final CELF Test Date");
	sessionStorage.setItem("Final CELF Test Date", document.getElementById("finalCELFTestDate").value);
	
	sessionStorage.removeItem("Final PLS Test Result");
	sessionStorage.setItem("Final PLS Test Result", document.getElementById("finalPLSTestResult").value);
	
	sessionStorage.removeItem("Final PLS Test Therapist");
	sessionStorage.setItem("Final PLS Test Therapist", document.getElementById("finalPLSTestTherapist").value);
	
	sessionStorage.removeItem("Final PLS Test Date");
	sessionStorage.setItem("Final PLS Test Date", document.getElementById("finalPLSTestDate").value);
	
	sessionStorage.removeItem("Final GFTA Test Result");
	sessionStorage.setItem("Final GFTA Test Result", document.getElementById("finalGFTATestResult").value);
	
	sessionStorage.removeItem("Final GFTA Test Therapist");
	sessionStorage.setItem("Final GFTA Test Therapist", document.getElementById("finalGFTATestTherapist").value);
	
	sessionStorage.removeItem("Final GFTA Test Date");
	sessionStorage.setItem("Final GFTA Test Date", document.getElementById("finalGFTATestDate").value);

	sessionStorage.removeItem("Initial PDMS Test Result");
	sessionStorage.setItem("Initial PDMS Test Result", document.getElementById("initialPDMSTestResult").value);
	
	sessionStorage.removeItem("Initial PDMS Test Therapist");
	sessionStorage.setItem("Initial PDMS Test Therapist", document.getElementById("initialPDMSTestTherapist").value);
	
	sessionStorage.removeItem("Initial PDMS Test Date");
	sessionStorage.setItem("Initial PDMS Test Date", document.getElementById("initialPDMSTestDate").value);
	
	sessionStorage.removeItem("Final PDMS Test Result");
	sessionStorage.setItem("Final PDMS Test Result", document.getElementById("finalPDMSTestResult").value);
	
	sessionStorage.removeItem("Final PDMS Test Therapist");
	sessionStorage.setItem("Final PDMS Test Therapist", document.getElementById("finalPDMSTestTherapist").value);
	
	sessionStorage.removeItem("Final PDMS Test Date");
	sessionStorage.setItem("Final PDMS Test Date", document.getElementById("finalPDMSTestDate").value);	
	
	sessionStorage.removeItem("Final MFUN Test Result");
	sessionStorage.setItem("Final MFUN Test Result", document.getElementById("finalMFUNTestResult").value);
	
	sessionStorage.removeItem("Final MFUN Test Therapist");
	sessionStorage.setItem("Final MFUN Test Therapist", document.getElementById("finalMFUNTestTherapist").value);
	
	sessionStorage.removeItem("Final MFUN Test Date");
	sessionStorage.setItem("Final MFUN Test Date", document.getElementById("finalMFUNTestDate").value);	
	
	sessionStorage.removeItem("Final SP2 Test Result");
	sessionStorage.setItem("Final SP2 Test Result", document.getElementById("finalSP2TestResult").value);
	
	sessionStorage.removeItem("Final SP2 Test Therapist");
	sessionStorage.setItem("Final SP2 Test Therapist", document.getElementById("finalSP2TestTherapist").value);
	
	sessionStorage.removeItem("Final SP2 Test Date");
	sessionStorage.setItem("Final SP2 Test Date", document.getElementById("finalSP2TestDate").value);	

	sessionStorage.removeItem("Initial Review Date");
	sessionStorage.setItem("Initial Review Date", document.getElementById("initialReviewDate").value);
	
	sessionStorage.removeItem("First Review Date");
	sessionStorage.setItem("First Review Date", document.getElementById("firstReviewDate").value);
	
	sessionStorage.removeItem("Final Review Date");
	sessionStorage.setItem("Final Review Date", document.getElementById("finalReviewDate").value);	

	return location.href = "./Page_5.html";
}

function previous(){
	
	//Remove any existing items and add as new key
	sessionStorage.removeItem("Initial CELF Test Result");
	sessionStorage.setItem("Initial CELF Test Result", document.getElementById("initialCELFTestResult").value);
	
	sessionStorage.removeItem("Initial CELF Test Therapist");
	sessionStorage.setItem("Initial CELF Test Therapist", document.getElementById("initialCELFTestTherapist").value);
	
	sessionStorage.removeItem("Initial CELF Test Date");
	sessionStorage.setItem("Initial CELF Test Date", document.getElementById("initialCELFTestDate").value);
	
	sessionStorage.removeItem("Final CELF Test Result");
	sessionStorage.setItem("Final CELF Test Result", document.getElementById("finalCELFTestResult").value);
	
	sessionStorage.removeItem("Final CELF Test Therapist");
	sessionStorage.setItem("Final CELF Test Therapist", document.getElementById("finalCELFTestTherapist").value);
	
	sessionStorage.removeItem("Final CELF Test Date");
	sessionStorage.setItem("Final CELF Test Date", document.getElementById("finalCELFTestDate").value);
	
	sessionStorage.removeItem("Final PLS Test Result");
	sessionStorage.setItem("Final PLS Test Result", document.getElementById("finalPLSTestResult").value);
	
	sessionStorage.removeItem("Final PLS Test Therapist");
	sessionStorage.setItem("Final PLS Test Therapist", document.getElementById("finalPLSTestTherapist").value);
	
	sessionStorage.removeItem("Final PLS Test Date");
	sessionStorage.setItem("Final PLS Test Date", document.getElementById("finalPLSTestDate").value);
	
	sessionStorage.removeItem("Final GFTA Test Result");
	sessionStorage.setItem("Final GFTA Test Result", document.getElementById("finalGFTATestResult").value);
	
	sessionStorage.removeItem("Final GFTA Test Therapist");
	sessionStorage.setItem("Final GFTA Test Therapist", document.getElementById("finalGFTATestTherapist").value);
	
	sessionStorage.removeItem("Final GFTA Test Date");
	sessionStorage.setItem("Final GFTA Test Date", document.getElementById("finalGFTATestDate").value);

	sessionStorage.removeItem("Initial PDMS Test Result");
	sessionStorage.setItem("Initial PDMS Test Result", document.getElementById("initialPDMSTestResult").value);
	
	sessionStorage.removeItem("Initial PDMS Test Therapist");
	sessionStorage.setItem("Initial PDMS Test Therapist", document.getElementById("initialPDMSTestTherapist").value);
	
	sessionStorage.removeItem("Initial PDMS Test Date");
	sessionStorage.setItem("Initial PDMS Test Date", document.getElementById("initialPDMSTestDate").value);
	
	sessionStorage.removeItem("Final PDMS Test Result");
	sessionStorage.setItem("Final PDMS Test Result", document.getElementById("finalPDMSTestResult").value);
	
	sessionStorage.removeItem("Final PDMS Test Therapist");
	sessionStorage.setItem("Final PDMS Test Therapist", document.getElementById("finalPDMSTestTherapist").value);
	
	sessionStorage.removeItem("Final PDMS Test Date");
	sessionStorage.setItem("Final PDMS Test Date", document.getElementById("finalPDMSTestDate").value);	
	
	sessionStorage.removeItem("Final MFUN Test Result");
	sessionStorage.setItem("Final MFUN Test Result", document.getElementById("finalMFUNTestResult").value);
	
	sessionStorage.removeItem("Final MFUN Test Therapist");
	sessionStorage.setItem("Final MFUN Test Therapist", document.getElementById("finalMFUNTestTherapist").value);
	
	sessionStorage.removeItem("Final MFUN Test Date");
	sessionStorage.setItem("Final MFUN Test Date", document.getElementById("finalMFUNTestDate").value);	
	
	sessionStorage.removeItem("Final SP2 Test Result");
	sessionStorage.setItem("Final SP2 Test Result", document.getElementById("finalSP2TestResult").value);
	
	sessionStorage.removeItem("Final SP2 Test Therapist");
	sessionStorage.setItem("Final SP2 Test Therapist", document.getElementById("finalSP2TestTherapist").value);
	
	sessionStorage.removeItem("Final SP2 Test Date");
	sessionStorage.setItem("Final SP2 Test Date", document.getElementById("finalSP2TestDate").value);	

	sessionStorage.removeItem("Initial Review Date");
	sessionStorage.setItem("Initial Review Date", document.getElementById("initialReviewDate").value);
	
	sessionStorage.removeItem("First Review Date");
	sessionStorage.setItem("First Review Date", document.getElementById("firstReviewDate").value);
	
	sessionStorage.removeItem("Final Review Date");
	sessionStorage.setItem("Final Review Date", document.getElementById("finalReviewDate").value);	
	
	return location.href = "./Page_3.html";
}