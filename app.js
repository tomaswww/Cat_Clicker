// MODEL:
// Create the cats as objects
const mickeyTheCat = {
  name: "Mickey",
  photo: "images/mickeyTheCat.jpg",
  board: "Mboard",
  clickCount: 0
};
const willyTheCat = {
  name: "Willy",
  photo: "images/willyTheCat.jpg",
  board: "Wboard",
  clickCount: 0
};

// OCTOPUS:
// Must get things started and tell things when to happen!
// define current cat
// get from view 1 the cat selected
// set the view 2 with data

// Here we put cats on an Array
var catsArray = [mickeyTheCat, willyTheCat];

  // VIEW 1:
  // SideBar for cat Menu
  // create de side bar :
  for (var i = 0; i < catsArray.length; i++) {
    var newLink = document.createElement("a");
    newLink.setAttribute("href", "#");
    newLink.innerHTML = (catsArray[i].name);
    var sideBar = document.getElementsByClassName("sidenav");
    sideBar.appendChild(newLink);
  }


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
