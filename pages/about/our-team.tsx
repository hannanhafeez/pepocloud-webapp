import { FC } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RocketSection from '@/components/Sections/common/RocketSection'
import StoriesSection from '@/components/Sections/common/StoriesSection'
import TestimonialsSection from '@/components/Sections/common/TestimonialsSection'
import WhySection from '@/components/Sections/common/WhySection'


import section1Css from '@/styles/our-team/section1.module.css'
import section2Css from '@/styles/our-team/section2.module.css'


const OurTeam: NextPage = () => {
	const teamMembers: Array<ImageCardProps> = [
		{
			imageUrl: 'mario.png',
			name: 'Mario Evans',
			designation: 'CEO',
			about: 'After losing seven months and a few thousand dollars, I shut it down completely.'
		},
		{
			imageUrl: 'roshan.png',
			name: 'Roshan Immanuel',
			designation: 'Director - Business Deve.',
			about: 'After losing seven months and a few thousand dollars, I shut it down completely.'
		},
		{
			imageUrl: 'vasanth.png',
			name: 'Vasanth C',
			designation: 'Chief Information Security off.',
			about: 'After losing seven months and a few thousand dollars, I shut it down completely.'
		},
	]

	return (
		<>
			<Header yOffsetForTintChange={300}/>

			<main>
				{/* Top section */}
				<section className="relative bg-[url('/imgs/our-team/bg-img.png')] bg-cover">
					<div className={section1Css.section1_blue_overlay}></div>
					<div className={section1Css.text_container}>
						<h2>{'Our Team'}</h2>
					</div>
				</section>

				<section>
					<div className="container mx-auto py-10 md:py-[7.5rem] lg:py-28 gap-x-4">
						<div className='text-center flex flex-col gap-y-4 2xl:gap-y-6 mb-12'>
							<h2 className='font-sans-bold text-4xl 2xl:text-5xl'> {'Our Team'} </h2>

							<p className='font-sans-regular text-base'> {'Our team lives, breath and dream in integrated mode'} </p>
						</div>

						<div className='grid grid-cols-3 gap-x-12 gap-y-20'>
							{
								teamMembers.map((teamMember, id)=>(
									<ImageCard key={`${id}-${teamMember.name}`} {...teamMember}/>
								))
							}
							{
								teamMembers.map((teamMember, id)=>(
									<ImageCard key={`${id}-${teamMember.name}`} {...teamMember}/>
								))
							}
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

type ImageCardProps = {
	imageUrl: string, 
	name:string, designation: string, about: string
}

const imageBase = '/imgs/our-team/'

const ImageCard: FC<ImageCardProps> = ({
	imageUrl, name, designation, about
}) => {
	return (
		<div className='flex flex-col items-center text-center gap-y-6 2xl:gap-y-8'>
			<div className='relative w-full aspect-square'>
				<div className='absolute w-[90%] aspect-square rounded-full ring-2 ring-app_green right-0 bottom-0'></div>
				<div className='absolute w-[90%] aspect-square rounded-full bg-app_green left-0 top-0 overflow-hidden'>
					<Image src={`${imageBase}${imageUrl}`} alt={imageUrl} layout='fill'
						className='relative w-full h-full object-cover'
					/>
				</div>
			</div>
			
			<div className=''>
				<h3 className='font-sans-semibold text-[30px] text-darker'>
					{name}
				</h3>
				<h4 className='font-sans-medium text-20 text-[#777F82] mt-2 mb-4'>
					{designation}
				</h4>
				<p className='font-sans-regular text-17 text-dark'>
					{about}
				</p>
			</div>
		</div>
	)
}


export default OurTeam
