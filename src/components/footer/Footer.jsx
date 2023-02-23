import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer>
			<a href='#' className='footer__logo'>
				LSX
			</a>

			<ul className='permalinks'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#experience'>Experience</a>
				</li>
				{/* <li>
					<a href='#services'>Services</a>
				</li> */}
				<li>
					<a href='#portfolio'>Portfolio</a>
				</li>
				{/* <li>
					<a href='#testimonials'>Testimonials</a>
				</li> */}
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a href='https://www.facebook.com/kenlim.shengxiang/'>
					<FaFacebookF />
				</a>
				<a href='https://www.instagram.com/shengxiangg/'>
					<FiInstagram />
				</a>
				<a href='https://www.linkedin.com/in/shengxianglim/'>
					<BsLinkedin />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>&copy; LSX. All Rights Reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
