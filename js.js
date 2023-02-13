const messages = [
  "idk",
  "idk",
  "idk",
  "idk",
  "idk",
  "idk",
  "idk",
  "idk",
  "idk",
  "idk",
  "idk",
  "idk",
  "idk",
  "idk",
  "idk",
  "idk"
];

const dailyMessage = document.getElementById("daily-message");

dailyMessage.addEventListener("click", function() {
  let randomMessage = messages[Math.floor(Math.random() * messages.length)];
  window.open(`message.html?message=${randomMessage}`, "_blank");
});
