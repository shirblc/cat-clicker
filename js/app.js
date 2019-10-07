let numClicksCat1 = 0;
let numClicksCat2 = 0;
let catsNames = ["Katy", "Ginger"];

document.getElementById("catPhoto1").addEventListener("click", increaseClickNum);
document.getElementById("catPhoto2").addEventListener("click", increaseClickNum);

showCatName();

function showCatName()
{
	for(var i = 0; i < catsNames.length; i++)
		{
			document.getElementById("kittenName" + (i + 1)).textContent = catsNames[i];
		}
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