import React from "react";
import './imageBox.css';

export default function ImageBox(props) {

	return (
	<div className="image_box">
		<img src={"/image/" + props.data.image} />
		<div className="image_title">
			<span>{props.data.title}</span>
		</div>
	</div>	
	)
}