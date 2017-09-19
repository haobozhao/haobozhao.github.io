var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/symbol_of_neu.jpg') {
		myImage.setAttribute('src', 'images/campus.jpg');
	} else {
		myImage.setAttribute('src', 'images/symbol_of_neu.jpg');
	};
}
