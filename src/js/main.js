import '../assets/scss/style.scss';

// HTML - добавьте в index.html
// <input type="checkbox" id="theme-toggle">

const checkbox = document.getElementById('theme-toggle');
const body = document.body;

if (checkbox) {
  checkbox.addEventListener('change', () => {
    body.setAttribute('data-theme', checkbox.checked ? 'dark' : 'light');
  });
}
