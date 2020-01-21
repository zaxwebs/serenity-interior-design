import $ from 'jquery'
import 'bootstrap'
import Swiper from 'swiper'

const mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,
	grabCursor: true,
	parallax: true,
	speed: 500,
	autoplay: {
		delay: 3000
	}
})
