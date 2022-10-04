import refs from './refs.js';

refs.burgerEl.addEventListener('click', () => {
  refs.burgerEl.classList.toggle('is-open');
  refs.menuContentEl.classList.toggle('is-open');
});
