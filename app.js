const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});


	document.getElementById('downloadButton').addEventListener('click', function () {
		// Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
		var resumePath = 'Resume Nezaiah Mwila Mumba.pdf';
	
		// Create an anchor element
		var link = document.createElement('a');
		link.href = resumePath;
	
		// Set the download attribute with the desired file name
		link.download = 'your_resume.pdf';
	
		// Append the anchor to the body (required for Firefox)
		document.body.appendChild(link);
	
		// Trigger a click on the anchor element to start the download
		link.click();
	
		// Remove the anchor from the body
		document.body.removeChild(link);
	  });
	
});
