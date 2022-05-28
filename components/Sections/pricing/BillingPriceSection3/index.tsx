import React, { FC, Fragment, useState } from 'react'

import css from '@/styles/pricing/BillingPriceSection.module.css'

import BillingTick from "components/svg/BillingTick.svg";
import BillingCross from "components/svg/BillingCross.svg";
import Detail from "components/svg/Detail.svg";
import { packageList } from 'services/dummyData';


export type BillingPriceSectionProps = {

}

const BillingPriceSection: FC<BillingPriceSectionProps> = ({ }) => {
	const [monthly, setMonthly] = useState(true);

	const plans = [
		{
			subheading: 'Appointment Scheduling',
			features: [
				{
					title: 'Unlimited scheduling appointments',
					free: 'true', regular: 'true', plus: 'true', enterprise: 'true'
				},
				{
					title: 'Number of email calendar connections',
					free: '1', regular: '2', plus: '3', enterprise: '4'
				},
				{
					title: 'Unique personalized meeting link',
					free: 'true', regular: 'true', plus: 'true', enterprise: 'true'
				},
				{
					title: 'Meeting confirmation and cancellation emails',
					free: 'true', regular: 'true', plus: 'true', enterprise: 'true'
				},
				{
					title: 'Meeting reminder, and follow-up emails',
					free: 'false', regular: 'true', plus: 'true', enterprise: 'true'
				},
				{
					title: 'Number of Active Event types',
					free: '1', regular: 'Unlimited', plus: 'Unlimited', enterprise: 'Unlimited'
				},
				{
					title: 'Uniqu booking page for your team',
					free: 'false', regular: 'true', plus: 'true', enterprise: 'true'
				},
			]
		}
	]

	const buttons: {[key in string] : string} = {
		free: 'Sign up',
		regular: 'Start my free trial',
		plus: 'Start my free trial',
		enterprise: 'Start my free trial'
	}

	return (
		<section className='overflow-x-auto pb-14 md:pb-[7.5rem] lg:pb-24'>
			<table className={css.tableStyle}>
				<thead>
					<tr>
						<th>
							<h3>Billed</h3>
							<div className={css.toggleContainer}>
								<label className="cursor-pointer label font-sans-medium text-17">
									<span className={`${monthly ? 'text-app_green': 'text-gray-400'}`}>Monthly</span>
									<input type="checkbox" checked={!monthly} className="toggle toggle-primary mx-3"
										onChange={(e)=>setMonthly(!e.target.checked)}
									/>
									<span className={`${!monthly ? 'text-app_green' : 'text-gray-400'}`}>Annually</span>
								</label>
							</div>
						</th>
						
						{
							packageList.map(({title, priceMonthly, priceYearly})=>(
								<th key={title}>
									<h3>{title}</h3>
									<div className={css.price}>
										<div className="">
											<p>${monthly ? priceMonthly: priceYearly}<span>{'/mo'}</span></p>
										</div>
									</div>
								</th>
							))
						}

					</tr>
				</thead>


				<tbody>
					{
						plans.map(({subheading, features})=>(
							<Fragment key={subheading}>
								<tr className={css.subheadingRow}>
									<td>
										{subheading}
									</td>
									{
										packageList.map(({ title, priceMonthly }) => (<td key={title}></td>))
									}
								</tr>
								{
									features.map(({title, free, regular, plus, enterprise})=>(
										<tr key={title}>
											<td>
												<p>
													{title}{' '}
													<span data-tip={title} className="tooltip tooltip-primary">
														<Detail />
													</span>
												</p>
											</td>
											
											<td>{dataMap[free] || free}</td>
											<td>{dataMap[regular] || regular}</td>
											<td>{dataMap[plus] || plus}</td>
											<td>{dataMap[enterprise] || enterprise}</td>
										</tr>
									))
								}
							</Fragment>
						))
					}

					{
						plans.map(({ subheading, features }) => (
							<Fragment key={subheading}>
								<tr className={css.subheadingRow}>
									<td>
										{subheading}
									</td>
									{
										packageList.map(({ title, priceMonthly }) => (<td key={title}></td>))
									}
								</tr>
								{
									features.map(({ title, free, regular, plus, enterprise }) => (
										<tr key={title}>
											<td>
												<p>
													{title}{' '}
													<span data-tip={title} className="tooltip tooltip-primary">
														<Detail />
													</span>
												</p>
											</td>

											<td>{dataMap[free] || free}</td>
											<td>{dataMap[regular] || regular}</td>
											<td>{dataMap[plus] || plus}</td>
											<td>{dataMap[enterprise] || enterprise}</td>
										</tr>
									))
								}
							</Fragment>
						))
					}


				</tbody>

				<tfoot>
					<tr>
						<td>
						</td>
						{
							Object.keys(buttons).map((key) => (
								<td key={key}>
									<button>
										{buttons[key]}
									</button>
								</td>
							))
						}

					</tr>
				</tfoot>

				
			</table>
		</section>
	)
}

const dataMap: {[key in string]: any} = {
	false: <BillingCross/>,
	true: <BillingTick/>,
}

const OfferedFeaturRow: FC<{offered: boolean, title:string, detail?:string}> = (props)=>{
	const {offered, title, detail} = props
	return (
		<tr>
			<td>
				{
					offered ? <BillingTick /> : <BillingCross/>
				}
			</td>
			<td>
				{title}{' '}
				<span data-tip={detail || title} className="tooltip tooltip-primary">
					<Detail />
				</span>
			</td>
		</tr>
	)
}


export default BillingPriceSection;