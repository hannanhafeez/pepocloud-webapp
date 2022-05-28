import React, { FC } from 'react'
import Image from 'next/image';

import styles from '@/styles/common/TrustedBySection.module.css'
import useSWR from 'swr';
import { COMMON } from '@/services/ServiceUrl';
import fetchJson, { JSONResponse } from 'lib/fetchJson';


export type TrustedBySectionProps = {

}

const TrustedBySection: FC<TrustedBySectionProps> = ({}) => {

	const {data,error} = useSWR(COMMON.trustedBy.heading, fetchJson);
	const {data: imageList, error: imageError} = useSWR(COMMON.trustedBy.images, fetchJson);
	
	// console.log({ data, imageList,error});
	
	const isHeadingReady = (data as JSONResponse) && Array.isArray(data as JSONResponse) && !error
	const imagesReady = (imageList as Array<JSONResponse>) && Array.isArray(imageList as Array<JSONResponse>) && !imageError

	return (
		<section className="min-h-[420px]">
			<div className="container mx-auto px-6 py-10 md:py-[7.5rem] lg:py-28 gap-x-4 text-center">
				<h2 className="font-sans-bold text-8">
					{isHeadingReady && ((data as JSONResponse)?.[0].title || 'Trusted by the world’s leading brands')}
				</h2>

				<div>
					<div className={styles.brand_img_parent}>
						{
							imagesReady && 
							(imageList as Array<JSONResponse>).map(({file}, ind)=>(
									<Image key={file}  alt={file} src={file}
										width="100%" height="55px"
										objectFit='contain'
										className={'relative h-[55px] w-full'} 
										loading='eager'
									/>
							))
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TrustedBySection;