function sayHello(){
	alert('Hello');
}

function sayByee(){
	alert('Byee!!');
}

var helloButton = document.getElementById('btn2');
helloButton.addEventListener('click', sayHello);
helloButton.addEventListener('click', sayByee);



