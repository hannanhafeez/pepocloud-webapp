import type { NextPage } from 'next'
// import Image from 'next/image'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RocketSection from '@/components/Sections/common/RocketSection'
import StoriesSection from '@/components/Sections/common/StoriesSection'
import TestimonialsSection from '@/components/Sections/common/TestimonialsSection'
import WhySection from '@/components/Sections/common/WhySection'
import Section2 from '@/components/Sections/features/FeatureSection2'
import Section3 from '@/components/Sections/features/FeatureSection3'
import Section4 from '@/components/Sections/features/FeatureSection4'
import Head from 'next/head'


const Features: NextPage = () => {

	return (
		<>
			<Head>
				<title>Features - Trinitio</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Header/>

			<main>
				{/* Top section */}
				<section className='bg-section_grey'>
					<div className="container mx-auto py-10 md:py-[7.5rem] lg:py-20 gap-x-4 text-center flex flex-col items-center gap-4 sm:gap-10">
						<h2 className="font-sans-bold text-[40px] text-darker sm:text-[60px] leading-[45px] sm:leading-[70px] self-stretch">
							{'Be In Touch With Your Customers Everywhere'}
						</h2>

						<a href="#" className="inline-block my-4 px-6 py-4 leading-none border rounded font-sans-semibold border-transparent text-white bg-app_green mt-4 lg:mt-0">
							Sign Up for Free
						</a>
					</div>
				</section>

				<Section2/>
				<Section3/>
				<Section4/>
				<WhySection/>
				<StoriesSection/>
				<TestimonialsSection/>
				<RocketSection/>
			</main>

			<Footer/>

		</>
	)
}


export default Features
