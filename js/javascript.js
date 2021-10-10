function textChangeDemo() {
	document.getElementById("demo").innerHTML = changeText(document.getElementById("demo").innerHTML);
}

function changeText(textToChange) {
	return(textToChange == "Hello World!" ? "Hello JavaScript!" : "Hello World!");
}