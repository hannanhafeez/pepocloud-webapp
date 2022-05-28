import Image from 'next/image';
import React, { FC } from 'react'

import commonCss from '@/styles/features/common.module.css'
import useSWR from 'swr';
import { FEATURES } from '@/services/ServiceUrl';
import { fetcher } from 'lib/fetchJson';

export type FeatureSection4Props = {

}

const FeatureSection4: FC<FeatureSection4Props> = ({ }) => {
	const section4Data = [
		{
			img: '/svg/features/chat-window.svg',
			heading: 'Let your visitor schedule an appointment with you right from the chat window',
			description: 'There will be a “Book an Appointment” button at the top of the chat window so your website visitors can book an appointment with you anytime during the chat session just clicking the button.',
		},
		{
			img: '/svg/features/chat-support.svg',
			heading: 'Respond to your customers’ queries in seconds via live chat',
			description: 'You or your team will be notified when your visitor clicks the chat button so you can chat with them instantly.'
		},
		{
			img: '/svg/features/chatbot.svg',
			heading: 'Our chat bot will work 24/7 for you tirelessly',
			description: 'Can’t afford to have an agent 24/7? No problem, simply feed our chatbot with preset questions and answers in easy steps. Our chatbot will answer your visitors questions 24/7.'
		},
	]

	const { data, error } = useSWR(FEATURES.section4.heading, fetcher);
	const { data: cardList, error: cardsError } = useSWR(FEATURES.section4.cards, fetcher);

	// console.log({ data, cardList,error});

	const isHeadingReady = data && Array.isArray(data) && !error
	// const cardsReady = cardList && Array.isArray(cardList) && !cardsError

	return (
		<section>
			<div className='container mx-auto py-10 md:py-[7.5rem] lg:py-20 gap-x-8 flex flex-col lg:flex-row items-stretch gap-8 sm:gap-10'>
				
				<div className='flex-[1]'>
					<h2 className={commonCss.section_heading}>
						{isHeadingReady && (data?.[0].title || 'Get in Touch With Your Visitors Faster Then Ever')}
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

export default FeatureSection4;