import { useEffect, useState } from 'react';
import { urlImage } from "../../../config";
import { FaTrash } from 'react-icons/fa';
import accounting from 'accounting';
function Cart() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);
  useEffect(() => {
    setCartCount(calculateCartCount(cart));
  }, [cart]);

  const updateQuantity = (index, quantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    updatedCart[index].total = updatedCart[index].price * quantity;
    setCart(updatedCart);
    setCartCount(calculateCartCount(updatedCart));
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Cập nhật lại localStorage
  };

  const removeProduct = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    setCartCount(calculateCartCount(updatedCart));
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Cập nhật lại localStorage
  };
  const calculateCartCount = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <>
      <h4 className="text-danger" style={{ textAlign: 'center', fontSize: '30px', padding: '20px' }}>GIỎ HÀNG</h4>
      <div className="page-content ">
        <div className="cart">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12">
                <table className="table table-bodered table-mobile ">
                  <thead>
                    <tr className='text-center'>
                      <th> </th>
                      <th>Sản Phẩm</th>
                      <th>Tên</th>
                      <th>Giá</th>
                      <th>Số Lượng</th>
                      <th>Tổng</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product, index) => (
                      <tr key={index}>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="product col-md-2">
                          <div className="product">
                            <figure className="product-media">
                            <a href=''>
                                <img style={{ width: 250 }} src={urlImage + "product/" + product.image} alt="Product image" />
                              </a>
                            </figure>

                            {/* End .product-title */}
                          </div>
                          {/* End .product */}
                        </td>
                        <td className='text-center col-md-4'>{product.name}</td>
                        <td className="price-col text-center">{accounting.formatNumber(product.price, 0, ".", ",")}</td>
                        <td className="quantity-col col-md-1">
                          <div className="cart-product-quantity">
                            <input
                              type="number"
                              className="form-control text-center"
                              defaultValue={product.quantity||1} // Mặc định số lượng là 1
                              min={1}
                              max={100}
                              step={1}
                              data-decimals={0}
                              required=""
                              onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                         
                            />
                          </div>
                          {/* End .cart-product-quantity */}
                        </td>
                        <td className="total-col text-center" >{product.total || accounting.formatNumber(product.price, 0, ".", ",")}</td>
                        <td className="remove-col">
                          <button className="btn btn-sm btn-outline-danger me-1" onClick={() => removeProduct(index)}>
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className='row'>
                  <div className='py-2 col-md-4'>
                    {/* <td className="text-center">
                      <input type="checkbox" className='me-2' />
                      Chọn tất cả
                    </td> */}
                  </div>
                  <div className='py-2 col-md-5'>

                  </div>
                  <div className='my-2 col-md-3' style={{ paddingLeft: 100, paddingBottom: 15 }}>
                    <button className='btn btn-sm btn-success me-1 ' style={{ width: 150, height: 40 }}>Thanh Toán</button>
                  </div>
                </div>
              </div>
              {/* End .col-lg-9 */}
              <aside className="col-lg-3">
                {/* ... */}
              </aside>
              {/* End .col-lg-3 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .cart */}
      </div>
    </>
  );
}

export default Cart;