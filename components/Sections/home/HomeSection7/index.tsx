import { HOME } from '@/services/ServiceUrl';
import { fetcher } from 'lib/fetchJson';
import Image from 'next/image';
import React, { FC } from 'react'
import useSWR from 'swr';

import section7 from './section7.module.css'


export type HomeSection7Props = {

}

const sectionSvgSize = 120

const HomeSection7: FC<HomeSection7Props> = ({}) => {

	const { data, error } = useSWR(HOME.section7.heading, fetcher);
	const { data: imageList, error: imageError } = useSWR(HOME.section7.image, fetcher);
	const { data: paraList, error: paraError } = useSWR(HOME.section7.description, fetcher);

	// console.log({ data, imageList, paraList, error });

	const isHeadingReady = data && Array.isArray(data) && !error
	const imagesReady = imageList && Array.isArray(imageList) && !imageError
	const isParaReady = paraList && Array.isArray(paraList) && !paraError

	return (
		<section className='bg-app_blue text-white'>
			<div className="container mx-auto px-2 py-10 md:py-[7.5rem] lg:py-20 gap-x-4 text-center">
				<h2 className="font-sans-bold text-[36px] 2xl:text-[48px]">
					{isHeadingReady && (data?.[0].title || 'Trinitio’s Intergrations!')}
				</h2>

				<p className='font-sans-medium text-15 2xl:text-17 my-2'>
					{isParaReady && (paraList?.[0].title || 'Connect Trinitio to all industry-leading websites and platforms via dedicated integrations')}
				</p>

				<div>
					<div className={section7.brand_img_parent}>
						{	
							imagesReady &&
							imageList.map(({file}, ind) => (
								<Image key={`${file}-${ind}`} alt={file} 
									src={`${file}`} objectFit="contain"
									layout="fixed" height={sectionSvgSize} width={sectionSvgSize} className={section7.brand_img_style}
								/>
							))
						}

					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeSection7;