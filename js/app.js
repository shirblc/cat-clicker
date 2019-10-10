/*let catsNames = ["Katy", "Ginger", "Cider", "Marie", "Molly"];
let cats = [];
let currentlyLoadedCat = 1;*/

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

let Model = 
	{
		cats: [],
		currentlyLoadedCat: 1,
		
		initCats()
		{
			let catsNames = ["Katy", "Ginger", "Cider", "Marie", "Molly"];
			
			for(var i = 0; i < catsNames.length; i++)
			{
				let catURL = "imgs/kitty" + (i+1) + ".jpg";
				let cat = new Cat(catsNames[i], (i+1), catURL);
				Model.cats.push(cat);
			}
		},
	}

let Octopus = 
	{
		init()
		{
			Model.initCats();
			View.buildNavigationMenu();
		},
		
		getCat(numCat)
		{
			Model.currentlyLoadedCat = numCat;
			return Model.cats[numCat-1];
		},
		
		getLength()
		{
			return Model.cats.length;
		},
		
		increaseClickNum()
		{
			Model.cats[Model.currentlyLoadedCat-1].numClicks++;
			document.querySelector(".counterNumber").textContent = Model.cats[Model.currentlyLoadedCat-1].numClicks;
		},
		
		adminMode()
		{
			if(!View.isAdminMenu)
				{
					View.isAdminMenu = true;
					View.openAdminMenu(Model.cats[Model.currentlyLoadedCat-1]);
				}
		},
		
		saveChanges()
		{
			Model.cats[Model.currentlyLoadedCat-1].catName = document.querySelector("#catName").value;
			Model.cats[Model.currentlyLoadedCat-1].catPicture = document.querySelector("#catURL").value;
			Model.cats[Model.currentlyLoadedCat-1].numClicks = document.querySelector("#clickNum").value;
			
			document.getElementById("menuItem" + Model.currentlyLoadedCat).click();
		}
	}

let View = 
	{
		catDetails: Octopus.getCat(1),
		isAdminMenu: false,
		
		buildNavigationMenu()
		{
			let navMenu = document.querySelector("#navMenu");
			let numButtons = Octopus.getLength();
			
			for(var i = 1; i <= numButtons; i++)
			{
				let menuItem = document.createElement("button");
				menuItem.className = "menuItem";
				menuItem.id = "menuItem" + i;
				menuItem.textContent = "Cat " + i;
				navMenu.appendChild(menuItem);
			}
			
			let adminButton = document.createElement("button");
			adminButton.className = "menuItem";
			adminButton.id = "adminButton";
			adminButton.textContent = "Admin Mode";
			navMenu.appendChild(adminButton);
			adminButton.addEventListener("click", Octopus.adminMode);
			
			navMenu.addEventListener("click", View.showCatDetails);
			document.querySelector(".catPhoto").addEventListener("click", Octopus.increaseClickNum);
		},
		
		showCatDetails(e)
		{
			let chosenCatNum = e.target.id.substr(8,1);

			View.catDetails = Octopus.getCat(chosenCatNum);

			document.querySelector(".counterNumber").textContent = View.catDetails.numClicks;
			document.querySelector(".kittenName").textContent = View.catDetails.catName;
			document.querySelector(".catPhoto").setAttribute("src", View.catDetails.catPicture);
		},
		
		openAdminMenu(catDetails)
		{
			document.querySelector("#adminForm").style.visibility = "visible";
			document.querySelector("#catName").value = catDetails.catName;
			document.querySelector("#catURL").value = catDetails.catPicture;
			document.querySelector("#clickNum").value = catDetails.numClicks;
			
			document.querySelector("#saveChanges").addEventListener("click", View.closeMenu);
			document.querySelector("#cancelChanges").addEventListener("click", View.closeMenu);
		},
		
		closeMenu(e)
		{
			if(e.target.id == "saveChanges")
				{
					Octopus.saveChanges();
				}
			
			document.querySelector("#adminForm").style.visibility = "hidden";
			View.isAdminMenu = false;
		}
	}

Octopus.init();