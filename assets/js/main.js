var datos= [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" }, { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" }, { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" }, { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" }, { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];
var respuesta="";
function mostrar(){
  for(var element in datos){
    respuesta+="<li> Nombre: "+datos[element].nombre+"<br>"+
              "<li> Apellido: "+datos[element].apellido+"<br>"+
              "<li> Rol: "+datos[element].rol+"<br>"+
              "<li> Cumpleaños: "+datos[element].cumpleanios+"<br>"+"<br>";
  }
  document.getElementById("total").innerHTML= respuesta;
}
