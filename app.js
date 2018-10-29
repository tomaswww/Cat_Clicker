// MODEL:
// Create the cats as objects on an Array
var model ={
  currentCat:null,
  cats:[
    {
  name: "Mickey",
  photo: "images/mickeyTheCat.jpg",
  clickCount: 0
},
{
  name: "Willy",
  photo: "images/willyTheCat.jpg",
  clickCount: 0
}];



// OCTOPUS:
var octopus = {
// Must get things started and tell things when to happen!
// define current cat

init: function(){
// starts by setting current cat to first on list
  model.currentCat=model.cats[0];
  // renders all views
  catLinks.init();
  catPanel.init();
},
defineCurrentCat: function(){
  return model.currentCat;
},
// this sets the cat when clicked to current for display
clickCurrentCat: function(cat){
  model.currentCat=cat;
},
getCats: function(){
  return model.cats;
},
incrementCounter: function(){
  model.currentCat.clickCount++;
  catPanel.render();
}
};


// get from view 1 the cat selected
// set the view 2 with data

// Here we call the nav menu to display
displayCat();
};

  // VIEW 1:
  // SideBar for cat Menu
  // create de side bar :
  function displayCat(){
  for (var i = 0; i < catsArray.length; i++) {
    var newLink = document.createElement("a");
    newLink.setAttribute("href", "#");
    newLink.innerHTML = (catsArray[i].name);
    var sideBar = document.getElementsByClassName("links");
    sideBar.appendChild(newLink);
  };
};


  // VIEW 2:
  // Display area for current cat


  // OLD CODE TO REARANGE:

  // Loop over array to define cats



//   // create new container
//   var container = document.createElement("div");
//   container.className = "container";
//   container.classList.add("hidden");
//   container.id = catsArray[i].name;
//   // add click feature to show only clicked kitten
//   newLink.addEventListener("click", (function(containerToShow) {
//     for (let i = 0; i < catsArray.lenght; i++) {
//       var toHide = document.getElementsByClassName("show");
//       if (toHide.lenght > 0) {
//         toHide.classList.remove("show");
//         toHide.classList.add("hidden");
//       }
//     };
//     return function() {
//       containerToShow.classList.remove("hidden");
//       containerToShow.classList.add("show");
//     }
//   })(container));
//   sideBar.appendChild(newLink);
//   // stablish cats cats name and title
//   var nameC = catsArray[i].name;
//   var titleName = document.createElement("div");
//   titleName.innerHTML = (catsArray[i].name + " the cat");
//   // create new board for clicks to be shown
//   var board = document.createElement("div");
//   board.className = catsArray[i].board;
//   board.innerHTML = "You can click on " + catsArray[i].name + " the cat";
//   // create image for new cat
//   var newImage = document.createElement("img");
//   newImage.setAttribute("src", catsArray[i].photo);
//   newImage.className = "photo";
//   // create click events
//   newImage.addEventListener("click", (function(clickCopy, nBoard, catsName) {
//     return function() {
//       clickCopy++;
//       if (clickCopy === 1) {
//         nBoard.innerHTML = ("You made " + clickCopy + " click on " + catsName);
//       } else {
//         nBoard.innerHTML = ("You made " + clickCopy + " clicks on " + catsName);
//       }
//     }
//   })(num, board, nameC));
//   // append the new cat to a div section
//   container.appendChild(titleName);
//   container.appendChild(newImage);
//   container.appendChild(board);
//   document.body.appendChild(container);
//   document.body.appendChild(sideBar);
// };
// };
