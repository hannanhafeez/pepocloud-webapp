import type { NextPage } from 'next'
// import Image from 'next/image'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RocketSection from '@/components/Sections/common/RocketSection'
import StoriesSection from '@/components/Sections/common/StoriesSection'
import TestimonialsSection from '@/components/Sections/common/TestimonialsSection'
import WhySection from '@/components/Sections/common/WhySection'


import section1Css from '@/styles/why-us/section1.module.css'
import section2Css from '@/styles/why-us/section2.module.css'

const WhyUs: NextPage = () => {

	const data = [
		{
			title:"Why Us?",
			descriptions: [
				'The independent research conducted by WoodBows has selected Trinitio as the best scheulding platform',
				'Trinitio has the highest clients retention rate in the industry, that is, 98.4%. In other words, 98.4% of our clients stick to WoodBows for their business needs when it comes to virtual assistance.',
				'We also have a 99.7% client referral rate, which means, 99.7% of our clients tell their friends about Trinitio and bring them to Trinitio. And we were featured on Fox, CBS News for that matter.',
				'Clutch.co, a reputed review company in the US, has reviewed more than 300 companies in the virtual assistance niche in the world and selected WoodBows as best of all and gave us the first rank among all the 300 companies.',
				'TimeDoctor evaluated all the appointment scheduling platforms in the United States. They chose Trinitio as one of the top three best scheduling platforms.',
			]
		},
		{
			title: "Our reason for existence:",
			descriptions: [
				'Our main goal is to provide all the tools necessary to maximize the number of customers for the business owners, entrepreneurs and executives so they can concentrate on their business growth and have a work-life balance.',
			]
		},
		{
			title: "Direction of the company:",
			descriptions: [
				'There are more than 10 million active business owners, entrepreneurs, and executives in the US, Canada, UK and Australia. Almost 99% of them are struggling to find leads and overwhelmed with day-to-day tasks to such point that they find it hard to allocate time for selling. We want to help at least 1% of these professionals take off their burden by developing set of software tools at affordable prices.',
			]
		},
	]
	
	
	return (
		<>
			<Header/>

			<main>
				{/* Top section */}
				<section className="relative bg-[url('/imgs/why-us/bg-img.png')] bg-cover">
					<div className={section1Css.section1_blue_overlay}></div>
					<div className={section1Css.text_container}>
						<h2>{'Why Us'}</h2>
					</div>
				</section>

				<section className={section2Css.section2}>
					<div className={section2Css.section2_container}>

						{
							data.map(({title, descriptions})=>(
								<div key={title} className={section2Css.text_container}>
									<h3>{title}</h3>
									{descriptions.map((description, id) => (<p key={`${id}`}>{description}</p>))}
								</div>
							))
						}

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


export default WhyUs
