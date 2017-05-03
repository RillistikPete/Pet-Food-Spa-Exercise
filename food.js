console.log("hi food.js");
var dogRequest = new XMLHttpRequest();

dogRequest.addEventListener("load", reqComplete);
dogRequest.addEventListener("error", reqFail);

var doggieDiv = document.getElementById('dogDiv');

function reqComplete(event){
	var data = JSON.parse(event.target.responseText);
    console.log("Dog Food is", data);
    dogInDom(data);
}

function reqFail(event){
	console.log("Error ocurred on loading.");
}


function dogInDom(data){
	var putIt = "";
	for (var i=0; i < data.dog_brands.length; i++){
		//console.log(data.dog_brands);
		for (var j=0; j < data.dog_brands[i].types.length; j++){
			//console.log(data.dog_brands[i].types[j]);
			for (var k=0; k < data.dog_brands[i].types[j].volumes.length; k++){
				//console.log(data.dog_brands[i].types[j].volumes[k]);
				putIt += `<h2>${data.dog_brands[i].name}</h2>`
				putIt += `<p>${data.dog_brands[i].types[j].type}</p>`
				putIt += `<p>${data.dog_brands[i].types[j].volumes[k].name}</p>`
				putIt += `<p>${data.dog_brands[i].types[j].volumes[k].price}</p>`
			}
		}
	}
	doggieDiv.innerHTML += putIt;
}

dogRequest.open("GET", "dog-food.json");
dogRequest.send();



//----------------------------------------------------------------------


var catRequest = new XMLHttpRequest();

catRequest.addEventListener("load", catReqComplete);
catRequest.addEventListener("error", catFail);

var kittyDiv = document.getElementById('catDiv');

function catReqComplete(event){
	var catData = JSON.parse(event.target.responseText);
	console.log('Cat food is', catData);
	catInDom(catData);
}

function catFail(event){
	console.log("Error loading");
}

function catInDom(catData){
	var kittyData;
	for (var i = 0; i < catData.cat_brands.length; i++){
		for (var j = 0; j < catData.cat_brands[i].types.length; j++){
			for (var k = 0; k < catData.cat_brands[i].types[j].volumes.length; k++){
				//console.log(catData.cat_brands[i].types[j].volumes[k]);

				kittyData += `<h2>${catData.cat_brands[i].name}</h2>`
				kittyData += `<p>${catData.cat_brands[i].types[j].type}</p>`
				kittyData += `<p>${catData.cat_brands[i].types[j].volumes[k].size}</p>`
				kittyData += `<p>${catData.cat_brands[i].types[j].volumes[k].price}</p>`
			}
			kittyDiv.innerHTML += kittyData;
		}
	}
}

catRequest.open("GET", "cat-food.json");
catRequest.send();






