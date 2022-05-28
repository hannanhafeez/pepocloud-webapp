import React, { FC, useState } from 'react'

import css from '@/styles/pricing/PrincingSection.module.css'

import Tick from "components/svg/Tick.svg";
import Cross from "components/svg/Cross.svg";
import Detail from "components/svg/Detail.svg";

import { packageList } from 'services/dummyData';
// import { fetcher } from '../../../../lib/fetchJson';


export type PricingSectionProps = {

}

const PricingSection: FC<PricingSectionProps> = ({ }) => {
	const [monthly, setMonthly] = useState(true);

	// const { data, error } = useSWR('/api/user/123', fetcher)

	return (
		<section data-theme="mytheme">
			<div className="relative container mx-auto pt-16 pb-10 md:pb-[7.5rem] lg:pb-20 gap-x-4 text-center flex flex-col items-center gap-4 sm:gap-10">
				<div className="absolute -top-10 bg-white shadow-2xl shadow-gray-200 p-3 tabs tabs-boxed font-sans-semibold text-17">
					<a className={`tab tab-lg text-17 ${monthly && 'tab-active'}`} onClick={() => setMonthly(true)}>
						Monthly
					</a>
					<a className={`tab tab-lg text-17 ${!monthly && 'tab-active'}`} onClick={() => setMonthly(false)}>
						Annually
					</a>
				</div>

				<h3 className='font-sans-medium text-17'>Annually you have 2 months free</h3>

				<div className={css.pricing_container}>
					
					{
						packageList.map((tier, ind)=>(
							<div key={`${tier.title}`} className={css.pricing_card}>
								
								{/* Popular Tag */}
								{	tier.popular &&
									<div className={css.pricing_card_popular_tag}>
										<h5>Most Popular</h5>
									</div>
								}

								<div className={css.card_upper_half}>
									<h4 >
										{tier.title}
									</h4>

									<div className={css.price}>
										<div className="stat">
											<p>${monthly ? tier.priceMonthly : tier.priceYearly}<span>{'/mo'}</span></p>
										</div>
									</div>

									<div className={css.pricing_button_container}>
										<button>
											{tier.buttonTitle}
										</button>

										<p>{tier.belowButtonText}</p>
									</div>
								</div>

								<div className={css.vertical_dash_separator}/>
								
								<div className={css.card_lower_half}>
									{
										tier.packages.map(({
											offeredFeatures, title
										},ind)=>(
											<table key={`${title}-${ind}`}>
												<thead>
													<tr>
														<th></th>
														<th>{title}</th>
													</tr>
												</thead>
												<tbody>
													{
														offeredFeatures.map((data)=>(
															<OfferedFeaturRow key={data.title} {...data}/>
														))
													}
												</tbody>
											</table>

										))
									}
								</div>
							</div>
						))
					}
					
				</div>
			</div>
		</section>
	)
}

const OfferedFeaturRow: FC<{offered: boolean, title:string, detail?:string}> = (props)=>{
	const {offered, title, detail} = props
	return (
		<tr>
			<td>
				{
					offered ? <Tick /> : <Cross/>
				}
			</td>
			<td data-tip={detail || title} className="text-left tooltip tooltip-primary tooltip-top">
				{title}{' '}
				<span>
					<Detail />
				</span>
			</td>
		</tr>
	)
}


export default PricingSection;