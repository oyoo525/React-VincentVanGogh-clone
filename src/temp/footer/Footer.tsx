import React from "react";
import './footer.css';
import museumImage from '../../image/Van Gogh Museum Amsterdam.jpg';
import footerLogo from '../../image/footer-logos.png';

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer_museum_shop">
				<ul>
					<li>Official webstore Van Gogh Museum</li>
					<li>Secure payment</li>
					<li>Worldwide delivery</li>
				</ul>
			</div>
			<div className="footer_top">
				<div className="newsletter_btn">
					<div className="gray_btn">
						<div className="mail_icon">
							<i className="bi bi-envelope"></i>
						</div>
						<span>Subscribe to our newsletter</span>
					</div>
				</div>
				<div className="social_btn">
					<ul>
						<li>Facebook</li>
						<li>Twitter</li>
						<li>Youtube</li>
						<li>pinterest</li>
						<li>instagram</li>
					</ul>
				</div>
			</div>
			<div className="footer_nav">
				<div className="footer_nav_01">
					<h5>Customer Service</h5>
					<p>
						Get in touch: +31 (0) 888 800 853
					</p>
					<p>
						From Monday to Friday 09:00 - 17:30 CET
					</p>
				</div>
				<div>
					<h5>Webshop info</h5>
					<ul>
						<li>Newsletter subscription</li>
						<li>FAQs</li>
						<li>Payment</li>
						<li>Shipping & Delivery</li>
						<li>Returns & Exchanges</li>
						<li>Contact</li>
					</ul>
				</div>
				<div>
					<h5>About the Museum</h5>
					<ul>
						<li>Legal Notice Webshop</li>
						<li>Van Gogh Wholesale</li>
						<li>Custom made masterpieces</li>
						<li>Van Gogh Museum</li>
						<li>Privacy policy</li>
						<li>Terms</li>
					</ul>
				</div>
				<div>
					<h5>Van Gogh Museum™</h5>
					<div className="image_box">
						<img src={museumImage} />
					</div>
				</div>
				<div>
					<h5>Safe and tested</h5>
					<div className="image_box">
						<img src={footerLogo} />
					</div>
					<div className="review_box">
						<div className="review_header">
							<span>Customer reviews</span>
						</div>
						<div className="review_score">
							<i className="bi bi-star-fill"></i>
							<i className="bi bi-star-fill"></i>
							<i className="bi bi-star-fill"></i>
							<i className="bi bi-star-fill"></i>
							<i className="bi bi-star-half"></i>
							<span>&nbsp;&nbsp;(9.2 / 10)</span>
						</div>
					</div>
				</div>



			</div>
		</div>
	)
}