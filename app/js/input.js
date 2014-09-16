/*	AppInput.js
	Verion .1 09/16/14
	Authors: Robert Entenman, Ian Coldwell
*/

/* Globals */
var myFirebaseRef =  null;
var nameField = $('#nameInputField');
var colorField = $('#colorInputField');

function initFirebase() {
	//Grabbing a reference to FireBase
	 myFirebaseRef = new FireBase("https://glaring-fire-5493.firebaseIO.com/AppData/");
}

/*
 Traps a return/enter keypress from the colorField,
 signifying the data can be posted.
 */
colorField.keypress(function (e) {

	if (e.keyCode == 13) {
		var name = nameField.val();
		var color = colorField.val();

		//Push
		myFirebaseRef.push({name:name, colorPref:color});
	}

});
/*
  Dumps a message to console output.
*/
function errorLog() {
	console.log("An error occured.");

}

