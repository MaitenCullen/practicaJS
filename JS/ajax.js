
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





