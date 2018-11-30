var Cat = function(){
this.name= ko.observable("Willy");
this.photo= ko.observable("images/willyTheCat.jpg");
this.clickCount= ko.observable(0);
};




var ViewModel = function(){
  var currentCat = ko.observable( new Cat());
  this.incrementCounter = function(){
    this.clickCount(this.clickCount()+1);
  };
}

ko.applyBindings(new ViewModel());
