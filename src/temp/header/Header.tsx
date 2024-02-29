import React from "react";
import './header.css';
import { useNavigate } from "react-router-dom";
import Menu01, { Menu02, Menu03, Menu04, Menu05 } from "../../page/Menu.tsx";

export default function Header() {
	const navigator = useNavigate();
	
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [menuOption, setMenuOption] = React.useState("");
	const [isHeaderOpen, setIsHeaderOpen] = React.useState(true);
	
	const moveHome = () => {
		navigator('/');
		setIsMenuOpen(false);
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
			<div className="header">
				{isHeaderOpen && (
					<nav className="header_nav">
						<ul>
							<li onClick={moveHome}><span className="move_underline">Home</span></li>
							<li onClick={openMenu01}><span className="move_underline">Tickets & Visit</span></li>
							<li onClick={openMenu02}><span className="move_underline">Art & Stories</span></li>
							<li onClick={openMenu03}><span className="move_underline">About</span></li>
							<li onClick={moveShop}><span className="move_underline">Website</span></li>
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
					{isMenuOpen && menuOption === 'ticket' && <Menu01 />}
					{isMenuOpen && menuOption === 'art' && <Menu02 />}
					{isMenuOpen && menuOption === 'about' && <Menu03 />}
					{isMenuOpen && menuOption === 'lang' && <Menu04 />}
					{isMenuOpen && menuOption === 'search' && <Menu05 setIsHeaderOpen={setIsHeaderOpen} setIsMenuOpen={setIsMenuOpen} />}
				</div>
			</div>
		</>
	)
}