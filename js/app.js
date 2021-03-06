//campos del formulario
const mascotaInput= document.querySelector('#mascota');
const propietarioInput= document.querySelector('#propietario');
const telefonoInput= document.querySelector('#telefono');
const fechaInput= document.querySelector('#fecha');
const horaInput= document.querySelector('#hora');
const sintomasInput= document.querySelector('#sintomas');

//UI
const formulario=document.querySelector('#nueva-cita');
const contenedorCitas=document.querySelector('#citas');

class Citas{
    constructor(){
        this.citas=[];
    }
    agregarCita(cita){
        this.citas=[...this.citas,cita];
        console.log(this.citas);
    }
}

class UI{
imprimirAlerta(mensaje,tipo){
    //crear el div
    const divMensaje=document.createElement('div');
    divMensaje.classList.add('text-cemter','alert', 'd-block','col-12');

    //Agregar clase en base al tipo de error
    if(tipo==='error'){
        divMensaje.classList.add('alert-danger');

    }else{
        divMensaje.classList.add('alert-success');
    }
    //mensaje de error
    divMensaje.textContent=mensaje;
    //agregar al Dom
    document.querySelector('#contenido').insertBefore(divMensaje,document.querySelector('.agregar-cita'));

    //quitar la alerta despues de 5 segundos
    setTimeout(()=>{
        divMensaje.remove();

    },5000);

    }
}
const ui=new UI();
const administrarCitas = new Citas();

//registrar eventos
eventListeners();
function eventListeners(){
    mascotaInput.addEventListener('input',datosCita);
    propietarioInput.addEventListener('input',datosCita);
    telefonoInput.addEventListener('input',datosCita);
    fechaInput.addEventListener('input',datosCita);
    horaInput.addEventListener('input',datosCita);
    sintomasInput.addEventListener('input',datosCita);

    formulario.addEventListener('submit',nuevaCita)
}
//objeto con info de la cita
const citaObj={
    mascota:'',
    propietario:'',
    telefono:'',
    fecha:'',
    hora:'',
    sintomas:''
}
//agregar datos al objeto de cita
function datosCita(e){
    citaObj[e.target.name]=e.target.value;
    console.log(citaObj)
}

//valida y agrega una nueva cita a la clase de citas
function nuevaCita(e){
    e.preventDefault();

    //Extraer la informaci??n del objetp de cita
    const {mascota,propietario,telefono,fecha,hora,sintomas}= citaObj;

    //validar
    if(mascota===''||propietario==='' ||telefono==='' ||fecha==='' ||hora==='' ||sintomas===''){
        ui.imprimirAlerta('Todos los campos son obligatorios','error')
        return;

    }

    //generar id unico
    citaObj.id=Date.now();

     //crear nueva cita
    administrarCitas.agregarCita(citaObj);


}