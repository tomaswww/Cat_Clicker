var initialCats = [
  {
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
};


var ViewModel = function() {
  this.currentCat = ko.observable(new Cat({
    name: "Mickey",
    photo: "images/mickeyTheCat.jpg",
    clickCount: 0
  }));

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());
