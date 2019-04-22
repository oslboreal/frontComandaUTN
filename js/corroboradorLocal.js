// CorroboradorLocal - La comanda Juan Marcos Vallejo.
// -- 22/04/19 --

(function (self, $, undefined) {

    self.Inicializar = function () {
        // Inicialización.
        corroborarSesion();
    };

    // Métodos privados.
    function corroborarSesion() {
        let locStorage = { 'token': localStorage.getItem('token'), 'role': localStorage.getItem('role'), 'user_id': localStorage.getItem('user_id'), 'user_name': localStorage.getItem('user_name') };
        console.log(locStorage);
    }

}(window.Comanda.CorroboradorLocal = window.Comanda.CorroboradorLocal || {}, jQuery));

jQuery(function () {
    window.Comanda.CorroboradorLocal.Inicializar();
});