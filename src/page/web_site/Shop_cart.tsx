import React, { useEffect } from "react";
import './shop_cart.css';
import Shop_nav from "../../temp/Shop_nav.tsx";
import { useNavigate } from "react-router-dom";
import Header from "../../temp/header/Header.tsx";
import Footer from "../../temp/footer/Footer.tsx";
import CartProduct from "../../components/cart_product.tsx";

export default function ShopCart() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const navi = useNavigate();
	const [isEmpty, setIsEmtpy] = React.useState(false);

	const cart_order = [
		{
			image : "633276-1.jpg",
			name : "Origamo x Van Gogh Museum 3D Pop-Up Card Sunflowers mini",
			amount : 10,
			price : 10.66
		},
		{
			image : "683196-1.jpg",
			name : "Van Gogh Watch The Potato Eaters black, by Tord Boontje®",
			amount : 1,
			price : 99.13
		},
	];

	const [totalPrice, setTotalPrice] = React.useState<number>(0);
	let total_price : number = 0;
	for(let i=0; i<cart_order.length; i++) {
		total_price += cart_order[i].price;
	}
	useEffect(() => {
		setTotalPrice(parseFloat(total_price.toFixed(2)));
	}, [cart_order]);


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
				<div className="step_01">
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
					{!isEmpty && (
					<>
						<div className="cart_products">
							{cart_order.map((data) => <CartProduct data={data} />)}
						</div>
						<div className="total_price_box">
							<div className="left_box">
								<p>Express shipping to Japan (change country)</p>
								<p>Insert gift coupon</p>
							</div>
							<div className="right_box">
								<dl>Shoppoing fee</dl>
								<dt>€ 26.00</dt>
								<dl className="total">Total</dl>
								<dt className="total">€ {totalPrice}</dt>
								<div></div>
								<div>
									<div className="black_btn">
										<span>NEXT <i className="bi bi-chevron-right"></i></span>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
				</div>
			</div>
			<div className="adver_box">
				<div className="donate_box bg_color00">
					<h3>Donate to the Van Gogh Museum</h3>
					<p>Your purchase supports the work of the Van Gogh Museum.</p>
					<div className="btn_box">
						<div className="black_btn">
							<span>Donate € 15.00</span>
						</div>
						<div className="black_btn">
							<span>Donate € 25.00</span>
						</div>
						<div className="black_btn">
							<span>Donate € 50.00</span>
						</div>
					</div>
					<p>Click on a button to add the donation to your order.</p>
				</div>
			</div>
			<Footer />
		</div>
	)
}