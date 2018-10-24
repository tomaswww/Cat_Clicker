document.body.innerHTML = "";
// Here we put cats on an Array
var catsArray = ["mickeyTheCat", "willyTheCat"];
// Loop over array to define cats
for (var i = 0; i < catsArray.length; i++) {
  var num = i;
  var clickCopy=0;
  // create new container
  var container = document.createElement("div");
  container.className="container";
  // create new board for clicks to be shown
  var board = document.createElement("div");
  board.className="board";
  // create image for new cat
  var newImage = document.createElement("img");
  newImage.setAttribute("src", "images/kitten.jpg");
  newImage.className = "photo";
  // create click events
  newImage.addEventListener("click", (function(clickCopy){
    return function(){
      clickCopy++;
      if (clickCopy===1){
        let changeCount = document.querySelector(".board");
        changeCount.innerHTML = ("You made "+clickCopy+" click");
      }
      else{
        let changeCount = document.querySelector(".board");
        changeCount.innerHTML = ("You made "+clickCopy+" clicks");
      }
    }
  })(num));
  // append the new cat to a div section
  container.appendChild(newImage);
  container.appendChild(board);
  document.body.appendChild(container);
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
