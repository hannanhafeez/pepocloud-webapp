import type { InferGetServerSidePropsType, NextPage } from 'next'
import Image from 'next/image'

import Header from '@/components/Header'

import PricingSection from '@/components/Sections/pricing/PricingSection2'
import BillingPriceSection from '@/components/Sections/pricing/BillingPriceSection3'
import TrustedBySection from '@/components/Sections/common/TrustedBySection'

import TestimonialsSection from '@/components/Sections/common/TestimonialsSection'
import StoriesSection from '@/components/Sections/common/StoriesSection'
import RocketSection from '@/components/Sections/common/RocketSection'
import WhySection from '@/components/Sections/common/WhySection'

import Footer from '@/components/Footer'
import Head from 'next/head'
import FrequentlyAskedSection from '@/components/Sections/pricing/FrequentlyAskedSection'
import fetchJson, { JSONResponse } from 'lib/fetchJson'
import { PRICING } from '@/services/ServiceUrl'

const Pricing: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({section4}) => {	
	
	return (
		<>
			<Head>
				<title>Pricing - Trinitio</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Header/>

			<main>
				{/* Top section */}
				<section className='bg-section_grey'>
					<div className="container mx-auto px-6 xl:px-[15%] py-14 md:py-[7.5rem] lg:py-24 gap-x-4 text-center flex flex-col items-center gap-4 sm:gap-10">
						<h2 className="font-sans-bold text-[40px] text-darker sm:text-[60px] leading-[45px] sm:leading-[70px] self-stretch">
							{'Flexible Plans You’ve Been Looking For'}
						</h2>

						<h3 className='text-app_blue text-20 font-sans-medium'>
							{'Our software is coded' }
							<span className='text-app_green font-sans-semibold'>
								{' by some of the best minds '}
							</span>
							{ 'in the world.'}
						</h3>

						<p className='text-17 font-sans-medium'>
							{`
							Save 70% with Trinitio as you bundle all three essential products together. 
							Since all three features are in the same app, we save 70% of the infrastructure cost as we don’t have to maintain three separate servers. So, we can carry over our savings to you.
							`}
						</p>
					</div>

					
				</section>

				<PricingSection/>
				<BillingPriceSection/>

				<section className="relative container mx-auto my-10 lg:py-24 min-h-[250px] lg:min-h-[400px]">
					<Image src={section4?.img || '/imgs/pricing/blue_img.png'} alt='blue image' layout='fill' objectFit='contain'
						priority={true} loading="eager" quality={100}
						className='relative w-full h-full px-4 md:px-0 object-contain'
					/>
				</section>
				
				<TrustedBySection/>
				<WhySection/>
				<StoriesSection/>

				<FrequentlyAskedSection/>

				<TestimonialsSection/>
				<RocketSection/>
			</main>

			<Footer/>

		</>
	)
}

export const getServerSideProps = async function ({
}) {
	try {
		// const res = (await fetchJson(HOME.section1.logo)) as JSONResponse;
		const promiseAll = await Promise.all([
			(fetchJson(PRICING.section4.img)) as JSONResponse,
		])

		// console.log(promiseAll);

		if (!promiseAll[0].error) { //assuming that if one link resolves, every link will resolve!
			return {
				props: {
					section4: {
						img: ((promiseAll[0][0] as JSONResponse).file),		// Has image Section 1
					}
				}
			}
		}
	} catch (e: any) {
		console.log(e);
	}
	return {
		props: {}, // will be passed to the page component as props
	}
}

export default Pricing
