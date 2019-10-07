let numClicksCat1 = 0;
let numClicksCat2 = 0;
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
		}
	}

document.getElementById("catPhoto1").addEventListener("click", increaseClickNum);
document.getElementById("catPhoto2").addEventListener("click", increaseClickNum);

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
	
	document.querySelector(".counterNumber").textContent = 0;
	document.querySelector(".kittenName").textContent = cats[chosenCatNum-1].catName;
	document.querySelector(".catPhoto").setAttribute("src", cats[chosenCatNum-1].catPicture);
}

function increaseClickNum(e)
{
	switch(e.target.id.substr(e.target.id.length - 1, 1))
		{
			case "1":
				numClicksCat1++;
				document.getElementById(`counterNumber1`).textContent = numClicksCat1;
				break;
			case "2":
				numClicksCat2++;
				document.getElementById(`counterNumber2`).textContent = numClicksCat2;
				break;
		}
}