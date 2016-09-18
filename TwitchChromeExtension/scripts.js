var opt = {
  type: "basic",
  iconUrl: "twitch_online.png",
  title: "Test Title",
  message: "Test Message"
};

chrome.notifications.create(opt, callback);

console.log ("Popup Done?");

function callback() {
  console.log("Popup Done!");
}