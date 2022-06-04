const destination = document.querySelector(".destination__pics");
let item1 = document.querySelector(".indicator__item1");
let item2 = document.querySelector(".indicator__item2");
let item3 = document.querySelector(".indicator__item3");
destination.scrollLeft = 600;
item1.style.opacity = 1.0;

destination.addEventListener("scroll", function () {
	if (destination.scrollLeft < 500) {
		item1.style.opacity = 1.0;
		item2.style.opacity = 0.5;
		item3.style.opacity = 0.5;
	}
	if (destination.scrollLeft < 1000 && destination.scrollLeft > 500) {
		item1.style.opacity = 0.5;
		item2.style.opacity = 1.0;
		item3.style.opacity = 0.5;
	}
	if (destination.scrollLeft > 1001) {
		item1.style.opacity = 0.5;
		item2.style.opacity = 0.5;
		item3.style.opacity = 1.0;
	}
});
