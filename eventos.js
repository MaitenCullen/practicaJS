//me devuelve las clases de manejo con un descuento
let clases_manejo = [
    {id: 1, nombre: 'Teoricas', precio: 1000, tarjeta: 'si'},
    {id: 2, nombre: 'Teoricas y practicas', precio: 2000, tarjeta: 'si'},
    {id: 3, nombre: 'Practicas', precio: 1500, tarjeta: 'si'},
    {id: 4, nombre: 'Estacionamiento', precio: 1000, tarjeta: 'no'},
    {id: 5, nombre: 'Curso completo', precio: 2500, tarjeta: 'si'},
    {id: 6, nombre: 'Transito Real', precio: 3500, tarjeta: 'si'}
]
let precio_clases = clases_manejo.map((clase) => {
    return {
        nombre: clase.nombre,
        precio: clase.precio - 1.30,
    }
}) 

console.log(precio_clases);

const seleccionar = clases_manejo.find(nombre => nombre.id === 2)
console.log(seleccionar) 

const existe = clases_manejo.some(nombre => nombre.nombre === 'virtual')
console.log(existe ) // false

function radio_button(event){
    let seleccion_usuario = document.getElementById("selector_curso").value;
    if (seleccion_usuario != "00"){
        let precio_final = document.getElementById("precio_final")
            clases_manejo.map(clase => {
                if (clase.id == seleccion_usuario) {
                    if (event.target.value == "efectivo") {
                        const Descuento = (clase.precio * 30) / 100;
                        const precioConDescuento =(clase.precio - Descuento);
                        precio_final.innerText= "el precio final es " + precioConDescuento
                    }
                    else {
                        const precioTarjeta = clase.precio;
                        precio_final.innerText= "el precio final es " + precioTarjeta
                    } 
                } 
        })
    }
}

function opciones() {
    let curso_seleccionado = document.getElementById("selector_curso").value;
    if (curso_seleccionado != "00") {
    let mensaje_precios = document.getElementById("div_precios_clases")
    mensaje_precios.innerHTML ="<p>Podes pagar con tarjeta hasta en 3 cuotas sin interes</p> <br> <p> En efectivo tenes un 30% de descuento</p>"
    }
 }



 
//lista de colores que van y vienen NUNCA ANDUVO 
let items = document.getElementsByClassName('item');

for(let i = 0; i < items.length; i++){
    //MOUSEOVER
    items[i].addEventListener('mouseover', () => {
        items[i].style.backgroundColor = "#4285f4";
    })  
   
    //MOUSEOUT
    items[i].addEventListener('mouseout', () => {
        items[i].style.backgroundColor = "#ffffff";
    })
}

