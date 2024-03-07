import React from "react";
import './cart_product.css';

export default function CartProduct(props) {

	return (
		<div className="cart_product">
			<div className="image_box">
				<img src={'/image/' + props.data.image}  />
			</div>
			<div className="cart_product_title">
				<h5>{props.data.name}</h5>
			</div>
			<div className="cart_product_amount">
				<div className="amount_btn">
					<button>-</button>
					<input type="number" value={props.data.amount} readOnly min={1} max={99}/>
					<button>+</button>
				</div>
				<div className="delete_btn">
					<i className="bi bi-trash3-fill"></i> Remove
				</div>
			</div>
			<div className="cart_product_price">
				<p>€ {props.data.price}</p>
			</div>
		</div>
	)
}