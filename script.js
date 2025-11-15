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
 