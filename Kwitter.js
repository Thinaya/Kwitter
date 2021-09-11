const firebaseConfig = {
    apiKey: "AIzaSyAgE1N8QEgY8tkMZDuEyY2Kp896T2TKz4c",
    authDomain: "kwitter2-4c9ea.firebaseapp.com",
    databaseURL: "https://kwitter2-4c9ea-default-rtdb.firebaseio.com",
    projectId: "kwitter2-4c9ea",
    storageBucket: "kwitter2-4c9ea.appspot.com",
    messagingSenderId: "506592828738",
    appId: "1:506592828738:web:814c38713bfdb44f277cdb",
    measurementId: "G-6FWRCD4MPB"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function add_User()
{
    user_name=document.getElementById("user_name").value;
    firebase .database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
     window.location="kwitter_room.html";
}
