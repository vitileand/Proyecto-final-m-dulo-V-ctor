
// funcion que suma el precio total de los productos

function sumarPrecios() {

    const precios = document.querySelectorAll('.valor')

    let suma = 0

    precios.forEach(valor => {

        suma += parseFloat(valor.textContent);
    });

    document.getElementById('sumaPrecio').textContent = 'Total   '+ suma.toFixed(2) + ' €'



}

// función que llama al elemento ingresado en el formulario


function obtenerDatos() {



    let nombre = document.getElementById('nombre').value
    let precio = document.getElementById('precio').value
    let texto = document.getElementById('texto').value
    let lista = document.getElementById('listaProductos')
    let producto = document.createElement('div')
    producto.className = 'cabecera'
    producto.innerHTML = `<h2 class="titulo">${nombre}</h2> <span class="valor" >${precio} € </span> <p class="descripcion">${texto}</p> <button class="descripcion"  type="button" id="btn2" onclick="borrar(event)">X</button>`
    lista.append(producto)
    sumarPrecios()
    document.getElementById("formul").reset();

}


// función que borra y resta el precio total

function borrar(ev) {
    console.log(ev)
    let elemento = ev.target.parentNode

    elemento.remove()
    console.log(elemento)

    function restarPrecios() {

        const precios = document.querySelectorAll('.valor')

        let resta = 0

        precios.forEach(valor => {

            resta += parseFloat(valor.textContent);
        });

        document.getElementById('sumaPrecio').textContent = 'Total:   '+ resta.toFixed(2) + ' €'



    }

    restarPrecios()
}

// función que valida el formulario para su envio

function validarFormulario(event) {
    event.preventDefault()

    const campos = document.querySelectorAll('#formul input[required]')

    let formularioValido = obtenerDatos()

    campos.forEach(campo => {
        if (campo.value.trim() === '') {
            formularioValido = false

        }
    })

    if (formularioValido) {
        document.getElementById('formul').submit()
    }



}











