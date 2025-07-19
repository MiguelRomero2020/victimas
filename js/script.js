$("body").prognroll({
    //Altura de la barra de progreso
    height: 8,        
    //Color de la barra de progreso
    color: " #1C94BA",
    // Si queremos añadir una barra de progreso a una capa ponemos el valor true
    custom: false     
});

// Esperar a que la barra esté generada y aplicar el gradiente
setTimeout(function () {
    $(".prognroll-bar").css({
        "background": "linear-gradient(90deg, rgba(248, 153, 28, 1) 0%, rgba(39, 55, 134, 1) 30%, rgba(237, 28, 36, 1) 52%, rgba(50, 173, 74, 1) 74%, rgba(144, 47, 146, 1) 92%)"
    });
}, 100);