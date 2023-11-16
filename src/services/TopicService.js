import httpAxios from '../httpAxios'

function getAll() {
    return httpAxios.get('topic/index');
}

function getById(id) {
    return httpAxios.get('topic/show/' + id);

}
function create(topic) {
    return httpAxios.post('topic/store', topic);
}
function update(topic, id) {
    return httpAxios.post('topic/update/' + id, topic);

}
function remove(id) {
    return httpAxios.delete('topic/destroy/' + id);

}
function getTopicByParentId(parent_id) {
    return httpAxios.get(`topic_list/${parent_id}`);
}

const topicservice = {
    getTopicByParentId: getTopicByParentId,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default topicservice;