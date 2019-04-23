// Logins - La comanda Juan Marcos Vallejo.
// -- 22/04/19 --

(function (self, $, undefined) {
    var $btn_login;
    self.Inicializar = function () {
        // Inicialización.
        $btn_login = $("#btn_login");

        // Eventos.
        $btn_login.on("keypress", function (e) {
            e.preventDefault();
            if (e.keyCode === 13)
                login();
        });
    };

    // Métodos públicos.      

    self.login = function() {
        let $usuario = $("#user_name");
        let $pass = $("#password");
        let valorUsuario = $usuario.val();
        let valorPassword = $pass.val();
        autenticarUsuario(valorUsuario, valorPassword);
    }

    function autenticarUsuario(user, password) {
        $.ajax({
            type: 'POST',
            url: URL_SERVER + '/login',
            data: { user, password },
            success: function (resultado) {

                // Borramos la información almacenada anteriormente.
                localStorage.clear();

                // Seteamos la información.
                localStorage.setItem('token', resultado['token']);
                localStorage.setItem('user_id', resultado['user']['id']);
                localStorage.setItem('user_name', resultado['user']['user_name']);
                localStorage.setItem('role', resultado['user']['role']);

                // Redireccionamos al index.
                window.location.href = './index.html';
            },
            error: function (err) {
                // En caso de alerta mostramos el mensaje de error.
                var $boxAlerta = $("#alerta");
                $boxAlerta.show();
            }
        });
    }


}(window.Comanda.Logins = window.Comanda.Logins || {}, jQuery));

jQuery(function () {
    window.Comanda.Logins.Inicializar();
});