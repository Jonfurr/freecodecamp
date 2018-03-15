$(document).ready(function() {
  const usersArray = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas",
    "trihex",
    "loltyler1"
  ];

  let results = {};
  function getUsers(user) {
    fetch("https://wind-bow.glitch.me/twitch-api/users/" + user)
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        results[user] = data;
      })
      .catch(function() {
        console.log("user fetch failed");
      });
  }

  function getStreams(user) {
    fetch("https://wind-bow.glitch.me/twitch-api/streams/" + user)
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        results[user].streams = data;
      })
      .then(function(data) {
        $(".scoreboard").append(`<div class="row">
        <div id="${results[user].display_name}" class="user-wrap">
            <div class="col-xs-6">
                <div class="avatar">
                    <img src="${results[user].logo}">
                </div>
                <div class="name">
                    <a target="_blank" href="https://www.twitch.tv/${
                      results[user].display_name
                    }"><h3>${results[user].display_name}</h3></a>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="content">
                    
                </div>
            </div>
        </div>`);
        if (results[user].streams.stream == null) {
            let userId = $(`#${results[user].display_name}`);
            let content = $(userId).find(".content");
            content.append(`
                <span class="game">Offline</span>
            `);
        } else {
          let userId = $(`#${results[user].display_name}`);
          let content = $(userId).find(".content");
          userId.addClass('online');
          content.append(`
                <span class="game">${results[user].streams.stream.game} - </span>
                <span>${results[user].streams.stream.channel.status}</span>
            `);
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  $('.filter.all').click(function(){
      if ($(this).hasClass('active')){
          console.log('already active')
      }
      else {
          $(".filter.live").removeClass('active');
          $(".filter.offline").removeClass('active');
          $(this).addClass('active');

          let users = $(".user-wrap");
          for (var i=0;i<users.length;i++){
              users[i].style.display = "block";
          }
      }
  })
  $(".filter.live").click(function() {
    if ($(this).hasClass('active')){
          console.log('already active')
      }
      else {
          $(".filter.all").removeClass('active');
          $(".filter.offline").removeClass('active');
          $(this).addClass('active');
          
          let users = $(".user-wrap");
          for (var i=0;i<users.length;i++){
              if (users[i].classList.contains('online')) {
                users[i].style.display = "block";
              }
              else {
                users[i].style.display = "none";
              }
              
          }
      }
  })
  $(".filter.offline").click(function() {
    if ($(this).hasClass('active')){
          
      }
    else {
        $(".filter.live").removeClass('active');
        $(".filter.all").removeClass('active');
        $(this).addClass('active');

        let users = $(".user-wrap");
        for (var i = 0; i < users.length; i++) {
          if (users[i].classList.contains("online")) {
            users[i].style.display = "none";
          } else {
            users[i].style.display = "block";
          }
        }
    }
  });

    usersArray.forEach(function(user) {
      getUsers(user);
    });
    usersArray.forEach(function(user) {
      getStreams(user);
    });
    
});