

function fetchRandomDogImage(){
	var xhrRequest = new XMLHttpRequest();
    

    xhrRequest.onload = function(){
    	console.log(xhrRequest,response);
    	var responseJSON = JSON.parse(xhrRequest.response);

    	var ImageUrl = responseJSON.message;
    	$('#dog-image').attr('src', imageUrl);
    };
    


     xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random');
     xhrRequest,send();


}





$('#fetch-dog-imag-button').click(fetchRandomDogImage);