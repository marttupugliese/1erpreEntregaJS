

// Nombre de usuario y contraseña

const nombreUsuario = prompt("¿Cual es tu nombre?");

if (nombreUsuario == "") { 
    alert("No ingresaste tu nombre!")
}

const contrasenia = prompt("Escribe tu contraseña");

if (contrasenia == "") { 
    alert( nombreUsuario + ", No ingresaste tu contraseña!")
} else {
    alert("Hola " + nombreUsuario + " Bienvenid@!")
}



//respuestas correctas
let correctas = [3,1,2,2,3];

//donde se guardan las rtas del usuario
let opcion_elegida=[];

let cantidad_correctas=0;

//funcion que toma num de pregunta y opcion elegida
function respuesta(num_pregunta, seleccionada){
  //respuesta elegida guardada
  opcion_elegida[num_pregunta] = seleccionada.value;

  // id
  id="p" + num_pregunta;

  labels = document.getElementById (id).childNodes;
  labels[3].style.backgroundColor = "white";
  labels[5].style.backgroundColor = "white";
  labels[7].style.backgroundColor = "white";

  seleccionada.parentNode.style.backgroundColor = "#cec0fc"; 
}


//funcion que compara arreglos
function chequear(){
  cantidad_correctas = 0;
  for(i=0; i < correctas.length;i++){
    if(correctas[i]==opcion_elegida [i]){
      cantidad_correctas++;
    }
  }
  document.getElementById("resultado").innerHTML = cantidad_correctas;
}
