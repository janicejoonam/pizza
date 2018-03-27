//Business Logic
function Pizza (size, protein, veggies) {
  this.size = size
  this.protein = protein
  this.veggies = veggies
}

Pizza.prototype.chooseProtein = function (protein) {
  this.protein.push(protein);
}

Pizza.prototype.chooseVeggies = function (veggies) {
  this.veggies.push(veggies);
}

Pizza.prototype.totalCost = function () {
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

  this.protein.forEach(function() {
    cost += 0.50;
  });
  this.veggies.forEach(function() {
    cost+= 0.30;
  });
  this.cost = cost;
}

//User Interface Logic
