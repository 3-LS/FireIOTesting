var app = angular.module("3lsApp", ["firebase"]);

app.controller("AppController", function($scope, $firebase) {
    
    //Sync the data ....
    var ref = new Firebase("https://glaring-fire-5493.firebaseio.com/tests");
    var sync = $firebase(ref);
    // download the data into a local object
    var syncObject = sync.$asObject();
    // synchronize the object with a three-way data binding
    syncObject.$bindTo($scope, "data");

    // Sync the Details *******
    var details = new Firebase("https://glaring-fire-5493.firebaseio.com/AppData/AppDetails");
    var sync = $firebase(details);
    // download the data into a local object
    var syncObject = sync.$asObject();
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($scope,  "details");

  });