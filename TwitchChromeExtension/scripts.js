/*
 TODO: 1. toggle button on/off -- DONE
       2. keep track of streamers you already notified user about -- DONE
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
var initialCall = true; //2
var initialOnline = []; //2
var currentOnline = []; //2
var newOnline = []; //2
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

  function makeNotification(streamerInfo) {
    streamerImg = streamerInfo.channel.logo; 
    streamerName = streamerInfo.channel.name;    
    streamerStatus = streamerInfo.channel.status;
    streamerGame = streamerInfo.game;
    streamerURL = streamerInfo.channel.url;
    
    opt.iconUrl = streamerImg;
    opt.title = streamerName;
    opt.message = streamerStatus;
    opt.contextMessage = streamerGame;
    chrome.notifications.create(streamerURL, opt);
  }

  function callAPI() {
    $.getJSON("https://api.twitch.tv/kraken/streams/followed?oauth_token=o6im0u0q5ts98lpnm8eei266uuk3ue", function(data) {
      console.log(data);
      for (var i = 0; i < (data.streams).length; i++) { 
        streamerName = data.streams[i].channel.name;
        currentOnline.push(streamerName);
      }
      console.log("BEFORE DIFF init: " + initialOnline);
      console.log("BEFORE DIFF current: " + currentOnline);
      newOnline = currentOnline.diff(initialOnline);
      console.log("NEW ONLINE: " + newOnline);
      initialOnline = currentOnline.slice(0);
      currentOnline = [];
      console.log("AFTER DIFF init: " + initialOnline);
      console.log("AFTER DIFF current: " + currentOnline);
      for (var i = 0; i < (data.streams).length; i++) { 
        streamerName = data.streams[i].channel.name;
        for (var j = 0; j < newOnline.length; j++) {
          if (newOnline[j] === streamerName) {
            makeNotification(data.streams[i]);
          }
        }
      }
    });
  }
  if (toggle) {
    //chrome.browserAction.setIcon({path: "twitch_online.png"});
    console.log("STARTED!");
    
    //-------2
    if (initialCall) {
      $.getJSON("https://api.twitch.tv/kraken/streams/followed?oauth_token=o6im0u0q5ts98lpnm8eei266uuk3ue", function(data) {
        for (var i = 0; i < (data.streams).length; i++) { 
          initialOnline.push(data.streams[i].channel.name);
          makeNotification(data.streams[i]);
        }
      });
      initialCall = false;
    }
    //-------2

    callAPI();
    interval = window.setInterval(callAPI, 300000);
  }
  else {
    //chrome.browserAction.setIcon({path: "twitch_offline.png"});
    clearInterval(interval);
    initialOnline = []; //2
    initialCall = true; //2
    console.log("STOPPED!");
  }
});

chrome.notifications.onClicked.addListener(function(nId) {
    window.open(nId);
});