'use strict';

function debounce(func) {
	var wait = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];
	var immediate = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	var timeout;
	return function () {
		var context = this,
		    args = arguments;
		var later = function later() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

var mobilenavtoggle = document.querySelector('.mobile-nav-toggle');
var topnav = document.querySelector('.top-nav');
var sitewrapper = document.querySelector('.site-wrapper');
var isOpen = false;

function toggleNav(e) {
	if (window.scrollY > 50) {
		topnav.classList.add('nav-bg');
	} else {
		topnav.classList.remove('nav-bg');
	}
}

function mobileNav() {
	isOpen = !isOpen;
	if (isOpen) {
		sitewrapper.classList.add('opened');
		mobilenavtoggle.classList.add('closed');
	} else {
		sitewrapper.classList.remove('opened');
		mobilenavtoggle.classList.remove('closed');
	}
}

window.addEventListener('scroll', toggleNav);
mobilenavtoggle.addEventListener('click', mobileNav);