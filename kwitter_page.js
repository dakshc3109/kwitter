//YOUR FIREBASE LINKS
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

    var room_name = localStorage.getItem("RoomName");
    var user = localStorage.getItem("user_name");


    function send(){
      var msg = document.getElementById("message").value;
          firebase.database().ref(room_name).push({
            name : user,
            message : msg,
            like : 0
          });
          document.getElementById("message").value = "";
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("RoomName");
      window.location = "index.html";
}
