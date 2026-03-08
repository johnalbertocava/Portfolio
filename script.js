function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Toggle Projects Read more paragraph
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.project-read-more');
  const more = document.querySelector('.project-more-text');
  if (!btn || !more) return;
  btn.addEventListener('click', () => {
    const isOpen = more.style.display === 'block';
    more.style.display = isOpen ? 'none' : 'block';
    btn.textContent = isOpen ? 'Read more' : 'Read less';
  });
});