//your JS code here. If required.
const formSubmit = document.getElementById('formSubmit');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');

function eligibityCheck(name, age){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(age > 18){
				resolve(`Welcome, ${name}. You can vote.`);
			} else {
				reject(`Oh sorry ${name}. You aren\'t old enough.`)
			}
		}, 4000)
	})
}
formSubmit.addEventListener('submit', function(event){
	event.preventDefault();
	const name = nameInput.value.trim();
	const age = parseInt(ageInput.value);

	if(!name || isNaN(age)){
		alert("Please enter valid details");
		return;
	}
	eligibityCheck(name, age)
	.then(message => alert(message))
	.catch(error => alert(error));
})