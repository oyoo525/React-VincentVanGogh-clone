import React from "react";
import './shop_nav.css';

export default function Shop_nav() {
	return (
		<div className="shop_nav">
			<ul>
				<li><span className="move_underline">Books</span></li>
				<li><span className="move_underline">Prints</span></li>
				<li><span className="move_underline">Jewelry</span></li>
				<li><span className="move_underline">Fashion</span></li>
				<li><span className="move_underline">Cooking & Dining</span></li>
				<li><span className="move_underline">Living</span></li>
				<li><span className="move_underline">Leisure</span></li>
				<li><span className="move_underline">Gifts</span></li>
				<li>
					<button>
						<i className="bi bi-cart"></i>
						<span>0</span>
					</button>
				</li>
			</ul>
		</div>
	)
}