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

  newMethod(topping) {
    return this.toppings.filter((e) => e != topping);
  }
}

let veggiePizza = new Pizza("large", "thin", "ketchup");
console.log(veggiePizza);

veggiePizza.addToppings("mushrooms");
veggiePizza.addToppings("peppers");
console.log("Toppings: ", veggiePizza.toppings);

veggiePizza.removeToppings("cheese");
console.log("Toppings: ", veggiePizza.toppings);



