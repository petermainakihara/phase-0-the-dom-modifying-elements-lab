// Write your code here!// Remove the <main> element with id 'main'
const main = document.getElementById("main");
main.remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id of the new header to 'victory'
newHeader.id = "victory";

// Set the text content of the new header
newHeader.textContent = "Peter Kihara is the champion";

// Append the new header to the body
document.body.append(newHeader);
