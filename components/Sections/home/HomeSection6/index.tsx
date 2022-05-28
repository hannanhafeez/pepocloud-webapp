import { HOME } from '@/services/ServiceUrl';
import { fetcher } from 'lib/fetchJson';
import Image from 'next/image';
import React, { FC } from 'react'
import useSWR from 'swr';

export type HomeSection6Props = {

}

const HomeSection6: FC<HomeSection6Props> = ({}) => {

	const { data, error } = useSWR(HOME.section6.heading, fetcher);
	const { data: imageList, error: imageError } = useSWR(HOME.section6.image, fetcher);
	const { data: paraList, error: paraError } = useSWR(HOME.section6.description, fetcher);

	// console.log({ data, imageList, paraList, error });

	const isHeadingReady = data && Array.isArray(data) && !error
	const imagesReady = imageList && Array.isArray(imageList) && !imageError
	const isParaReady = paraList && Array.isArray(paraList) && !paraError

	return (
		<section className='bg-section_grey'>
			<div className="container mx-auto py-10 md:py-[7.5rem] lg:py-28 gap-x-4">

				<div className='flex flex-col gap-12 lg:flex-row'>
					<div className="flex-1 lg:flex-[6] aspect-[3/2] grid content-center pl-4">
						<div className='relative w-full aspect-[3/2]'>
							<div className='absolute -left-5 -top-5 w-full h-full bg-app_light_green rounded-lg' />
							{
								// imagesReady &&
								<Image alt='video-img' src={imagesReady ? imageList?.[0]?.file : '/loading-img.gif'} layout='fill'
									placeholder='blur' blurDataURL={'/loading-img.gif'} quality={100}
									className='rounded-lg object-cover'
								/>
							}
						</div>
					</div>

					<div className='flex-1 lg:flex-[4] flex flex-col justify-center gap-4'>
						<h2 className='font-sans-bold text-4xl 2xl:text-5xl'>
							{isHeadingReady && (data?.[0].title || 'Welcome to Trinitio’s Family!')}
						</h2>
						<p className='font-sans-medium font-14 2xl:font-17'>
							{isParaReady && (paraList?.[0].title || '')}
							<a href='' className='text-app_green'>{' Read More..'}</a>
						</p>
					</div>
				</div>

			</div>
		</section>
	)
}

export default HomeSection6;