const mickeyTheCat = {
  name: "Mickey",
  photo: "images/mickeyTheCat.jpg",
  board: "Mboard"
}
const willyTheCat = {
  name: "Willy",
  photo: "images/willyTheCat.jpg",
  board: "Wboard"
}
// create de side bar :

// <div class="sidenav">
// <a href="#">About</a>
// <a href="#">Services</a>
// <a href="#">Clients</a>
// <a href="#">Contact</a>
// </div>

var sideBar = document.createElement("div");
sideBar.className = "sidenav";
sideBar.innerHTML= "Please choose Kitten to play with:";

// Here we put cats on an Array
var catsArray = [mickeyTheCat, willyTheCat];
// Loop over array to define cats
for (var i = 0; i < catsArray.length; i++) {
  var num = 0;
  // update de sidenav
  var newLink = document.createElement("a");
  newLink.setAttribute("href", "#");
  newLink.innerHTML = (catsArray[i].name);
  // create new container
  var container = document.createElement("div");
  container.className = "container";
  container.classList.add("hidden");
  container.id = catsArray[i].name;
  // add click feature to show only clicked kitten
  newLink.addEventListener("click", (function(containerToShow) {
    return function() {
      containerToShow.classList.remove("hidden");
      containerToShow.classList.add("show");
      };
  })(container));
  sideBar.appendChild(newLink);
  // stablish cats cats name and title
  var nameC = catsArray[i].name;
  var titleName = document.createElement("div");
  titleName.innerHTML = (catsArray[i].name + " the cat");
  // create new board for clicks to be shown
  var board = document.createElement("div");
  board.className = catsArray[i].board;
  board.innerHTML = "You can click on " + catsArray[i].name + " the cat";
  // create image for new cat
  var newImage = document.createElement("img");
  newImage.setAttribute("src", catsArray[i].photo);
  newImage.className = "photo";
  // create click events
  newImage.addEventListener("click", (function(clickCopy, nBoard, catsName) {
    return function() {
      clickCopy++;
      if (clickCopy === 1) {
        nBoard.innerHTML = ("You made " + clickCopy + " click on " + catsName);
      } else {
        nBoard.innerHTML = ("You made " + clickCopy + " clicks on " + catsName);
      }
    }
  })(num, board, nameC));
  // append the new cat to a div section
  container.appendChild(titleName);
  container.appendChild(newImage);
  container.appendChild(board);
  document.body.appendChild(container);
  document.body.appendChild(sideBar);
};









//
//
// var clickCount=0;
// var kittenPhoto = document.querySelector(".photo");
// kittenPhoto.addEventListener("click", function(){
//   clickCount++;
//   if (clickCount===1){
//   let changeCount = document.querySelector(".board");
//   changeCount.innerHTML = ("You made "+clickCount+" click");
// }
// else{
//   let changeCount = document.querySelector(".board");
//   changeCount.innerHTML = ("You made "+clickCount+" clicks");
// }
// }, false);
