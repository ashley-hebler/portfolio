import Vue from 'vue'
import FontFaceObserver from 'fontfaceobserver'

var font = new FontFaceObserver('Merriweather');
if ( document.documentElement.className.indexOf( 'fonts-loaded' ) <= -1 ) {
	Promise.all([font.load()]).then(function() {
		document.documentElement.className += 'fonts-loaded';
	});
}
