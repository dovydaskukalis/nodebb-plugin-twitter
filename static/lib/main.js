'use strict';

/* globals document, $ */

$(document).ready(function () {
	// Inject twitter widget into footer
	var scriptEl = document.createElement('script');
	scriptEl.async = 'async';
	scriptEl.src = '//platform.twitter.com/widgets.js';
	scriptEl.charset = 'utf-8';

	document.head.appendChild(scriptEl);

	function enhanceEmbed() {
		var target = $('ul[component="topic"]').get(0);
		twttr.widgets.load(target);
	}

	$(window).on('action:posts.loaded action:topic.loaded', function () {
		setTimeout(enhanceEmbed, window.twttr ? 0 : 1000);
	});
});