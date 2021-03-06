import $ from 'jquery'
import 'bootstrap'
import Swiper from 'swiper'
import AOS from 'aos'

const coverSwiper = new Swiper('.swiper-container#cover-swiper', {
	loop: true,
	direction: 'horizontal',
	grabCursor: true,
	parallax: true,
	speed: 500,
	autoplay: {
		delay: 3000
	},
	breakpoints: {
		992: {
			direction: 'vertical'
		}
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
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
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
})

AOS.init()

$(function() {
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 10) {
			$('.navbar').addClass('active')
		} else {
			$('.navbar').removeClass('active')
		}
	})
})
