function getRandomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

document.addEventListener("DOMContentLoaded", () => {
	// DOM elements
	const button = document.querySelector("button");
	const quote = document.getElementById("quote");
	const cite = document.getElementById("author");

	async function updateQuote() {
		// Fetch a random quote from the Quotable API
		const response = await fetch("https://api.quotable.io/random");
		const data = await response.json();
		if (response.ok) {
			// Update DOM elements
			quote.textContent = data.content;
			cite.textContent = data.author;
		} else {
			quote.textContent = "An error occured";
			console.log(data);
		}
	}

	// Attach an event listener to the `button`
	button.addEventListener("click", updateQuote);
	button.addEventListener("click", function () {
		document.body.style.backgroundColor = getRandomColor();
	});

	// call updateQuote once when page loads
	updateQuote();
});

