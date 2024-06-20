const initBurgerMenu = () => {
	const hamburgerMenu = document.getElementById('openBtn');
	hamburgerMenu.addEventListener('click', () => {
		const nav = document.getElementById('nav');
		nav.classList.toggle('show');
	});
};

initBurgerMenu();
