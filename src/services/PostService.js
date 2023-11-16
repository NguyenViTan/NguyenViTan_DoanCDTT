import httpAxios from '../httpAxios'

function getAll() {
    return httpAxios.get('post/index');
}

function getById(id) {
    return httpAxios.get('post/show/' + id);

}
function create(post) {
    return httpAxios.post('post/store', post);
}
function getPostHome(limit, topic_id) {
    return httpAxios.get(`post_home/${limit}/${topic_id}`);
}
function getPostAll(limit) {
    return httpAxios.get(`post_all/${limit}`);
}
function getPost_All(){
    return httpAxios.get(`post/post_all_fe`);
}

function getPostTopicId(limit, topic_id) {
    return httpAxios.get(`post_topic/${limit}/${topic_id}`);
}

function getPostBySlug(slug) {
    return httpAxios.get(`post_detail/${slug}`);
}
function update(post, id) {
    return httpAxios.post('post/update/' + id, post);

}
function remove(id) {
    return httpAxios.delete('post/destroy/' + id);

}
function getPostDetails(slug){
    return httpAxios.get('post/post_detail/'+slug);
}

const postservice = {
    getAll: getAll,
    getPostAll:getPostAll,
    getPostHome: getPostHome,
    getById: getById,
    getPostBySlug:getPostBySlug,
    getPostTopicId:getPostTopicId,
    getPost_All:getPost_All,
    create: create,
    update: update,
    remove: remove,
    getPostDetails:getPostDetails
}
export default postservice;