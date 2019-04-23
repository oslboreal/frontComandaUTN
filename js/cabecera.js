// Cabecera - La comanda Juan Marcos Vallejo.
// -- 22/04/19 --

var role = localStorage.getItem('role');
var user_name = localStorage.getItem('user_name');

var header = `<div>
<nav class="navbar  navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#"><h1>Bienvenido ${user_name}</h1></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        ${role == 'SOCIO' ? `<ul id="nav_list" class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="./index.html">Mesas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./empleados.html">Pedidos</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" onclick="Desconectarse()" href="./empleados.html">Desconectarse</a>
             </li>
        </ul>` : `<ul class="navbar-nav mr-auto"><li class="nav-item">
        <a class="nav-link" onclick="Desconectarse()" href="./empleados.html">Desconectarse</a>
         </li></ul>`}
        
    </div>
</nav>
</div>`;
$('#header').html(header);

function Desconectarse() {
    // Limpio la información almacenada en el local storage.
    localStorage.clear();
    // Redirect al login.
    window.location.href = './ingreso.html';
}
