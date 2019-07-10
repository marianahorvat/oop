class Pizza {
  constructor (size, crust, sauce){
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.toppings = ["cheese"];
  }
  addToppings(topping){
    this.toppings.push(topping)
  }
  removeToppings(topping){
    var index = this.toppings.indexOf(topping);
    if (index > -1){
      this.toppings.splice(index, 1);
    }
  }
}

let veggiePizza = new Pizza("large", "thin", "ketchup");

veggiePizza.addToppings("mushrooms");
veggiePizza.addToppings("peppers");

veggiePizza.removeToppings("cheese");
console.log("Toppings: ", veggiePizza);



