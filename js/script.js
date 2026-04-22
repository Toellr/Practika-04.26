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

const modal2 = document.getElementById("roleModal");
const btn = document.getElementById("openModal");

btn.addEventListener("click", () => {
  modal2.classList.add("show");
});

window.addEventListener("click", (e) => {
  if (e.target === modal2) {
    modal2.classList.remove("show");
  }
});

(function() {
  const modal = document.getElementById('coursesModal');
  const openBtn = document.getElementById('openCoursesModalBtn');

  if (!modal || !openBtn) return;

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
})();


