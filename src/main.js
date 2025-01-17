import './for-hw/main'
/* function getJSONRequest(url, callback){
	const xhr = new XMLHttpRequest(); //fetch of course much better
	xhr.open('GET', url);

	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			callback(JSON.parse(xhr.responseText));
		}
	}

	xhr.send();
}

const baseURL = 'https://faceprog.ru/reactcourseapi/';

document.querySelector('.short').addEventListener('click', function(){
	getJSONRequest(`${baseURL}products/all.php`, function(data){
		console.log(data);
	})
});
 */