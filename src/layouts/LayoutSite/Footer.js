import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {

	render() {
		return (
			<footer className='section-footer  bg-danger py-3'>
				<div class="container ">
					<section class="footer-top padding-y-lg text-white">
						<div class="row ">
							<aside class="col-md col-6">
								<h6 class="title">Liên hệ PETSMART </h6>
								<hr></hr>
								<ul class="list-unstyled text-white ">
									<li> Trụ Sở: 40/2,đường 147, p.Phước Long B TP.Thủ Đức.</li>
									<li> Holine:0914882582</li>
									<li> Webste:@gmailc.cpm</li>
									<li> Email:nguyenvitan@gamilcom</li>
								</ul>
							</aside>
							<aside class="col-md col-6">
								<h6 class="title">PETSMART </h6>
								<hr></hr>
								<ul class="list-unstyled">
								<li> <a href="/thongtin "class="text-white">Gioi thiệu</a></li>
									<li> Liên hệ nghề nghiệp</li>
									<li> Hợp tác nhân giống</li>
									<li> Cửa hàng phụ kiện</li>
									
								</ul>
							</aside>
							<aside class="col-md col-6">
							<h6> Truyền thông</h6>
								<hr></hr>
								<ul class="list-unstyled">
								    <li> <a href="/chinhsach "class="text-white">Chính sách mua hàng</a></li>
									<li> Mua trả góp </li>
									<li> Bảo hành đổi trả</li>
									<li>Giao nhận thanh toán</li>
									<li> Chính sách bảo mật</li>
									<li> <a href="/pages/tin-tuc "class="text-white">Tất cả bài viết</a></li>
								</ul>
							</aside>
							<aside class="col-md col-6">
								<h6 class="title">Tài khoản</h6>
								<ul class="list-unstyled">
									<li> <a  className='text-white' href="/login"> Đăng nhập </a></li>
									<li> <a  className='text-white' href="/register "> Đăng ký </a></li>
									<li> Cài đặt </li>
									<li> <a className='text-white' href="/cart "> Giỏ hàng </a></li>
								</ul>
							</aside>
							<aside class="col-md">
								<h6 class="title">Kết nối thanh toán</h6>
								<ul class="list-unstyled">
									<li><a className='text-white' href="https://www.facebook.com/"> <i class="fab fa-facebook"></i> Facebook </a></li>
									<li> <i class="fab fa-twitter text-white"></i> Twitter </li>
									<li><i class="fab fa-instagram"></i> Instagram </li>
									<li><a className='text-white' href="https://www.youtube.com/"> <i class="fab fa-youtube"></i> Youtube </a></li>
								</ul>
							</aside>
						</div>
					</section>

				
				</div>
			</footer>
		);
	}
}
export default Footer;