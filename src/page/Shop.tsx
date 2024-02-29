import React from "react";
import './shop.css';
import Shop_nav from "../temp/Shop_nav.tsx";
import img01 from '../image/sunflowers_eastpak_16x7_2.jpg';
import img02 from '../image/pod-amandelbloesem-theobert.jpg';
import video01 from '../video/9b39eb11-32f6501c.mp4';


import Shop_adver from "./web_site/Shop_add.tsx";
import Product from "./web_site/Product.tsx";

export default function Shop() {

	const product_data01 = {
		no : 633276,
		name : "Origamo x Van Gogh Museum 3D Pop-Up Card Sunflowers mini",
		price : 10.66,
		image01 : "633276-1.jpg",
		image02 : "633276-3.jpg",
	}
	
	return (
		<div className="shop bg_color01">
			<nav className="bg_color00">
				<Shop_nav />
			</nav>
			<section className="shop_main_product_wrap">
				<img src={img01} />
				<div className="product_title">
					<h2>Eastpak X Van Gogh Museum</h2>
					<div className="black_btn">
						<span>Shop the collection</span>&nbsp;
						<i className="bi bi-chevron-right"></i>
					</div>
				</div>
			</section>
			<div className="shop_content">
				<div className="side_left">
					<Shop_adver bg_color="bg_color02" />
					<Shop_adver bg_color="bg_color00" />
					<Shop_adver bg_color="bg_color02" />
					<Shop_adver bg_color="bg_color00" />
				</div>
				<div className="content">
					<div className="content_wrap">
						<h2>Highlighted :</h2>
						<div className="product_box">
							<Product data={product_data01} />
							<Product data={product_data01} />
							<Product data={product_data01} />
							<Product data={product_data01} />
						</div>
						<div className="introduction_box bg_color00">
							<div className="intro_text">
								<h4>Moleskine x Van Gogh Museum</h4>
								<p>
								There is creativity in all of us. The Moleskine x Van Gogh Museum collection of premium notebooks offers a blank canvas from which to explore and express your own creativity. Be like Van Gogh; we encourage you to be relentlessly passionate in the search for your own uniqueness.
								<br/><br/>
								‘The creative power can't be held back, what one feels must come out’ 
								Vincent van Gogh to his brother Theo, 3 June 1883
								</p>
								<div className="black_btn">
									<span>Discover</span>
								</div>
							</div>
							<div>
								<video autoPlay loop muted playsInline>
									<source src={video01} type="video/mp4" />
								</video>
							</div>
						</div>
						<h2>Favourites :</h2>
						<div className="product_box">
							<Product data={product_data01} />
							<Product data={product_data01} />
							<Product data={product_data01} />
							<Product data={product_data01} />
						</div>
						<div className="plus_product">
							<div className="image_box">
								<img src={img02} />
								<div className="image_title">
									<span>A Van Gogh at home - order a custom print</span>
								</div>
							</div>
							<div className="flex_box">
								<div className="image_box">
									<img src={img02} />
									<div className="image_title">
										<span>A Van Gogh at home - order a custom print</span>
									</div>
								</div>
								<div className="image_box">
									<img src={img02} />
									<div className="image_title">
										<span>A Van Gogh at home - order a custom print</span>
									</div>
								</div>
							</div>
						</div>



					</div>
				</div>
			</div>
		</div>
	)
}