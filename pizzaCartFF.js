module.exports = function pizzaCartFF(){

    let smallPizza = 35.99;
    let mediumPizza = 58.99;
    let largePizza = 87.99;

    let smallPizzaTotal = 0;
    let mediumPizzaTotal = 0;
    let largePizzaTotal = 0;

    let grandTotal = 0;

    function smallPizzaSum(){
        smallPizzaTotal += smallPizza;
        return smallPizzaTotal.toFixed(2);
    }

    function mediumPizzaSum(){
        mediumPizzaTotal += mediumPizza;
        return mediumPizzaTotal.toFixed(2);
    }

    function largePizzaSum(){
        largePizzaTotal += largePizza;
        return largePizzaTotal.toFixed(2);
    }

    function smallPizzaSub(){
        smallPizzaTotal -= smallPizza;
        return smallPizzaTotal.toFixed(2);
    }

    function mediumPizzaSub(){
        mediumPizzaTotal -= mediumPizza;
        return mediumPizzaTotal.toFixed(2);
    }

    function largePizzaSub(){
        largePizzaTotal -= largePizza;
        return largePizzaTotal.toFixed(2);
    }

    function pizzaTotal(){
        grandTotal = largePizzaTotal + mediumPizzaTotal + smallPizzaTotal;
        return grandTotal.toFixed(2)
    }
    //Create pizza cart and pizza status on button click


    return{
        smallPizzaSum,
        mediumPizzaSum,
        largePizzaSum,
        smallPizzaSub,
        mediumPizzaSub,
        largePizzaSub,
        pizzaTotal

    }

}