import React from "react";
import './visit.css';
import { useParams } from "react-router-dom";
import TicketPrice from "./ticket/ticket_price.tsx";
import WhatsOn from "./ticket/whats_on.tsx";
import Header from "../temp/header/Header.tsx";

export default function Visit() {
	const param = useParams();
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<div className="container visit bg_color00">
			<div className="header_box">
				<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} color="yellow"/>
			</div>
			{!isMenuOpen && (
				<>
				{param.page === 'ticket' && <TicketPrice />}
				{param.page === 'whats_on' && <WhatsOn />}
				</>
			)}
		</div>
	)
}