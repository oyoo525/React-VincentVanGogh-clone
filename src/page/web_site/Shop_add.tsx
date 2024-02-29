import React from "react";
import './shop_add.css';
import img01 from '../../image/bearbrick-50-1x1.jpg';

export default function Shop_adver({bg_color}) {
	return (
		<div className="add_wrap" style={
			bg_color === 'bg_color00' ? { backgroundColor: "rgb(255,206,1)"} :
			bg_color === 'bg_color02' ? {backgroundColor: "rgb(0,153,217)"} : {}
		}>
			<h2>BE@RBRICK<br/>limited edition</h2>
			<div>
				<div className="img_wrap">
					<img src={img01} />
				</div>
			</div>
			<p>Our latest BE@RBRICK pays<br/>tribute to Vincent's flowers.</p>
			<div className="black_btn">
				<span>Order now</span>
			</div>
		</div>
	)
}
