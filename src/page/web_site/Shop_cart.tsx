import React from "react";
import './shop_cart.css';
import Shop_nav from "../../temp/Shop_nav.tsx";
import { useNavigate } from "react-router-dom";

export default function ShopCart() {
	const navi = useNavigate();

	return (
		<div className="container shop_cart bg_color01">
			<nav className="bg_color00">
				<Shop_nav />
			</nav>
			<div className="path_box">
				<ul>
					<li onClick={() => navi('/')}><span>HOME</span></li>
				</ul>
			</div>
			<div className="process_box">
				
			</div>
		</div>
	)
}