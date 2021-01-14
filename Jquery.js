// var para1= document.getElementById('para1');
// para1.innerHTML = "welcome";

// To change the html text
// $('#para1').html('welcome');

// TO hide any element
// $('#para1').hide();

// TO give css property on perticular id or class
// $('#para1').css('color', 'red');

// to apply on all para
// $('#para1').css('fontSize', '30px');

$("p").css({
	fontSize: "10px",
	color: "red"
});

$('div').css({

	width: "100px",
	height: "100px",
	backgroundColor: "cyan"
});

$('div').click(function(){
	alert("Div Clicked");
});

// $('div').on('click', funcction(){
// 	alert("Div Clicked");
// });

$('a').on('click', function(){
	alert("Div Clicked");
});