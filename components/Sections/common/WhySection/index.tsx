import { COMMON } from '@/services/ServiceUrl';
import { fetcher } from 'lib/fetchJson';
import Image from 'next/image';
import React, { FC } from 'react'
import useSWR from 'swr';

export type WhySectionProps = {

}

const WhySection: FC<WhySectionProps> = ({}) => {
	
	const { data, error } = useSWR(COMMON.whyTrinitio.heading, fetcher);
	const { data: imageList, error: imageError } = useSWR(COMMON.whyTrinitio.image, fetcher);
	const { data: cardList, error: cardsError } = useSWR(COMMON.whyTrinitio.cards, fetcher);

	// console.log({ data, imageList, cardList,error});

	const isHeadingReady = data && Array.isArray(data) && !error
	const imagesReady = imageList && Array.isArray(imageList) && !imageError
	const cardsReady = cardList && Array.isArray(cardList) && !cardsError
	
	return (
		<section className='bg-section_grey'>
			<div className="container mx-auto py-10 md:py-[7.5rem] lg:py-28 gap-x-4">

				<div className='flex flex-col gap-12 xl:gap-24 lg:flex-row'>

					<div className='flex-1 lg:flex-[4] flex flex-col justify-center gap-4'>
						<h2 className='font-sans-bold text-4xl 2xl:text-5xl'>
							{isHeadingReady && (data?.[0].title || 'Why Trinitio?')}
						</h2>
						{/* <p className='font-sans-medium font-14 2xl:font-17'>
							{'When we started our entrepreneurial journey about a decade ago back in Houston, Texas, we wanted to have an easy yet intuitive appointment scheduling platform, email marketing and livechat with chatbot platforms. We wanted all these to work together to maximize our marketing efforts'}
							<a href='' className='text-app_green'>{' Read More..'}</a>
						</p> */}
						<ul className='flex flex-col gap-5'>
							{

								cardsReady &&
								cardList?.map(({ title, text }, ind) => (
									<li key={`${title}-${ind}`} className=''>
										<h3 className='font-sans-bold text-24'>
											{title}
										</h3>
											<p className='font-sans-regular text-17'>
											{text}
										</p>
									</li>
								))
							}
							
						</ul>
					</div>

					<div className="flex-1 lg:flex-[6] aspect-[1] grid content-center lg:pl-4">
						<div className='relative w-full aspect-[1] '>
							<div className='absolute -right-5 -bottom-5 w-full h-full bg-app_light_green rounded-lg' />
							{
								// imagesReady &&
								<Image alt='video-img' src={imagesReady ? imageList?.[0]?.file : '/loading-img.gif'} layout='fill'
									placeholder='blur' blurDataURL={'/loading-img.gif'} quality={100}
									className='rounded-lg object-cover'
								/>
							}
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}

export default WhySection;