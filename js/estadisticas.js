// Estadisticas - La comanda Juan Marcos Vallejo.
// -- 22/04/19 --

(function (self, $, undefined) {

    // Elementos.
    var $btnFiltrar;
    var $selectTipo;
    var $selectOperacion;
    var $fechaDesde;
    var $fechaHasta;

    self.Inicializar = function () {
        // Inicialización.
        $btnFiltrar = $("#btnFiltrar");
        $selectTipo = $("#selectTipo");
        $selectOperacion = $("#selectOperacion");
        $fechaDesde = $("#fechaDesde");
        $fechaHasta = $("#fechaHasta");

        // // Eventos.
        $selectTipo.on('change', selectTipo_Changed);
        $selectOperacion.on('change', selectOperacion_Changed);
    };

    function setearContenido(html) {
        $('#contenido').html(html);
    }

    function selectOperacion_Changed() {
        var $this = $(this);
        let valorActual = $this.val();

        switch (valorActual) {

            // Pedidos
            case 'Mas vendido':
                traerPedidoMasVendido();
                break;
            case 'Menos vendido':
                traerPedidoMenosVendido();
                break;
            case 'Tiempo demorado':
                traerPedidosPorTiempoDemorado();
                break;
            case 'Cancelados':
                traerPedidosCancelados();
                break;

            //Mesas
            case 'Mesa Mas usada':
                traerMesaMasUsada();
                break;
            case 'Mesa Menos usada':
                traerMenosUsada();
                break;
            case 'Mesa Mayor facturacion':
                traerMesaMayorFacturacion();
                break;
            case 'Mesa Menor facturacion':
                traerMesaMenorFacturacion();
                break;
            case 'Factura mayor importe':
                traerMesaMayorImporte();
                break;
            case 'Factura menor importe':
                traerMesaMenorImporte();
                break;

            // Empleados
            case 'Dias y horarios de logueo':
                traerLogeos();
                break;
            case 'Operaciones de todos por sector':
                traerOperacionesDeTodosPorSector();
                break;
            case 'Operaciones de todos por sector p/e':
                traerOperacionesDeTodosPorSectorPorEmpleado();
                break;
            case 'Cantidad de operaciones':
                traerCantidadOperaciones();
                break;
        }
    }


    function traerLogeos() {
        if (fechasValidas())
            setearContenido("NotImplemented");
    }

    function traerOperacionesDeTodosPorSector() {
        if (fechasValidas())
            setearContenido("NotImplemented");
    }

    function traerOperacionesDeTodosPorSectorPorEmpleado() {
        if (fechasValidas())
            setearContenido("NotImplemented");
    }

    function traerCantidadOperaciones() {
        if (fechasValidas())
            setearContenido("NotImplemented");
    }

    function traerMesaMasUsada() {
        if (fechasValidas())
            setearContenido("NotImplemented");
    }

    function traerMenosUsada() {
        if (fechasValidas())
            setearContenido("NotImplemented");
    }

    function traerMesaMenorFacturacion() {
        setearContenido("NotImplemented");
    }

    function traerMesaMayorFacturacion() {
        if (fechasValidas())
            setearContenido("NotImplemented");
    }

    function traerMesaMayorImporte() {
        if (fechasValidas())
            setearContenido("NotImplemented");
    }

    function traerMesaMenorImporte() {
        if (fechasValidas())
            setearContenido("NotImplemented");
    }

    function traerPedidoMasVendido() {
        if (fechasValidas())
            setearContenido("NotImplemented");
    }

    function traerPedidoMenosVendido() {
        if (fechasValidas())
            setearContenido("NotImplemented");
    }

    function traerPedidosPorTiempoDemorado() {
        if (fechasValidas())
            setearContenido("NotImplemented");
    }

    function traerPedidosCancelados() {
        if (fechasValidas())
            setearContenido("NotImplemented");
    }

    function selectTipo_Changed() {
        var $this = $(this);
        let valorActual = $this.val();
        let html;

        switch (valorActual) {
            case 'PEDIDOS':
                // Segundo select opciones pedido.
                html += `
                    <option>Mas vendido</option>
                    <option>Menos vendido</option>
                    <option>Tiempo demorado</option>
                    <option>Cancelados</option>
                    `;
                break;
            case 'MESAS':
                // Segundo select opciones mesas.
                html += `
                    <option>Mesa Mas usada</option>
                    <option>Mesa Menos usada</option>
                    <option>Mesa Mayor facturacion</option>
                    <option>Mesa Menor facturacion</option>
                    <option>Factura mayor importe</option>
                    <option>Factura menor importe</option>
                    `;
                break;
            case 'EMPLEADOS':
                // Segundo select opciones empleados.
                html += `
                    <option value="/users/log_login">Dias y horarios de logueo</option>
                    <option>Operaciones de todos por sector</option>
                    <option>Operaciones de todos por sector p/e</option>
                    <option>Cantidad de operaciones</option>
                    `;
                break;
        }

        $selectOperacion.html(html);

    }

    function fechasValidas() {
        return true;
    }

}(window.Comanda.Estadisticas = window.Comanda.Estadisticas || {}, jQuery));

jQuery(function () {
    window.Comanda.Estadisticas.Inicializar();
});