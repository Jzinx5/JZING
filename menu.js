// Localizamos los elementos clave del HTML del menú
const botonMenu = document.querySelector('#boton-menu');
const navegacion = document.querySelector('#navegacion');
const textoMenu = document.querySelector('#texto-menu');

// Verificamos que existan antes de hacer nada con el menú
if (botonMenu && navegacion) {
  
  function toggleMenu() {
    const estaOculto = navegacion.hasAttribute('hidden');
    
    if (estaOculto) {
      navegacion.removeAttribute('hidden');
      botonMenu.setAttribute('aria-expanded', 'true');
      botonMenu.setAttribute('aria-label', 'Cerrar menú');
      if (textoMenu) textoMenu.textContent = 'Cerrar';
    } else {
      navegacion.setAttribute('hidden', '');
      botonMenu.setAttribute('aria-expanded', 'false');
      botonMenu.setAttribute('aria-label', 'Abrir menú');
      if (textoMenu) textoMenu.textContent = 'Menú';
    }
  }

  botonMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  navegacion.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      navegacion.setAttribute('hidden', '');
      botonMenu.setAttribute('aria-expanded', 'false');
      botonMenu.setAttribute('aria-label', 'Abrir menú');
      if (textoMenu) textoMenu.textContent = 'Menú';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      navegacion.setAttribute('hidden', '');
      botonMenu.setAttribute('aria-expanded', 'false');
      botonMenu.setAttribute('aria-label', 'Abrir menú');
      if (textoMenu) textoMenu.textContent = 'Menú';
      botonMenu.focus();
    }
  });
}

// ==========================================
// NUEVA FUNCIONALIDAD: Modo Alto Contraste (A11y)
// ==========================================
const botonContraste = document.querySelector('#boton-contraste');

if (botonContraste) {
  // Comprobamos si el usuario ya tenía el alto contraste guardado
  if (localStorage.getItem('altoContraste') === 'activado') {
    document.body.classList.add('alto-contraste');
    botonContraste.setAttribute('aria-label', 'Desactivar alto contraste');
  }

  botonContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
    
    const estaActivo = document.body.classList.contains('alto-contraste');
    
    if (estaActivo) {
      localStorage.setItem('altoContraste', 'activado');
      botonContraste.setAttribute('aria-label', 'Desactivar alto contraste');
    } else {
      localStorage.setItem('altoContraste', 'desactivado');
      botonContraste.setAttribute('aria-label', 'Activar alto contraste');
    }
  });
}