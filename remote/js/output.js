/*	AppOutput.js
	Verion .1 09/16/14
	Authors: Robert Entenman, Ian Coldwell
*/

/* Globals */
var myFirebaseRef = new FireBase("https://glaring-fire-5493.firebaseIO.com/AppData/");


/*
  Function polls for new child data in the FB object.
 */
myFirebaseRef.limit(10).on('child_added', function (snapshot) {

	//Retrieve Data
	var data = snapshot.val();
	var author = data.name || "Steve Smithy";
	var color = data.color;
	

	
})