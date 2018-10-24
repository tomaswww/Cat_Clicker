var clickCount=0;
var kittenPhoto = document.querySelector(".photo");
kittenPhoto.addEventListener("click", function(){
  clickCount++;
  if (clickCount===1){
  let changeCount = document.querySelector(".board");
  changeCount.innerHTML = ("You made "+clickCount+" click");
}
else{
  let changeCount = document.querySelector(".board");
  changeCount.innerHTML = ("You made "+clickCount+" clicks");
}
}, false);












// var catsArray = ["johnTheCat", "marcellusTheCat", "walterTheCat", "mickyTheCat", "oswaldTheCat"];
// var clicksMade = 0;
// var num = 0;
// for (var i = 0; i < catsArray.length; i++) {
// var newCatDiv = document.createElement("div");
//   num++;
//   // crreate images div
//   var newCatDiv = document.createElement("div");
//   // create an image element
//   var newCat = document.createElement("img");
//   // set the image src
//   newCat.setAttribute("src", "images/kitten.jpg");
//   // put the name to the image
//   // newCat.textContent = catsArray[i];
//   // // set the elements id
//   // newCat.id = catsArray[i];
//   // // add the event listener
//   // newCat.addEventListener('click', (function(numCopy) {
//   //   clicksMade++;
//   //   return function() {
//   //     var catId = newCat.id;
//   //     newCat.innerHTML("You Made " + clicksMade + " Click/s");
//   //   }
//   // })(num));
// body.appendChild(newCatDiv);
// }
