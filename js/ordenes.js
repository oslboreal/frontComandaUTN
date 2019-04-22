// Ordenes - La comanda Juan Marcos Vallejo.
// -- 22/04/19 --

(function (self, $, undefined) {

    self.Inicializar = function () {};

    // Obtiene todas las ordenes activas.
    self.obtenerOrdenes = function () {
        $.ajax({
            url: URL_SERVER + '/orders/all_activate',
            headers
        }).done((resultados) => {
            console.log("Obtener ordenes:");
            console.log(resultados);
            for (const o of resultados['orders']) {
                let nuevaOrden = new Order(o.id, o.user_id, o.order_type, o.status, o.finalized, o.estimated_time, o.name, o.amount);
                orders.push(nuevaOrden);
            }
        });
    }

    // Crea una nueva orden.
    self.nuevaOrden = function (comanda_id, id) {
        // Obtengo id del menu.
        let menu_id = $('#select_orders_' + id).val();
        $.ajax({
            url: URL_SERVER + '/orders/new',
            type: 'POST',
            data: { comanda_id, menu_id },
            headers
        }).done((res) => {
            reload();
        });
    }

}(window.Comanda.Ordenes = window.Comanda.Ordenes || {}, jQuery));

jQuery(function () {
    window.Comanda.Ordenes.Inicializar();
});