
import httpAxios from '../httpAxios'
function getAll() {
    return httpAxios.get('slider/index');
}
function getById(id) {
    return httpAxios.get('/slider/show/' + id);
}
function create(slider) {
    return httpAxios.post('/slider/store', slider)
}
function update(slider, id) {
    return httpAxios.post('/slider/update/' + id, slider);
}
function remove(id) {
    return httpAxios.delete('/slider/destroy/' + id);
}
function getByPosition(position) {
    return httpAxios.get(`slider/slider_list/${position}`);

}
const sliderservice = {
    getByPosition: getByPosition,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default sliderservice;
