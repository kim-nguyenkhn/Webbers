

    
 
/*parallax*/

//when the window is scrolling, do stuff
$(window).scroll(function() {
  //capture the curren position of the window
  var windowTop = $(window).scrollTop();
  //make the H1 drift up and get more transparent 
  $("header h1").css({
    "bottom": windowTop * 1,
    "opacity": 1 - (windowTop/275)
  });
  //shift the header background slowly. try a negative windowTop or multiply instead of divide
  $("header").css("background-position-y", windowTop / 3);
  console.log(windowTop);
});



  //scroollll top
$(document).ready(function () {
  $(window).scroll(function () {
    var top =  $(".goto-top");
        if ( $('body').height() <= (    $(window).height() + $(window).scrollTop() + 200 )) {
  top.animate({"margin-left": "0px"},1500);
        } else {
            top.animate({"margin-left": "0px"},1500);
        }
    });

    $(".goto-top").on('click', function () {
        $("html, body").animate({scrollTop: 0}, 1100);
    });
});


<!--//--><![CDATA[//><!--
			var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg"
			)
		//--><!]]>