import React from "react";
import './card.css';
import Arrow_Right from "../icon/Arrow.tsx";

export default function Card({data}) {
	return (
		<div className="card arrow_box">
			<div className="image_box">
				<img src={"/image/" + data.image} />
			</div>
			<div className="text_box">
				{data.category && (<p className="card_category">{data.category}</p>)}
				<p className="card_title">{data.title} <Arrow_Right /></p>
				{data.sub_title && (<p className="card_sub_title">{data.sub_title}</p>)}
				<p className="card_discript">{data.discript.split('|n').map((paragraph, index) => 
					<React.Fragment key={index}>
						{paragraph}
						{index > 0 && <br/>}
					</React.Fragment>
				)}</p>
			</div>
		</div>
	)
}