import React from "react";
import './header.css';
import $ from 'jquery';
import { useNavigate } from "react-router-dom";
import Menu01, { Menu02, Menu03, Menu04, Menu05 } from "../../page/Menu.tsx";


export default function Header({isMenuOpen, setIsMenuOpen, color}) {
	const navigator = useNavigate();
	
	// 헤더 메뉴
	const [menuOption, setMenuOption] = React.useState("");
	// 검색아이콘 클릭시 헤더 숨기기용
	const [isHeaderOpen, setIsHeaderOpen] = React.useState(true);	
	// 헤더 색상
	const [backColorRGB, setBackColorRGB] = React.useState("");
	React.useEffect(() => {
		if(color === 'yellow') {
			setBackColorRGB('rgb(255,206,1)');
		}
	})


	function HomeOrigin() {
		$('body, html').animate({
			ScrollLeft : 0
		});
		$(':root').css(
			'background-color', 'rgb(255, 206, 1)'
		);
	}

	const moveHome = () => {
		navigator('/');
		setIsMenuOpen(false);
		HomeOrigin();
	}
	const moveShop = () => {
		navigator('/shop');
		setIsMenuOpen(false);
	}
	const openMenu01 = () => {
		if(isMenuOpen && menuOption === 'ticket') {
			setIsMenuOpen(false);
		} else {
			setIsMenuOpen(true); 
			setMenuOption("ticket")
		}
	}
	const openMenu02 = () => {
		if(isMenuOpen && menuOption === 'art') {
			setIsMenuOpen(false);
		} else {
			setIsMenuOpen(true); 
			setMenuOption("art")
		}
	}
	const openMenu03 = () => {
		if(isMenuOpen && menuOption === 'about') {
			setIsMenuOpen(false);
		} else {
			setIsMenuOpen(true); 
			setMenuOption("about")
		}
	}
	const openMenu04 = () => {
		if(isMenuOpen && menuOption === 'lang') {
			setIsMenuOpen(false);
		} else {
			setIsMenuOpen(true); 
			setMenuOption("lang")
		}
	}
	const openMenu05 = () => {
		if(isMenuOpen && menuOption === 'search') {
			setIsMenuOpen(false);
			setIsHeaderOpen(true);
		} else {
			setIsMenuOpen(true); 
			setMenuOption("search")
			setIsHeaderOpen(false);
		}
	}
	
	return (
		<>
			<div className="header" style={{ backgroundColor : backColorRGB }}>
				{isHeaderOpen && (
					<nav className="header_nav">
						<ul>
							<li onClick={moveHome}><span className="move_underline">Home</span></li>
							<li onClick={openMenu01}><span className="move_underline">Tickets & Visit</span></li>
							<li onClick={openMenu02}><span className="move_underline">Art & Stories</span></li>
							<li onClick={openMenu03}><span className="move_underline">About</span></li>
							<li onClick={moveShop}><span className="move_underline">Shop</span></li>
							<li onClick={openMenu04}><span className="move_underline">NL | EN</span></li>
							<li onClick={openMenu05}>
								<button>
									<span><i className="bi bi-search"></i></span>
								</button>
							</li>
						</ul>
					</nav>
				)}
				<div className="header_menu_wrap">
					{isMenuOpen && menuOption === 'ticket' && <Menu01 setIsMenuOpen={setIsMenuOpen} />}
					{isMenuOpen && menuOption === 'art' && <Menu02 setIsMenuOpen={setIsMenuOpen} />}
					{isMenuOpen && menuOption === 'about' && <Menu03 setIsMenuOpen={setIsMenuOpen} />}
					{isMenuOpen && menuOption === 'lang' && <Menu04 setIsMenuOpen={setIsMenuOpen} />}
					{isMenuOpen && menuOption === 'search' && <Menu05 setIsHeaderOpen={setIsHeaderOpen} setIsMenuOpen={setIsMenuOpen} />}
				</div>
			</div>
		</>
	)
}