import { FC, useCallback, useRef } from 'react'
import Image from 'next/image';

import css from '@/styles/common/TestimonialsSection.module.css'
import RightArrow from '../../../svg/RightArrow';
import useSWR from 'swr';
import { COMMON } from '@/services/ServiceUrl';
import { fetcher } from 'lib/fetchJson';

export type TestimonialsSectionProps = {

}

const TestimonialsSection: FC<TestimonialsSectionProps> = ({}) => {

	const { data, error } = useSWR(COMMON.testimonials.heading, fetcher);
	const { data: cardList, error: cardsError } = useSWR(COMMON.testimonials.cards, fetcher);

	// console.log({ data, cardList,error});

	const isHeadingReady = data && Array.isArray(data) && !error
	const cardsReady = cardList && Array.isArray(cardList) && !cardsError



	const ref = useRef<HTMLDivElement>(null)

	const onBtnPressed = useCallback((dir: 'L'|'R') => {
		ref.current?.scrollBy({ left: (dir === 'L' ? -1 : 1) * ref.current?.clientWidth, behavior:'smooth', })
	},[])
	
	const length = cardList?.length || 0

	return (
		<section className=''>
			<div className="container mx-auto py-10 md:py-[7.5rem] lg:py-28 flex flex-col items-center gap-y-6 2xl:gap-9">

				<h1 className={css.section_heading_small}>
					TESTIMONIALS
				</h1>
				<h2 className={css.section_heading}>
					{isHeadingReady && (data?.[0].title || 'See our user feedback')}
				</h2>

				
				<div className='mt-6 rounded-3xl overflow-hidden w-full corner-fix' >
					<div ref={ref} className={css.scrollContainer}>
						{
							cardsReady &&
							cardList?.map(({ name, occupation, text, file }: { name:string, occupation: string, text: string, file?: string }, ind: number) => (
								<div key={`${ind}-${name}`} className={css.testimonial_card}>
									<div className={css.testimonial_card_inner}>
										<div className={`relative border-white border-2 w-[100px] h-[100px] rounded-full overflow-hidden`}>
											<Image alt="" layout='fill'
												className="relative w-full h-full rounded-full object-cover"
												src={file || "/svg/user-vector.svg"}
											/>
										</div>

										<div className='text-center mb-3'>
											<h3 className='font-sans-semibold text-18 text-app_blue mb-1'>
												{name}
											</h3>
											<h4 className='font-sans-medium font-base text-[#606C80]'>
												{occupation}
											</h4>
										</div>

										<p>
											{text}
											{/* {' '} */}
										</p>

										<div className='flex gap-10 mt-6'>
											<button disabled={ind === 0} className={'rotate-180 ' + ((ind === 0) ? 'text-[#c1cada]' : 'text-dark')}
												onClick={() => onBtnPressed('L')}
											>
												<RightArrow long />
											</button>

											<span className='font-sans-semibold text-18 text-dark'>
												{ind + 1}/{length}
											</span>

											<button disabled={ind === length - 1} className={(ind === length - 1) ? 'text-[#c1cada]' : 'text-dark'}
												onClick={() => onBtnPressed('R')}
											>
												<RightArrow long />
											</button>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</section>
	)
}

const avatarSize = 90

export default TestimonialsSection;