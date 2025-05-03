import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
	<footer className='footer'>
		<div className="footer-container">
			<div className="flex flex-col justify-center items-center md:items-start">
				<a href="/">Visit my blog</a>
			</div>
			<div className="socials">
				{socialImgs.map((social, i)=>{
					return (
						<a className='icon' target='_blank' href='' key={i}>
							<img src={social.imgPath} alt={social.name} />
						</a>
					)
				})}
			</div>
			<div className="flex flex-col justify-center">
				<p className='text-center md:text-end'>
					© {new Date().getFullYear()} Tony | All Rights reserved
				</p>
			</div>
		</div>
	</footer>
	)
}

export default Footer