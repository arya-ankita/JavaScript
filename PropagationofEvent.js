// Propagation of event means jab bhi hum inner div click kar rahe hai, to
// to uske sath outer div and then document bhi click ho rahe hai,
// kyunki hierarchy document-outer-inner div hai yaha.

// TO stop this propagation -
// innerDiv.addEventListener('click', function(event){
// 	console.log('Click Ineer Div');
// 	event.stopPropagation();
// });


var innerDiv = document.getElementById('inner');

innerDiv.addEventListener('click', function(){
	console.log('Click Ineer Div');

});

var outerDiv = document.getElementById('outer');

outerDiv.addEventListener('click', function(){
	console.log('Click Outer Div');
});

document.addEventListener('click', function(){
	console.log('Click Document');
})

