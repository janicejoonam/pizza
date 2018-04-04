//~~B U S I N E S S   L O G I C~~

//Constructor is Pizza
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

//Prototype is sizeCost
Pizza.prototype.sizeCost = function(size, toppingsArray) {
  var total = 0;
  if (size === "Small 10-inch") {
    total += 5.00;
  } else if (size === "Medium 12-inch") {
    total += 8.00;
  } else if (size === "Large 14-inch") {
    total += 12.00;
  } else if (size === "Extra-Large 16-inch") {
    total += 15.00;
  }

  if (toppingsArray.length < 1) {
    total += 0;
    this.price = total;
  } else {
    for (var i = 0; i < toppingsArray.length; i++) {
      total += 1.00;
      this.price = total;
    }
  }
}

Pizza.prototype.cost = function(size, toppings, price) {
  return "Your total is $" + this.price + " for a " + this.size + " pizza with " + this.toppings + ".";
}




//User Interface Logic
$(document).ready(function() {

  $("#orderPizza").submit(function(event) {
    event.preventDefault();

    var sizeNew = $("#pizza-size").val();
    var toppings = $("input:checkbox[name=toppings]:checked");
    var toppingsArray = [];
    for (var i = 0; i < toppings.length; i++) {
      toppingsArray.push($(toppings[i]).val());
    }

    //Instance
    var newPizza = new Pizza (sizeNew, toppingsArray, price);
    var price = newPizza.sizeCost (sizeNew, toppingsArray);
    var output = newPizza.cost (sizeNew, toppingsArray, price);

    //Hides 1st page, shows second page with results
    $("#page2").show();
    $("#page1").hide();
    $("#order").text(output);
  });
});


debugger;
