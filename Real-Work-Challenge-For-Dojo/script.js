var data = null;

function getData() {
  document.getElementById('statusText').innerHTML = "Loading";
  fetch("./walkuprestaurants.json")
    .then(response => {
      return response.json();
    })
    .then(jsonData => storeData(jsonData));
}

function storeData(jsonData) {
  data = jsonData
  console.log(data);
  document.getElementById('statusText').innerHTML = "Loaded";
  document.getElementById("setDetailsButton").disabled = false;
  restaurantsHTML = ""
  for(let i = 0; i < 51; i++) {
    restaurantsHTML += `
    <div class="restInfo">
      <img class="restPic" src="${data[i].cover_photo}" alt="">
      <p>${data[i].name}</p>
      <p>${data[i].location.area}, ${data[i].location.country}</p>
      <p>${data[i].description}</p>
    </div>
`
  }
  document.getElementById('restaraunts').innerHTML = restaurantsHTML
}

// function setRestarauntData() {
//   document.getElementById('restaurantId').innerHTML = data[0].restaurant_id;
//   document.getElementById('restaurantName').innerHTML = data[0].name;
  
// }

getData()
