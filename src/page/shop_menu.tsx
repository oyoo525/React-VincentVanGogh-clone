import React from "react";
import './shop_menu.css';
import { useNavigate, useParams } from "react-router-dom";
import Shop_nav from "../temp/Shop_nav.tsx";
import Footer from "../temp/footer/Footer.tsx";
import ImageBox from "../components/image_box/ImageBox.tsx";
import Header from "../temp/header/Header.tsx";
import Product from "./web_site/Product.tsx";

export default function ShopMenu() {
	const param = useParams();
	const paramType = param.type;
	const paramList = param.list;
	const navi = useNavigate();

	const [isMenuOpen, setIsMenuOpen] = React.useState(false);


	const bookItem = [
		{
			title : "All books",
			image : "boeken_header_1.jpg"
		},
		{
			title : "Van Gogh Museum masterpieces",
			image : "meesterwerken-banner-geel-3.jpg"
		},
		{
			title : "Van Gogh Museum guide",
			image : "museumguide_header-1.jpg"
		},
		{
			title : "Van Gogh & his letters",
			image : "329469-alifeinletters.jpg"
		},
		{
			title : "Van Gogh life story",
			image : "atlas3.jpg"
		},
		{
			title : "Van Gogh & his time",
			image : "in+the+picture_banner_2500x1200.jpg"
		},
		{
			title : "Van Gogh art",
			image : "323818-3.jpg"
		},
		{
			title : "Van Gogh Museum research",
			image : "in_focus.jpg"
		},
		{
			title : "Van Gogh Museum publications",
			image : "328004-3.jpg"
		},
		{
			title : "Children books",
			image : "325003-4.jpg"
		},
		{
			title : "Diaries & calenders",
			image : "492354-3.jpg"
		},
		{
			title : "Bookmarks",
			image : "681208-1.jpg"
		}
	];

	const printItem = [
		{
			title : "Printing on demand - the masterpieces",
			image : "pod_amandelbloesem_header.jpg"
		},
		{
			title : "Van Gogh postcards",
			image : "filigraincards-banner-1.jpg"
		},
		{
			title : "Prints on paper",
			image : "Overzicht-prints100.jpg"
		},
		{
			title : "Canvases",
			image : "sfeer-schilderijen-nieuw.jpg"
		},
		{
			title : "IXXI",
			image : "290103-1.jpg"
		},
		{
			title : "Wallpaper",
			image : "behang-3.jpg"
		},
		{
			title : "The Skateroom x Van Gogh Museum collection",
			image : "skateboards_header-1.jpg"
		},
		{
			title : "Facsimile: drawings",
			image : "697087-2.jpg"
		}
	];
	const jewelryItem = [
		{
			title : "All Jewerly",
			image : "ellen_beekmans_banner_3.jpg"
		},
		{
			title : "Fine jewelry",
			image : "gassan-banner-4.jpg"
		},
		{
			title : "Necklaces",
			image : "601749-4.jpg"
		},
		{
			title : "Earrings",
			image : "676846-2.jpg"
		},
		{
			title : "Bracelets",
			image : "601350-2.jpg"
		},
		{
			title : "Rings",
			image : "682625-3.jpg"
		},
		{
			title : "Watches",
			image : "699623-1.jpg"
		},
		{
			title : "Pins & buttons",
			image : "699593-2.jpg"
		}
	];

	const all_books = [
		{
			image01 : "331318-1.jpg",
			image02 : "331318-2.jpg",
			name : "Matthew Wong | Vincent van Gogh: Painting as a Last",
			shot_description : "NEW CATALOGUE",
			price : 27.48
		},
		{
			image01 : "330809-1.jpg",
			image02 : "330793-3b.jpg",
			name : "Van Gogh in Auvers-sur-Oise: His Final Months",
			shot_description : "A COMPREHENSIVE OVERVIEW",
			price : 32.06
		},
	];


	return (
		<div className="shop_menu bg_color01">
			<div className="header_box">
				<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} color="yellow"/>
			</div>
			<nav className="bg_color00">
				<Shop_nav />
			</nav>
			<div className="path_box">
				<ul>
					<li onClick={() => navi('/')}><span>HOME</span></li>
					<li>/</li>
					<li><span>{paramType}</span></li>
					<li>/</li>
					<li>category {paramType}</li>
				</ul>
			</div>
			<div className="shop_menu_nav">
				{paramType === 'books' && paramList == null && bookItem.map((data) => 
					<div onClick={()=> navi(`/shop/books/${data.title}`)} >
						<ImageBox key={data.title} data={data} />
					</div>)}
				{paramType === 'books' && paramList === 'All books' && all_books.map((data) => <Product key={data.name} data={data}/>)}

				
				{paramType === 'prints' && paramList == null && printItem.map((data) => <ImageBox data={data} />)}
				{paramType === 'jewelry' && paramList == null && jewelryItem.map((data) => <ImageBox data={data} />)}	
			</div>
			<Footer />
		</div>
	)
}