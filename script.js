const header = document.querySelector(".top-header");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {

  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > window.innerHeight) {

    if (currentScroll > lastScrollTop) {
      header.classList.add("show-header");
    }
    else {
      header.classList.remove("show-header");
    }
  } else {
    header.classList.remove("show-header");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

});

fetch("./Sections/homepage.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("homepage").innerHTML = data;
	});
fetch("./Sections/technicalGlance.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("technical-glance").innerHTML = data;
	});
fetch("./Sections/performanceSection.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("performance").innerHTML = data;
	});
fetch("./Sections/faqs.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("faqs").innerHTML = data;
	});
fetch("./Sections/application.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("application").innerHTML = data;
	});
fetch("./Sections/manufacturing.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("manufacturing").innerHTML = data;
	});
fetch("./Sections/testimonial.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("testimonial").innerHTML = data;
	});
fetch("./Sections/portfolio.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("portfolio").innerHTML = data;
	});
fetch("./Sections/resources.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("resources").innerHTML = data;
	});
fetch("./Sections/contact.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("contact").innerHTML = data;
	});