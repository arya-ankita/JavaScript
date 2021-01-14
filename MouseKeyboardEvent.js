// MOUSE EVENT
var outerDiv = document.getElementById('outer');

outer.addEventListener('mouseover', function(){
	console.log('Mouse Over');
});

outer.addEventListener('mouseout', function(){
	console.log('MouseOut');
});

// KEYBOARD EVENT
var searchInput = document.getElementById('search');


 searchInput.addEventListener('keypress', function(){
	console.log('Key Pressed');
});

// jab document pr kahi b koi key press karege to aese karna hai
// document.addEventListener('keypress', function(){
// 	console.log('KeyPressed');
// });


// WHEN YOU WANT TO KNOW WHICH KEY HAS BEEN PRESSED

 document.addEventListener('keypress', function(event){
	console.log('Key Pressed', event.keyCode);
});