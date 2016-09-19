/*
 TODO: 1. toggle button on/off
       2. keep track of streamers you already notified user about
       3. link in notification
*/
var streamerURL = "";
var streamerName = "";
var streamerApiURL = "";
var streamerStatus = "";
var onlineArr= [];
var opt = {
  type: "basic",
  iconUrl: null,
  title: null,
  message: null
};

function callAPI() {
  $.getJSON("https://api.twitch.tv/kraken/users/toad555/follows/channels?client_id=7ebtgqdiu10i5ae2m6vji0waf2y4219", function(data) {
    console.log(data);
    for (var i = 0; i < (data.follows).length; i++) {
      streamerURL = data.follows[i].channel.url;
      streamerName = streamerURL.substr(22);
      streamerApiURL = "https://api.twitch.tv/kraken/streams/" + streamerName + "?client_id=7ebtgqdiu10i5ae2m6vji0waf2y4219";
      $.getJSON(streamerApiURL, function(streamerData) {    
        streamerName = streamerData._links.channel.substr(38);
        streamerURL = "https://www.twitch.tv/" + streamerName;
        if (streamerData.stream !== null) {
          opt.iconUrl = streamerData.stream.channel.logo;
          opt.title = streamerName;
          opt.message = streamerData.stream.game + ": " + streamerData.stream.channel.status;
          chrome.notifications.create(opt);
        }
      }); 
    }
  });
}

callAPI();
window.setInterval(callAPI, 10000);