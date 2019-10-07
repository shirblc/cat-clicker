let catsNames = ["Katy", "Ginger"];
let catsURLS = ["1562-cute-little-cat.jpg","tiny-kitten-in-field.jpg"];
let cats = [];

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

document.getElementById("catPhoto").addEventListener("click", increaseClickNum);

buildNavigationMenu();
initCats();

function buildNavigationMenu()
{
	for(var i = 1; i <= catsNames.length; i++)
		{
			let navMenu = document.querySelector("#navMenu");
			
			let menuItem = document.createElement("button");
			menuItem.className = "menuItem";
			menuItem.id = "menuItem" + i;
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
	let chosenCatNum = e.target.id.substring(8,1);
	
	document.querySelector(".counterNumber").textContent = cats[chosenCatNum-1].numClicks;
	document.querySelector(".kittenName").textContent = cats[chosenCatNum-1].catName;
	document.querySelector(".catPhoto").setAttribute("src", cats[chosenCatNum-1].catPicture);
}

function increaseClickNum(e)
{
	let catNum = e.target.id.substr(e.target.id.length - 1, 1);
	
	cats[catNum-1].numClicks++;
	document.querySelector(".counterNumber").textContent = cats[chosenCatNum-1].numClicks;
}