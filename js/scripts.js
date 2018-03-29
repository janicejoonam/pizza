//Business Logic

//Constructor is Pizza
function Pizza(size, protein, veggies, total) {
  this.size = size
  this.protein = protein
  this.veggies = veggies
  this.total = total;
}

//4 Prototypes: size, protein, veggies, and total cost
Pizza.prototype.chooseSize = function() {
  var cost = 0;
  if (this.size === "small") {
    cost = 5;
  } else if (this.size === "medium") {
    cost = 8;
  } else if (this.size === "large") {
    cost = 12;
  } else if (this.size === "extralarge") {
    cost = 15;
  }

Pizza.prototype.chooseProtein = function(protein) {

    this.protein.forEach(function() {
      cost += 0.50;
    });

  this.protein.forEach(function() {
    cost += 0.50;
  });
}

Pizza.prototype.chooseVeggies = function(veggies) {
  this.veggies.forEach(function() {
    cost += 0.30;
  });
}

Pizza.prototype.totalCost = function() {
  var totalCost = 0;
  this.total.forEach(function() {
    totalCost += Pizza.cost;
  });
  this.totalCost = totalCost;
  return newPizza.totalCost;
}







//User Interface Logic
$(document).ready(function() {
  $("form#submit").submit(function(event) {
    event.preventDefault();
    var size = [];
    var protein = [];
    var veggies = [];
    var total = [];
      $("input[name='size']:checked").each(function() {
        size.push($(this).val());
      $("input[name='protein']:checked").each(function() {
        protein.push($(this).val());
      $("input[name='veggies']:checked").each(function() {
        veggies.push($(this).val());
      });

      //instance
      var eatPizza = new Pizza (size, protein, veggies, total);

      $("#cost").show();
      $("#finalcost").text(eatPizza.totalCost);
      $("#orderpizza").hide();
    });
