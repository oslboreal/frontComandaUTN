// Estadisticas - La comanda Juan Marcos Vallejo.
// -- 22/04/19 --

(function (self, $, undefined) {

    // Elementos.
    var $btnFiltrar;
    var $selectTipo;
    var $fechaDesde;
    var $fechaHasta;

    // Modales.
    var $modalEmpleados;
    var $modalPedidos;
    var $modalMesas;

    self.Inicializar = function () {
        // Inicialización.
        // $modalEmpleados = $("#modalEmpleados");
        // $modalPedidos = $("#modalPedidos");
        // $modalMesas = $("#modalMesas");
        // $selectTipo = $("#selectTipo");

        // // Eventos.
        // $btnFiltrar.on('click', btnFlitrar_Click)

        // // Llamadas.
        // $modalEmpleados.hide();
        // $modalPedidos.hide();
        // $modalMesas.hide();
    };

    function btnFlitrar_Click() {
        // Tabla actual.
        let $tablaModalActual;
        let $tdTablaModalActual;

        // Realizar busqueda.

        // Switch según tipo cargando el respectivo modal y mostrandolo.
        // Es necesario hacer un find dentro del modal buscando las clases:
        //
        //
    }

}(window.Comanda.Estadisticas = window.Comanda.Estadisticas || {}, jQuery));

jQuery(function () {
    window.Comanda.Estadisticas.Inicializar();
});