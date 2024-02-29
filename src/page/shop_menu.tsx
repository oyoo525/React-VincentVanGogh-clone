import React from "react";
import './shop_menu.css';
import { useNavigate, useParams } from "react-router-dom";
import Shop_nav from "../temp/Shop_nav.tsx";
import Footer from "../temp/footer/Footer.tsx";
import ImageBox from "../components/image_box/ImageBox.tsx";

export default function ShopMenu() {
	const param = useParams();
	const paramName = param.type;

	const navi = useNavigate();

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
			title : "Printing on demand - the masterpiecesPrinting on demand - the masterpieces",
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

	return (
		<div className="container shop_menu bg_color01">
			<nav className="bg_color00">
				<Shop_nav />
			</nav>
			<div className="path_box">
				<ul>
					<li onClick={() => navi('/')}><span>HOME</span></li>
					<li>/</li>
					<li><span>{paramName}</span></li>
					<li>/</li>
					<li>category {paramName}</li>
				</ul>
			</div>
			<div className="shop_menu_nav">
				{paramName === 'books' && bookItem.map((data) => <ImageBox data={data} />)}
				{paramName === 'prints' && printItem.map((data) => <ImageBox data={data} />)}
			</div>
			<Footer />
		</div>
	)
}