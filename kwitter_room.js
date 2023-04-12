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
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="Welcome "+user_name+"!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding a room"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row="<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomNmae(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}