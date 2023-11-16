import httpAxios from '../httpAxios'

function getAll() {
    return httpAxios.get('config/index');
}

function getById(id) {
    return httpAxios.get('config/show/' + id);

}
function create(config) {
    return httpAxios.post('config/store', config);
}
function update(config, id) {
    return httpAxios.post('config/update/' + id, config);

}
function remove(id) {
    return httpAxios.delete(`config/destroy/${id}`);

}

const configservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default configservice;