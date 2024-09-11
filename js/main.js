// HEADER SCROLL

let lastScrollYHeader = window.scrollY;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
	if (window.scrollY > lastScrollYHeader) {
		header.classList.add("hidden");
	} else {
		header.classList.remove("hidden");
	}

	lastScrollYHeader = window.scrollY;
});

// BURGER + MENU

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	mobileMenu.classList.toggle("active");
	document.body.classList.toggle("stopScroll");
});

// SWIPER

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1.5,
	spaceBetween: 16,
	initialSlide: 2,
	breakpoints: {
		640: {
			slidesPerView: 2.5,
			spaceBetween: 16,
		},
		800: {
			slidesPerView: 3.5,
			spaceBetween: 16,
		},
		1200: {
			slidesPerView: 5,
			spaceBetween: 16,
		},
	},
});

// ANIMATIONS
gsap.registerPlugin(ScrollTrigger);



if (document.querySelector('.hero-position')) {
    gsap.from(".hero-position", {
        opacity: 0,
        duration: 1,
        y: -80,
    });
    
    gsap.from(".hero-title", {
        opacity: 0,
        duration: 1,
        x: -80,
    });
    
    gsap.from(".hero-desc", {
        opacity: 0,
        duration: 1,
        x: -80,
    });
    
    
    gsap.from('.hero-btns', {
        opacity: 0,
        duration: 1,
        y: 100,
    })
}


if (document.querySelector('.card-title')) {
    gsap.utils.toArray(".card-title").forEach((title, index) => {
        gsap.from(title, {
            opacity: 0,
            duration: 1.5,
            x: -80,
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                end: "top 50%",
                scrub: true,
            },
        });
    });
}


if (document.querySelector('.main')) {
    gsap.utils.toArray(".big-card__title").forEach((title, index) => {
        gsap.from(title, {
            opacity: 0,
            duration: 1.5,
            x: -80,
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                end: "top 50%",
                scrub: true,
            },
        });
    });
    
    
    gsap.utils.toArray(".prices__block-title").forEach((title, index) => {
        gsap.from(title, {
            opacity: 0,
            duration: 1.5,
            y: -80,
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                end: "top 50%",
                scrub: true,
            },
        });
    });
    
    
    
    gsap.utils.toArray(".line__title").forEach((title, index) => {
        gsap.from(title, {
            opacity: 0,
            duration: 1.5,
            x: -80,
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                end: "top 50%",
                scrub: true,
            },
        });
    });
    
    gsap.from(".welcome-text", {
        opacity: 0,
        duration: 1.5,
        y: -80,
        scrollTrigger: {
            trigger: ".welcome-text",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        },
    });
    
    
    gsap.from(".free-auto__title", {
        opacity: 0,
        duration: 1.5,
        x: -80,
        scrollTrigger: {
            trigger: ".free-auto__title",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        },
    });
    
    gsap.from(".form-title", {
        opacity: 0,
        duration: 1.5,
        x: -80,
        scrollTrigger: {
            trigger: ".form-title",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        },
    });
    
    gsap.from(".form-right h3", {
        opacity: 0,
        duration: 1.5,
        x: -80,
        scrollTrigger: {
            trigger: ".form-right h3",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        },
    });
    
    let servItem = document.querySelectorAll(".welcome-titles span");
    servItem.forEach((elem) => {
        gsap.from(elem, {
            opacity: 0,
            duration: 10,
            x: -100,
            scrollTrigger: {
                trigger: elem,
                start: "top 80%",
                end: "top 50%",
                scrub: true,
            },
        });
    });
}






if (document.querySelector('.form-page-text')) {

    gsap.from(".form-page-title", {
        opacity: 0,
        duration: 1,
        y: -80,
    });
    
    
    gsap.from(".form-page-text", {
        opacity: 0,
        duration: 1,
        y: 80,
    });
}





