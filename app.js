// MODEL:
// Create the cats as objects on an Array
var model = {
  currentCat: null,
  cats: [{
      name: "Mickey",
      photo: "images/mickeyTheCat.jpg",
      clickCount: 0
    },
    {
      name: "Willy",
      photo: "images/willyTheCat.jpg",
      clickCount: 0
    }
  ]
};



// OCTOPUS:
var octopus = {
  // Must get things started and tell things when to happen!
  // define current cat

  init: function() {
    // starts by setting current cat to first on list
    model.currentCat = model.cats[0];
    // renders all views
    catLinks.init();
    catPanel.init();
  },
  defineCurrentCat: function() {
    return model.currentCat;
  },
  // this sets the cat when clicked to current for display
  clickCurrentCat: function(cat) {
    model.currentCat = cat;
  },
  getCats: function() {
    return model.cats;
  },
  incrementCounter: function() {
    model.currentCat.clickCount++;
    catPanel.render();
  }
};



// VIEW 1:
// SideBar for cat Menu
// create de side bar :
var catLinks = {
  init: function() {
    // select the panel where links will be placed
    this.panel = document.getElementById("links");
    // render the view based on this selection
    this.render();
  },
  render: function() {
    var catsArray = octopus.getCats();
    this.panel.innerHTML = ("");
    // loop over the array to dislpay links
    for (var i = 0; i < catsArray.length; i++) {
      var cat = catsArray[i];
      var newLink = document.createElement("li");
      newLink.textContent = cat.name;
      newLink.addEventListener("click", function(cat) {
        return function() {
          octopus.clickCurrentCat(cat);
          catPanel.render();
        }
      }(cat));
      this.panel.appendChild(newLink);
    };
  }
};


// VIEW 2:
// Display area for current cat
var catPanel = {
  init: function() {
    // set shortcut for selecting elements in DOM
    this.clickPanel = document.getElementById("clicksDone");
    this.catPic = document.getElementById("photo");
    this.catNam = document.getElementById("kittenName");
    // set the event listener for picture of kittenName
    this.catPic.addEventListener("click", function() {
      octopus.incrementCounter();
    });
    // render new view of container
    this.render();
  },
  render: function() {
    // it updates the DOM view
    var currentCat = octopus.defineCurrentCat();
    this.clickPanel.textContent = currentCat.clickCount;
    this.catPic.src = currentCat.photo;
    this.catNam.textContent = currentCat.name;
  }
};

octopus.init();
