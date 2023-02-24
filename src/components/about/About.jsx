import React from 'react';
import './about.css';
import ME from '../../assets/me-about.png';
import { BsBook } from 'react-icons/bs';
import { MdHearing } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';

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
							<BsBook className='about__icon' />
							<h5>Listen</h5>
							<small>Active Listener</small>
						</article>

						<article className='about__card'>
							<MdHearing className='about__icon' />
							<h5>Learn</h5>
							<small>Driven Learner</small>
						</article>

						<article className='about__card'>
							<BsPeopleFill className='about__icon' />
							<h5>Lead</h5>
							<small>Leader by Example</small>
						</article>
					</div>

					<p align='justify'>
						An active listener, driven learner and leader by example. I take
						advantage of every opportunity to learn, understand different
						perspectives and empathizing with them while letting my actions
						speak louder then words. By prioritizing these three values, I hope
						to continue on my path of personal growth, foster meaningful
						connections with others and making a positive impact on the people
						around me.
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
