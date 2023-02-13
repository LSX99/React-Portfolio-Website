import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_gx1lpin',
				'template_92cbqjj',
				form.current,
				'hYCIdVsIFhxsRHQ22'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};

	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>shengxianglim99@gmail.com</h5>
						<a href='mailto:dummy@gmail.com' target='_blank'>
							Send a Message
						</a>
					</article>
					<article className='contact__option'>
						<RiMessengerLine className='contact__option-icon' />
						<h4>Messenger</h4>
						<h5>CruzeQtutorials</h5>
						<a href='https://m.me/your.profile' target='_blank'>
							Send a Message
						</a>
					</article>
					<article className='contact__option'>
						<BsWhatsapp className='contact__option-icon' />
						<h4>Whatsapp</h4>
						<h5>+65 96637029</h5>
						<a
							href='https://api.whatsapp.com/send?phone+12345678'
							target='_blank'
						>
							Send a Message
						</a>
					</article>
				</div>
				{/* END OF CONTACT OPTIONS */}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input type='email' name='email' placeholder='Your Email' required />
					<textarea
						name='message'
						rows='7'
						placeholder='Your Message'
						required
					></textarea>
					<button tyoe='submit' className='btn btn-primary'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
