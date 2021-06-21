
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyB9nROKGTJvd-1RII5F7l0_8bOs4Ac96DY",
  authDomain: "kwitter-78fce.firebaseapp.com",
  databaseURL: "https://kwitter-78fce-default-rtdb.firebaseio.com",
  projectId: "kwitter-78fce",
  storageBucket: "kwitter-78fce.appspot.com",
  messagingSenderId: "445873111626",
  appId: "1:445873111626:web:fe7a7f9bcf9bafd7e71cb3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var userName = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+userName+"!";

//adding room
function addRoom(){
    var roomName = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(roomName).update({
      purpose: "Adding Room"
    });

    localStorage.setItem("RoomName", roomName);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       var Room_names = childKey;
      //Start code
        console.log("Room name: "+Room_names);
        var row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("RoomName", name);
  window.location = "kwitter_page.html";
}