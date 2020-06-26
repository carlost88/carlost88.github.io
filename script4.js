const getName = () => {
	let name;
	if (localStorage.getItem('name') === null){
		name = 'New visitor';
	} else {
		name = localStorage.getItem('name');
	}
		document.querySelector('.welcome').textContent = `Welcome, ${name}!`;
}



document.addEventListener('DOMContentLoaded', getName);
