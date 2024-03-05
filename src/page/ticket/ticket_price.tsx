import React from "react";
import './ticket_price.css';
import Arrow_Right from "../../icon/Arrow.tsx";
import Card from "../../components/Card.tsx";

export default function TicketPrice() {
	const card_data = {
		image : "b32db36b-cbf5-4eeb-b134-cb86e55765ea.webp",
		title : "Address and Opening Hours",
		discript : "Plan your route to the museum and view the opening hours."
	}

	const card_data02 = [
		{
			image : "98787ac7-6b6c-4909-9373-33ef39492806.webp",
			title : "Frequently Asked Questions about Your Museum Visit",
			discript : "Do you have a question about ordering an online ticket, using a discount card or would you like to know about the museum facilities? Find answers to some common questions to help you plan your visit to the Van Gogh Museum."
		},
		{
			image : "3b923688-2f29-44c1-94d7-09ae820321b1.webp",
			title : "Accessibility",
			discript : "The Van Gogh Museum is dedicated to ensuring accessibility for all of its visitors. Disabled visitors are offered priority entrance and have access to a range of facilities available at the museum."
		},
		{
			image : "08095b94-3ed6-4cf6-bf8e-a020ea6f1525.webp",
			title : "Calendar",
			discript : "See what's on when you plan to visit. View the calendar of exhibitions, activities and events."
		}
	];

	return (
		<div className="ticket_price">
			<div className="title_box">
				<h1>Tickets and Ticket Prices</h1>
				<p>
					Plan your visit to the Van Gogh Museum. All entrance tickets include
					admission to the permanent collection and the current temporary 
					exhibitions. Book your tickets in advance online.
				</p>
			</div>
			<div className="title_info">
				<div>
					<p>Ticket Prices</p>
					<p>€ 22 per person, free admission under 18 years old</p>
				</div>
				<div>
					<p>Discount Cards</p>
					<p>Please book your ticket with start time online</p>
				</div>
				<div className="arrow_box">
					<p>Book ticket <Arrow_Right /></p>
				</div>
			</div>
			<hr />
			<div className="content_info">
				<div className="left_box">
					<Card data={card_data} />
				</div>
				<div className="right_box">
					<p>
						Tickets are available online only. 
						At the Van Gogh Museum there are no exhibition fees. 
						All entrance tickets include admission to the permanent
							collection and the current temporary exhibitions. 
							All visitors need a ticket with a start time to have 
							access to the museum.
					</p>
					<p>
						Do you have a free entrance with a discount card? <br/>
						Please reserve your free ticket with start time online. <br/>
						Without start time you can't visit the museum. <br/>
					</p>
					<h3>
						Ticket prices:
					</h3>
					<ul>
						<li>Adults: € 22.</li>
						<li>Visitors under 18: free.</li>
						<li>Students: € 11 upon presentation of your (international) student card or proof of enrolment. <br/>
							The student ticket is only valid for visits from Monday to Friday, except for Dutch public holidays and school holidays.</li>
						<li>Museumkaart: free</li>
						<li>Vincent's Friends: free</li>
						<li>VriendenLoterij VIP-KAART free</li>
						<li>ICOM card: free</li>
						<li>Rembrandt card: free</li>
						<li>Stadspass holders: free</li>
					</ul>
					<h3>
						ICOM, Stadspas and discount cards
					</h3>
					<p>
						Students and visitors who are ICOM members, Stadspass holders, 
						VriendenLoterij VIP-KAART or Rembrandt card holders, 
						please order your tickets online.	
					</p>
					<p>
						Along with your e-ticket (as a print or on your smartphone or tablet), 
						your valid discount pass will be scanned at the entrance.
					</p>
					<h3>
						Direct access for friends and patrons							
					</h3>
					<p>
						Vincent's Friends and patrons of the Sunflower Circle, 
						Theo van Gogh Circle, Yellow House Circle and Corporate 
						Circle have direct access to the museum upon presentation of their pass. 
						They do not need to book a ticket with a start time.
					</p>
					<p className="arrow_box">
						<span>Find out how to become a patron <Arrow_Right /></span>
					</p>
					<h3>
						I amsterdam City Card (IACC)
					</h3>
					<p>
						As of 1 June 2022, the Van Gogh Museum is no longer 
						affiliated with the I amsterdam City Card. To visit the museum, 
						please book your time slot ticket via the Van Gogh Museum website.
					</p>
					<p className="arrow_box">
						<span>Book your ticket <Arrow_Right /></span>
					</p>
					<h3>
						Sunflower Lanyard	
					</h3>
					<p>
						Not all disabilities are visible. Wearing the Sunflower 
						Lanyard is an indication to our museum staff 
						that you may need additional support during your visit.
					</p>
					<p className="arrow_box">
						<span>More information for visitors with sensory sensitivity <Arrow_Right /></span>
					</p>
				</div>
			</div>
			<div className="card_box">
				{card_data02.map((data) => <Card data={data} />)}
			</div>
		</div>
	)
}