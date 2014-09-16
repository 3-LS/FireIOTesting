/*	AppInput.js
	Verion .1 09/16/14
	Authors: Robert Entenman, Ian Coldwell
*/

/* Globals */
var myFirebaseRef =  new Firebase("https://glaring-fire-5493.firebaseIO.com/AppData/");
var nameField = $('#nameInputField');
var colorField = $('#colorInputField');
var result = $('#result');


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
   Message Callback operator for FB
 */

 myFirebaseRef.limit(10).on('child_added', function (snapshot) {
 	//Grab
 	var data = snapshot.val();
 	var name = data.name;
 	var color = data.colorPref;

 	if (name != null) {

 	var baseElement = $("<p>");
 	var nameElement = $("<strong></strong>");
 	nameElement.text(name +" " + color);
 	baseElement.prepend(nameElement);
 	
 	result.append(baseElement);
 	}

 })

/*
  Dumps a message to console output.
*/
function errorLog() {
	console.log("An error occured.");

}

