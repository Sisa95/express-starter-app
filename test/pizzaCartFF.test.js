let assert = require("assert");
let pizza = require("../pizzaCartFF");
let pizzaCart = pizzaCartFF();
describe('Settings bill with factory function', function () {
    it('It should be able to return the actual cost of the different pizza sizes', function(){
        
        let smallSizePrice = pizzaCart.smallPizzaSum()

        let smallPizza = 31.99;
        let mediumPizza = 58.99;
        let largePizza = 87.99;

        assert.equal(smallPizza, pizzaCart.smallPizzaSum())
    });
}