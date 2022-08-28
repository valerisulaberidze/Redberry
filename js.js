function RedirectToAddData() {
    window.location.href = "AddData.html";
}



fetch(
	'https://pcfy.redberryinternship.ge/swagger',
	{
		method: 'GET',
        mode: "no-cors",
		
	}
).then(response => {
	console.log(response);
});



var showLaptopInfo = false;

function ExchangeFormsData() {

    var employes = document.getElementById("employes-info-btn");
    var laptop = document.getElementById("laptop-info-btn");
    showLaptopInfo = !showLaptopInfo;
    
    if (showLaptopInfo) {
        employes.classList.remove("active");
        laptop.classList.add("active");
    } else {
        laptop.classList.remove("active");
        employes.classList.add("active");
    }
}