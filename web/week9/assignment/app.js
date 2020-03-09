const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// tell it to use the public directory as one where static files live
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// set up a rule that says requests to "/math" should be handled by the
// handleMath function below
app.get('/postage', calculateRate);

app  .get('/' , function(req , res){
    res.sendFile('form.html', { root: __dirname + "/public"});
  })
  
// start the server listening
app.listen(port, function() {
  console.log('Node app is running on port', port);
});

function calculateRate(request, response) {
	const option = request.query.option;
	const weight = Number(request.query.weight);

	computeOperation(response, option, weight);
}

function computeOperation(response, option, weight) {
	option = option.toLowerCase();

	let price = 0;

	if (option == "letters (stamped)") {
		if (1 <= weight){
			price = .55;
		}
		else if(weight > 1 && weight <= 2){
			price = .70;
		}
		else if(weight > 2 && weight <= 3){
			price = .85;
		}
		else if(weight > 3 && weight <= 3.5){
			price = 1;
		}	
	}
	else if (option == "letters (metered)") {
		if (1 <= weight){
			price = .50;
		}
		else if(weight > 1 && weight <= 2){
			price = .65;
		}
		else if(weight > 2 && weight <= 3){
			price = .80;
		}
		else if(weight > 3 && weight <= 3.5){
			price = .95;
		}	
	} else if (option == "large envelopes(flats)") {
		if (1 <= weight){
			price = 1;
		}
		else if(weight > 1 && weight <= 2){
			price = 1.2;
		}
		else if(weight > 2 && weight <= 3){
			price = 1.4;
		}
		else if(weight > 3 && weight <= 4){
			price = 1.6;
		}
		else if(weight > 4 && weight <= 5){
			price = 1.8;
		}
		else if(weight > 5 && weight <= 6){
			price = 2;
		}
		else if(weight > 6 && weight <= 7){
			price = 2.2;
		}
		else if(weight > 7 && weight <= 8){
			price = 2.4;
		}
		else if(weight > 8 && weight <= 9){
			price = 2.6;
		}
		else if(weight > 9 && weight <= 10){
			price = 2.8;
		}
		else if(weight > 10 && weight <= 11){
			price = 3;
		}
		else if(weight > 11 && weight <= 12){
			price = 3.2;
		}
		else if(weight > 12 && weight <= 13){
			price = 3.4;
		}		
	} else if (option == "first-class package service-retail") {
		if (1 <= weight){
			price = 3.8;
		}
		else if(weight > 1 && weight <= 2){
			price = 3.8;
		}
		else if(weight > 2 && weight <= 3){
			price = 3.8;
		}
		else if(weight > 3 && weight <= 4){
			price = 3.8;
		}
		else if(weight > 4 && weight <= 5){
			price = 4.6;
		}
		else if(weight > 5 && weight <= 6){
			price = 4.6;
		}
		else if(weight > 6 && weight <= 7){
			price = 4.6;
		}
		else if(weight > 7 && weight <= 8){
			price = 4.6;
		}
		else if(weight > 8 && weight <= 9){
			price = 5.3;
		}
		else if(weight > 9 && weight <= 10){
			price = 5.3;
		}
		else if(weight > 10 && weight <= 11){
			price = 5.3;
		}
		else if(weight > 11 && weight <= 12){
			price = 5.3;
		}
		else if(weight > 12 && weight <= 13){
			price = 5.9;
		}		
	}

	// Set up a JSON object of the values we want to pass along to the EJS result page
	const params = {option: option, weight: weight, price: price};

	// Render the response, using the EJS page "result.ejs" in the pages directory
	// Makes sure to pass it the parameters we need.
	response.render('views/result', params);

}