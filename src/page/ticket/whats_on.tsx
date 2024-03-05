import React from "react";
import './whats_on.css';
import './whats_on.ts';
import Arrow_Right, { Arrow_Down } from "../../icon/Arrow.tsx";
import Card from "../../components/Card.tsx";

export default function WhatsOn() {
	const exhibitions_data = [
		{
			image : "3a0bfa47-14a3-4380-983d-8459429a1d8b.webp",
			category : "Permanent exhibition",
			title : "Van Gogh’s Masterpieces",
			sub_title : "Always on view",
			discript : "Almond Blossom, Sunflowers, The Bedroom and much more. Explore Vincent van Gogh’s masterpieces in the museum's permanent exhibition and get to know his ideas and ambitions."
		},
		{
			image : "026f24c5-b2a9-490c-a3e8-2029075417e7 (1).webp",
			title : "Matthew Wong | Vincent van Gogh",
			sub_title : "Now on view",
			discript : "Explore the dynamic, colourful work by the Chinese-Canadian artist Matthew Wong, and discover his artistic connection with Van Gogh."
		},
		{
			image : "default (2).webp",
			title : "Exhibition Landscapes of Sentiment",
			sub_title : "Now on view",
			discript : "Discover more than forty dreamlike landscapes from our print collection."
		}
	];

	const tours_data = [
		{
			image : "731429ce-2019-45dd-887a-5d5d022bd881.webp",
			title : "Guided Tours 'Matthew Wong | Vincent van Gogh'",
			discript : "Book a private guided tour of the exhibition or join a guided tour on the day."
		},
		{
			image : "e539b61c-8efa-4591-b264-049d717d22ee.webp",
			title : "Painting Workshops",
			discript : "Join a painting workshop and experiment with colour and perspective like Vincent van Gogh."
		},
		{
			image : "0f05cf57-1146-4bb0-ad5c-33ab433e86ee.webp",
			title : "Guided Tour Van Gogh’s Masterpieces",
			discript : "Make the most of your visit and book a 50-minute guided tour along Vincent van Gogh’s masterpieces."
		},
		{
			image : "639a2b6a-86bb-4c44-a1b3-38e0c15f5455.webp",
			title : "Family Guided Tour",
			discript : "Discover fascinating facts about Vincent van Gogh with the whole family!"
		},
		{
			"image": "a3e1fc09-1aa6-4416-b940-67a26e650342.webp",
			"title": "Vincent on Friday",
			"sub_title": "29 March 2024",
			"discript": "From 7 pm. |n|n|n Enjoy a unique evening full of live music, DJs, workshops, and more. The perfect start of your weekend!"
		}
	];

	const children_data = [
		{
			image : "f9dacfb4-4c6e-4ec5-b69e-82a372fd4abc.webp",
			title : "Children’s Workshops",
			discript : "Get creative with paint and brush! Fun painting workshops for children aged 6 to 12."
		},
		{
			image : "ec675ba7-2670-49a3-a576-757a36c921b2.webp",
			title : "Audio Guide for Families",
			discript : "Are you visiting the museum with children aged between 6 and 12? Pick up the family guide and experience Van Gogh together."
		},
		{
			image : "ef89a0d2-da6c-402f-afef-d34b63bef1f4.webp",
			title : "Treasure Hunt",
			discript : "Set off to explore Van Gogh’s paintings, answer the questions and complete the tasks in the Treasure Hunt sheet."
		},
		{
			image : "c7f204d9-6fed-4000-8c7e-3a7e5446b321.webp",
			title : "Van Gogh Checklist",
			discript : "What do you know about Van Gogh and his art? Pick up the checklist from the Information Desk, check out 10 of Vincent’s works up close and tick everything off the list."
		},
		{
			image : "0dc8d0d9-2887-4f43-beed-589be03491a2.webp",
			title : "Birthday Parties",
			discript : "Invite your friends and celebrate your birthday in the museum!"
		}
	];

	const discover_data = [
		{
			image : "5b777aba-dc48-421f-bcc9-c3ff8a6e7ba4.webp",
			category : "YouTube",
			title : "Video Tours",
			discript : "Wander through the museum free from fellow visitors and look for your favourite painting."
		},
		{
			image : "default (3).webp",
			title : "Collection",
			discript : "Explore the paintings and drawings by Vincent van Gogh and his contemporaries."
		},
		{
			image : "795d9cc9-0a47-4beb-acfc-3c427beb90ff.webp",
			title : "Colouring Pages",
			discript : "Have fun with free colouring pages of famous Vincent van Gogh masterpieces. Simply download and print, and start colouring!"
		}
	];

	return (
		<div className="whats_on">
			<div>
				<div className="title_box">
					<h1>What’s On</h1>
					<p>
						What's on at the Van Gogh Museum? 
						There's always plenty to discover: visit exhibitions and 
						join activities, or discover how to enjoy the museum from home.
					</p>
				</div>
				<div className="arrow_box">
					<p>Book ticket <Arrow_Right /></p>
				</div>
			</div>
			<nav className="page_nav">
				<ul>
					<li className="arrow_box"><span className="arrow_text">Exhibitions<Arrow_Down /></span></li>
					<li className="arrow_box"><span className="arrow_text">Tours and Activites <Arrow_Down /></span></li>
					<li className="arrow_box"><span className="arrow_text">For Children <Arrow_Down /></span></li>
					<li className="arrow_box"><span className="arrow_text">More to discover <Arrow_Down /></span></li>
				</ul>
			</nav>
			<hr />
			<div className="content_box">
				<div>
					<div className="content_title">
						<h2>Exhibitions</h2>
						<p className="arrow_box">All exhibitions <Arrow_Right /></p>
					</div>
					<div className="card_box">
						{exhibitions_data.map((data) => <Card key={data.title} data={data} />)}
					</div>
				</div>
				<div>
					<div className="content_title">
						<h2>Tours and Activities</h2>
						<p className="arrow_box">View the calendar for all activities <Arrow_Right /></p>
					</div>
					<div className="card_box">
						{tours_data.map((data) => <Card key={data.title} data={data} />)}
					</div>
				</div>
				<div>
					<div className="content_title">
						<h2>For Children</h2>
					</div>
					<div className="card_box">
						{children_data.map((data) => <Card key={data.title} data={data} />)}
					</div>
				</div>
				<div>
					<div className="content_title">
						<h2>More to discover</h2>
					</div>
					<div className="card_box">
						{discover_data.map((data) => <Card key={data.title} data={data} />)}
					</div>
				</div>
			</div>
		</div>
	)
}