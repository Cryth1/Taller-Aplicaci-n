$(function () {
    editarPropietario();
    mostrarMascota();
    

});

function editarPropietario(){
    $('table input[id=agregarP]').on('click', function(e){

        e.preventDefault();

    })

}

function mostrarMascota(){
    $('#propietarios').on('click', '.detalles', function(e){

        e.preventDefault();


        $('#mascotas').append("<tr>" + 
            "<td>" + "Samanta" + "</td>" + 
            "<td>" + "Gato" + "</td>" +
            "<td>" + "12/12/2014" + "</td>" +
            "</tr>"+
            "<tr>" +
            "<td>" + "Matheo" + "</td>" + 
            "<td>" + "Perro" + "</td>" +
            "<td>" + "1/02/2013" + "</td>" +
            "</tr>" )

        

    });
}

