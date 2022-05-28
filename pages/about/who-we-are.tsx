import type { NextPage } from 'next'
import Image from 'next/image'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RocketSection from '@/components/Sections/common/RocketSection'
import StoriesSection from '@/components/Sections/common/StoriesSection'
import TestimonialsSection from '@/components/Sections/common/TestimonialsSection'
import WhySection from '@/components/Sections/common/WhySection'

import ThreeDots from '@/components/svg/ThreeDots.svg'

import section1Css from '@/styles/who-we-are/section1.module.css'
// import section2Css from '@/styles/who-we-are/section2.module.css'

const WhoWeAre: NextPage = () => {
	
	return (
		<>
			<Header yOffsetForTintChange={470}/>

			<main>
				{/* Top section */}
				<section className="relative bg-[url('/imgs/who-we-are/bg-img.jpg')] bg-cover bg-center">
					<div className={section1Css.section1_blue_overlay}></div>
					<div className={section1Css.text_container}>
						<h2>{'Who We Are'}</h2>
						<ThreeDots/>
						<h3>{'We should be more than just providing a useful software. We should create a software product in such a way that would help our users succeed in their business as much as possible.'}</h3>
						<p>{'John Ravi - Founder'}</p>
					</div>
				</section>

				<section>
					<div className="container mx-auto py-10 md:py-[7.5rem] lg:py-28 gap-x-4">

						<div className='flex flex-col gap-12 xl:gap-20 lg:flex-row'>
							<div className="flex-1 lg:flex-[6] 2xl:flex-[7] aspect-square grid content-center">
								<div className='relative w-full aspect-square'>
									<div className='absolute w-full h-full bg-center bg-contain bg-no-repeat scale-105 md:scale-[1.1]'
										style={{
											backgroundImage: 'url(/svg/who-we-are/section1-blob.svg)'
										}}
									/>
									<Image alt='video-img' src={'/imgs/who-we-are/section1-img.jpg'} layout='fill'
										className='relative object-cover scale-90'
									/>
								</div>
							</div>

							<div className='flex-1 lg:flex-[5] flex flex-col justify-center gap-4'>
								<h2 className='font-sans-bold text-[48px] leading-[60px]'>
									{'Why Did We DevelopThis Software?'}
								</h2>
								<p className='font-sans-medium font-14 xl:font-17'>
									{'Having founded five startups successfully from the ground up with little to no money, I know how important each dollar and each minute a founder has at the startup phase.'}
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



export default WhoWeAre
