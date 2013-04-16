function parse(msg) {
	//linkify
	return replaceURLWithHTMLLinks(msg);
}

function replaceURLWithHTMLLinks(text) {
    var exp = /(\b[A-z]+:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(exp,"<a href='$1'>$1</a>"); 
}