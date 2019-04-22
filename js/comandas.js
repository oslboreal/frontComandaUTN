// Comandas - La comanda Juan Marcos Vallejo.
// -- 22/04/19 --

(function (self, $, undefined) {

    self.Inicializar = function () { };

    self.obtenerComandas = function () {
        $.ajax({
            url: URL_SERVER + '/comanda/all_activate'
        }).done((resultados) => {
            console.log("Obtener comandas:");
            console.log(resultados);
            for (const c of resultados['comandas']) {
                let nuevaComanda = new Comanda(c.id, c.client_name, JSON.parse(c.orders), c.amount, c.opinion, c.identifier, c.table_id, c.date, c.photo, c.mozo_id, c.status);
                comandas.push(nuevaComanda);
            }
        });
    }

    self.update_name = function (input_id, comanda_id) {
        var client_name = $('#inp_' + input_id).val();
        console.log(client_name);
        $.ajax({
            url: URL_SERVER + '/comanda/update_client_name',
            data: { comanda_id, client_name },
            type: 'POST',
            headers
        }).done((res) => { });
    }

}(window.Comanda.Comandas = window.Comanda.Comandas || {}, jQuery));

jQuery(function () {
    window.Comanda.Comandas.Inicializar();
});