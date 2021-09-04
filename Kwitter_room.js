function log_out()
{
      window.location="index.html";
}

function add_roomName()
{
  room_name = document.getElementById("room_name").value ;
  localStorage("room_name" , room_name);
}