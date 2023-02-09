import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
	{
		id: 1,
		image: IMG1,
		title: 'Eclipse - Figma dashboard UI kit for data design web apps',
		github: 'https://github.com',
		demo: 'https://dribbble.com/shots/20579260-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
	},
	{
		id: 2,
		image: IMG2,
		title: 'Orion UI kit – data visualization and charts templates for Figma',
		github: 'https://github.com',
		demo: 'https://dribbble.com/shots/20512784-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma',
	},
	{
		id: 3,
		image: IMG3,
		title: 'Orion UI kit – data visualization and charts templates for Figma',
		github: 'https://github.com',
		demo: 'https://dribbble.com/shots/20579260-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
	},
	{
		id: 4,
		image: IMG4,
		title: 'Eclipse - Figma dashboard UI kit for data design web apps',
		github: 'https://github.com',
		demo: 'https://dribbble.com/shots/20579260-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
	},
	{
		id: 5,
		image: IMG5,
		title: 'Eclipse - Figma dashboard UI kit for data design web apps',
		github: 'https://github.com',
		demo: 'https://dribbble.com/shots/20579260-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
	},
	{
		id: 6,
		image: IMG6,
		title: 'Eclipse - Figma dashboard UI kit for data design web apps',
		github: 'https://github.com',
		demo: 'https://dribbble.com/shots/20579260-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
	},
];

const portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>My Portfolio</h2>

			<div className='container portfolio__container'>
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article className='portfolio__item'>
							<div key={id} className='portfolio__item-image'>
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className='portfolio__item-cta'>
								<a href={github} className='btn' target='_blank'>
									Github
								</a>
								<a href={demo} className='btn btn-primary' target='_blank'>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default portfolio;
