

let mnue = document.querySelector(".manu");
let navbar = document.querySelector(".navbar");


mnue.onclick = () => {
	
	mnue.classList.toggle('bx-x');
	navbar.classList.toggle('active');
	
}