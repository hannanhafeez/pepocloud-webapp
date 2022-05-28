import Image from 'next/image';
import React, { FC } from 'react'

import commonCss from '@/styles/features/common.module.css'
import { FEATURES } from '@/services/ServiceUrl';
import useSWR from 'swr';
import { fetcher } from 'lib/fetchJson';

export type FeatureProps = {

}

const Feature: FC<FeatureProps> = ({ }) => {

	const { data, error } = useSWR(FEATURES.section3.heading, fetcher);
	const { data: cardList, error: cardsError } = useSWR(FEATURES.section3.cards, fetcher);

	// console.log({ data, cardList,error});

	const isHeadingReady = data && Array.isArray(data) && !error
	// const cardsReady = cardList && Array.isArray(cardList) && !cardsError

	return (
		<section className='bg-section_grey'>
			<div className='container mx-auto py-10 md:py-[7.5rem] lg:py-20 gap-x-8 flex flex-col lg:flex-row items-stretch gap-8 sm:gap-10'>
				
				<div className='flex-[1]'>
					<h2 className={commonCss.section_heading}>
						{isHeadingReady && (data?.[0].title || 'Send Emails to Your Contects in Bulk Whenever You Want.')}
					</h2>
				</div>

				<div className='flex-[2] flex flex-wrap gap-8'>

					{
						cardList?.map(({ id, title, text, file }: { id: string, title: string, text: string, file: string }, ind: number) => (
							<div key={id} className={commonCss.section_card}>
								<div>
									<Image alt={file.split('/').pop()} src={file}
										width={'100%'} height={'100%'}
										className='object-contain'
									/>
								</div>
								<h3>
									{title}
								</h3>
								<p>
									{text}
								</p>
							</div>
						))
					}
					
				</div>
			</div>
		</section>


	)
}

export default Feature;