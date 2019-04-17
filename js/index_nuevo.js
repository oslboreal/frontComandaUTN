(function (self, $, undefined) {

    // Elementos del DOM.
    var $inputBuscador;
    var $btnBuscador;
    var $cabeceraFavoritos;

    // Variables.
    var tables = [];
    var comandas = [];
    var menus = [];
    var orders = [];

    self.Inicializar = function () {
        // Inicialización.
        $inputBuscador = $(".js-input-buscador");
        $btnBuscador = $(".js-btn-buscador");
        $cabeceraFavoritos = $(".js-cabecera-favoritos");

        // Events.


        // Obtenemos data del local storage.
        var token = localStorage.getItem('token');
        var headers = { 'token': token };
        var role = localStorage.getItem('role');
        var user_id = localStorage.getItem('user_id');

        // Carga inicial.
        cargaInicial();
    };

    function cargaInicial() {
        obtenerMesas();
        obtenerMenues();
        obtenerOrdenes();
        obtenerComandas();

        llenarGrilla();
    }

    function llenarGrilla() {
        
    }

    self.Actualizar = function () {
        //traerComponentes();
    }

    function obtenerMesas() {
        $.ajax({
            url: URL_SERVER + '/tables/list',
            headers
        }).done((resultados) => {
            for (const t of resultados['tables']) {
                let new_table = new Table(t.id, t.status, t.identifier);
                tables.push(new_table);
            }
        });
    }

    function obtenerMenues() {
        $.ajax({
            url: URL_SERVER + '/menu/all',
            headers
        }).done((resultados) => {
            for (const m of resultados['menus']) {
                let nuevoMenu = new Menu(m.id, m.type, m.name, m.amount);
                menus.push(nuevoMenu);
            }
        });
    }

    function obtenerOrdenes() {
        $.ajax({
            url: URL_SERVER + '/orders/all_activate',
            headers
        }).done((resultados) => {
            for (const o of resultados['orders']) {
                let nuevaOrden = new Order(o.id, o.user_id, o.order_type, o.status, o.finalized, o.estimated_time, o.name, o.amount);
                orders.push(nuevaOrden);
            }
        });
    }

    function obtenerComandas() {
        $.ajax({
            url: URL_SERVER + '/comanda/all_activate'
        }).done((resultados) => {
            for (const c of resultados['comandas']) {
                let nuevaComanda = new Comanda(c.id, c.client_name, JSON.parse(c.orders), c.amount, c.opinion, c.identifier, c.table_id, c.date, c.photo, c.mozo_id, c.status);
                comandas.push(nuevaComanda);
            }
        });
    }



}(window.Tracking.Menu = window.Tracking.Menu || {}, jQuery));

jQuery(function () {
    window.Tracking.Menu.Inicializar();
});