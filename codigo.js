

//storage

let numeros_clicks = 0

function irsumando_data() {
    numeros_clicks = numeros_clicks + 1 
    localStorage.setItem('click', numeros_clicks)
    let suma_click = document.getElementById("mensaje_click")
    suma_click.innerText = " el numero de clicks es " + numeros_clicks 
}


function recuperar_data(){
    let datos = document.getElementById("valor")
    datos.innerText = "clicks " + (localStorage.getItem('click'))
}

document.getElementById("misterioso").addEventListener('click', () => numero_misterioso())

function numero_misterioso() {
    console.log("holi, hiciste click")
     let numero_misterio =  numeros_clicks + 5
    localStorage.setItem('click', numero_misterio);
}

let fanes_helado = []
if ( localStorage.getItem('datos')){
    fanes_helado = JSON.parse(localStorage.getItem('datos'))
}


function comedor_helado(event){
    event.preventDefault()
    let fan_helado = document.getElementById("nombre").value;
    let sabor_helado = document.getElementById("sabor_helado").value;
    let heladeria_fav = document.getElementById("heladeria").value;
    const heladista = {nombre: fan_helado, sabor: sabor_helado, heladeria: heladeria_fav};
    fanes_helado.push(heladista)
    localStorage.setItem('datos',  JSON.stringify(fanes_helado));
    console.log(heladista)
    console.log(fanes_helado)
}

function fans_helado(event){
    event.preventDefault()
    console.log(JSON.parse(localStorage.getItem('datos')));
}




