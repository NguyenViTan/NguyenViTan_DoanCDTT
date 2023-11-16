import httpAxios from '../httpAxios'

function getAll() {
    return httpAxios.get('order/index');
}

function getById(id) {
    return httpAxios.get('order/show/' + id);

}
function create(order) {
    return httpAxios.post('order/store', order);
}
function update(order, id) {
    return httpAxios.post('order/update/' + id, order);

}
function remove(id) {
    return httpAxios.delete('order/destroy/' + id);

}

const orderservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default orderservice;