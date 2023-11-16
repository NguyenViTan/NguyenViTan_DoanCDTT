import httpAxios from '../httpAxios'

function getAll() {
    return httpAxios.get('brand/index');
}

function getById(id) {
    return httpAxios.get('brand/show/' + id);

}
function create(brand) {
    return httpAxios.post('brand/store', brand);
}
function update(brand, id) {
    return httpAxios.post('brand/update/' + id, brand);

}
function remove(id) {
    return httpAxios.delete(`brand/destroy/${id}`);

}

const brandservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default brandservice;