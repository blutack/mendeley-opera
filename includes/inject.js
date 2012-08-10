opera.extension.onmessage = function(event) {
	if(event.data==="load-mendeley") {
		document.getElementsByTagName('body')[0].appendChild(document.createElement('script')).setAttribute('src','http://www.mendeley.com/minified/bookmarklet.js');
	}
}