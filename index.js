$(function () {
    agregarPropietario();
    agregarMascota();
    mostrarAgregarMascota();
    eliminar();

});

function agregarPropietario() {
    $('form input[id=agregarP]').on('click', function (e) {

        e.preventDefault();

        var nombre = $("#nombre");
        var apellido = $("#apellido");
        var direccion = $("#direccion");
        var telefono = $("#telefono");

        $('#propietarios').append("<tr>" +
            "<td>" + nombre.val() + "</td>" +
            "<td>" + apellido.val() + "</td>" +
            "<td>" + direccion.val() + "</td>" +
            "<td>" + telefono.val() + "</td>" +
            "<td> <button id='botonMascota' type = 'button' class='agregarMascota btn btn-primary'>Agregar Mascota</button> <button type = 'button' class='eliminar btn btn-danger'>Eliminar</button>" +
            "</tr>");

        nombre.val('');
        apellido.val('');
        direccion.val('');
        telefono.val('');
       

    })

}

function agregarMascota(){
    
}

function mostrarAgregarMascota(){
    $('#propietarios').on('click', '.agregarMascota', function(e){
        console.log("VICIO");
        e.preventDefault();

        $('.agregarMascotas').show();

        


    })
}


function eliminar() {
    $('#propietarios').on('click', '.eliminar', function (e) {
        e.preventDefault();
        $(this).closest('tr').remove();
    });
}