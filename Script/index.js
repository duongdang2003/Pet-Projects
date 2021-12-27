let arrayProjects = [
	{ title: "Color Flipper", address: "./color-flipper.html" },
	{ title: "Caculator", address: "./caculator.html" },
	{ title: "Color Creator", address: "./color-creator.html" },
	{ title: "Clock", address: "./clock.html" },
	{ title: "Background", address: "./background.html" },
	{ title: "Background", address: "./background.html" },
	{ title: "Background", address: "./background.html" },
	{ title: "Background", address: "./background.html" },
	{ title: "Background", address: "./background.html" },
];
let arrayColor = ["l-yellow", "l-green", "l-blue", "l-purple", "l-red"];
let container = document.getElementById("container");
while (arrayProjects.length % 4 != 0) {
	arrayProjects.push({ title: "ghost block" });
}
for (let i = 0; i < arrayProjects.length; i++) {
	if (i % 4 === 0) {
		let row = document.createElement("div");
		row.setAttribute("class", "row gx-5 text-center fs-4 mb-5");
		container.appendChild(row);
	}
	if (arrayProjects[i].title != "ghost block") {
		rowArray = document.getElementsByClassName(
			"row gx-5 text-center fs-4 mb-5"
		);
		rowSeleted = rowArray[rowArray.length - 1];
		let col = document.createElement("div");
		col.setAttribute("class", "col");
		let link = document.createElement("a");
		link.href = arrayProjects[i].address;
		let content = document.createElement("div");
		content.setAttribute("class", `card w-100 h-100 p-5 ${arrayColor[i % 5]}`);
		content.innerHTML = arrayProjects[i].title;
		rowSeleted.appendChild(col);
		col.appendChild(link);
		link.appendChild(content);
		console.log(rowSeleted);
	} else {
		let ghostBlock = document.createElement("div");
		ghostBlock.setAttribute("class", "col");
		rowSeleted.appendChild(ghostBlock);
	}
}
