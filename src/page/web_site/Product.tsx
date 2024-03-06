import React from "react";
import './product.css';
import { useNavigate } from "react-router-dom";

export default function Product(props) {

	const navigator = useNavigate();
	const moveDetail = () => {
		navigator(`/productDetail/${props.data.no}`);
	}


	return (
		<div className="product_item" onClick={moveDetail}>
			<div className="image_box">
				<img src={"/image/" + props.data.image01} className="image01" />
				<img src={"/image/" + props.data.image02} className="image02" />
			</div>
			<h3>{props.data.name}</h3>
			<p>{props.data.shot_description}</p>
			<span>€ {props.data.price}</span>
	</div>
	)
}