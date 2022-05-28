import React, { FC } from 'react'
import Image from 'next/image';

import css from '@/styles/common/StoriesSection.module.css'
import RightArrow from '../../../svg/RightArrow';
import useSWR from 'swr';
import { COMMON } from '@/services/ServiceUrl';
import { fetcher } from 'lib/fetchJson';

export type StoriesSectionProps = {

}

const StoriesSection: FC<StoriesSectionProps> = ({}) => {
	
	const { data, error } = useSWR(COMMON.storiesFrom.heading, fetcher);
	const { data: cardList, error: cardsError } = useSWR(COMMON.storiesFrom.cards, fetcher);

	// console.log({ data, cardList,error});

	const isHeadingReady = data && Array.isArray(data) && !error
	const cardsReady = cardList && Array.isArray(cardList?.data) && !cardsError
	
	return (
		<section className=''>
			<div className="container mx-auto py-10 md:py-[7.5rem] lg:py-28 flex flex-col gap-y-6 2xl:gap-9">

				<h2 className={css.section_heading}>
					{isHeadingReady && (data?.[0].title || 'Stories From Trintio Customers')}
				</h2>

				<div className='grid md:[grid-template-columns:auto_auto_auto] gap-6'>	
					{
						cardsReady &&
						cardList?.data.map(({title, text,file}:{title:string, text:string, file:string}, ind:number)=>(
							<GreenCardView key={`${title}-${ind}`}
								{...{title, text, file}}
							/>
						))
					}
				</div>
			</div>
		</section>
	)
}

const imageSize = 50
const GreenCardView: FC<{title:string, text:string, file: string}> = ({
	title, text, file
})=>(
	<div className={css.section_card}>
		<div>
			<Image alt='img' src={file} width={imageSize} height={imageSize}
				className={'object-contain'}
			/>
		</div>
		<div className='flex flex-col gap-3'>
			<h3>
				{title}
			</h3>
			<p>
				{text}
			</p>
		</div>
		<VisitNowButton title='Read Story' />
	</div>
)

const VisitNowButton: FC<{ title?: string } & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({title, ...props}) =>(
	<button {...props}>
		{title} <RightArrow />
	</button>
)

export default StoriesSection;