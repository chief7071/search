let bingLink = document.getElementById("bing-link");
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
	link = "https://www.bing.com/search?q=" + searchValue + "&qs=n&form=QBRE&sp=-1&pq=" + searchValue + "&sc=8-12&sk=&cvid=8AEAAB23106642E78C6F3B4A1B666832";
	bingLink.setAttribute("href", link);
}

function goLink() {
	updateSearchValue();
	spaces();
	newLink();
}

