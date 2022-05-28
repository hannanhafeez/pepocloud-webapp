import { HOME } from '@/services/ServiceUrl';
import fetchJson, { JSONResponse } from 'lib/fetchJson';
import Image from 'next/image';
import React, { FC } from 'react'
import useSWR from 'swr';

import commonCss from '.././common.module.css'
import section8 from './section8.module.css'

const section8DataFetcher = () => Promise.all(Object.entries(HOME.section8).map((entry)=>fetchJson(entry[1])))


// section8DataFetcher().then(console.log)

export type HomeSection8Props = {

}

const HomeSection8: FC<HomeSection8Props> = ({}) => {


	const { data, error } = useSWR('section8Data', section8DataFetcher);
	
	// console.log({ data, error });

	const everythingReady = data && Array.isArray(data) && !error

	const heading1Arr = data?.[0]
	const bullets1  = data?.[1]
	const image1Arr = data?.[2]
	
	const heading2Arr = data?.[3]
	const bullets2  = data?.[4]
	const image2Arr = data?.[5]
	
	const heading3Arr = data?.[6]
	const bullets3  = data?.[7]
	const image3Arr = data?.[8]


	return (
		<section className=''>
			<div className="container mx-auto py-10 md:py-[7.5rem] lg:py-20 gap-x-4">
				
				<div className='flex flex-col items-stretch gap-16 lg:gap-32'>

					{/* Part 1 */}
					<div className='flex flex-col gap-6 lg:gap-12 lg:flex-row'>
						<div className="flex-1 lg:flex-[6] aspect-[3/2.5] grid content-center pl-4">
							<div className='relative w-full aspect-[3/2.5] -left-6'>
								{
									everythingReady &&
									<Image alt='Section 8 Image 1' src={image1Arr[0].file} layout='fill'
										className='object-contain' priority={true}
									/>
								}
							</div>
						</div>

						<div className='flex-1 lg:flex-[4] flex flex-col justify-center gap-4'>
							<h2 className={section8.section_heading}>
								{everythingReady && (heading1Arr[0].title || 'Appointment Scheduling Made Easy')}
							</h2>

							<ul className={commonCss.list_style}>
								{
									everythingReady && 
									(bullets1 as [JSONResponse]).map(({title})=>(
										<li key={`${title}`}>{title}</li>
									))
								}
							</ul>
						</div>
					</div>
					
					{/* Part 2 */}
					<div className='flex flex-col-reverse gap-6 lg:gap-12 lg:flex-row'>
						<div className='flex-1 lg:flex-[4] flex flex-col justify-center gap-4'>
							<h2 className={section8.section_heading}>
								{everythingReady && (heading2Arr[0].title || 'Send Emails to Your Contects in Bulk Whenever You Want.')}
							</h2>

							<ul className={commonCss.list_style}>
								{
									everythingReady &&
									(bullets2 as [JSONResponse]).map(({ title }) => (
										<li key={`${title}`}>{title}</li>
									))
								}
							</ul>
						</div>

						<div className="flex-1 lg:flex-[6] aspect-[1/1] grid content-center lg:pl-4">
							<div className='relative w-full aspect-[1/1]'>
								{
									everythingReady &&
									<Image alt='Section 8 Image 2' src={image2Arr[0].file} layout='fill'
										className='relative object-contain' priority={true}
									/>
								}
							</div>
						</div>
					</div>

					{/* Part 3 */}
					<div className='flex flex-col gap-6 lg:gap-12 lg:flex-row'>
						<div className="flex-1 lg:flex-[6] aspect-[1/1] grid content-center pl-4">
							<div className='relative w-full aspect-[1/1] -left-6'>
								{
									everythingReady &&
									<Image alt='Section 8 Image 3' src={image3Arr[0].file} layout='fill'
										className='object-contain' priority={true}
									/>
								}
							</div>
						</div>

						<div className='flex-1 lg:flex-[5] flex flex-col justify-center gap-4'>
							<h2 className={section8.section_heading}>
								{everythingReady && (heading3Arr[0].title || 'Get in Touch With Your Visitors Faster Then Ever')}
							</h2>

							<ul className={commonCss.list_style}>
								{
									everythingReady &&
									(bullets3 as [JSONResponse]).map(({ title }) => (
										<li key={`${title}`}>{title}</li>
									))
								}
							</ul>
						</div>
					</div>

				</div>


			</div>
		</section>
	)
}

export default HomeSection8;