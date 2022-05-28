import { HOME } from '@/services/ServiceUrl';
import { fetcher, JSONResponse } from 'lib/fetchJson';
import Image from 'next/image';
import React, { FC } from 'react'
import useSWR from 'swr';

import section3 from './section3.module.css'


export type HomeSection3Props = {

}

const HomeSection3: FC<HomeSection3Props> = ({}) => {

	const { data, error } = useSWR(HOME.section3.heading, fetcher);
	const { data: imageList, error: imageError } = useSWR(HOME.section3.images, fetcher);

	// console.log({ data, imageList,error});

	const isHeadingReady = data && Array.isArray(data) && !error
	const imagesReady = imageList && Array.isArray(imageList) && !imageError

	return (
		<section className='bg-section_grey min-h-[420px]'>
			<div className="container mx-auto py-10 md:py-[7.5rem] lg:py-20 gap-x-4 text-center">
				<h2 className="font-sans-bold text-[36px] 2xl:text-[48px]">
					{isHeadingReady && (data?.[0].title || 'Recognised By')}
				</h2>

				<div>
					<div className={section3.brand_img_parent}>
						{
							imagesReady &&
							imageList.map(({ file }, ind) => (
								<Image key={file} alt={file} src={file}
									width="100%" height="150px"
									objectFit='contain'
									className={'relative h-[150px] w-full'} 
									priority={true} loading='eager'
								/>
							))
						}

					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeSection3;