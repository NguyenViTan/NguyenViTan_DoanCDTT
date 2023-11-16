import httpAxios from '../httpAxios'

function getAll() {
    return httpAxios.get('contact/index');
}

function getById(id) {
    return httpAxios.get('contact/show/' + id);

}
function create(contact) {
    return httpAxios.post('contact/store', contact);
}
function update(contact, id) {
    return httpAxios.post('contact/update/' + id, contact);

}
function remove(id) {
    return httpAxios.delete('contact/destroy/' + id);

}


function AddContact(contact){
    return httpAxios.post('contact/addcontact',contact);
}

const contactservices = {
    AddContact:AddContact
};


const contactservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    AddContact:AddContact,
    contactservices:contactservices
}
export default contactservice;