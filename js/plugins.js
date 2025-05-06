$(document).ready(function(){
  $('.back_top').click(function () { // back to top
		$("html, body").animate({
			scrollTop: 0
		}, 900);
		return false;
	});

	$(window).scroll(function(){  // fade in fade out button
	var windowScroll = $(this).scrollTop();

		if (windowScroll > (webHeight * 0.5) && window_width <= 600 ) {
			$(".back_top").fadeIn();
		} else{
			$(".back_top").fadeOut()
		};

		// For (AddThis) Plugins
		if($('body #at-share-dock').hasClass('at-share-dock')) {
			$('.back_top').addClass('withAddThis_plugins');
			$('.footer_btm').addClass('withAddThis_ftr_btm');
		} else {
			$('.back_top').removeClass('withAddThis_plugins');
			$('.footer_btm').removeClass('withAddThis_ftr_btm');
		}
		// End (AddThis) Plugins
	});
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
		document.getElementById("fix_nav").style.top = "0";
    document.getElementById("fix_nav").style.opacity = "1";
  } else {
		document.getElementById("fix_nav").style.top = "-100%";
    document.getElementById("fix_nav").style.opacity = "0";
  }
}


// === jQuery Scroll Effect for .btm3_cont ===
$(window).scroll(function () {
  var windowScroll = $(this).scrollTop();
  $('.btm3_cont').css('top', 3100 - (windowScroll * 0.75) + 'px');
});

// === Sticky Element Scroll Behavior ===
const stickyElements = document.querySelectorAll('.sticky-element, .a_cont');

window.addEventListener('scroll', () => {
  stickyElements.forEach(stickyElement => {
    const stickyElementParent = stickyElement.parentNode;
    const { top, bottom } = stickyElementParent.getBoundingClientRect();
    const parentHeight = stickyElementParent.offsetHeight;
    const elementHeight = stickyElement.offsetHeight;

    if (bottom < elementHeight) {
      stickyElement.style.transform = `translateY(${parentHeight - elementHeight}px)`;
    } else if (top < 0) {
      stickyElement.style.transform = `translateY(${Math.abs(top)}px)`;
    } else {
      stickyElement.style.transform = 'translateY(0)';
    }
  });
});

const backTop = document.querySelector('.back_top');
const middle = document.querySelector('#middle');

window.addEventListener('scroll', () => {
	const middleTop = middle.getBoundingClientRect().top;

	if (middleTop <= 0) {
		backTop.style.display = 'block';
	} else {
		backTop.style.display = 'none';
	}
});

// === Cursor ===
const cursor = document.querySelector('.custom-cursor');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  // Optional: expand on hoverable elements
  const hoverTargets = document.querySelectorAll('a, button, .hover-target');

  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '60px';
      cursor.style.height = '60px';
      cursor.style.opacity = '1';
    });

    el.addEventListener('mouseleave', () => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.style.opacity = '0.8';
    });
  });
