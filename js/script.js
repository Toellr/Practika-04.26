const items = document.querySelectorAll('.faq-item');

items.forEach(item => {
	item.querySelector('.faq-question').addEventListener('click', () => {

		items.forEach(i => {
			if (i !== item) {
				i.classList.remove('active');
			}
		});

		item.classList.toggle('active');

	});
});

const modal = document.getElementById('modal');
const cards = document.querySelectorAll('.card3');
const closeBtn = document.querySelector('.close');

cards.forEach(card => {
	card.addEventListener('click', () => {
		modal.style.display = 'flex';
	});
});

closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
	if (e.target === modal) {
		modal.style.display = 'none';
	}
});