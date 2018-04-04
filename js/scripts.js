//Business Logic

//Constructor is Pizza
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

//Prototype is cost
Pizza.prototype.pricePrototype = function(size, toppingsArray) {
  var total = 0;
  if (size === "small") {
    total += 5.00;
  } else if (size === "medium") {
    total += 8.00;
  } else if (size === "large") {
    total += 12.00;
  } else if (size === "extralarge") {
    total += 15.00;
  }

  if (toppingsArray.length < 1) {
    total += 0;
    this.price = total;
  } else {
    for (var i = 0; i < toppingsArray.length; i++) {
      total += 0.50;
      this.price = total;
    }
  }
}

Pizza.prototype.cost = function(size, toppings, price) {
  return "$" + this.price + " " + this.size + " pizza, with " + this.toppings + ".";
}




//User Interface Logic
$(document).ready(function() {

  $("form#orderPizza").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $(".size").val();
    var toppings = $("input:checkbox[name=toppings]:checked");
    var toppingsArray = [];
    for (var i = 0; i < toppings.length; i++) {
      toppingsArray.push($(toppings[i]).val());
    }

    //Instance
    var newPizza = new Pizza (pizzaSize, toppingsArray, price);
    var pizzaPrice = newPizza.pricePrototype (pizzaSize, toppingsArray);
    var pizzaCost = newPizza.cost (pizzaSize, toppingsArray, price);

    //Hides 1st page, shows second page with results
    $("button#submit1").on("click", function(event) {
      $("#page1").hide();
      $("#page2").show();
      event.preventDefault();
    });

    //Order Page
    $("#size").text(pizzaSize);
    $("#price").text(pizzaCost);
    $("#toppings").text("");
    $("input:checkbox[name=toppings]:checked").each(function() {
      var selectedToppings = $(this).val();
      $("#toppings").append(selectedToppings + "<br>");
    });
  });
});


debugger;
