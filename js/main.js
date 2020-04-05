var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});
/*start fadout  */
$(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeOut();
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut(3000);
    });
  });

/*end fade out */
/* start icon loading */

$(window).on('load', function ()
 {
  $("body").css("overflow","auto"),
  $(".loadoverlayicon .loadin2").fadeOut(1000,
    
    function()
    {

      $(this).parent().fadeOut(2000,
        function(){
          $(this).remove();
        });
    });
});



/*end icon loding */