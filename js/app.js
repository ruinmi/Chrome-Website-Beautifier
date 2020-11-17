for (var i = 1; i <= 50; i++)
{
	if (document.getElementById("advert-"+i) != null)
	{
		document.getElementById("advert-"+i).style.display = "none";
		console.log(i);
	}
	if (document.getElementById("about-"+i) != null)
	{
		document.getElementById("about-"+i).style.display = "none";
		console.log(i);
	}
}

