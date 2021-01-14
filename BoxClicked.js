"use strict";

var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
var count = 0;
// agr hum var nahi likhte hai tab bhi code will work fine, 
// or ye count ko global variable bana deta hai, phir use karta hai.

box.addEventListener('click', function(){
	count++;
	console.log(count);
	clickCount.innerText = count +" ";
});

// agar hum  inside function "use strict" karege or count=0, likh de it will also work fine.
// kyunki count globally create ho jaayega, par function k and agr koi var define karege to var likhna is compulsory.

