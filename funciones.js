 

 function validate(){


var form = document.getElementById('nac').value;
  var fechaNacimiento = form.split("-");
  var añoNac = fechaNacimiento[0];
  var mesNac = fechaNacimiento[1];
  var diaNac = fechaNacimiento[2];

  var fechaHoy = new Date(); 
  var añoActual = fechaHoy.getFullYear();
  var mesActual = fecha_actr.getMonth() +1;
  var diaActual = fecha_act.getDate();  
 
  var edad =  añoActual - añoNac;
  var mes = mesActual - mesNac;
  var dia = diaActual - diaNac;

if (edad< 18) {alert('No se permite tener menos de 18 años');
return false}

if (edad>100) {alert('Limite de edad excedido');
return false }
 else {alert('Felicidades. Hemos cargado su curriculum a nuestra base de datos')} ;

}


 

function cuentaCaracteres(area){

   var textoArea = area ;
  var numeroCaracteres = textoArea.length;
  
  

document.getElementById('cantCar').value = numeroCaracteres;

}


