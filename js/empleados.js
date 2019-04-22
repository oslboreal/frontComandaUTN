"use strict";
/// <reference path='./classes/Order.ts'/>
/// <reference path='configuracion.js'/>

var token = localStorage.getItem('token');
var headers = { 'token': token };
var role = localStorage.getItem('role');
var user_id = localStorage.getItem('user_id');
var orders = [];

// Elementos del DOM
var $enlaceNombreUsuario = $("#enlace-nombre-usuario");

$(document).ready(() => {
    obtenerOrdenes();
});

function obtenerOrdenes() {
    // Vaciamos la tabla de ordenes.
    $('#table_orders').html('');
    // Vaciamos el arreglo de ordenes.
    orders = [];

    // Seteamos el nombre del usuario.
    if (user_id != undefined && user_id != null)
        $enlaceNombreUsuario.html(user_id);

    // Obtenemos las ordenes.
    $.ajax({
        url: URL_SERVER + '/orders/all_by_type',
        headers,
        data: { 'order_type': role }
    }).done((res) => {
        for (const o of res['orders']) {
            let new_order = new Order(o.id, o.user_id, o.order_type, o.status, o.finalized, o.estimated_time, o.name, o.amount);
            orders.push(new_order);
        }
        console.log(orders);
        //cargarOrdenes();
    });
}

// En vez de crear dinamicamente HTML usar JQUERY
function cargarOrdenes() {
    $('#modals_employee').html('');
    let html = '';
    if (orders.length > 0) {
        for (const o of orders) {
            html += `
                <tr>
                <td>${o.name}</td>
                <td>${o.status}</td>
                <td>${o.user_id ? o.user_id : 'SIN ASIGNAR'}</td>
                <td>${o.estimated_time ? o.estimated_time : 'SIN ASIGNAR'}</td>
                <td>${o.status == 'PENDIENTE' ? `<button data-backdrop="static" data-toggle="modal" data-target="#modal_employee_${o.id}" class="btn btn-sm btn-success">Comenzar pedido</button>` : `${o.status != 'LISTO PARA SERVIR' ? `<button onclick="actualizarEstadoOrden(${o.id}, 'LISTO PARA SERVIR')" class="btn btn-sm btn-warning">Listo</button>` : `<button onclick="actualizarEstadoOrden(${o.id}, 'EN PREPARACION')" class="btn btn-sm btn-primary">Trabajando</button>`}<button data-backdrop="static" data-toggle="modal" data-target="#modal_employee_${o.id}" class="btn btn-sm btn-danger">Finalizar pedido</button>`}</td>
                </tr>
            `;
            crearModalEmpleados(o.id, o.status == 'PENDIENTE');
        }
    }
    else {
        html += `<strong>SIN PEDIDOS</strong>`;
    }
    $('#table_orders').html(html);
}

// TODO: Reemplazar esto. (Debería usar JQuery y buscar un elemento existente).
function crearModalEmpleados(id, start) {
    let html = `
                <div  id="modal_employee_${id}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_employee_${id}" aria-hidden="true">
                <div class="modal-dialog-centered modal-dialog modal-sm">
                <div class="modal-content"><div class="modal-header">
                <div class="modal-title" >${start ? 'Asignar pedido' : 'Confirmación de finalización'}</div>
                <button onclick="actualizarEmpleado()" type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`;
    if (start) {
        html += `<div >
                <div class="col-12 mb-1"><input oninput="enabled_start(${id})" class="form-control" id="input_${id}" placeholder="Tiempo estimado (minutos)"></div>
        
                <div class="col-12 text-center"><button onclick="iniciarOrden(${id})" id="btn_ok_${id}" disabled  class="btn btn-sm btn-success">Aceptar</button></div>
                </div>        
        </div>  
        </div>
        </div>
        `;
    }
    else {
        html += `<div >
                <div class="col-12 text-center"><button onclick="finalizarOrden(${id})"  class="btn btn-sm btn-danger">Aceptar</button></div>
                </div>        
        </div>  
        </div>
        </div>
        `;
    }
    $('#modals_employee').append(html);
}

function enabled_start(id) {
    let estimated_time = parseInt($('#input_' + id).val());
    if (estimated_time > 0) {
        $('#btn_ok_' + id).removeAttr('disabled');
    }
    else {
        $('#btn_ok_' + id).attr('disabled', 'disabled');
    }
}

function actualizarEmpleado() {
    window.location.reload();
}

function iniciarOrden(order_id) {
    // Obtengo el tiempo estimado que ingreso el empleado.
    let estimated_time = $('#input_' + order_id).val();

    // Actualizo el estado de la orden a pendiente y le seteo el tiempo estimado.
    $.ajax({
        url: URL_SERVER + '/orders/update_status',
        type: 'POST',
        headers,
        data: { order_id, 'status': 'PENDIENTE', estimated_time }
    }).done((res) => {
        // Actualizamos la vista del empleado
        actualizarEmpleado();
    });
}

function finalizarOrden(order_id) {
    $.ajax({
        url: URL_SERVER + '/orders/close',
        headers,
        data: { order_id },
        type: 'POST'
    }).done((res) => {
        // Actualizamos la vista del empleado
        actualizarEmpleado();
    });
}

function actualizarEstadoOrden(order_id, status) {
    $.ajax({
        url: URL_SERVER + '/orders/update_status',
        type: 'POST',
        headers,
        data: { order_id, status }
    }).done((res) => {
        // Actualziamos la vista del empleado
        actualizarEmpleado();
    });
}