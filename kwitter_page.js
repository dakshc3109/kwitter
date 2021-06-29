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
         var firebase_message_id = childKey;
         var message_data = childData;
          //Start code
            console.log(firebase_message_id);
            console.log(message_data);
            var uname = message_data["name"];
            var message = message_data["message"];
            var like = message_data["like"];
            var name_with_tag = "<h4>"+uname+" <img src='tick.png' class='user_tick'> </h4>"; 
            var msg_with_tag =  "<h4 class='message_h4'>"+message+"</h4>";
            var like_btn = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='addLike(this.id)'>";
            var span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

            var row = name_with_tag + msg_with_tag + like_btn + span_with_tag;

            document.getElementById("output").innerHTML += row;
          //End code
      } });  }); }
getData();

function addLike(message_id){
  console.log("You clicked like "+message_id);
  var btn_id = message_id;
  var likes = document.getElementById(btn_id).value;
  var update_likes = Number(likes)+1;
  console.log(update_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like: update_likes
  });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("RoomName");
      window.location = "index.html";
}
