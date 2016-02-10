$(document).ready(function(){
timeout();
  $("#arrow").css({transform: "rotate(180deg)"});
  $("#arrow").toggle(function() {
      $("#arrow").animate({
        top: "0",
        opacity: "0.6",
        transform: "rotate(360deg)"
      }, 600, 'easeInOutBack');
      $(".navbar").animate({
        top: '-42px',
        opacity: '0.6'
      }, 600, 'easeInOutBack');

    }, function() {
        $("#arrow").animate({
          top: "42px",
          opacity: "1",
          transform: "rotate(180deg)"
        }, 600, 'easeInOutBack');
        $(".navbar").animate({
          top: '0',
          opacity: '1'
        }, 600, 'easeInOutBack');
      });
      setTimeout(function() {
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 1000);

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
    });
