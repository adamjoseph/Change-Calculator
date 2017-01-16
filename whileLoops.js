$(document).ready(function(){

//Set Global variables needed
var dollars = {
	name: 'Dollars',
	value: 0
};

var quarters = {
	name: 'Quarters',
	value: 0
};

var dimes = {
	name: 'Dimes',
	value: 0
};

var nickels = {
	name: 'Nickels',
	value: 0
};

var pennies = {
	name: 'Pennies',
	value: 0
};

var change;


//Create function to sort a given type of coin
sortChange = function(coinValue, coin) {
	while(change >= coinValue) {
		change -= coinValue;
		coin.value += 1;

	};
};

//Create function to set coin number to page
setValues = function(coin, coinTarget){
	$(coinTarget).text(coin.name + ': ' + coin.value);
};


//Create onclick event for Button
$('#calculateBtn').click(function(){

	//Set all object values to 0 (avoids adding new totals to previous totals)
	dollars.value = 0;
	quarters.value = 0;
	dimes.value = 0;
	nickels.value = 0;
	pennies.value= 0;

	//Grab user Input for Sale Due
	var saleDue = $('#amountDue').val();

	//Grab user Input for Amount Given
	var amountGiven = $('#amountGiven').val();

	//Calculate change needed, fixing to 2nd decimal place and returning a number
	change = +((amountGiven - saleDue).toFixed(2));

	//Display total amount of change due before sorting it
	$('#changeAmount').text('$' + change);

	//Remove from change total, count, and set dollars
	sortChange(1, dollars);
	setValues(dollars, '#dollarsSpan');

	//Remove from change total, count, and set quarters
	sortChange(0.25, quarters);
	setValues(quarters, '#quartersSpan');

	//Remove from change total, count, and set dimes
	sortChange(0.1, dimes);
	setValues(dimes, '#dimesSpan');

	//Remove from change total, count, and set nickels
	sortChange(0.05, nickels);
	setValues(nickels, '#nickelsSpan');

	//Remove from change total, count, and set pennies
	sortChange(0.009, pennies);//0.009 rounds value up
	setValues(pennies, '#penniesSpan');

	//Clear inputs if check box is checked
	if($('#chkBox').is(':checked')) {
	
	$('input').val('');
	};

});





});