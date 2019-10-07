let catsNames = ["Katy", "Ginger"];
let catsURLS = ["1562-cute-little-cat.jpg","tiny-kitten-in-field.jpg"];
let cats = [];
let currentlyLoadedCat = 1;

class Cat
	{
		constructor(catName,catNumber,catPicture)
		{
			this.catName = catName;
			this.catNumber = catNumber;
			this.catPicture = catPicture;
			this.numClicks = 0;
		}
	}

document.querySelector(".catPhoto").addEventListener("click", increaseClickNum);

initCats();
buildNavigationMenu();

function buildNavigationMenu()
{
	let navMenu = document.querySelector("#navMenu");
	
	for(var i = 1; i <= catsNames.length; i++)
		{
			let menuItem = document.createElement("button");
			menuItem.className = "menuItem";
			menuItem.id = "menuItem" + i;
			menuItem.textContent = cats[i-1].catName;
			navMenu.appendChild(menuItem);
		}
	
	document.querySelector("#navMenu").addEventListener("click", showCatDetails);
}

function initCats()
{
	for(var i = 0; i < catsNames.length; i++)
		{
			let cat = new Cat(catsNames[i], (i+1), catsURLS[i]);
			cats.push(cat);
		}
}

function showCatDetails(e)
{
	let chosenCatNum = e.target.id.substr(8,1);
	
	document.querySelector(".counterNumber").textContent = cats[chosenCatNum-1].numClicks;
	document.querySelector(".kittenName").textContent = cats[chosenCatNum-1].catName;
	document.querySelector(".catPhoto").setAttribute("src", cats[chosenCatNum-1].catPicture);
	currentlyLoadedCat = chosenCatNum;
}

function increaseClickNum(e)
{
	cats[currentlyLoadedCat-1].numClicks++;
	document.querySelector(".counterNumber").textContent = cats[currentlyLoadedCat-1].numClicks;
}