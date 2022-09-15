/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Justin Calderon
      Date: 9/15/2022  

      Filename: js02.js
 */
 
// declare global constants for the application

	const EMP_COST = 100; //photographer hourly rate
	const BOOK_COST = 350; // cost of memory book
	const REPRO_COST = 1250; // cost of reproduction rights
	const TRAVEL_COST = 2; // travel cost per mile
 
// setup the form when the page loads
	
	window.addEventListener("load", setupForm); 
	
// set the form's default values

	function setupForm() {
		document.getElementById("photoNum").value = 1;
		document.getElementById("photoHrs").value = 2;
		document.getElementById("makeBook").checked = false;
		document.getElementById("photoRights").checked = false;
		document.getElementById("photoDist").value = 0;
	}
	
// estimate the total cost of the service

	function getEstimate() {
		let totalCost = 0;
		let photographers = document.getElementID("photoNum").value;
		let hours = document.getElementById("photoHrs").value;
		let distance = document.getElementById("photoDist").value;
	}