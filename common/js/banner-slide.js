  //menu
  $(document).ready(function() {

      $('li.mainlevel').mousemove(function() {
          $(this).find('ul').slideDown("1000"); //you can give it a speed
      });
      $('li.mainlevel').mouseleave(function() {
          $(this).find('ul').slideUp("fast");
      });


      $(".nav_a").mouseover(function() {
          $(this).find(" > a").addClass("ahover");
          $(".nav_xialab").delay(100).slideDown(100);
      }).closest(".banner").mouseleave(function() {
          $(".nav_xialab").delay(100).slideUp(100);
          $(".nav_a").find(" > a").removeClass("ahover");

      });

  });
