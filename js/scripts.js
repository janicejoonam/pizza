//Business Logic

//Constructor is Pizza
function Pizza(size, protein, veggies) {
  this.size = size;
  this.protein = protein;
  this.veggies = veggies;

}

//Prototype is cost
Pizza.prototype.cost = function() {
  var cost = 0;
  if (this.size === "small") {
    cost += 5;
  } else if (this.size === "medium") {
    cost += 8;
  } else if (this.size === "large") {
    cost += 12;
  } else if (this.size === "extralarge") {
    cost += 15;
  }

  if (this.protein === "protein") {
    // this.protein.forEach(function() {
      cost += 0.50;
    }
  }

  if (this.veggies === "veggies") {
    // this.veggies.forEach(function() {
      cost += 0.30;
    }

    return cost;
};






//User Interface Logic
$(document).ready(function() {
  $("form#orderpizza").submit(function(event) {
    event.preventDefault();
    var size = [];
    var protein = [];
    var veggies = [];
      $("input[name='size']:checked").each(function() {
        size.push($(this).val());
      $("input[name='protein']:checked").each(function() {
        protein.push($(this).val());
      $("input[name='veggies']:checked").each(function() {
        veggies.push($(this).val());
      });

      //Instance
      var eatPizza = new Pizza (size, protein, veggies);

      $("input:checkbox[name=size]:checked").each(function() {
        var pizzaOrder = $(this).val();
        $("ul#order").append("<li><button type='submit'><span id='order-size'>" + eatPizza.size + eatPizza.protein + eatPizza.veggies + "</button></span></li>");
      });
      $("#orderpizza").hide();




      $("#order-size").text(eatPizza.size);
      $("#order-toppings").text(eatPizza.protein);
      $("#order-toppings").text(eatPizza.veggies);
      $("#finalcost").text(eatPizza.cost);
      $("#summary").show();
    });
  });
});
