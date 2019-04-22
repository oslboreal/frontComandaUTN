// Validacion de token - La comanda Juan Marcos Vallejo.
// -- 22/04/19 --

(function (self, $, undefined) {

    self.Inicializar = function () {
        // Inicialización.
        user_validate();
    };

    // Métodos privados.
    function user_validate() {
        let data = { 'token': localStorage.getItem('token') };
    
        $.ajax({
            url: URL_SERVER + '/login/check_token',
            type: 'post',
            data,
            success: (res) => {
                return res.role;
            },
            error: (err) => {
                window.location.href = 'ingreso.html'
                console.log("Su sesión es inválida, vuelva a autenticarse.");
                sessionStorage.clear();
            }
        });
    }

}(window.Comanda.ValidarToken = window.Comanda.ValidarToken || {}, jQuery));

jQuery(function () {
    window.Comanda.ValidarToken.Inicializar();
});