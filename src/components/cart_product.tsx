import React from "react";
import './cart_product.css';

export default function CartProduct(props) {
	return (
		<div className="cart_product">
			<div className="image_box">
				<img src=""  />
			</div>
			<div className="cart_product_title">
				<h5>name</h5>
			</div>
			<div className="cart_product_amount">
				<div>
					<button>-</button>
					<input type="number" />
					<button>+</button>
				</div>
				<div className="delete_btn">
					<i className="bi bi-trash3-fill"></i> Remove
				</div>
			</div>
			<div className="cart_product_price">
				<p>price</p>
			</div>
		</div>
	)
}