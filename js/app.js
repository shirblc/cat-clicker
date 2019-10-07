let numClicksCat1 = 0;
let numClicksCat2 = 0;

document.getElementById("catPhoto1").addEventListener("click", increaseClickNum);
document.getElementById("catPhoto2").addEventListener("click", increaseClickNum);

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