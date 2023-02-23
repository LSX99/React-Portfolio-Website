import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
// import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
	return (
		<div className='header_socials'>
			<a href='https://www.linkedin.com/in/shengxianglim/' target='_blank'>
				<BsLinkedin />
			</a>
			<a href='https://github.com/LSX99' target='_blank'>
				<BsGithub />
			</a>
			{/* <a href="https://dribble.com" target="_blank">
				<FiDribbble />
			</a> */}
		</div>
	);
};

export default HeaderSocials;
