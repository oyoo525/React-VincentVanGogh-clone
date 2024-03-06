import React, { useEffect } from "react";
import './productDetail.css';
import { useParams } from "react-router-dom";
import M_image from '../image/origamo+x+vgm+-+logo.png';
import Shop_nav from "../temp/Shop_nav.tsx";
import Product from "./web_site/Product.tsx";
import Footer from "../temp/footer/Footer.tsx";
import Header from "../temp/header/Header.tsx";

export default function ProductDetail() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const param = useParams();
	const no = param.no;
	// param으로 데이터 가져오기

	const product_data01 = {
		no : 633276,
		name : "Origamo x Van Gogh Museum 3D Pop-Up Card Sunflowers mini",
		category : "prints",
		sub_category : "postcards",
		price : 10.66,
		brand : "Origamo x Van Gogh Museum",
		length : "19.5 cm",
		width : "14 cm",
		material : "FSC certified paper",
		image01 : "633276-1.jpg",
		image02 : "633276-3.jpg",
		description : "Vincent painted this later version of the Sunflowers in 1889 as a gift to his friend Paul Gauguin.",
		specs : "Handmade from Italian FSC certified paper that has been recycled or is from regenerated forests, in studios that guarantee fairtrade working conditions. Your purchase supports the Christina Noble Children’s Foundation."
	}

	function history_back() {
		window.history.back();
	}

	useEffect(() => {
		window.scrollTo(0,0);
	}, []);

	return (
		<div className="product_detail bg_color01">
				<div className="header_box">
				<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} color="yellow"/>
			</div>
			<nav className="bg_color00">
				<Shop_nav />
			</nav>
			<div className="path_box">
				<nav>
					<ul>
						<li><span>HOME</span></li>
						<li>/</li>
						<li><span>{product_data01.category}</span></li>
						<li>/</li>
						<li><span>{product_data01.sub_category}</span></li>
						<li>/</li>
						<li>{product_data01.name}</li>
					</ul>
				</nav>
				<div className="history_back_btn" onClick={history_back}>
					<span>Back to previous page</span>
				</div>
			</div>
			<div className="content_info">
				<div className="data_info">
					<div className="mini_image_box">
						<div className="image_wrap">
							<img src={"/image/" + product_data01.image01} />
						</div>
						<div className="image_wrap">
							<img src={"/image/" + product_data01.image02} />
						</div>
					</div>
					<div className="image_box">
						<div className="image_wrap">
							<img src={"/image/" + product_data01.image01} />
						</div>
					</div>
					<div className="data_detail">
						<h1>{product_data01.name}</h1>
						<span>€ {product_data01.price}</span>
						<hr />
						<ul>
							<li><i className="bi bi-check-lg"></i>&nbsp;Your purchase supports the work of the Van Gogh Museum</li>
							<li><i className="bi bi-check-lg"></i>&nbsp;Official webstore Van Gogh Museum</li>
							<li><i className="bi bi-check-lg"></i>&nbsp;Worldwide delivery</li>
							<li><i className="bi bi-check-lg"></i>&nbsp;Secure payment</li>
						</ul>
						<div className="add_cart">
							<input type="number" min={0} max={99} placeholder="0"/>
							<div className="black_btn">
								<span>In shopping cart</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="content_info_detail">
				<div className="detail_left">
					<h4>Description</h4>
					<p>Spread joy with this unique handmade pop-up greeting card featuring Van Gogh's flowers! This three-dimensional paper bouquet is sure to dazzle and delight your loved ones.</p>
					<p>{product_data01.description}</p>
				</div>
				<div className="detail_right">
					<h4>Specs</h4>
					<p>{product_data01.specs}</p>
					<dl>
						<dt>Article number:</dt>
						<dd>{product_data01.no}</dd>
						<dt>Brand:</dt>
						<dd>{product_data01.brand}</dd>
						<dt>Length:</dt>
						<dd>{product_data01.length}</dd>
						<dt>Width:</dt>
						<dd>{product_data01.width}</dd>
						<dt>Material:</dt>
						<dd>{product_data01.material}</dd>
						<dd>
							<img src={M_image} />
						</dd>
					</dl>
				</div>
			</div>
			<div className="other_product">
				<h4>Related products</h4>
				<div className="product_wrap">
					<Product data={product_data01}/>
					<Product data={product_data01}/>
				</div>
			</div>
			<nav className="footer_box">
				<Footer />
			</nav>
		</div>
	)
}