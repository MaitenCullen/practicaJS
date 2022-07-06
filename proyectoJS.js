
//carrito

let cursosSeleccionadosCompras = []
let tabla = document.getElementById("tablaCursos")
let row
let botonEliminar
let celdaNombre 
let celdaCantidad 
let celdaPrecio 
let button 

function carrito(id) {
 let cursoSeleccionado = cursos.find(curso => curso.id === Number(id))
 const existeId = cursosSeleccionadosCompras.some(item => item.id === Number(id));
 console.log("existeId: ", existeId)
 if (!existeId) {
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
   carritoCursos(id)
 }
}

function carritoCursos(id){
        createRow(id)
        cursosSeleccionadosCompras.map((curso) => {   
            celdaNombre.innerText = curso.nombre;
            celdaCantidad.innerText = curso.tarjeta;
            celdaPrecio.innerText = curso.precio;
            button.onclick = () => eliminarCurso(curso)
            botonEliminar.appendChild(button)
        }) 
        dibujarRow()
}

function cargarCarritoInicial(){
    if (localStorage.getItem('curso')){
        cursosSeleccionadosCompras = JSON.parse(localStorage.getItem('curso'))
    }
    cursosSeleccionadosCompras.map((curso) => {   
        createRow(curso.id)
        celdaNombre.innerText = curso.nombre;
        celdaCantidad.innerText = curso.tarjeta;
        celdaPrecio.innerText = curso.precio;
        button.onclick = () => eliminarCurso(curso)
        botonEliminar.appendChild(button)
        dibujarRow()
    })     
}

function createRow(id) {
    row = document.createElement("tr")
    row.id = "row" + id
    botonEliminar = document.createElement("td")
    celdaNombre = document.createElement("td")
    celdaCantidad = document.createElement("td")
    celdaPrecio = document.createElement("td")
    button = document.createElement("button")
    button.textContent = "Eliminar"
}

function dibujarRow() {
    row.appendChild(celdaNombre)
    row.appendChild(celdaCantidad)
    row.appendChild(celdaPrecio)
    row.appendChild(botonEliminar)
    tabla.appendChild(row)
}

function eliminarCurso(curso){
    let cursosObtenido = JSON.parse(localStorage.getItem('curso'))
    const filtroCursos = cursosObtenido.filter((item) => item.id != curso.id)
    cursosSeleccionadosCompras = filtroCursos
    localStorage.setItem('curso', JSON.stringify(cursosSeleccionadosCompras))
    document.getElementById("row" + curso.id).remove()
    console.log(document.getElementById(curso.id),curso.id)
   
}

const cursos =[
    {id: 1, nombre: 'Estacionamiento', precio: 1000, tarjeta: 'si'},
    {id: 2, nombre: 'Clases teoricas', precio: 2000, tarjeta: 'si'},
    {id: 3, nombre: 'Clases practicas', precio: 1500, tarjeta: 'si'},
    {id: 4, nombre: 'Curso completo', precio: 1000, tarjeta: 'no'},
    {id: 5, nombre: 'Transito Real', precio: 2500, tarjeta: 'si'},
    {id: 6, nombre: 'Simulacion de examen', precio: 3500, tarjeta: 'si'}
]

