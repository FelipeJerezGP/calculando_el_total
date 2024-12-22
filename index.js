precio = 400000;
cantidad = 0;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidad;

precioTotal = document.querySelector(".valor-total");
precioTotal.innerHTML = precio * cantidad;

function incrementarCantidad() {
  cantidad++;
  actualizarCantidadYTotal();
}

function disminuirCantidad() {
  if (cantidad > 0) {
    cantidad--;
    actualizarCantidadYTotal();
  }
}

function actualizarCantidadYTotal() {
  cantidadSpan.innerHTML = cantidad;
  precioTotal.innerHTML = precio * cantidad;
}
