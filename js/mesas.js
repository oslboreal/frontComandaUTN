// Mesas - La comanda Juan Marcos Vallejo.
// -- 22/04/19 --

(function (self, $, undefined) {
    var headers;

    self.Inicializar = function () {
        headers = { 'token': token };
    };

    self.traerMesas = function () {
        var mesas = [];

        $.ajax({
            type: 'GET',
            url: URL_SERVER + '/tables/list',
            headers,
            success: function (result) {
                mesas = result['tables'];
                return mesas;
            },
            error: function () {
                alert("Error a la hora de obtener las mesas.");
            }
        });
    }

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
            alert("actualizar index");
        });
    }

    // Cierra la mesa especificada.
    self.cerrarMesa = function (table_id, comandas) {

        let comanda_id = 0;

        // Busco el id de la comanda correspondiente a la mesa.
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
        }).done((res) => { alert("actualizar index"); });
    }

}(window.Comanda.Mesas = window.Comanda.Mesas || {}, jQuery));

jQuery(function () {
    window.Comanda.Mesas.Inicializar();
});