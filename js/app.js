/*
	app.js
	Cat Clicker
	
	Written by Shir Bar Lev on 10/10/19
*/


/*
	Cat Class. Contains a cat's name, number, picture and number of clicks.
	----------------
	Programmer: Shir Bar Lev.
	Date: 7/10/2019
*/
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

/*
	The Model. Contains the application's data.
	----------------
	Programmer: Shir Bar Lev.
	Date: 10/10/2019
*/
let Model = 
	{
		//contains the cats and the currently loaded cat
		cats: [],
		currentlyLoadedCat: 1,
		
		//initiates the cat objects and adds tehm to the cats array
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

/*
	The Octopus. Responsible for sending information between the Model and the View.
	----------------
	Programmer: Shir Bar Lev.
	Date: 10/10/2019
*/
let Octopus = 
	{
		//initiates the model and the view
		init()
		{
			Model.initCats();
			View.buildNavigationMenu();
		},
		
		//gets a specific cat's data for the View and changes the currently loaded cat
		getCat(numCat)
		{
			Model.currentlyLoadedCat = numCat;
			return Model.cats[numCat-1];
		},
		
		//gets the length of the cats array
		getLength()
		{
			return Model.cats.length;
		},
		
		//increases the number of clicks, both in the Model and the View
		increaseClickNum()
		{
			Model.cats[Model.currentlyLoadedCat-1].numClicks++;
			document.querySelector(".counterNumber").textContent = Model.cats[Model.currentlyLoadedCat-1].numClicks;
		},
		
		//checks whether the admin menu is currently open; if it isn't, opens the menu
		//also responsible for filling the menu with the details of the current cat
		adminMode()
		{
			if(!View.isAdminMenu)
				{
					View.isAdminMenu = true;
					View.openAdminMenu(Model.cats[Model.currentlyLoadedCat-1]);
				}
		},
		
		//saves the changes made to the cat's details in the admin menu
		//then imitates a click on the currently loaded cat's menu button in order
		//to reload the page with the new details
		saveChanges()
		{
			Model.cats[Model.currentlyLoadedCat-1].catName = document.querySelector("#catName").value;
			Model.cats[Model.currentlyLoadedCat-1].catPicture = document.querySelector("#catURL").value;
			Model.cats[Model.currentlyLoadedCat-1].numClicks = document.querySelector("#clickNum").value;
			
			document.getElementById("menuItem" + Model.currentlyLoadedCat).click();
		}
	}

/*
	The View. Contains the application's UI.
	----------------
	Programmer: Shir Bar Lev.
	Date: 10/10/2019
*/
let View = 
	{
		//details of the first cat, in order to initiate the application
		catDetails: Octopus.getCat(1),
		//a variable indicating whether the admin menu is currently open
		isAdminMenu: false,
		
		//builds the navigation menu
		buildNavigationMenu()
		{
			let navMenu = document.querySelector("#navMenu");
			let numButtons = Octopus.getLength();
			
			//creates a menu button for each cat
			for(var i = 1; i <= numButtons; i++)
			{
				let menuItem = document.createElement("button");
				menuItem.className = "menuItem";
				menuItem.id = "menuItem" + i;
				menuItem.textContent = "Cat " + i;
				navMenu.appendChild(menuItem);
			}
			
			//creates a menu button for the admin menu
			let adminButton = document.createElement("button");
			adminButton.className = "menuItem";
			adminButton.id = "adminButton";
			adminButton.textContent = "Admin Mode";
			navMenu.appendChild(adminButton);
			adminButton.addEventListener("click", Octopus.adminMode);
			
			//adds event listeners to the menu and the cat photo
			navMenu.addEventListener("click", View.showCatDetails);
			document.querySelector(".catPhoto").addEventListener("click", Octopus.increaseClickNum);
		},
		
		//changes the displayed cat's details based on the cat chosen
		//by the user (the clicked menu button)
		showCatDetails(e)
		{
			//ensures it's only called when the user actually clicks on a cat's
			//button rather than anywhere in the menu
			if(e.target.id.substr(0,8) == "menuItem")
				{
					//gets the number of the chosen cat
					let chosenCatNum = e.target.id.substr(8,1);
					
					//gets the cat's details
					View.catDetails = Octopus.getCat(chosenCatNum);
					
					//changes the details displayed on the screen
					document.querySelector(".counterNumber").textContent = View.catDetails.numClicks;
					document.querySelector(".kittenName").textContent = View.catDetails.catName;
					document.querySelector(".catPhoto").setAttribute("src", View.catDetails.catPicture);
				}
		},
		
		//opens the admin menu and fills it with the details of the currently open cat
		openAdminMenu(catDetails)
		{
			//turns the menu visible and adds the cat's details
			document.querySelector("#adminForm").style.visibility = "visible";
			document.querySelector("#catName").value = catDetails.catName;
			document.querySelector("#catURL").value = catDetails.catPicture;
			document.querySelector("#clickNum").value = catDetails.numClicks;
			
			//adds event listeners to the admin menu buttons
			document.querySelector("#saveChanges").addEventListener("click", View.closeMenu);
			document.querySelector("#cancelChanges").addEventListener("click", View.closeMenu);
		},
		
		//closes the menu
		closeMenu(e)
		{
			//if the user clicked "save changes", also tells the Octopus to change the 
			//cat's details in the Model
			if(e.target.id == "saveChanges")
				{
					Octopus.saveChanges();
				}
			
			document.querySelector("#adminForm").style.visibility = "hidden";
			View.isAdminMenu = false;
		}
	}

//init the Octopus
Octopus.init();