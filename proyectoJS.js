
//carrito
let cursosSeleccionadosCompras = []

function carrito(id) {
 let cursoSeleccionado = cursos.find(curso => curso.id === Number(id))
 cursosSeleccionadosCompras.push(cursoSeleccionado)
 localStorage.setItem('curso', JSON.stringify(cursosSeleccionadosCompras))
 Swal.fire({
    position: 'bottom-end',
    icon: 'success',
    title: 'curso agregado',
    showConfirmButton: false,
    timer: 1500,
    width:'20em',
  })
carritoCursos()
}

function carritoCursos(){
    let cursosObtenido = JSON.parse(localStorage.getItem('curso'))
    let row = document.createElement("tr")
    let botonEliminar = document.createElement("td")
    let celdaNumero = document.createElement("td")
    let celdaNombre = document.createElement("td")
    let celdaCantidad = document.createElement("td")
    let celdaPrecio = document.createElement("td")
    let button = document.createElement("button")
    button.textContent = "Eliminar"

    cursosObtenido.map((curso,index) => {   
        celdaNumero.innerText = index + 1;
        celdaNombre.innerText = curso.nombre;
        celdaCantidad.innerText = curso.tarjeta;
        celdaPrecio.innerText = curso.precio;
        button.onclick = () => eliminarCurso(curso, row)
        botonEliminar.appendChild(button)
    })

    let tabla = document.getElementById("tablaCursos")
    row.appendChild(celdaNumero)
    row.appendChild(celdaNombre)
    row.appendChild(celdaCantidad)
    row.appendChild(celdaPrecio)
    row.appendChild(botonEliminar)
    tabla.appendChild(row)

}


// const jsLibraries = ['react', 'redux', 'vue', 'D3', 'Chart']
// const filteredLibraries = jsLibraries.filter((item) => item !== 'react')

function eliminarCurso(curso, row){
    let cursosObtenido = JSON.parse(localStorage.getItem('curso'))
    const filtroCursos = cursosObtenido.filter((item) => item.id != curso.id)
    cursosSeleccionadosCompras = filtroCursos
    localStorage.setItem('curso', JSON.stringify(cursosSeleccionadosCompras))
    row.remove()
    console.log(filtroCursos)
}

const cursos =[
    {id: 1, nombre: 'Estacionamiento', precio: 1000, tarjeta: 'si'},
    {id: 2, nombre: 'Clases teoricas', precio: 2000, tarjeta: 'si'},
    {id: 3, nombre: 'Clases practicas', precio: 1500, tarjeta: 'si'},
    {id: 4, nombre: 'Curso completo', precio: 1000, tarjeta: 'no'},
    {id: 5, nombre: 'Transito Real', precio: 2500, tarjeta: 'si'},
    {id: 6, nombre: 'Simulacion de examen', precio: 3500, tarjeta: 'si'}
]

