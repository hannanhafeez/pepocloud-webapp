import { HOME } from '@/services/ServiceUrl';
import { fetcher } from 'lib/fetchJson';
import Image from 'next/image';
import React, { FC } from 'react'
import useSWR from 'swr';

import section4 from './section4.module.css'
import placeholderImg from '@/assets/loading-img.gif'

export type HomeSection4Props = {

}

const HomeSection4: FC<HomeSection4Props> = ({}) => {

	const { data, error } = useSWR(HOME.section4.heading, fetcher);
	const { data: imageList, error: imageError } = useSWR(HOME.section4.image, fetcher);
	const { data: cardList, error: cardsError } = useSWR(HOME.section4.cards, fetcher);

	// console.log({ data, imageList, cardList,error});

	const isHeadingReady = data && Array.isArray(data) && !error
	const imagesReady = imageList && Array.isArray(imageList) && !imageError
	const cardsReady = cardList && Array.isArray(cardList) && !cardsError

	return (
		<section className=''>
			<div className="container mx-auto py-10 md:py-[7.5rem] lg:py-28 gap-x-4 min-h-[500px]">
				
				<div className='relative mr-5 mb-10 md:mb-6 lg:-mb-8 xl:mb-4 min-w-min md:min-w-fit aspect-[4/3] md:aspect-[0]'>
					<div className='relative float-right w-full aspect-[4/3] 2xl:aspect-[3/2] md:w-[calc(50%)] lg:w-[calc(63%)] xl:w-[calc(61%)]'>
						<div className='absolute -right-5 -bottom-5 w-full h-full bg-app_light_green rounded-lg'/>
						{
							// imagesReady &&
							<Image alt='video-img' src={imagesReady ? imageList?.[0]?.file : '/loading-img.gif'} layout='fill'
								placeholder='blur' blurDataURL={'/loading-img.gif'} quality={100}
								className='rounded-lg object-cover'
								priority={true}
							/>
						}
					</div>
				</div>
				
				
				<h2 className="max-w-full md:max-w-md font-sans-bold leading-[45px] 2xl:leading-[60px] text-[36px] 2xl:text-[48px] text-center md:text-left">
					{isHeadingReady && (data?.[0].title || 'Grow Your Sales With Trinitio')}
				</h2>

				{	
					cardsReady &&
					cardList?.map(({title, text}, ind)=>(
						<div key={`${ind}-${title}`} className={section4.card_shadow}>
							<div className="px-6 py-4">
								<div className="font-sans-bold text-2xl mb-2">{title}</div>
								<p className="font-sans-regular text-gray-700 text-17">
									{text}
								</p>
							</div>
						</div>
					))
				}

			</div>
		</section>
	)
}

export default HomeSection4;