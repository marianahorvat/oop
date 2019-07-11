class Pizza {
  // ... CODE FROM PART 1 ...
  constructor (size, crust, sauce){
    this._size = size;
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
    // setSize now includes data validation
  // setSize(size) {
      // replace our custom getters / setters with these get / set keywords
      set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
    // else we could throw an error, return false, etc.
    // We choose here to ignore all other values!
  }
  getSize() {
    return this._size;
  }
  // getPrice() {
      // replace our custom getters / setters with these get / set keywords
    get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }
}

// DRIVER CODE
const pizza = new Pizza();
// pizza.setSize('m');
// console.log(pizza.getSize()); // m
// console.log(pizza.getPrice());

console.log(pizza.price);      // instead of getPrice()
pizza.size = 's'; // instead of setSize(size)