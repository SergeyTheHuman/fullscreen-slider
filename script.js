"use strict"

import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const mainSwiper = new Swiper('.main-swiper', {
	direction: 'vertical',
	mousewheel: true,
	pagination: {
		el: '.main-swiper__pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true,
		dynamicMainBullets: 1
	},
})