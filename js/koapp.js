// array with cats .. it could also be in a db

var initialCats = [{
    name: "Mickey",
    photo: "images/mickeyTheCat.jpg",
    clickCount: 0
  },
  {
    name: "Willy",
    photo: "images/willyTheCat.jpg",
    clickCount: 0
  },
  {
    name: "Lucky",
    photo: "images/luckyTheCat.jpg",
    clickCount: 0
  },
  {
    name: "Johnny",
    photo: "images/johnnyTheCat.jpg",
    clickCount: 0
  },
  {
    name: "Jimmy",
    photo: "images/jimmyTheCat.png",
    clickCount: 0
  }
];


var Cat = function(data) {
  this.name = ko.observable(data.name);
  this.photo = ko.observable(data.photo);
  this.clickCount = ko.observable(data.clickCount);
}


var ViewModel = function() {

  // generate the array with cats
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

  // initializacion for current cat
  this.currentCat = ko.observable(this.catList()[0]);


  // counter
  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  // set current cat with clicked cat
  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat);
  }

};

// apply the bindings
ko.applyBindings(new ViewModel());
