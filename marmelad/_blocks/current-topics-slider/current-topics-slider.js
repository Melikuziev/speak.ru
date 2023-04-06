var swiper = new Swiper(".js-slider", {
	slidesPerView: 1,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 20
		},

		768: {
			slidesPerView: 4,
			spaceBetween: 20
		},

		1024: {
			slidesPerView: 5,
			spaceBetween: 20
		},
	}
});
