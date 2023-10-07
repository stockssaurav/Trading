document.write("<\/div>\r\n      <br>\r\n      <div id=\"mess-box\" style=\"word-wrap:break-word; color:orange;\">\r\n\r\n      <\/div>\r\n\r\n    <\/center>\r\n   \r\n    <div>\r\n      <!-- mobile player controls you could add eventlistener in JS but decided to keep simple simple  -->\r\n      <button onclick=\"shuff_list()\">Shuffle<\/button>\r\n      <button onclick=\"player.previousVideo()\">Back<\/button>\r\n      <button onclick=\"player.playVideo()\">Play<\/button>\r\n      <button onclick=\"player.pauseVideo()\">Pause ||<\/button>\r\n      <button onclick=\"player.nextVideo()\">Next <\/button>\r\n    <\/div>\r\n    <!-- the following two divs styles makes YTplayers responsive either div or iframe you can define style in css file\r\n\t\t<div id=\"YTP\" style=\"width: 100%; height: 0; position: relative; padding-bottom: 56.25%; \">\r\n\t\t<div style=\"border: solid 1px red; margin-top:5px; width: 100%; height: 100%; position: absolute;\" id=\"player\">   -->\r\n\r\n    <div class=\"YTwrapper\" id=\"YTP-wrap\">\r\n      <!-- Wrapper for player iframe or div -->\r\n      <div class=\"YTplayer\" id=\"player\">\r\n        <!-- This div contains the youtube player iframe id= player -->\r\n\r\n      <\/div>\r\n    <\/div>\r\n   \r\n  <\/div>\r\n<\/body>");




//global
var Plist;
const message = document.getElementById("mess-box");
const userlink = document.getElementById("UserUrl");
// 1. get user list
function userList() {
  // need some more code to security check and validate sanitize input links
  if (userlink.value == "") {
    userlink.placeholder = " THIS IS REQUIRED !!";
    return;
  }

  let str = "https://m.youtube.com/playlist?list="+userlink.value;
  if (str.includes("list=") == false) {
    message.innerHTML =
      "  Please Paste the full YouTube playlist URL, must be containing 'list=' ";
    return;
  }

  const getid = str.split("list="); //splits url string into parts
  var ytlist = getid[1].split("&");
  Plist = ytlist[0];
  message.innerHTML = " Playlist id Now Playing : " + Plist; // optional visual display
  player.stopVideo(); //stops current video if playing
  onPlayerReady(); // youtube player event to load user list
}

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe>(YouTube player) with in div tag id='player' after the API code downloads.
//  ---------- player function -----------------------------
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    playerVars: {
      enablejsapi: 1,
      loop: 1,
      controls: 1,
      showinfo: 1,
      modestbranding: 1
    },
    events: {
      onReady: onPlayerReady
      // onStateChange: onPlayerStateChange
    }
  });
}
//----------------end player-------------------

// 4. The API will call this function when the video player is ready.

function onPlayerReady(event) {
  player.cuePlaylist({ list: Plist }); //loads and cues list .
   player.setPlaybackRate(1.5);
  console.log(Plist);
}

function onPlayerStateChange(event) {}

//---added functions

// very simple YT shuffle command then starts at first video in the new list.
function shuff_list() {
  player.setShuffle(true);
 
  // start at index 0
  player.playVideoAt(0);
  //player.stopVideo(); //uncomment to stop video playing after shuffle
}
/* things to do

display Youtube channel and list name requires api keys*/

