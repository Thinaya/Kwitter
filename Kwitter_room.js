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

function add_RoomName()
{
    roomName = document.getElementById("roomName").value;

    firebase.database().ref("/").child(roomName).update({
        purpose : "adding room name"
    }) ;

    localStorage.setItem("roomName", roomName);

    window.location = "kwitter_page.html";
}

function log_out()
{
      window.location="index.html";
}
