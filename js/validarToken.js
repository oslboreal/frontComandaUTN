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
                window.location.href = '/login.html'
            }
        });
    }

}(window.Comanda.Usuarios = window.Comanda.Usuarios || {}, jQuery));

jQuery(function () {
    window.Comanda.Usuarios.Inicializar();
});