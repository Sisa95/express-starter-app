const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const pizzaCartFF = require('./pizzaCartFF');
let pizzaCart = pizzaCartFF();

const app = express();
const PORT =  process.env.PORT || 3018;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


let counter = 0;



app.get('/', function(req, res) {
	res.render('index', {
		smallTotal: pizzaCart.smallPizzaSum(),
		mediumTotal: pizzaCart.mediumPizzaSum(),
		largeTotal: pizzaCart.largePizzaSum(),
		grandTotal: pizzaCart.smallPizzaSum(),
	});

	console.log(pizzaCart.smallPizzaSum())
});

app.post('/count', function(req, res) {

	pizzaCart.smallPizzaSum()
	console.log(pizzaCart.smallPizzaSum())
});

app.post("/addSmallPizza", function(req,res){
	res.redirect("/")
})



app.get("/orders", (req, res) =>{
   
    // res.render("greeted_names", {list: await greetings.dataList()})
    // console.log(await greetings.dataList())
})

app.post("/greeted_names", (req, res) =>{
   
})


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});