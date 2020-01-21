import $ from 'jquery'
import 'bootstrap'
import Swiper from 'swiper'
import AOS from 'aos'

const coverSwiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,
	grabCursor: true,
	parallax: true,
	speed: 500,
	autoplay: {
		delay: 3000
	}
})

AOS.init()
