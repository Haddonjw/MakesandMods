const parallaxElement = document.getElementById("parallax");
const textSection = document.getElementById("fastScroll");
const windowHeight = window.innerHeight;

let lastScrollY = window.scrollY;
function updateParallax() {
	const offset = lastScrollY;
	parallaxElement.style.backgroundPositionY = offset * -0.5 + "px";
	requestAnimationFrame(updateParallax);
}
requestAnimationFrame(updateParallax);

function adjustTextSectionPosition() {
	const sectionTop = textSection.getBoundingClientRect().top;
	if (sectionTop < windowHeight - 100) {
		const offset = (windowHeight - sectionTop - 100) * 0.3;
		textSection.style.marginTop = `-${offset}px`;
	} else {
		textSection.style.marginTop = "0";
	}
}

function onScroll() {
	lastScrollY = window.scrollY;
	adjustTextSectionPosition();
}

let isTicking = false;
window.addEventListener("scroll", function () {
	if (!isTicking) {
		requestAnimationFrame(() => {
			onScroll();
			isTicking = false;
		});
		isTicking = true;
	}
});

window.addEventListener("resize", function () {
	adjustTextSectionPosition();
});

adjustTextSectionPosition();
