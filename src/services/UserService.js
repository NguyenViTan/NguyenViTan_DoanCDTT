import httpAxios from '../httpAxios'

function getAll() {
    return httpAxios.get('user/index');
}

function getById(id) {
    return httpAxios.get('user/show/' + id);

}
function create(user) {
    return httpAxios.post('user/store', user);
}
function update(user, id) {
    return httpAxios.post('user/update/' + id, user);

}
function remove(id) {
    return httpAxios.delete('user/destroy/' + id);

}
function AddUser(user){
    return httpAxios.post('user/adduser',user);
}

function Login(user){
    return httpAxios.post('user/login',user);
}


const userservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    AddUser:AddUser,
    Login:Login
}
export default userservice;