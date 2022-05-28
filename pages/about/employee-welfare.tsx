import type { NextPage } from 'next'
import Image from 'next/image'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RocketSection from '@/components/Sections/common/RocketSection'
import StoriesSection from '@/components/Sections/common/StoriesSection'
import TestimonialsSection from '@/components/Sections/common/TestimonialsSection'
import WhySection from '@/components/Sections/common/WhySection'

import ThreeDots from '@/components/svg/ThreeDots.svg'

import section1Css from '@/styles/employee-welfare/section1.module.css'
// import section2Css from '@/styles/employee-welfare/section2.module.css'

const EmployeeWelfare: NextPage = () => {
	
	return (
		<>
			<Header yOffsetForTintChange={420}/>

			<main>
				{/* Top section */}
				<section className="relative bg-[url('/imgs/employee-welfare/bg-img.png')] bg-cover bg-center">
					<div className={section1Css.section1_blue_overlay}></div>
					<div className={section1Css.text_container}>
						<h2>{'Employee Welfare'}</h2>
						<ThreeDots/>
						<h3>{'Only happy employees can make great products.'}</h3>
						<p>{'John Ravi - Founder'}</p>
					</div>
				</section>

				<section>
					<div className="container mx-auto py-10 md:py-[7.5rem] lg:py-28 gap-x-4">

						<div className='flex flex-col gap-12 xl:gap-20 lg:flex-row'>

							<div className='flex-1 lg:flex-[5] flex flex-col justify-center gap-4'>
								<h2 className='font-sans-bold text-[48px] leading-[60px] mb-2'>
									{'Employee welfare'}
								</h2>
								<p className='font-sans-medium font-14 xl:font-17'>
									{'Not to mention, we constantly are being awarded for one of the top employee-friendly companies in the world. We give the utmost importance to our empoyees welfare as we strongly believe only happy employees can make great products.'}
								</p>

								<div className='relative aspect-[11/3.5] w-full my-2'>
									<Image alt='section2-img' src={'/imgs/employee-welfare/section1-img.png'} layout='fill'
										className='relative object-cover'
									/>
								</div>

								<p className='font-sans-medium font-14 xl:font-17'>
									{'We understand hoe important it is to take good care of our employees and provide a positive enviroment for them.'}
								</p>
								<p className='font-sans-medium font-14 xl:font-17'>
									{'We treat each og our employee like our own family. Our benefits to our employees include complete family health insurance, incentives, childcare help at the office, free healthy food to our employees at the office, fitness club with fitness trainer, in-house play area, and free organic grocery gift cards. We also take them to vacation evary month and get feedback about their job and work environment.'}
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



export default EmployeeWelfare
