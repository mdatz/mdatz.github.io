
//Global Variable for Number of Goals used
var num_goals;

function createForm(){
	
	//Handle PDF Form Data
	var templatePDF = this.response;
	var fields = pdfform().list_fields(templatePDF);
	
	//Debugging Output
	console.log(fields);
	
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
	
	fields['Preschool Attendance Hidden'] = [sessionStorage.getItem("Preschool Attendance String")];
	fields['Kids Playtime Attendance Hidden'] = [sessionStorage.getItem("KA Attendance String")];
	fields['Home Programming Attendance Hidden'] = [sessionStorage.getItem("HA Attendance String")];
	
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
	
	//Attendance Fields
	if(sessionStorage.getItem("Parent 1 Initial Attendance") != null){
		fields['Parent 1 Attendance Initial'] = [sessionStorage.getItem("Parent 1 Initial Attendance")];
	}else{
		fields['Parent 1 Attendance Initial'] = ["-"];
	}
	if(sessionStorage.getItem("Parent 1 Second Attendance") != null){
		fields['Parent 1 Attendance First'] = [sessionStorage.getItem("Parent 1 Second Attendance")];
	}else{
		fields['Parent 1 Attendance First'] = ["-"];
	}
	if(sessionStorage.getItem("Parent 1 Final Attendance") != null){
		fields['Parent 1 Attendance Final'] = [sessionStorage.getItem("Parent 1 Final Attendance")];
	}else{
		fields['Parent 1 Attendance Final'] = ["-"];
	}

	if(sessionStorage.getItem("Parent 2 Initial Attendance") != null){
		fields['Parent 2 Attendance Initial'] = [sessionStorage.getItem("Parent 2 Initial Attendance")];
	}else{
		fields['Parent 2 Attendance Initial'] = ["-"];
	}
	if(sessionStorage.getItem("Parent 2 Second Attendance") != null){
		fields['Parent 2 Attendance First'] = [sessionStorage.getItem("Parent 2 Second Attendance")];
	}else{
		fields['Parent 2 Attendance First'] = ["-"];
	}
	if(sessionStorage.getItem("Parent 2 Final Attendance") != null){
		fields['Parent 2 Attendance Final'] = [sessionStorage.getItem("Parent 2 Final Attendance")];
	}else{
		fields['Parent 2 Attendance Final'] = ["-"];
	}
	
	if(sessionStorage.getItem("Preschool Teacher Initial Attendance") != null){
		fields['Preschool Teacher Attendance Initial'] = [sessionStorage.getItem("Preschool Teacher Initial Attendance")];
	}else{
		fields['Preschool Teacher Attendance Initial'] = ["-"];
	}
	if(sessionStorage.getItem("Preschool Teacher Second Attendance") != null){
		fields['Preschool Teacher Attendance First'] = [sessionStorage.getItem("Preschool Teacher Second Attendance")];
	}else{
		fields['Preschool Teacher Attendance First'] = ["-"];
	}
	if(sessionStorage.getItem("Preschool Teacher Final Attendance") != null){
		fields['Preschool Teacher Attendance Final'] = [sessionStorage.getItem("Preschool Teacher Final Attendance")];
	}else{
		fields['Preschool Teacher Attendance Final'] = ["-"];
	}
	
	if(sessionStorage.getItem("Certificated Teacher Initial Attendance") != null){
		fields['Certificated Teacher Attendance Initial'] = [sessionStorage.getItem("Certificated Teacher Initial Attendance")];
	}else{
		fields['Certificated Teacher Attendance Initial'] = ["-"];
	}
	if(sessionStorage.getItem("Certificated Teacher Second Attendance") != null){
		fields['Certificated Teacher Attendance First'] = [sessionStorage.getItem("Certificated Teacher Second Attendance")];
	}else{
		fields['Certificated Teacher Attendance First'] = ["-"];
	}
	if(sessionStorage.getItem("Certificated Teacher Final Attendance") != null){
		fields['Certificated Teacher Attendance Final'] = [sessionStorage.getItem("Certificated Teacher Final Attendance")];
	}else{
		fields['Certificated Teacher Attendance Final'] = ["-"];
	}
	
	if(sessionStorage.getItem("Developmental Assistant Initial Attendance") != null){
		fields['Developmental Assistant Attendance Initial'] = [sessionStorage.getItem("Developmental Assistant Initial Attendance")];
	}else{
		fields['Developmental Assistant Attendance Initial'] = ["-"];
	}
	if(sessionStorage.getItem("Developmental Assistant Second Attendance") != null){
		fields['Developmental Assistant Attendance First'] = [sessionStorage.getItem("Developmental Assistant Second Attendance")];
	}else{
		fields['Developmental Assistant Attendance First'] = ["-"];
	}
	if(sessionStorage.getItem("Developmental Assistant Final Attendance") != null){
		fields['Developmental Assistant Attendance Final'] = [sessionStorage.getItem("Developmental Assistant Final Attendance")];
	}else{
		fields['Developmental Assistant Attendance Final'] = ["-"];
	}
		
	if(sessionStorage.getItem("Occupational Therapist Initial Attendance") != null){
		fields['Occupational Therapist Attendance Initial'] = [sessionStorage.getItem("Occupational Therapist Initial Attendance")];
	}else{
		fields['Occupational Therapist Attendance Initial'] = ["-"];
	}
	if(sessionStorage.getItem("Occupational Therapist Second Attendance") != null){
		fields['Occupational Therapist Attendance First'] = [sessionStorage.getItem("Occupational Therapist Second Attendance")];
	}else{
		fields['Occupational Therapist Attendance First'] = ["-"];
	}
	if(sessionStorage.getItem("Occupational Therapist Final Attendance") != null){
		fields['Occupational Therapist Attendance Final'] = [sessionStorage.getItem("Occupational Therapist Final Attendance")];
	}else{
		fields['Occupational Therapist Attendance Final'] = ["-"];
	}
	
	if(sessionStorage.getItem("Physiotherapist Initial Attendance") != null){
		fields['Physiotherapist Attendance Initial'] = [sessionStorage.getItem("Physiotherapist Initial Attendance")];
	}else{
		fields['Physiotherapist Attendance Initial'] = ["-"];
	}
	if(sessionStorage.getItem("Physiotherapist Second Attendance") != null){
		fields['Physiotherapist Attendance First'] = [sessionStorage.getItem("Physiotherapist Second Attendance")];
	}else{
		fields['Physiotherapist Attendance First'] = ["-"];
	}
	if(sessionStorage.getItem("Physiotherapist Final Attendance") != null){
		fields['Physiotherapist Attendance Final'] = [sessionStorage.getItem("Physiotherapist Final Attendance")];
	}else{
		fields['Physiotherapist Attendance Final'] = ["-"];
	}
	
	if(sessionStorage.getItem("Psychologist Initial Attendance") != null){
		fields['Psychologist Attendance Initial'] = [sessionStorage.getItem("Psychologist Initial Attendance")];
	}else{
		fields['Psychologist Attendance Initial'] = ["-"];
	}
	if(sessionStorage.getItem("Psychologist Second Attendance") != null){
		fields['Psychologist Attendance First'] = [sessionStorage.getItem("Psychologist Second Attendance")];
	}else{
		fields['Psychologist Attendance First'] = ["-"];
	}
	if(sessionStorage.getItem("Psychologist Final Attendance") != null){
		fields['Psychologist Attendance Final'] = [sessionStorage.getItem("Psychologist Final Attendance")];
	}else{
		fields['Psychologist Attendance Final'] = ["-"];
	}
	
	if(sessionStorage.getItem("Speech-Language Pathologist Initial Attendance") != null){
		fields['Speech-Language Pathologist Attendance Initial'] = [sessionStorage.getItem("Speech-Language Pathologist Initial Attendance")];
	}else{
		fields['Speech-Language Pathologist Attendance Initial'] = ["-"];
	}
	if(sessionStorage.getItem("Speech-Language Pathologist Second Attendance") != null){
		fields['Speech-Language Pathologist Attendance First'] = [sessionStorage.getItem("Speech-Language Pathologist Second Attendance")];
	}else{
		fields['Speech-Language Pathologist Attendance First'] = ["-"];
	}
	if(sessionStorage.getItem("Speech-Language Pathologist Final Attendance") != null){
		fields['Speech-Language Pathologist Attendance Final'] = [sessionStorage.getItem("Speech-Language Pathologist Final Attendance")];
	}else{
		fields['Speech-Language Pathologist Attendance Final'] = ["-"];
	}
	
	if(sessionStorage.getItem("Child-Development Specialist Initial Attendance") != null){
		fields['Child Development Specialist Attendance Initial'] = [sessionStorage.getItem("Child-Development Specialist Initial Attendance")];
	}else{
		fields['Child Development Specialist Attendance Initial'] = ["-"];
	}
	if(sessionStorage.getItem("Child-Development Specialist Second Attendance") != null){
		fields['Child Development Specialist Attendance First'] = [sessionStorage.getItem("Child-Development Specialist Second Attendance")];
	}else{
		fields['Child Development Specialist Attendance First'] = ["-"];
	}
	if(sessionStorage.getItem("Child-Development Specialist Final Attendance") != null){
		fields['Child Development Specialist Attendance Final'] = [sessionStorage.getItem("Child-Development Specialist Final Attendance")];
	}else{
		fields['Child Development Specialist Attendance Final'] = ["-"];
	}	
	
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
	fields['Footer 12'] = [sessionStorage.getItem("Child Last Name") + ", " + sessionStorage.getItem("Child First Name")];
	
	
	//Generate Dates for Form Headers
	//Turnover: (August 1)
	var yearFinish;
	var yearSpan;
	var yearCheck = new Date();
	if(yearCheck.getMonth() >= 6){
		yearFinish = [yearCheck.getFullYear() + 1];
		yearSpan = [yearCheck.getFullYear() + " - " + (yearCheck.getFullYear()+1)];
	}else{
		yearFinish = [yearCheck.getFullYear()];
		yearSpan = [(yearCheck.getFullYear()-1) + " - " + yearCheck.getFullYear()];
	}
	
	//Fill Goal Dates
	fields['Goal End Date 1'] = [yearFinish];
	fields['Goal End Date 2'] = [yearFinish];
	fields['Goal End Date 3'] = [yearFinish];
	fields['Goal End Date 4'] = [yearFinish];
	fields['PUF Header Year'] = [yearSpan];
	fields['Next September Year'] = ["September 1, " + yearFinish];
	fields['Academic Year Attendance Page'] = [yearSpan];
	fields['Academic Year Signature Page'] = [yearSpan];
	fields['Child Name Attendance Page'] = [sessionStorage.getItem("Child First Name") + " " + sessionStorage.getItem("Child Last Name")];
	fields['Child Name Signature Page'] = [sessionStorage.getItem("Child First Name") + " " + sessionStorage.getItem("Child Last Name")];
	
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
	
		//Attendance Fields
	if(sessionStorage.getItem("Parent 1 Initial Attendance") != null){
		document.getElementById('parentGaurdian1Initial').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Parent 1 Second Attendance") != null){
		document.getElementById('parentGaurdian1Second').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Parent 1 Final Attendance") != null){
		document.getElementById('parentGaurdian1Final').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Parent 2 Initial Attendance") != null){
		document.getElementById('parentGaurdian2Initial').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Parent 2 Second Attendance") != null){
		document.getElementById('parentGaurdian2Second').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Parent 2 Final Attendance") != null){
		document.getElementById('parentGaurdian2Final').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Preschool Teacher Initial Attendance") != null){
		document.getElementById('preschoolTeacherInitial').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Preschool Teacher Second Attendance") != null){
		document.getElementById('preschoolTeacherSecond').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Preschool Teacher Final Attendance") != null){
		document.getElementById('preschoolTeacherFinal').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Certificated Teacher Initial Attendance") != null){
		document.getElementById('certificatedTeacherInitial').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Certificated Teacher Second Attendance") != null){
		document.getElementById('certificatedTeacherSecond').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Certificated Teacher Final Attendance") != null){
		document.getElementById('certificatedTeacherFinal').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Developmental Assistant Initial Attendance") != null){
		document.getElementById('developmentalAssistantInitial').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Developmental Assistant Second Attendance") != null){
		document.getElementById('developmentalAssistantSecond').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Developmental Assistant Final Attendance") != null){
		document.getElementById('developmentalAssistantFinal').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Occupational Therapist Initial Attendance") != null){
		document.getElementById('occupationalTherapistInitial').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Occupational Therapist Second Attendance") != null){
		document.getElementById('occupationalTherapistSecond').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Occupational Therapist Final Attendance") != null){
		document.getElementById('occupationalTherapistFinal').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Physiotherapist Initial Attendance") != null){
		document.getElementById('physiotherapistInitial').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Physiotherapist Second Attendance") != null){
		document.getElementById('physiotherapistSecond').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Physiotherapist Final Attendance") != null){
		document.getElementById('physiotherapistFinal').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Psychologist Initial Attendance") != null){
		document.getElementById('psychologistInitial').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Psychologist Second Attendance") != null){
		document.getElementById('psychologistSecond').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Psychologist Final Attendance") != null){
		document.getElementById('psychologistFinal').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Speech-Language Pathologist Initial Attendance") != null){
		document.getElementById('speechLangaugePathologistInitial').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Speech-Language Pathologist Second Attendance") != null){
		document.getElementById('speechLangaugePathologistSecond').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Speech-Language Pathologist Final Attendance") != null){
		document.getElementById('speechLangaugePathologistFinal').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Child-Development Specialist Initial Attendance") != null){
		document.getElementById('childDevelopmentSpecialistInitial').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Child-Development Specialist Second Attendance") != null){
		document.getElementById('childDevelopmentSpecialistSecond').className = "btn btn-success disabled";
	}
	if(sessionStorage.getItem("Child-Development Specialist Final Attendance") != null){
		document.getElementById('childDevelopmentSpecialistFinal').className = "btn btn-success disabled";
	}	
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

function markAttendance(currentAttendee){
	
	var attendance = new Date();
	
	//Update Signature Button If Signed
	if(currentAttendee == "Parent 1 Initial"){
		sessionStorage.setItem("Parent 1 Initial Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById('parentGaurdian1Initial').className = "btn btn-success disabled";
	}else if(currentAttendee == "Parent 1 Second"){
		sessionStorage.setItem("Parent 1 Second Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("parentGaurdian1Second").className = "btn btn-success disabled";
	}else if(currentAttendee == "Parent 1 Final"){
		sessionStorage.setItem("Parent 1 Final Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("parentGaurdian1Final").className = "btn btn-success disabled";
	}else if(currentAttendee == "Parent 2 Initial"){
		sessionStorage.setItem("Parent 2 Initial Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("parentGaurdian2Initial").className = "btn btn-success disabled";
	}else if(currentAttendee == "Parent 2 Second"){
		sessionStorage.setItem("Parent 2 Second Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("parentGaurdian2Second").className = "btn btn-success disabled";
	}else if(currentAttendee == "Parent 2 Final"){
		sessionStorage.setItem("Parent 2 Final Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("parentGaurdian2Final").className = "btn btn-success disabled";
	}else if(currentAttendee == "Preschool Teacher Initial"){
		sessionStorage.setItem("Preschool Teacher Initial Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("preschoolTeacherInitial").className = "btn btn-success disabled";
	}else if(currentAttendee == "Preschool Teacher Second"){
		sessionStorage.setItem("Preschool Teacher Second Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("preschoolTeacherSecond").className = "btn btn-success disabled";
	}else if(currentAttendee == "Preschool Teacher Final"){
		sessionStorage.setItem("Preschool Teacher Final Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("preschoolTeacherFinal").className = "btn btn-success disabled";
	}else if(currentAttendee == "Certificated Teacher Initial"){
		sessionStorage.setItem("Certificated Teacher Initial Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("certificatedTeacherInitial").className = "btn btn-success disabled";
	}else if(currentAttendee == "Certificated Teacher Second"){
		sessionStorage.setItem("Certificated Teacher Second Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("certificatedTeacherSecond").className = "btn btn-success disabled";
	}else if(currentAttendee == "Certificated Teacher Final"){
		sessionStorage.setItem("Certificated Teacher Final Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("certificatedTeacherFinal").className = "btn btn-success disabled";
	}else if(currentAttendee == "Developmental Assistant Initial"){
		sessionStorage.setItem("Developmental Assistant Initial Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("developmentalAssistantInitial").className = "btn btn-success disabled";
	}else if(currentAttendee == "Developmental Assistant Second"){
		sessionStorage.setItem("Developmental Assistant Second Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("developmentalAssistantSecond").className = "btn btn-success disabled";
	}else if(currentAttendee == "Developmental Assistant Final"){
		sessionStorage.setItem("Developmental Assistant Final Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("developmentalAssistantFinal").className = "btn btn-success disabled";
	}else if(currentAttendee == "Occupational Therapist Initial"){
		sessionStorage.setItem("Occupational Therapist Initial Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("occupationalTherapistInitial").className = "btn btn-success disabled";
	}else if(currentAttendee == "Occupational Therapist Second"){
		sessionStorage.setItem("Occupational Therapist Second Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("occupationalTherapistSecond").className = "btn btn-success disabled";
	}else if(currentAttendee == "Occupational Therapist Final"){
		sessionStorage.setItem("Occupational Therapist Final Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("occupationalTherapistFinal").className = "btn btn-success disabled";
	}else if(currentAttendee == "Physiotherapist Initial"){
		sessionStorage.setItem("Physiotherapist Initial Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("physiotherapistInitial").className = "btn btn-success disabled";
	}else if(currentAttendee == "Physiotherapist Second"){
		sessionStorage.setItem("Physiotherapist Second Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("physiotherapistSecond").className = "btn btn-success disabled";
	}else if(currentAttendee == "Physiotherapist Final"){
		sessionStorage.setItem("Physiotherapist Final Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("physiotherapistFinal").className = "btn btn-success disabled";
	}else if(currentAttendee == "Psychologist Initial"){
		sessionStorage.setItem("Psychologist Initial Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("psychologistInitial").className = "btn btn-success disabled";
	}else if(currentAttendee == "Psychologist Second"){
		sessionStorage.setItem("Psychologist Second Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("psychologistSecond").className = "btn btn-success disabled";
	}else if(currentAttendee == "Psychologist Final"){
		sessionStorage.setItem("Psychologist Final Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("psychologistFinal").className = "btn btn-success disabled";
	}else if(currentAttendee == "Speech-Language Pathologist Initial"){
		sessionStorage.setItem("Speech-Language Pathologist Initial Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("speechLangaugePathologistInitial").className = "btn btn-success disabled";
	}else if(currentAttendee == "Speech-Language Pathologist Second"){
		sessionStorage.setItem("Speech-Language Pathologist Second Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("speechLangaugePathologistSecond").className = "btn btn-success disabled";
	}else if(currentAttendee == "Speech-Language Pathologist Final"){
		sessionStorage.setItem("Speech-Language Pathologist Final Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("speechLangaugePathologistFinal").className = "btn btn-success disabled";
	}else if(currentAttendee == "Child-Development Specialist Initial"){
		sessionStorage.setItem("Child-Development Specialist Initial Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("childDevelopmentSpecialistInitial").className = "btn btn-success disabled";
	}else if(currentAttendee == "Child-Development Specialist Second"){
		sessionStorage.setItem("Child-Development Specialist Second Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("childDevelopmentSpecialistSecond").className = "btn btn-success disabled";
	}else if(currentAttendee == "Child-Development Specialist Final"){
		sessionStorage.setItem("Child-Development Specialist Final Attendance",[attendance.getDate() + "-" + attendance.getMonth() + "-" + attendance.getFullYear()]);
		document.getElementById("childDevelopmentSpecialistFinal").className = "btn btn-success disabled";
	}
}


