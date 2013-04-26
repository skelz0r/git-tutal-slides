// Init reveal
Reveal.initialize({
				controls: false,
				progress: true,
				history: true,
				center: true,
				overview: true,
				rollingLinks: false,
				//transition: 'page',

				// Optional libraries used to extend on reveal.js
				/*dependencies: [
				{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
				{ src: 'plugin/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
				{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
				{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
				{ src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
				{ src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
				// { src: 'plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
				]*/
});

/*function navReset() {
	$('header div#nav div.nav-elt').each(function() { $(this).fadeOut() });
}*/

function navSetTitle(title) {
	$('header div#nav div.subtitle').fadeOut();
	$('header div#nav div.title').fadeOut(function() {
		$('header div#nav div.title span').html(title);
		$('header div#nav div.title').fadeIn();
	});
}

function navSetSubTitle(subtitle) {
	$('header div#nav div.subtitle span').html(subtitle);
	$('header div#nav div.subtitle').fadeIn();
}

// Add title in header
Reveal.addEventListener( 'slidechanged', function( event ) {
	slide = $(event.currentSlide);
	
	if (slide.attr('data-title') !== undefined) {
		navSetTitle(slide.attr('data-title'));
	}	
	
	if (slide.attr('data-subtitle') !== undefined) {
		navSetSubTitle(slide.attr('data-subtitle'));
	}	
});

Reveal.addEventListener( 'fragmentshown', function(event) {
	frag = $(event.fragment);

	if (frag.attr('data-step') !== undefined){
		changeMvcImg(parseInt(frag.attr('data-step')));
	}
});

Reveal.addEventListener( 'fragmenthidden', function(event) {
	frag = $(event.fragment);

	if (frag.attr('data-step') !== undefined){
		changeMvcImg(parseInt(frag.attr('data-step'))-1);
	}
});

function changeMvcImg(step) {
	$('section#mvc.present img.mvc').attr('src', "img/mvc/" + step + ".png");
}
