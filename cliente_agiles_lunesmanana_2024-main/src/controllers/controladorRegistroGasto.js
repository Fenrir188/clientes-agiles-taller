import { gastos} from "./simuladorBD.js"


//1.crear una variable para enlazar cada caja del formulario

let descripcionInput =document.getElementById("descripcion")
let montoInput=document.getElementById("monto")
let categoriaInput=document.getElementById("categoria")
let fechaInput=document.getElementById("fecha")
let botonRegistroGasto=document.getElementById("botonRegistro")

//2.desencadenar la logica del formulario
//2a lo primero es dectetar que al formulario le hicieron clic para enviar 
botonRegistroGasto.addEventListener("click",function(evento){
    evento.preventDefault()
    let gasto={
        id:5,
        descripcion:descripcionInput.value,
        monto:montoInput.value,
        categoria:categoriaInput.value,
        fecha:fechaInput.value
    }
    //agregando el nuevo gasto al areglño gasto
    gastos.push(gasto)
    console.log(gastos)
   

    // itilizar la memoria del navegador para guardar informacion
    sessionStorage.setItem("informacion",JSON.stringify(gastos))

    Swal.fire({
        title: "Gasto registrado con exito!",
        text: "estamos para servirte ",
        icon: "success"
      });
})
