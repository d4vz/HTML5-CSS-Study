const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event: TouchEvent) {
  const button = event.currentTarget;
  const nav = document.getElementById('nav');
  if (button instanceof HTMLElement && nav) {
    const active = nav.classList.contains('active');
    if (active) {
      nav.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('arial-label', 'Fechar menu');
    } else {
      nav.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('arial-label', 'Abrir menu');
    }
  }
}

if (btnMobile) {
  btnMobile.addEventListener('touchstart', toggleMenu);
}
