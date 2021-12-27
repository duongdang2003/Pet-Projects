let red = 0,
	green = 0,
	blue = 0;
let container = document.getElementById("container");
let screen = document.getElementById("screen");
function createColorRGB() {
	let container = document.getElementById("container");
	let screen = document.getElementById("screen");
	red = Math.floor(Math.random() * 255);
	green = Math.floor(Math.random() * 255);
	blue = Math.floor(Math.random() * 255);
	container.style.backgroundColor = `rgb(${red},${green},${blue})`;
	screen.innerHTML = `Background color: rgb( ${red}, ${green}, ${blue})`;
}
function createColorRGBA() {
	let alphas = Math.random();
	alphas = alphas.toFixed(1);
	red = Math.floor(Math.random() * 255);
	green = Math.floor(Math.random() * 255);
	blue = Math.floor(Math.random() * 255);
	container.style.backgroundColor = `rgba(${red},${green},${blue}, ${alphas})`;
	screen.innerHTML = `Background color: rgb( ${red}, ${green}, ${blue}, ${alphas})`;
}
