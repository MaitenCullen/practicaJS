//perros
//objeto perros
const perros = { 
    raza: "caniche",
    color: "blanco",
    peso: 23,
}
console.log(perros.peso)

let gatos = {
    color: "marron",
    pelaje: "largo",
}

function animales_domesticos (bicho, tamaño, comida){
    this.bicho = bicho;
    this.tamaño = tamaño;
    this.comida = comida;
}
let perro1 = new animales_domesticos ("perro", "chico", "carnivoro");
let gatito1 = new animales_domesticos("gato", "grande", "carnivoro");
//arrays

let animales = [perro1, gatito1];
animales[0].tamaño;
animales[0].tamaño="grande";//le cambie el tamaño a perro, no vuelve a ser chico
const humanos = ["chinos", "japoneses", "argentinos", "africanos", "alemanes", 790000];
const seres_vivos = animales.concat(humanos)
seres_vivos.reverse()

humanos.includes("yankee")
humanos.includes("argentinos")

//some para humanos
console.log (humanos.some((la) => la == "brasilero")) //me devuelve false
console.log(humanos.some((la)=> la== 'argentinos')) //me devuelve true

let helados = ["chocolate", "dulce de leche", "banana split", 250];
console.log(helados)
helados.push("menta granizada"); //agregp

helados.splice(3, 2) //me saco el precio y la menta granizada

const mascotas = ["chapin", "Loli", "Loba"];
console.log(...mascotas);
//spread

 const datos_personales = [
    {nombre: 'pepito', apellido: 'perez', dni: 1125125},
    {nombre: 'juanita', apellido: 'gonzalez', dni: 25253},
    {nombre: 'maria', apellido: 'sanchez', dni: 25248},
    {nombre: 'juancito',apellido: 'gutierrez', dni: 25788},
    {nombre: 'victoria', apellido: 'vera', dni: 965998},
]
//spread
console.log(...datos_personales);

let nombre1 = datos_personales.find((el) => el.nombre === "juanita")
console.log(nombre1)

//ejemplo productos es un array
const productos = [ {id: 1,  producto: "Arroz", precio: 125},
                    {id: 2,  producto: "Fideo", precio: 70},
                    {id: 3,  producto: "Pan"  , precio: 90},
                    {id: 4,  producto: "Flan" , precio: 100},
                    {id: 5,  producto: "Harina" , precio: 150},
                    {id: 6,  producto: "Leche" , precio: 140},
                    {id: 7,  producto: "Manteca" , precio: 120},]

console.log(...productos); //spread
//desestructuracion
const {producto, precio} = productos
console.log(producto);
console.log(precio);



const buscado = productos.find(producto => producto.id === 3)
console.log(buscado) //me encuentra el pan

const hay_producto = productos.some(producto => producto.nombre === 'vino')
console.log(existe ) // me daria false, tuve que re declararla porque la tenia arriba con el nombre existe

const baratos = productos.filter(producto => producto.precio < 100)
console.log(baratos)
// [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]
const caros = productos.filter(producto => producto.precio > 100)
alert("es un producto caro, sale más de 100")

const listaNombres = productos.map(producto => producto.nombre)
console.log(listaNombres);
//[“Arroz”, “Fideo”, “Pan”, “Flan”]
//finaliza ejemplo