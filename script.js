const socket = io();
console.log("connected");
let btn = document.querySelector(".login-btn");
let inp = document.querySelector(".username");
let login = document.querySelector(".login");
let chatapplication = document.querySelector(".chat-application");
btn.addEventListener("click", () => {
  let username = inp.value.trim();
  if (username.length > 0) {
    socket.emit("newuser", {
      socketId: socket.id,
      name: username,
    });
  } else {
    alert("Please enter your username");
  }
});
socket.on("useradded", ({ msg, username, clients, clientCount }) => {
  if (clientCount) {
    document.querySelector(".active-users").innerText = clientCount;
  }
  login.style.display = "none";
  chatapplication.style.display = "block";
  let currentuser = document.querySelector(".current-user");
  currentuser.innerText = username;
});

document.querySelector(".send-button").addEventListener("click",()=>{
    let message=document.querySelector(".message-input").value.trim();
    
})


