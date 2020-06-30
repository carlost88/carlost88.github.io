const nameInput = document.querySelector('#name');
const form = document.querySelector('#submit-name');

const enterName = (e) => {
	if(nameInput.value == ''){
	alert('You can not insert a blank name!');
} else {
	let name = nameInput.value;
	localStorage.setItem('name', name);
	if(confirm(`Thank you for registering, ${name}!`)) 
		document.location = 'loading.html';
}
e.preventDefault();
}

form.addEventListener('submit', enterName);