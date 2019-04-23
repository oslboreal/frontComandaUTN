// Menues - La comanda Juan Marcos Vallejo.
// -- 22/04/19 --

(function (self, $, undefined) {

    self.Inicializar = function () {
        // Inicialización.

    };

    // Métodos públicos.

    self.Nueva = function () {
        traerComponentes();
    }

    self.Nueva = function () {
        traerComponentes();
    }

    self.obtenerMenues = function () {
        let menus = [];

        $.ajax({
            url: URL_SERVER + '/menu/all',
            headers
        }).done((resultados) => {
            console.log("Obtener menues:");
            console.log(resultados);
            for (const m of resultados['menus']) {
                let nuevoMenu = new Menu(m.id, m.type, m.name, m.amount);
                menus.push(nuevoMenu);
            }

            return menus;
        });
    }

}(window.Comanda.Menues = window.Comanda.Menues || {}, jQuery));

jQuery(function () {
    window.Comanda.Menues.Inicializar();
});