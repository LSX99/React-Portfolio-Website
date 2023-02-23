import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfoliowebsite.png';
import IMG2 from '../../assets/dicegame.png';
import IMG3 from '../../assets/simongame.png';
import IMG4 from '../../assets/tictactoe.png';
import IMG5 from '../../assets/blackjack.png';

const data = [
	{
		id: 1,
		image: IMG1,
		title: 'Personal ePortfolio',
		p: 'Built a functional and responsive portfolio website using ReactJS; Implemented WhatsApp API, Facebook Messenger API and EmailJS',
		github: 'https://github.com/LSX99/React-Portfolio-Website',
		// demo: '',
	},
	{
		id: 2,
		image: IMG2,
		title: 'Dice Game Website',
		p: 'Used the Document Object Model (DOM) to manipulate HTML element attributes; Deployed website using Github Pages',
		github: 'https://github.com/LSX99/Dice-Game-',
		// demo: '',
	},
	{
		id: 3,
		image: IMG3,
		title: 'Simon Game Website',
		p: 'Used jQuery to manipulate styles, text and attributes on top of adding event listeners, website animations, adding and removing elements',
		github: 'https://github.com/LSX99/Simon-Game',
		// demo: '',
	},
	{
		id: 4,
		image: IMG4,
		title: 'Tic Tac Toe Game (Python)',
		p: ' Used Python to display board game, allow user to interact and update variables in game before displaying updated visual back to user',
		github: 'https://github.com/LSX99/TicTaeToe---Python',
		// demo: '',
	},
	{
		id: 5,
		image: IMG5,
		title: 'Blackjack Game (Python)',
		p: 'Used Python Object Oriented Programming to create different classes that interact with each other within the game logic.',
		github: 'https://github.com/LSX99/BlackJack-Python',
		// demo: '',
	},
];

const portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>My Portfolio</h2>

			<div className='container portfolio__container'>
				{data.map(({ id, image, title, github, p, demo }) => {
					return (
						<article className='portfolio__item'>
							<div key={id} className='portfolio__item-image'>
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div>
								<p>{p}</p>
							</div>
							<br></br>
							<div className='portfolio__item-cta'>
								<a href={github} className='btn btn-primary' target='_blank'>
									Github
								</a>
								{/* <a href={demo} className='btn btn-primary' target='_blank'>
									Live Demo
								</a> */}
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default portfolio;
