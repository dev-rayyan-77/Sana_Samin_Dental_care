window.onscroll = function () {
	var navbar = document.getElementById("navbar");

	if (window.scrollY > 200) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
};

var swiper = new Swiper('.swiper-container', {
	effect: 'slide',  // Use slide effect instead of fade
	loop: false,       // Enable infinite loop
	slidesPerView: 1, // Show 3 slides at a time (adjust to your needs)
	spaceBetween: 30, // Space between slides
	autoplay: {
		delay: 2000,     // 2.5 seconds autoplay delay
		disableOnInteraction: false, // Keep autoplay even if interacting with the slider
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 0px (mobile)
		0: {
			slidesPerView: 1
		},
		// when window width is >= 768px (tablet)
		768: {
			slidesPerView: 2
		},
		// when window width is >= 1024px (desktop)
		1024: {
			slidesPerView: 3
		}
	}
});


function consoleData() {
	console.log("Hi I am Rayyan");
	window.alert('Are You Sure to Learn More');
}


const dialog = document.querySelector("dialog");
const showButton = document.getElementsByClassName("bars")[0];
const closeButton = document.getElementById("crossmark");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
	console.log( 'Called' );
	dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
	dialog.close();
});


function toggleSubMenu() {

	const element = document.getElementById('subMenuList');

	if ( element.style.display === "none" ) {
		element.style.display = "block";
	} else {
		element.style.display = "none";
	}
}



// ============================================================
// GSAP SCROLL ANIMATIONS — Sana Samin Dental Care
// Add this block at the END of your existing script.js
// Requires: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
//           <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
// Add both CDN scripts to your HTML <head> BEFORE your script.js
// ============================================================

gsap.registerPlugin( ScrollTrigger );


// ── 1. HERO HEADING — slide up + fade on load ──────────────────────────────
gsap.from(".heading", {
  x: 60,
  opacity: 0,
  duration: 1.1,
  ease: "power3.out",
  delay: 0.2,
});

gsap.from(".heading2", {
  x: -60,
  opacity: 0,
  duration: 1.1,
  ease: "power3.out",
  delay: 0.5,
});

gsap.from(".btn-container", {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 0.8,
});

// // ── 2. DOCTORS SECTION — images stagger slide up ──────────────────────────
gsap.from(".doctors-section .img-padding, .doctors-section .col-md-3:last-child", {
  scrollTrigger: {
    trigger: ".doctors-section",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 80,
  opacity: 0,
  duration: 0.9,
  stagger: 0.2,
  ease: "power3.out",
});

// ── 3. DETAIL SECTION — image slide left, text slide right ────────────────
gsap.from(".detail-section .col-md-6:first-child", {
  scrollTrigger: {
    trigger: ".detail-section",
    start: "top 75%",
  },
  y: 80,
  opacity: 0,
  duration: 1.6,
  ease: "power3.out",
});

gsap.from(".detail-section .aligning-item", {
  scrollTrigger: {
    trigger: ".detail-section",
    start: "top 75%",
  },
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

// // ── 4. FLOATING TEXT — scale + fade ───────────────────────────────────────
gsap.utils.toArray(".floating-text").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
  });
});


// // ── 6. SECTION 4 / EXCELLENCE — video + text reveal ──────────────────────
gsap.from(".section4 .col-md-6:first-child", {
  scrollTrigger: {
    trigger: ".section4",
    start: "top 75%",
  },
  x: -60,
  opacity: 0,
  duration: 1.1,
  ease: "power3.out",
});



// // ── 7. SCHEDULE NOW BLOCK — fade up ───────────────────────────────────────
gsap.from(".schedule-info", {
  scrollTrigger: {
    trigger: ".schedule-now",
    start: "top 70%",
  },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

// // ── 8. TECHNOLOGY CARDS — stagger slide up ────────────────────────────────
gsap.from(".About-technology-box > div", {
  scrollTrigger: {
    trigger: ".About-technology-box",
    start: "top 80%",
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.18,
  ease: "power3.out",
});

// // ── 9. BEAUTIFUL SMILE SECTIONS — alternating slide ──────────────────────
// Beautiful Smile — content slides from LEFT, image from RIGHT
gsap.from(".beautifulsmile-section .beautiful-smile-content", {
  scrollTrigger: {
    trigger: ".beautifulsmile-section",
    start: "top 80%",
  },
  x: -80,        // ← slide in from LEFT (was broken capital Y)
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".beautifulsmile-section .col-md-7", {
  scrollTrigger: {
    trigger: ".beautifulsmile-section",
    start: "top 80%",
  },
  x: 80,         // → slide in from RIGHT
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

// DailySmile2 — image from LEFT, text from RIGHT
gsap.from(".dailySmile2 .col-md-7, .dailySmile2 .col-md-6:first-child", {
  scrollTrigger: {
    trigger: ".dailySmile2",
    start: "top 80%",
  },
  x: -80,        // ← slide in from LEFT (was broken capital Y)
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".dailySmile2 .beautiful-smile-content, .dailySmile2 .align-item-start", {
  scrollTrigger: {
    trigger: ".dailySmile2",
    start: "top 80%",
  },
  x: 80,         // → slide in from RIGHT
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});



// // ── 11. DESIGNED FOR COMFORT — split title reveal ─────────────────────────
gsap.from(".confort-title, .confort-subtitle", {
  scrollTrigger: {
    trigger: ".confortable-sect",
    start: "top 80%",
  },
  y: 40,
  opacity: 0,
  duration: 0.9,
  stagger: 0.2,
  ease: "power3.out",
});

gsap.from(".confort-info", {
  scrollTrigger: {
    trigger: ".confortable-sect",
    start: "top 75%",
  },
  x: 40,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

// // ── 12. KIND WORDS / REVIEWS SECTION ─────────────────────────────────────
gsap.from(".kind-words-title, .kind-words-subtitle", {
  scrollTrigger: {
    trigger: ".title-section",
    start: "top 80%",
  },
  y: 40,
  opacity: 0,
  duration: 0.9,
  stagger: 0.2,
  ease: "power3.out",
});

// gsap.from(".fixing-div", {
//   scrollTrigger: {
//     trigger: ".fixing-div",
//     start: "top 80%",
//   },
//   x: -60,
//   opacity: 0,
//   duration: 1,
//   ease: "power3.out",
// });

// // ── 13. SCHEDULE YOUR VISIT SECTION ──────────────────────────────────────
gsap.from(".schedule-container", {
  scrollTrigger: {
    trigger: ".schedule-now-sect",
    start: "top 75%",
  },
  scale: 0.88,
  opacity: 0,
  duration: 1,
  ease: "expo.out",
});

// // ── 14. MAP SECTION — slide from sides ───────────────────────────────────
gsap.from(".map-section .text-box", {
  scrollTrigger: {
    trigger: ".map-section",
    start: "top 80%",
  },
  x: -60,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

// gsap.from(".map-fix", {
//   scrollTrigger: {
//     trigger: ".map-section",
//     start: "top 80%",
//   },
//   x: 60,
//   opacity: 0,
//   duration: 1,
//   ease: "power3.out",
// });

// // ── 15. CONTACT SECTION — stagger form fields ────────────────────────────
gsap.from(".contact-us-title", {
  scrollTrigger: {
    trigger: ".contact-us-section",
    start: "top 80%",
  },
  y: 40,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out",
});

gsap.from(".contact-us-section .d-flex, .contact-us-section span, .contact-us-section .mt-4", {
  scrollTrigger: {
    trigger: ".contact-us-section",
    start: "top 70%",
  },
  y: 30,
  opacity: 0,
  duration: 0.7,
  stagger: 0.1,
  ease: "power2.out",
});

// // ── 16. FOOTER — fade up ──────────────────────────────────────────────────
gsap.from(".footer-sec .col-md-3", {
  scrollTrigger: {
    trigger: ".footer-sec",
    start: "top 90%",
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out",
});

// // ── 17. FOLLOW US IMAGES — scale in ──────────────────────────────────────
gsap.from(".follow-us-sect img", {
  scrollTrigger: {
    trigger: ".follow-us-sect",
    start: "top 80%",
  },
  scale: 0.85,
  opacity: 0,
  duration: 0.9,
  stagger: 0.2,
  ease: "back.out(1.4)",
});

// // ── 18. SECTION / PAGE HEADERS — clip reveal ─────────────────────────────
gsap.utils.toArray(".headers-heading, .headers-subheading").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    clipPath: "inset(0 100% 0 0)",
    opacity: 0,
    duration: 1.1,
    ease: "power4.out",
  });
});