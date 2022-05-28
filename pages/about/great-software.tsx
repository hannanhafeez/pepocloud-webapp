import type { NextPage } from 'next'
import Image from 'next/image'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RocketSection from '@/components/Sections/common/RocketSection'
import StoriesSection from '@/components/Sections/common/StoriesSection'
import TestimonialsSection from '@/components/Sections/common/TestimonialsSection'
import WhySection from '@/components/Sections/common/WhySection'

import ThreeDots from '@/components/svg/ThreeDots.svg'

import section1Css from '@/styles/great-software/section1.module.css'
// import section2Css from '@/styles/great-software/section2.module.css'

const GreatSoftware: NextPage = () => {
	
	return (
		<>
			<Header yOffsetForTintChange={450}/>

			<main>
				{/* Top section */}
				<section className="relative bg-[url('/imgs/great-software/bg-img.png')] bg-cover bg-center">
					<div className={section1Css.section1_blue_overlay}></div>
					<div className={section1Css.text_container}>
						<h2>{'Great Software'}</h2>
						<ThreeDots/>
						<h3>{'“The only thing works 24/7 without taking break on our clients business is software, so develop it as best as possible”'}</h3>
						<p>{'John Ravi - Founder'}</p>
					</div>
				</section>

				<section className="py-16 md:py-[7.5rem] lg:py-28 flex flex-col gap-24">
					<div className="container mx-auto gap-x-4">
						<div className='flex flex-col-reverse gap-6 xl:gap-20 lg:flex-row'>
							<div className='flex-1 lg:flex-[4] flex flex-col justify-center gap-4'>
								<h2 className='font-sans-bold text-[48px] leading-[60px]'>
									{'Five-layer of Manual quality checks'}
								</h2>
								<p className='font-sans-medium font-14 xl:font-17'>
									{'Each of our software updates will go through manual quality checks. Five individual quality assurance team will check the codes and functionalities carefully before releasing it to you.'}
								</p>
								<p className='font-sans-medium font-14 xl:font-17'>
									{'We follow a high-standard protocol to write codes by the best minds in the software industry. We write clean high-quality codes with clear description for each line to. Each line og our codes is optimized by hand individually to maximize the performance of our product to you. It may not be the easy way, but it’s the only way we know.'}
								</p>
							</div>
							
							<div className="flex-1 lg:flex-[5] 2xl:flex-[6] aspect-square grid content-center">
								<div className='relative w-full aspect-[5.3/4.02]'>
									<div className='absolute w-full h-full bg-center bg-contain bg-no-repeat scale-105 md:scale-[1.05]'
										style={{
											backgroundImage: 'url(/svg/great-software/section1-blob.svg)'
										}}
									/>
									<Image alt='video-img' src={'/imgs/great-software/section1-img.png'} layout='fill'
										className='relative object-cover scale-90'
									/>
								</div>
							</div>
						</div>
					</div>
					
					<div className="container mx-auto gap-x-4">
						<div className='flex flex-col gap-6 xl:gap-20 lg:flex-row'>
							<div className="flex-1 lg:flex-[5] 2xl:flex-[6] aspect-square grid content-center">
								<div className='relative w-full aspect-[5.3/4.02]'>
									<div className='absolute w-full h-full bg-center bg-contain bg-no-repeat scale-105 md:scale-[1.2] right-[5%]'
										style={{
											backgroundImage: 'url(/svg/great-software/section2-blob.svg)'
										}}
									/>
									<Image alt='video-img' src={'/imgs/great-software/section2-img.png'} layout='fill'
										className='relative object-cover scale-90'
									/>
								</div>
							</div>
							
							<div className='flex-1 lg:flex-[4] flex flex-col justify-center gap-4'>
								<h2 className='font-sans-bold text-[48px] leading-[60px]'>
									{'Real performing software, rigorous standards'}
								</h2>
								<p className='font-sans-medium font-14 xl:font-17'>
									{'Top quality has always been our approach to software products. Because providing you with a quality software is our main service to you, we would only give you a product that we would use on our business.'}
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



export default GreatSoftware
