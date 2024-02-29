import React from "react";
import './menu.css';

export default function Menu01() {
	return (
		<div className="menu menu_tickets">
			<div className="menu_wrap">
				<h1 className="menu_title">Tickets & Visit</h1>
				<hr />
				<div className="menu_flex">
					<div>
						<section>
							<ul className="menu_main">
								<li>Tickets and Ticket Prices</li>
								<li>Address and Opening Hours</li>
								<li>What's On</li>
								<li>Exhibitions</li>
								<li>Grop and School Visits</li>
								<li>Museum Shops, Cafe and More</li>
								<li></li>
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


export function Menu02() {
	return (
		<div className="menu menu_collection">
			<div className="menu_wrap">
				<h1 className="menu_title">Art & Stories</h1>
				<hr />
				<div className="menu_flex">
					<div>
						<section>
							<ul className="menu_main">
								<li>Art</li>
								<li>Search the Collection</li>
								<li>The Life of Vincent van Gogh</li>
								<li>Van Gogh Stroies</li>
								<li>Vincent van Gogh for Children</li>
								<li>Research</li>
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

export function Menu03() {
	return (
		<div className="menu menu_about">
			<div className="menu_wrap">
				<h1 className="menu_title">About</h1>
				<hr />
				<div className="menu_flex">
					<div>
						<section>
							<ul className="menu_main">
								<li>Partners and Collaborations</li>
								<li>Support the Museum</li>
								<li>News and Press</li>
								<li>Knowledge and Research</li>
								<li>Organisation</li>
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

export function Menu04() {
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
								<li>Planen Sie Ihren Besuch</li>
								<li>Programmz votre visite</li>
								<li>Prepara la tua visita</li>
								<li>Planifica tu visita</li>
								<li>Planeje sua visita</li>
								<li>방문계획</li>
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