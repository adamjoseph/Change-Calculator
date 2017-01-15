$(document).ready(function(){});

//Create onclick event for Button
$('calculateBtn').click(function(){});
function go() {
//Grab user Input for Sale Due
var saleDue = 10 //$('#saleDue');

//Grab user Input for Amount Given
var amountGiven = 20 //$('#amountGiven');

//Modulo Operator for the two values
var change = amountGiven - saleDue;

//Set inner text of element to change amount


//Filter out dollars
var dollars = 0;
var filterDollars = change % 1;
var dollarValue = change - filterDollars; //parseInt(change)
change = change - dollarValue;
//Count Number of dollars
for(i = 0; i < dollarValue; i += 1) {
	dollars += 1;
	};

//Filter out quarters
var quarters = 0;
var filterQuarters = change % 0.25;
var quarterValue = change - filterQuarters;
change = change - quarterValue;

//Count Number of quarters
for(i = 0; i < quarterValue; i += 0.25) {
	quarters += 1;
	};

//Filter out dimes
var dimes = 0;
var filterDimes = change % 0.1;
var dimeValue = change -filterDimes;
change = change - dimeValue;

//Count Number of dimes
	for(i = 0; i < dimeValue; i += 0.1) {
	dimes += 1;
	};	

//Filter out nickels
var nickels = 0;
var filterNickels = change % 0.05;
var nickelValue = change - filterNickels;
change = change - nickelValue;

//Count Number of nickels
for(i = 0; i < nickelValue; i += 0.05) {
	nickels += 1;
	};

//Filter out pennies
var pennies = 0;
var filterPennies = change % 0.01;
var pennieValue = change - filterPennies;
change = change - pennieValue;

//Count Number of pennies
for(i = 0; i < pennieValue; i += 0.01) {
	pennies += 1;
	};

};
go();






