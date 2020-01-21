import $ from 'jquery'
import 'bootstrap'
import Swiper from 'swiper'
import AOS from 'aos'

const coverSwiper = new Swiper('.swiper-container#cover-swiper', {
	loop: true,
	grabCursor: true,
	parallax: true,
	speed: 500,
	autoplay: {
		delay: 3000
	}
})

const projectsSwiper = new Swiper('.swiper-container#projects-swiper', {
	loop: true,
	lazy: true,
	grabCursor: true,
	slidesPerView: 1,
	spaceBetween: 100,
	autoplay: {
		delay: 4000
	},
	breakpoints: {
		700: {
			slidesPerView: 3
		}
	}
})

AOS.init()
