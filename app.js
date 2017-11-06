$(document).ready(function () {
    let url1 = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
    let url2 = "https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2";
    let url3 = "https://wind-bow.glitch.me/twitch-api/streams/ogamingSC2";
    let url4 = "https://wind-bow.glitch.me/twitch-api/streams/cretetion";
    
    
    $.ajax({
      url: url1,
      dataType: "json",
      success: function(json1) {
        if(json1.stream === null) {
          $("#status-freecodecamp").html("Offline");
          $(".stream-freecodecamp").addClass("red");
        } else {
          $.ajax({
            url: "https://wind-bow.glitch.me/twitch-api/channels/freecodecamp",
            dataType: "json",
            success: function(json11) {
              $("#info-freecodecamp").html(json11.status);
              $("#status-freecodecamp").html("Online");
              $(".stream-freecodecamp").addClass("green");
            }
          }); 
        }
      }
     });
    
    $.ajax({
      url: url2,
      dataType: "json",
      success: function(json2) {
        if(json2.stream === null) {
          $("#status-ESL_SC2").html("Offline");
          $(".stream-ESL_SC2").addClass("red");
        } else {
          $.ajax({
            url: "https://wind-bow.glitch.me/twitch-api/channels/ESL_SC2",
            dataType: "json",
            success: function(json22) {
              $("#info-ESL_SC2").html(json22.status);
              $("#status-ESL_SC2").html("Online");
              $(".stream-ESL_SC2").addClass("green");
            }
          }); 
        }
      }
    });
  
    $.ajax({
      url: url3,
      dataType: "json",
      success: function(json3) {
        if(json3.stream === null) {
          $("#status-OgamingSC2").html("Offline");
          $(".stream-OgamingSC2").addClass("red");
        } else {
          $.ajax({
            url: "https://wind-bow.glitch.me/twitch-api/channels/ogamingSC2",
            dataType: "json",
            success: function(json33) {
              $("#info-OgamingSC2").html(json33.status);
              $("#status-OgamingSC2").html("Online");
              $(".stream-OgamingSC2").addClass("green");
            }
          }); 
        }
      }
    });
  
    $.ajax({
      url: url4,
      dataType: "json",
      success: function(json4) {
        if(json4.stream === null) {
          $("#status-cretetion").html("Offline");
          $(".stream-cretetion").addClass("red");
        } else {
          $.ajax({
            url: "https://wind-bow.glitch.me/twitch-api/channels/cretetion",
            dataType: "json",
            success: function(json44) {
              $("#info-cretetion").html(json44.status);
              $("#status-cretetion").html("Online");
              $(".stream-cretetion").addClass("green");
            }
          }); 
        }
      }
    });
  });