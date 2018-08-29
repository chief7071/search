let askLink = document.getElementById("ask-link");
let search = document.getElementById("search");
let searchValue = search.value;
let link = null;

function updateSearchValue() {
	searchValue = search.value;
}
function spaces() {
	searchValue = searchValue.replace(" ", "+");
}
function newLink() {
	link = "https://ask.com/web?q=" + searchValue + "&web?o=0&l=dir&qo=serpSearchTopBox&q=" + searchValue + "&web?o=0&l=dir&qo=serpSearchTopBox&q=";
	askLink.setAttribute("href", link);
}

function goLink() {
	updateSearchValue();
	spaces();
	newLink();
}
