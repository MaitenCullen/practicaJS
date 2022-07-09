
function onload() {
    obtenerProvincias ()
    cargarCarritoInicial()
    leerRows ()
}


//carrito y tabla cursos seleccionados

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
   leerRows ()
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
   leerRows()
}

const cursos =[
    {id: 1, nombre: 'Estacionamiento', precio: 1000, tarjeta: 'si'},
    {id: 2, nombre: 'Clases teoricas', precio: 2000, tarjeta: 'si'},
    {id: 3, nombre: 'Clases practicas', precio: 1500, tarjeta: 'si'},
    {id: 4, nombre: 'Curso completo', precio: 1000, tarjeta: 'no'},
    {id: 5, nombre: 'Transito Real', precio: 2500, tarjeta: 'si'},
    {id: 6, nombre: 'Simulacion de examen', precio: 3500, tarjeta: 'si'}
]

let sumaTotal = 0

function leerRows (){
    let suma = 0;
    cursosSeleccionadosCompras.map(seleccion => {
        suma = suma + seleccion.precio
    })
    sumaTotal = suma;
    let precioTotal = document.getElementById("precio_final")
    precioTotal.innerText = " el total es " + sumaTotal
    console.log(sumaTotal)
}


function radio_button(event){
    let valor = sumaTotal;
    console.log(event)
    if(event.target.value === "efectivo") {
        valor = (valor * 70)/100
        console.log(valor)
    const precioEfectivo = document.getElementById("precio_final")
    precioEfectivo.innerText = "el precio final es " + valor
    } else if (event.target.value === "tarjeta") {
        totalTarjeta = document.getElementById("precio_final")
        totalTarjeta.innerText = "el precio final es " + valor
        console.log(valor)
    } else {
        valor = 0
        valorDefecto = document.getElementById("precio_final") + valor
    }
}


//CARDS JQUERY//
$(document).ready(function(){
    let zindex = 10;
    
    $("div.card").click(function(e){
      e.preventDefault();
  
      let isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.cards").hasClass("showing")) {
        // YA ESTA SIENDO VISTA
        $("div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          // VUELVE LA CARD
          $("div.cards")
            .removeClass("showing");
        } else {
          // NO SE ESTA VIENDO TODAVIA, LE PIDO LA MUESTRE
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // NO SE VE NINGUNA
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });




 
 
   


//AJAX//
let codigoProvincia 
let provincias 
let municipios = []

async function obtenerProvincias () {
    const resp = await fetch('https://apis.datos.gob.ar/georef/api/provincias')
    const data = await resp.json()
    if ( resp.status === 200){
        provincias = data.provincias
        console.log(data.provincias)
    popular_provincias()
    }
}


let seleccionProvincias = document.getElementById("seleccion_provincias");

function popular_provincias() {
    provincias.map(provincia => {
        let opcion_html = document.createElement("option");
        opcion_html.text = provincia.nombre;
        opcion_html.value = provincia.id;
        seleccionProvincias.add(opcion_html);
    })
}

function seleccionar_provincia(event) {
    codigoProvincia = event.target.value
    console.log(codigoProvincia)
    obtenerMunicipios()
}

async function obtenerMunicipios () {
    eliminar_municipios()
    const respuesta = await fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${codigoProvincia}&campos=id,nombre&max=100`)
    const data = await respuesta.json()
    if ( respuesta.status === 200){
        municipios = data.municipios
        popular_municipios()
    }
    console.log(data.municipios)
}

function eliminar_municipios (){
    document.querySelectorAll("#seleccion_municipio option").forEach(option => option.remove())
}

let seleccion_municipio = document.getElementById("seleccion_municipio")


function popular_municipios() {
    let default_option = document.createElement("option");
    default_option.text = "Elegi un municipio..."
    seleccion_municipio.add(default_option);
    municipios.map( municipio => {
    let opcion_municipio = document.createElement("option");
     opcion_municipio.text = municipio.nombre;
     opcion_municipio.value = municipio.value;
     seleccion_municipio.add(opcion_municipio);
    })
}


//LOGIN Y SIGNUP//

    const signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms')

//BOTON SIGNUP
    signupButton.addEventListener('click', () => {
    userForms.classList.remove('bounceRight')
    userForms.classList.add('bounceLeft')
    }, false)

//BOTON LOGIN
    loginButton.addEventListener('click', () => {
    userForms.classList.remove('bounceLeft')
    userForms.classList.add('bounceRight')
    }, false)

//BOTON MAPS//
function mapsapp(){
    Swal.fire({
        title: '<strong>Estamos en Los Cardales, Buenos Aires </strong>',
        icon: 'info',
        html:
        `<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=los%20cardales%20buenos%20aires&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/">divi discount</a><br><style>.mapouter{position:relative;text-align:center;height:200px;width:300px;}</style><a href="https://www.embedgooglemap.net">show google maps on website</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:200px;width:300px;}</style></div></div>`,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Genial!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
       
      })
}