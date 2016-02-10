$(document).ready(function(){
timeout();
//Navbar showing and hiding
  $("#arrow").css({transform: "rotate(180deg)"});
  $("#arrow").toggle(function() {
      $("#arrow").animate({
        top: "0",
        opacity: "0.6",
        transform: "rotate(360deg)"
      }, 600, 'easeInOutBack');
      $(".navbar").animate({
        top: '-46px',
        opacity: '0.6'
      }, 600, 'easeInOutBack');
      $("#loginPop").animate({
        top: '2px'
      }, 600, 'easeInOutBack');
    }, function() {
        $("#arrow").animate({
          top: "42px",
          opacity: "1",
          transform: "rotate(180deg)"
        }, 600, 'easeInOutBack');
        $(".navbar").animate({
          top: '-6px',
          opacity: '1'
        }, 600, 'easeInOutBack');
        $("#loginPop").animate({
          top: '44px'
        }, 600, 'easeInOutBack');
      });

      setTimeout(function() {
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 1000);

  //Loading text changer
    function timeout() {
    setTimeout(function () {
      setTimeout(function() {
        var text = $("h1");
          $("h1").text("Loading.  ");
      }, 500);
      setTimeout(function() {
        $("h1").text("Loading . ");
      }, 1000);
        timeout();
    }, 1000);
}
//Account hiding and stuff
  $("#login").toggle(function() {
    $("#loginPop").animate({
      right: "5px",
      opacity: "1"
    }, 600, 'easeOutBack');
    $("body").addClass("out");
  }, function() {
      $("#loginPop").animate({
        right: "-310px",
        opacity: "0"
      }, 600, 'easeInOutBack');
      $("body").removeClass("out");
  });

  //Changing between login and create screen
  $("#createUser").click(function() {
    //Switching out login with create screen
    $("#loginBox").animate({
      left: "310px",
      opacity: "0"
    }, 250, "easeInOutBack");
    $("#createBox").animate({
      left: "0",
      opacity: "1"
    }, 250, "easeInOutBack");
  });
  $("#loginUser").click(function() {
    //Switching out create with login screen
    $("#loginBox").animate({
      left: "0",
      opacity: "1"
    }, 250, "easeInOutBack");
    $("#createBox").animate({
      left: "-310px",
      opacity: "0"
    }, 250, "easeInOutBack");
  });

//Firebase stuff
var ref = new Firebase("https://it-eksamen.firebaseio.com/");
var usersRef = ref.child("users");
$("#submit").click(function() {
  if($("#username").val() != "" && $("#password").val() != "") {
  var username = $("#username").val();
  var password = $("#password").val();
  usersRef.createUser({
    email: username,
    password: password
  }, function(error, userData) {
    if(error) {
      console.log("Error creating user: ", error);
    } else {
      console.log("Successfully created account with uid: ", userData.uid);
    }
  });
  $("#username").val("");
  $("#password").val("");
}
});
    });
