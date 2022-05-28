import type { NextPage } from 'next'
import Image from 'next/image'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RocketSection from '@/components/Sections/common/RocketSection'
import StoriesSection from '@/components/Sections/common/StoriesSection'
import TestimonialsSection from '@/components/Sections/common/TestimonialsSection'
import WhySection from '@/components/Sections/common/WhySection'

import ThreeDots from '@/components/svg/ThreeDots.svg'

import section1Css from '@/styles/giving-back/section1.module.css'
// import section2Css from '@/styles/giving-back/section2.module.css'

const GivingBack: NextPage = () => {
	
	return (
		<>
			<Header yOffsetForTintChange={420}/>

			<main>
				{/* Top section */}
				<section className="relative bg-[url('/imgs/giving-back/bg-img.png')] bg-cover bg-center">
					<div className={section1Css.section1_blue_overlay}></div>
					<div className={section1Css.text_container}>
						<h2>{'Giving Back'}</h2>
						<ThreeDots/>
						<h3>{'It is more blessed to give than to receive'}</h3>
						<p>{'ACTS 20:35'}</p>
					</div>
				</section>

				<section>
					<div className="container mx-auto py-10 md:py-[7.5rem] lg:py-28 gap-x-4">

						<div className='flex flex-col gap-12 xl:gap-20 lg:flex-row'>
							<div className="flex-1 lg:flex-[5] 2xl:flex-[6] aspect-square grid content-center">
								<div className='relative w-full aspect-square'>
									<div className='absolute w-full h-full bg-center bg-contain bg-no-repeat scale-105 md:scale-[1.1]'
										style={{
											backgroundImage: 'url(/svg/giving-back/section2-blob.svg)'
										}}
									/>
									<Image alt='video-img' src={'/imgs/giving-back/section2-img.png'} layout='fill'
										className='relative object-cover scale-90'
									/>
								</div>
							</div>

							<div className='flex-1 lg:flex-[5] flex flex-col justify-center gap-4'>
								<h2 className='font-sans-bold text-[48px] leading-[60px]'>
									{'Whoever is generous to the poor lends to the Lord, and He will repay him for his deed. - Proverbs 19:17'}
								</h2>
								<p className='font-sans-medium font-14 xl:font-17'>
									{'We put people first. We as a company give both money and time to our community. We give back more than 10% of our profits to our local church. We volunteer cleaning the streets of our community, building houses, helping kids with education scholarships, providing food, and clothes to homeless people.'}
								</p>
								<p className='font-sans-medium font-14 xl:font-17'>
									{'We strive to be good stewards of the planet and community we share. We seek to have a positive impact in our communities.'}
								</p>
							</div>
						</div>

					</div>
				</section>

				
				<WhySection/>
				<StoriesSection/>
				<TestimonialsSection/>
				<RocketSection/>
			</main>

			<Footer/>

		</>
	)
}



export default GivingBack
