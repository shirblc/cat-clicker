let numClicks = 0;

document.getElementById("catPhoto1").addEventListener("click", increaseClickNum);

function increaseClickNum()
{
	numClicks++;
	document.getElementById("counterNumber1").textContent = numClicks;
}