console.log("firebase.js ready to roll")

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC2jqhvMGOsngf0nU7tDhjJ4TedPXa1oq8",
    databaseURL: "https://bike-shop-9a646.firebaseio.com",
    
  };
  firebase.initializeApp(config);

// this is the whole database
var database = firebase.database();

//only the "shops" part of the database
var shopsData = database.ref('bike-shops');

//create a list of shops
var shopsList = []; //empty list for now

// load all the children of "shops"
// keep listening for new children 
shopsData.on('child_added', function(childData){
// run these instructions for each child
    console.table( childData.val() );
    var shop = childData.val(); // extraxt data about the person
    shopsList.push( shop ); // add the shop to the shopsList
})