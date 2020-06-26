const taskInput = document.querySelector('#name');
const form = document.querySelector('#submit-name');

const enterName = (e) => {
	if(taskInput.value == ''){
	alert('You can not insert a blank name!');
} else {
	let name = taskInput.value;
	localStorage.setItem('name', name);
	if(confirm(`Thank you for registering, ${name}!`)) document.location = 'index.html';
}
e.preventDefault();
}

form.addEventListener('submit', enterName);