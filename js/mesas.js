// Mesas - La comanda Juan Marcos Vallejo.
// -- 22/04/19 --

(function (self, $, undefined) {

    self.Inicializar = function () {
    };

    // Actualiza el estado de una mesa.
    self.actualizarEstado = function (id, status) {
        let data = { id, status };
        $.ajax({
            url: URL_SERVER + '/tables/update',
            type: 'POST',
            data,
            headers
        }).done((res) => { get_data(); });
    }

    // Abre una nueva mesa.
    self.abrirMesa = function (table_id) {
        let data = { id: table_id };
        $.ajax({
            url: URL_SERVER + '/tables/open_table',
            data,
            type: 'POST',
            headers
        }).done((res) => {
            reload();
        });
    }

    // Cierra la mesa especificada.
    self.cerrarMesa = function (table_id) {
        let comanda_id = 0;
        for (const c of comandas) {
            if (c.table_id == table_id) {
                comanda_id = c.id;
                break;
            }
        }

        $.ajax({
            url: URL_SERVER + '/tables/close_table',
            type: 'POST',
            data: { table_id, comanda_id },
            headers
        }).done((res) => { reload(); });
    }


}(window.Comanda.Mesas = window.Comanda.Mesas || {}, jQuery));

jQuery(function () {
    window.Comanda.Mesas.Inicializar();
});