import Image from 'next/image';
import React, { FC } from 'react'

import css from '@/styles/common/RocketSection.module.css'
import RightArrow from '../../../svg/RightArrow';
import { COMMON } from '@/services/ServiceUrl';
import { fetcher } from 'lib/fetchJson';
import useSWR from 'swr';


export type RocketSectionProps = {

}

const RocketSection: FC<RocketSectionProps> = ({}) => {
	const { data, error } = useSWR(COMMON.rocketSectoin.everything, fetcher);
	
	// console.log({ data,error});

	const everythingReady = data && Array.isArray(data) && !error
	
	return (
		<section className={css.clouded_section} /* style={{backgroundImage: "url('/svg/cloud.svg')"}} */>
			<div className='absolute w-1/5 -left-[10%] xl:-left-[6%] bottom-10 h-3/5'>
				<Image src={'/svg/rocket.svg'} layout='fill'
					alt='rocket' className='object-contain '
				/>
			</div>
			<div className="relative container mx-auto py-10 md:py-[7.5rem] lg:py-20 gap-8 lg:gap-16 xl:gap-24 flex flex-col lg:flex-row items-stretch">
				<div className='flex-1 flex flex-col gap-4'>
					<h2 className="font-sans-bold text-[26px] 2xl:text-[32px]">
						{everythingReady && (data[0].title || 'Never allow your customer leave without contactin you first')}
					</h2>

					<p className='font-sans-regular text-15 text-[#D9E9FF] 2xl:text-17 my-2'>
						{everythingReady && (data[0].desc1 || 'Join 10000+ clients who already achieved the PageSpeed of 95+')}
					</p>
				</div>

				{/* <div className='flex-1 flex flex-col gap-8 md:max-w-[60%] lg:max-w-[30%] md:self-center lg:self-start'> */}
				<div className='flex-1 flex flex-col gap-2 lg:gap-[32px]  md:self-center lg:self-start'>
					<button className={css.greenButton}>
						{everythingReady && (data[0].buttontext || 'Start for free')}
						<RightArrow />
					</button>

					<p className='font-sans-semibold text-15 text-[#D9E9FF] 2xl:text-17 my-2 self-center md:self-stretch'>
						{everythingReady && (data[0].desc2 || 'No credit card required. Get started in seconds.')}
					</p>
				</div>
			</div>
		</section>
	)
}

export default RocketSection;