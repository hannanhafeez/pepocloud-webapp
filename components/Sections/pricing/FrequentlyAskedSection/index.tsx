import React, { FC } from 'react'

import useSWR from 'swr';
import { PRICING } from '@/services/ServiceUrl';
import { fetcher } from 'lib/fetchJson';

export type StoriesSectionProps = {

}

const FrequentlyAskedSection: FC<StoriesSectionProps> = ({ }) => {

	const { data, error } = useSWR(PRICING.frequentlyAsked.heading, fetcher);
	const { data: cardList, error: cardsError } = useSWR(PRICING.frequentlyAsked.cards, fetcher);

	// console.log({ data, cardList,error});

	const isHeadingReady = data && Array.isArray(data) && !error
	const cardsReady = cardList && Array.isArray(cardList) && !cardsError

	return (
		<section className='bg-section_grey'>
			<div className="min-h-[392px] container mx-auto px-6 py-10 md:py-[7.5rem] lg:py-28 flex flex-col items-center gap-y-6 2xl:gap-9">


				<h2 className={'font-sans-bold text-4xl 2xl:text-5xl text-center'}>
					{isHeadingReady && (data?.[0].title || 'Frequently Asked Question')}
				</h2>

				<div className='w-full flex flex-col gap-3 lg:w-[60%]'>
					{
						cardsReady &&
						cardList?.map(({ title, text, orderNO }: { title: string, text: string, orderNO: number }, ind: number) => (
							<div key={`${title}-${ind}`} tabIndex={ind} className="collapse ring-1 ring-gray-300 rounded-sm collapse-plus group active:ring-0">
								<input type="checkbox" />
								<div className="collapse-title font-sans-semibold text-20 group-active:bg-white  ">
									{ind+1}. {title}
								</div>
								<div className="collapse-content font-sans-regular text-17 group-active:bg-white  ">
									<p>
										{text}
									</p>
								</div>
							</div>
						))
					}

				</div>

			</div>
		</section>
	)
}

export default FrequentlyAskedSection;