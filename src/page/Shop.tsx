import React from "react";
import './shop.css';
import Shop_nav from "../temp/Shop_nav.tsx";
import video01 from '../video/9b39eb11-32f6501c.mp4';
import Shop_adver from "./web_site/Shop_add.tsx";
import Product from "./web_site/Product.tsx";
import ImageBox from "../components/image_box/ImageBox.tsx";

export default function Shop() {
	const mainImage = {
		title : "Eastpak X Van Gogh Museum",
		image : "sunflowers_eastpak_16x7_2.jpg"
	}

	const product_data01 = [
		{
			no : 633276,
			name : "Origamo x Van Gogh Museum 3D Pop-Up Card Sunflowers mini",
			price : 10.66,
			image01 : "633276-1.jpg",
			image02 : "633276-3.jpg",
		},
		{
			no : 633245,
			name : "Origamo x Van Gogh Museum 3D Pop-Up Card Flower Bouquet large",
			price : 16.45,
			image01 : "633245-1.jpg",
			image02 : "633245-2.jpg"
		},
		{
			no : 633252,
			name : "Origamo x Van Gogh Museum 3D Pop-Up Card Flower Bouquet mini",
			price : 10.66,
			image01 : "633252-1.jpg",
			image02 : "633252-3.jpg"
		},
		{
			no : 633320,
			name : "Origamo x Van Gogh Museum Filigree Greeting Card Almond Blossom",
			price : 8.68,
			image01 : "633320-1.jpg",
			image02 : "633320-1.jpg"
		}
	];

	const product_data02 = [
		{
			no : 607635,
			name : "Van Gogh Watch The Potato Eaters black, by Tord Boontje®",
			price : 99.13,
			image01 : "683196-1.jpg",
			image02 : "683196-2.jpg",
		},
		{
			no : 605457,
			name : "PLAYMOBIL | Sunflowers",
			price : 5.74,
			image01 : "605457-01.jpg",
			image02 : "605457-03.jpg"
		},
		{
			no : 669749,
			name : "Van Gogh Silk scarf Almond Blossom",
			price : 45.41,
			image01 : "669749-1.jpg",
			image02 : "669749-2.jpg"
		},
		{
			no : 693737,
			name : "Van Gogh Vincent doll",
			price : 28.88,
			image01 : "693737-1.jpg",
			image02 : "693737-gift.jpg"
		}
	];

	const video_data = {
		title : "Moleskine x Van Gogh Museum",
		script : "There is creativity in all of us. The Moleskine x Van Gogh Museum collection of premium notebooks offers a blank canvas from which to explore and express your own creativity. Be like Van Gogh; we encourage you to be relentlessly passionate in the search for your own uniqueness. <br/><br/> ‘The creative power can't be held back, what one feels must come out’ Vincent van Gogh to his brother Theo, 3 June 1883"
	}

	const image_data = [
		{
			title : "A Van Gogh at home - order a custom print",
			image : "pod-amandelbloesem-theobert.jpg"
		},
		{
			title : "Gifts inspired by Almond Blossom",
			image : "amandelbloesem-header_groen-3.jpg"
		},
		{
			title : "Gifts inspired by Sunflowers",
			image : "moederdag-header-webshop-2.jpg"
		}
	];
	
	return (
		<div className="shop bg_color01">
			<nav className="bg_color00">
				<Shop_nav />
			</nav>
			<section className="shop_main_product_wrap">
				<img src={"/image/" + mainImage.image} />
				<div className="product_title">
					<h2>{mainImage.title}</h2>
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
							{product_data01.map((data) => <Product data={data} />)}
						</div>
						<div className="introduction_box bg_color00">
							<div className="intro_text">
								<h4>{video_data.title}</h4>
								<p>{video_data.script}</p>
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
							{product_data02.map((data) => <Product data={data} />)}
						</div>
						<div className="plus_product">
							{image_data.map((data) => <ImageBox data={data} />)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}