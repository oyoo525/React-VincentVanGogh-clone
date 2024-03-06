import React, { useState } from "react";
import './home.css';
import './home.ts';
import image01 from '../image/default.webp';
import image02 from '../image/026f24c5-b2a9-490c-a3e8-2029075417e7.webp';
import image03 from '../image/default(1).webp';
import Header from "../temp/header/Header.tsx";

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);


	return (
		<div className="home">
			<div className="header_box">
				<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} color='transparent' />
			</div>
			{!isMenuOpen && (
				<>
					<div className="home_box title_wrap">
						<h1>Discover the<br/>Life and Work<br/>of Vincent<br/>van Gogh</h1>
						<p>Welcome to the Van Gogh Museum! Plan<br/>your visit, book tickets online.</p>
						<section>
							<ul>
								<li className="list"><i className="bi bi-arrow-right"></i>Book tickets</li>
								<li className="list"><i className="bi bi-arrow-right"></i>Support the museum, donate now</li>
							</ul>
						</section>
					</div>
					<div className="home_box scroll_image_wrap">
						<div className="image_box">
							<img src={image01} />
							<div className="image_text">
								<p>Always on view</p>
								<h5>Van Gogh's Masterpieces</h5>
								<p>Explore Vincent van Gogh's<br/>famous masterpieces in the<br/>museum's permanent exhibition</p>
								<p className="btn">Explore &nbsp;<i className="bi bi-arrow-right"></i></p>
							</div>
						</div>
						<div className="image_box">
							<img src={image02} />
							<div className="image_text">
								<p>On view from 1 March</p>
								<h5>Exhibition Matthew<br/>Wong | Vincent<br/>van Gogh</h5>
								<p>Discover Matthew Wong's<br/>dynamic colorful and expressive<br/>work, and his artistic connection<br/>with Van Gogh</p>
								<p className="btn">Find out more &nbsp;<i className="bi bi-arrow-right"></i></p>
							</div>
						</div>
						<div className="image_box">
							<img src={image03} />
							<div className="image_text">
								<h5>Vincent van Gogh</h5>
								<p>Learn more about Vicent van<br/>Gogh's art and life. explore his<br/>paintings and drawings, read his<br/>letters and much more.</p>
								<p className="btn">Discover more &nbsp;<i className="bi bi-arrow-right"></i></p>
							</div>
						</div>
					</div>
					<div className="home_box home_footer">
						<h1>Explore more about the museum<br/>and Vincent van Gogh:</h1>
						<section>
							<ul>
								<li className="list"><i className="bi bi-arrow-right"></i>Explore the collection</li>
								<li className="list"><i className="bi bi-arrow-right"></i>Read fascinating stories about Vincent van Gogh</li>
								<li className="list"><i className="bi bi-arrow-right"></i>Stay up to date, sign up for the newsletter</li>
							</ul>
						</section>
						<section>
							<p>Our main partners:</p>
							<div className="partners">
								<div className="image_box">
									<img src="https://source.unsplash.com/random/logo01" />
								</div>
								<div className="image_box">
									<img src="https://source.unsplash.com/random/logo02" />
								</div>
								<div className="image_box">
									<img src="https://source.unsplash.com/random/logo03" />
								</div>
							</div>
						</section>
					</div>
					<div className="scroll_progress">
						<div className="progress_box">
							<div className="solid"></div>
							<div className="dotted"></div>
						</div>
					</div>
				</>
			)}
		</div>
	)
}