let numClicks = 0;

document.getElementById("catPhoto").addEventListener("click", increaseClickNum);

function increaseClickNum()
{
	numClicks++;
	document.getElementById("counterNumber").textContent = numClicks;
}