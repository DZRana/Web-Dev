/*
 TODO: 1. toggle button on/off
       2. keep track of streamers you already notified user about
       3. link in notification
*/
var streamerImg = "";
var streamerName = "";
var streamerGame = "";
var streamerStatus = "";
var streamerURL = "";
var onlineArr= [];
var opt = {
  type: "basic",
  iconUrl: null,
  title: null,
  message: null
};

function callAPI() {
  $.getJSON("https://api.twitch.tv/kraken/streams/followed?oauth_token=g7jju37h0orie9dy1b7k6gykj4mf37", function(data) {
    console.log(data);
    for (var i = 0; i < (data.streams).length; i++) {     
      streamerImg = data.streams[i].channel.logo;
      streamerName = data.streams[i].channel.name;
      streamerGame = data.streams[i].game + ": ";
      streamerStatus = data.streams[i].channel.status;
      streamerURL = data.streams[i].channel.url;

      opt.iconUrl = streamerImg;
      opt.title = streamerName;
      opt.message = streamerGame + streamerStatus;
      chrome.notifications.create(opt);
    }
  });
}

callAPI();
//window.setInterval(callAPI, 10000);