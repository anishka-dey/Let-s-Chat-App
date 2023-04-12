//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCEqimi48Ty20yNzpKO9oozUcibvfcFjHs",
      authDomain: "let-s-chat-webapp-738a2.firebaseapp.com",
      databaseURL: "https://let-s-chat-webapp-738a2-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-webapp-738a2",
      storageBucket: "let-s-chat-webapp-738a2.appspot.com",
      messagingSenderId: "703382531611",
      appId: "1:703382531611:web:51229eca81dce66dcc52be"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById('msg').value="";
    }

    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}  

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
