console.log("Hi! Welcome to My Portfolio Site");
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }

  $(document).ready(function() {
    $('.slideshow-image').click(function() {
        var $current = $(this);
        var $next = $current.next('.slideshow-image');
        if ($next.length === 0) {
            $next = $('.slideshow-image').first();
        }
        $current.addClass('hidden');
        $next.removeClass('hidden');
    });
});

// Slideshow auto play
// $(document).ready(function() {
//   // Function to switch to the next image
//   function showNextImage() {
//       var $current = $('.slideshow-image:not(.hidden)');
//       var $next = $current.next('.slideshow-image');
      
//       if ($next.length === 0) {
//           $next = $('.slideshow-image').first();
//       }
      
//       $current.addClass('hidden');
//       $next.removeClass('hidden');
//   }

//   // Set an interval to switch images every 5 seconds (5000 milliseconds)
//   var slideshowInterval = setInterval(showNextImage, 4000);

//   // Stop the interval when an image is clicked
//   $('.slideshow-image').click(function() {
//       clearInterval(slideshowInterval);
//       showNextImage(); // Show the next image immediately when clicked
//   });
// });