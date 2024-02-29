import React from "react";
import './shop_nav.css';
import { useNavigate } from "react-router-dom";

export default function Shop_nav() {
	const navigator = useNavigate();

	const navi = (param) => {
		navigator(`/shop/${param}`);
	}

	return (
		<div className="shop_nav">
			<ul>
				<li onClick={() => navi('books')}><span className="move_underline">Books</span></li>
				<li onClick={() => navi('prints')}><span className="move_underline">Prints</span></li>
				<li onClick={() => navi('jewelry')}><span className="move_underline">Jewelry</span></li>
				<li onClick={() => navi('fashion')}><span className="move_underline">Fashion</span></li>
				<li onClick={() => navi('cooking')}><span className="move_underline">Cooking & Dining</span></li>
				<li onClick={() => navi('living')}><span className="move_underline">Living</span></li>
				<li onClick={() => navi('gifts')}><span className="move_underline">Gifts</span></li>
				<li onClick={() => navigator('/shop_cart')}>
					<button>
						<i className="bi bi-cart"></i>
						<span>0</span>
					</button>
				</li>
			</ul>
		</div>
	)
}