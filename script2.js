document.getElementById('botonConvertir').addEventListener('click', function() {
  const nombre = document.getElementById('nombre').value;
  const resultado = document.getElementById('resultado');

  if (nombre) {
    const textoMayusculas = nombre.toUpperCase();
    resultado.textContent = textoMayusculas;
  } else {
    resultado.textContent = '';
  }
});

document.getElementById('botonLimpiar').addEventListener('click', function() {
  document.getElementById('nombre').value = '';
  document.getElementById('resultado').textContent = '';
});
