const button = document.getElementById('viewMore');

button.addEventListener('click', () => {
	const hiddenCoffees = document.querySelectorAll('.coffee__hidden');
	hiddenCoffees.forEach((coffee) => {
		coffee.classList.remove('coffee__hidden');
	});
	button.classList.add('hidden');
});
