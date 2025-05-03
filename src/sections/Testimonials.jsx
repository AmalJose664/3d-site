import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'

const Testimonials = () => {
  return (
	<section id='testimonials' className='flex-center section-padding'>
		<div className="w-full h-full md:px-10 px-5">
			<TitleHeader title='What People say about me' sub='💫 Client Feedback Highlights' />
			
			<div className="lg:columns-3 md:columns-2 columns-1 mt-16">
				{testimonials.map((testi)=>(
					<GlowCard card={testi}>
						<div className="flex item-center gap-3">
							<div>
								<img src={testi.imgPath} alt={testi.name} />
							</div>
							<div>
								<p className="font-bold">{testi.name}</p>
								<p className="text-white-50">{testi.mentions}</p>
							</div>
						</div>
					</GlowCard>
				))}
			</div>
		</div>
	</section>
)
}

export default Testimonials