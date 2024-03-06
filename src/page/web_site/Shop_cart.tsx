import React from "react";
import './shop_cart.css';
import Shop_nav from "../../temp/Shop_nav.tsx";
import { useNavigate } from "react-router-dom";
import Header from "../../temp/header/Header.tsx";
import CartProduct from "../../components/cart_product.tsx";

export default function ShopCart() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const navi = useNavigate();
	const [isEmpty, setIsEmtpy] = React.useState(true);

	const cart_order = [
		{
			image : "",
			name : "",
			amount : 0,
			price : 0
		},
		{
			image : "",
			name : "",
			amount : 0,
			price : 0
		},
	];


	return (
		<div className="shop_cart bg_color01">
			<div className="header_box">
				<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} color='yellow' />
			</div>
			<nav className="bg_color00">
				<Shop_nav />
			</nav>
			<div className="path_box">
				<ul>
					<li onClick={() => navi('/')}><span>HOME</span></li>
				</ul>
			</div>
			<div className="process_box">
				<div>
					<i className="bi bi-1-circle"></i>Shopping cart
				</div>
				<div>
					<i className="bi bi-2-circle"></i>Log in
				</div>
				<div>
					<i className="bi bi-3-circle"></i>Your details
				</div>
				<div>
					<i className="bi bi-4-circle"></i>Payment
				</div>
				<div>
					<i className="bi bi-5-circle"></i>Confirm
				</div>
			</div>
			<div className="your_cart">
				<div>
					<h4>Products in your shopping cart</h4>
					{isEmpty && (
						<p className="empty_cart">You currently do not have any products in your shopping cart.</p>
					)}
					
					<div className="cart_products">
						{cart_order.map((data) => <CartProduct data={data} />)}
					</div>

				</div>
	

			</div>
			<div className="donate_box bg_color00">
				<h3>Donate to the Van Gogh Museum</h3>
				<p>Your purchase supports the work of the Van Gogh Museum.</p>
				<div className="black_btn">
					<span>Donate € 15.00</span>
				</div>
				<div className="black_btn">
					<span>Donate € 25.00</span>
				</div>
				<div className="black_btn">
					<span>Donate € 50.00</span>
				</div>
				<p>Click on a button to add the donation to your order.</p>
			</div>
		</div>
	)
}