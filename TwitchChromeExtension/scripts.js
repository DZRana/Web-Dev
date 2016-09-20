/*
 TODO: 1. toggle button on/off -- DONE
       2. keep track of streamers you already notified user about
       3. link in notification -- DONE
       4. change browserAction icon between on/off states
*/
Array.prototype.diff = function(a) {
  return this.filter(function(i) {
    return a.indexOf(i) < 0;
  });
};

var streamerImg = "";
var streamerName = "";
var streamerGame = "";
var streamerStatus = "";
var streamerURL = "";
var toggle = false;
var interval = null;
var opt = {
  type: "basic",
  isClickable: true,
  iconUrl: null,
  title: null,
  message: null,
  contextMessage: null
};

chrome.browserAction.onClicked.addListener(function() {
  toggle = !toggle;

  function callAPI() {
    $.getJSON("https://api.twitch.tv/kraken/streams/followed?oauth_token=o6im0u0q5ts98lpnm8eei266uuk3ue", function(data) {
      console.log(data);
      for (var i = 0; i < (data.streams).length; i++) { 
        streamerImg = data.streams[i].channel.logo;
        streamerName = data.streams[i].channel.name;
        streamerGame = data.streams[i].game;
        streamerStatus = data.streams[i].channel.status;
        streamerURL = data.streams[i].channel.url;
  
        opt.iconUrl = streamerImg;
        opt.title = streamerName;
        opt.message = streamerStatus;
        opt.contextMessage = streamerGame;
        chrome.notifications.create(streamerURL, opt);
      }
    });
  }
  if (toggle) {
    //chrome.browserAction.setIcon({path: "twitch_online.png"});
    console.log("STARTED!");
    callAPI();
    interval = window.setInterval(callAPI, 10000);
  }
  else {
    //chrome.browserAction.setIcon({path: "twitch_offline.png"});
    clearInterval(interval);
    console.log("STOPPED!");
  }
});

chrome.notifications.onClicked.addListener(function(nId) {
    window.open(nId);
});