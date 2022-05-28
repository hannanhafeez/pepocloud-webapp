import { JSONResponse } from 'lib/fetchJson';
import Image from 'next/image';
import React, { FC } from 'react'

import section1 from './section1.module.css'

export type HomeSection1Props = {
	heading?: string, subHeading?: string, 
	img?:string, bulk?:JSONResponse
}

const HomeSection1: FC<HomeSection1Props> = ({
	heading, subHeading, img, bulk
}) => { 
	// console.log({ heading, subHeading, img, bulk});

	return (
		<section className="bg-[url('/svg/bg-blobs.svg')] bg-cover bg-bottom">
			<div className="container mx-auto py-10 md:py-[4rem] lg:py-28 xl:py-8 2xl:py-20 gap-x-4 lg:flex lg:items-center lg:justify-between">

				<div className='flex-1 flex flex-col gap-5 2xl:gap-8'>
					<h2 className="text-4xl 2xl:text-6xl font-sans-bold text-gray-900 ">
						{heading}
					</h2>

					<div>
						<h3 className="text-18 2xl:text-20  font-sans-bold">
							{subHeading}
						</h3>

						<ul className={section1.list_style}>
							{
								(bulk?.[0].desc1a as [string]).map((str,ind)=>(
									<li key={`${ind}-${str}`}>{str}</li>
								))
							}
						</ul>

						<div className="my-4 inline-flex gap-x-4 items-center">
							<a href="#" className="px-5 py-3 rounded font-sans-bold text-14 2xl:text-17  text-white bg-app_green">
								{ (bulk?.[2].buttonText || 'Start Now')}
							</a>
							<h4 className="font-sans-medium text-15 2xl:text-18">
								{ (bulk?.[2].buttonDesc || '(no credit card required)')}
							</h4>
						</div>

						<div className="grid grid-flow-row lg:grid-flow-col ">
							<div className={section1.section1_buttom_item}>
								<h5>+2070</h5>
								<span>
									{ (bulk?.[2].trialDesc || 'trials started in the last 7 days')}
								</span>
							</div>
							<div className='min-h-full w-[2px] block mx-2 bg-slate-300' />
							<div className={section1.section1_buttom_item}>
								<h5>+1920</h5>
								<span>
									{
										 (bulk?.[2].referedDesc || 'people referred Trinitio to their friends in the last 7 days')}
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className=" mt-8 flex-1 lg:mt-0 lg:flex-shrink-0">
					<Image alt='section-img' src={img || '/imgs/section1-img.png'} objectFit="contain"
						layout="responsive" width={"100%"} height={"100%"} 
						priority={true} quality={100}
					/>
				</div>
			</div>
		</section>
	)
}

export default HomeSection1;