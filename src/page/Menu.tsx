import React from "react";
import './menu.css';
import { useNavigate } from "react-router-dom";

export default function Menu01({setIsMenuOpen}) {
	const navi = useNavigate();

	function moveOn(page) {
		navi(`/visit/${page}`);
		setIsMenuOpen(false);
	}

	return (
		<div className="menu menu_tickets">
			<div className="menu_wrap">
				<h1 className="menu_title">Tickets & Visit</h1>
				<hr />
				<div className="menu_flex">
					<div>
						<section>
							<ul className="menu_main">
								<li className="move_underline" onClick={() => moveOn('ticket')}>Tickets and Ticket Prices</li>
								<li className="move_underline">Address and Opening Hours</li>
								<li className="move_underline" onClick={() => moveOn('whats_on')}>What's On</li>
								<li className="move_underline">Exhibitions</li>
								<li className="move_underline">Grop and School Visits</li>
								<li className="move_underline">Museum Shops, Cafe and More</li>
							</ul>
							<hr />
							<ul className="menu_sub">
								<li>Contact</li>
								<li>Newsletter</li>
								<li>Privacy & Cookies</li>
							</ul>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}


export function Menu02({setIsMenuOpen}) {
	return (
		<div className="menu menu_collection">
			<div className="menu_wrap">
				<h1 className="menu_title">Art & Stories</h1>
				<hr />
				<div className="menu_flex">
					<div>
						<section>
							<ul className="menu_main">
								<li className="move_underline">Art</li>
								<li className="move_underline">Search the Collection</li>
								<li className="move_underline">The Life of Vincent van Gogh</li>
								<li className="move_underline">Van Gogh Stroies</li>
								<li className="move_underline">Vincent van Gogh for Children</li>
								<li className="move_underline">Research</li>
							</ul>
							<hr />
							<ul className="menu_sub">
								<li>Contact</li>
								<li>Newsletter</li>
								<li>Privacy & Cookies</li>
							</ul>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}

export function Menu03({setIsMenuOpen}) {
	return (
		<div className="menu menu_about">
			<div className="menu_wrap">
				<h1 className="menu_title">About</h1>
				<hr />
				<div className="menu_flex">
					<div>
						<section>
							<ul className="menu_main">
								<li className="move_underline">Partners and Collaborations</li>
								<li className="move_underline">Support the Museum</li>
								<li className="move_underline">News and Press</li>
								<li className="move_underline">Knowledge and Research</li>
								<li className="move_underline">Organisation</li>
							</ul>
							<hr />
							<ul className="menu_sub">
								<li>Contact</li>
								<li>Newsletter</li>
								<li>Privacy & Cookies</li>
							</ul>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}

export function Menu04({setIsMenuOpen}) {
	return (
		<div className="menu menu_lang">
			<div className="menu_wrap">
				<h1 className="menu_title">NL | EN</h1>
				<hr />
				<div className="menu_flex">
					<div className="lang_main">
						<h3>English</h3>
						<h3>Nederlands</h3>
					</div>
					<div>
						<section>
							<ul className="menu_main">
								<li className="move_underline">Planen Sie Ihren Besuch</li>
								<li className="move_underline">Programmz votre visite</li>
								<li className="move_underline">Prepara la tua visita</li>
								<li className="move_underline">Planifica tu visita</li>
								<li className="move_underline">Planeje sua visita</li>
								<li className="move_underline">방문계획</li>
							</ul>
							<hr />
							<ul className="menu_sub">
								<li>Contact</li>
								<li>Newsletter</li>
								<li>Privacy & Cookies</li>
							</ul>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}

export function Menu05({setIsHeaderOpen, setIsMenuOpen}) {
	const headerClose = () => {
		setIsMenuOpen(false);
		setIsHeaderOpen(true);
	}

	return (
		<div className="menu menu_about">
			<div className="menu_wrap">
				<form>
					<input type="text" placeholder="search" />
					<div className="icon_box">
						<span><i className="bi bi-search"></i></span>
						<span onClick={headerClose}><i className="bi bi-x-lg"></i></span>
					</div>
				</form>
				<hr />
			</div>
		</div>
	)
}