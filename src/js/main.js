import '../assets/scss/style.scss';

const checkbox = document.getElementById('theme-toggle');
const body = document.body;

if (checkbox) {
  checkbox.addEventListener('change', () => {
    body.setAttribute('data-theme', checkbox.checked ? 'dark' : 'light');
  });
}
