import httpAxios from '../httpAxios'

function getAll() {
    return httpAxios.get('product/index');
}

function getById(id) {
    return httpAxios.get('product/show/' + id);

}
function create(product) {
    return httpAxios.post('product/store', product);
}
function update(product, id) {
    return httpAxios.post('product/update/' + id, product);

}
function remove(id) {
    return httpAxios.delete('product/destroy/' + id);


}
function getProductNew(sale,limit){
    return httpAxios.get(`product/ProductNew/${sale}/${limit}`);
}

function getProductHome(limit, category_id) {
    return httpAxios.get(`product_home/${limit}/${category_id}`);
}
function getProductAll(limit) {
    return httpAxios.get(`product_all/${limit}`);
}
function getProductCategoryId(limit, category_id) {
    return httpAxios.get(`product_category/${limit}/${category_id}`);
}
function getProductBrandId(limit, brand_id) {
    return httpAxios.get(`product_brand/${limit}/${brand_id}`);
}
function getProductBySlug(slug) {
    return httpAxios.get(`product_detail/${slug}`);
}

const productservice = {
    getProductAll:getProductAll,
    getProductCategoryId:getProductCategoryId,
    getProductBrandId:getProductBrandId,
    getProductHome: getProductHome,
    getProductBySlug:getProductBySlug,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove,
    getProductNew:getProductNew
}
export default productservice;