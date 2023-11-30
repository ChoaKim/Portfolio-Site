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

// contact form

new JustValidate('.fcf-form-class', {
  rules: {
      "Name": {
          "required": true,
          "minLength": 1,
          "maxLength": 100
      },
      "Email": {
          "required": true,
          "minLength": 1,
          "maxLength": 100,
          "email": true
      },
      "Message": {
          "required": true,
          "minLength": 1,
          "maxLength": 3000
      }
  },
  colorWrong: '#dc3545',
  focusWrongField: true,
  submitHandler: function (cform, values, ajax) {

      var button_value = getButtonValue('fcf-button');
      disableButton('fcf-button');
      ajax({
          url: cform.getAttribute('action'),
          method: 'POST',
          data: values,
          async: true,
          callback: function (response) {
              var done = false;
              if (response.indexOf('Fail:') == 0) {
                  // configration problem
                  showFailMessage(response);
                  enableButon('fcf-button', button_value);
                  done = true;
              }

              if (response.indexOf('Error:') == 0) {
                  // validation problem
                  showErrorMessage(response);
                  enableButon('fcf-button', button_value);
                  done = true;
              }

              if (response.indexOf('Success') == 0) {
                  showSuccessMessage(response);
                  done = true;
              }

              if (response.indexOf('Debug:') == 0) {
                  showDebugMessage(response);
                  enableButon('fcf-button', button_value);
                  done = true;
              }

              if (done == false) {
                  showErrorMessage('Error:Sorry, an unexpected error occurred. Please try later.');
                  enableButon('fcf-button', button_value);
              }

          }
      });

  },
});

function getButtonValue(id) {
  return document.getElementById(id).innerText;
}

function disableButton(id) {
  document.getElementById(id).innerText = 'Please wait...';
  document.getElementById(id).disabled = true;
}

function enableButon(id, val) {
  document.getElementById(id).innerText = val;
  document.getElementById(id).disabled = false;
}

function showFailMessage(message) {
  var display = '<strong>Unexpected errors. </strong>(form has been misconfigured)<br>';
  display += message.substring(5);
  document.getElementById('fcf-status').innerHTML = display;
}

function showErrorMessage(message) {
  var display = '<strong>Validation problem:</strong><br>';
  display += message.substring(6);
  document.getElementById('fcf-status').innerHTML = display;
}

function showDebugMessage(message) {
  var display = '<strong>Debug details.</strong><br>(Please remember to switch off DEBUG mode when done!)<br>';
  display += message.substring(6);
  document.getElementById('fcf-status').innerHTML = display;
}

// Removing this credit is NOT allowed
// Please purchase a pro license for credit removal rights
var creditcontainer = document.querySelector(".buttons");
var creditdiv = document.createElement('div');
creditdiv.innerHTML = '<div class="field" style="font-size:0.9em;color:#aaa;padding-top:15px;padding-bottom:10px">Free contact form by <a href="https://www.majesticform.com" style="font-size:0.9em;color:#aaa;text-decoration:none" target="_blank">MajesticForm</a>.</div>';
creditcontainer.parentNode.insertAdjacentElement('afterend', creditdiv);


function showSuccessMessage(message) {
  var message = '<br><br>' + message.substring(8);
  var content = document.getElementById('fcf-thank-you').innerHTML;
  document.getElementById('fcf-thank-you').innerHTML = content + message;
  document.getElementById('fcf-status').innerHTML = '';
  document.getElementById('fcf-form').style.display = 'none';
  document.getElementById('fcf-thank-you').style.display = 'block';
}


// // Accordion  script 
// (function () {
//   var acc = document.getElementsByClassName("accordion");
//   var i;

//   for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//       var panel = this.nextElementSibling;
//       if (panel.style.display === "block") {
//         panel.style.display = "none";
//       } else {
//         panel.style.display = "block";
//       }
//     });
//   }
// })();
// Accordion  script 

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