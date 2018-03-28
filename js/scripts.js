//Business Logic
function Pizza(size, protein, veggies, total) {
  this.size = size
  this.protein = protein
  this.veggies = veggies
  this.total = [];
}


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
      var newPizza = new Pizza (size, protein, veggies, total);
      $("input[name='size']:checked").each(function() {
        newPizza.addSize($(this).val());
      $("input[name='protein']:checked").each(function() {
        newPizza.addProtein($(this).val());
      $("input[name='veggies']:checked").each(function() {
        newPizza.addVeggies($(this).val());
      });

      $("#finalcost").text(newPizza.totalCost);
      $("#cost").show();
      $("#orderpizza").hide();
    });
  });
});
