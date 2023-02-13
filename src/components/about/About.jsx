import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id='about'>
			<h5 className='text-light'>Get to Know</h5>
			<h2>About Me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='About Image' />
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>3+ Years Experience</small>
						</article>

						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>Clients</h5>
							<small>300+ clients worldwide</small>
						</article>

						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>80+ Completed Projects</small>
						</article>
					</div>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ut
						illum voluptatem eos aliquid, tenetur quia explicabo veritatis?
						Nesciunt eos facere voluptas vel explicabo voluptates dignissimos
						unde illum quibusdam suscipit.
					</p>

					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
