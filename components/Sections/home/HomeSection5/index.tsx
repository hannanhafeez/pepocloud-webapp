import { HOME } from '@/services/ServiceUrl';
import fetchJson from 'lib/fetchJson';
import Image from 'next/image';
import React, { FC } from 'react'
import useSWR from 'swr';

import section5 from './section5.module.css'


const section5DataFetcher = () => Promise.all(Object.entries(HOME.section5).map((entry) => fetchJson(entry[1])))

// section5DataFetcher().then(console.log)

export type HomeSection5Props = {

}

const rowSvgSize = 50

const HomeSection5: FC<HomeSection5Props> = ({}) => {

	const { data, error } = useSWR('section5Data', section5DataFetcher);

	// console.log({ data, error });

	const everythingReady = data && Array.isArray(data) && !error

	const header = data?.[0]
	const body = data?.[1]
	const footer = data?.[2]

	return (
		<section className=''>
			<div className="container mx-auto py-10 md:py-[7.5rem] lg:py-16 lg:pb-28 gap-x-4">
				
				<div className='overflow-x-auto '>
					
					<table className="table-fixed  min-w-full text-dark">
						<thead className={section5.tableHeader}>
							<tr>
								<th></th>
								<th>{everythingReady && (header[0].heading1 || 'Features')}</th>
								<th>{everythingReady && (header[0].heading2 || 'Other Tools')}</th>
								<th>
									<div className='relative w-full min-h-[32px] h-full grid place-content-center'>
										{
											everythingReady && 
											<Image src={header[0].file||'/svg/trinitio-logo.svg'} alt='Header Logo' layout='fill'
												className='relative w-full h-full object-contain'
											/>
										}
									</div>
								</th>
							</tr>
						</thead>
						<tbody className={section5.tableBody}>
							{
								everythingReady &&
								(body?.error == 0) && 
								body.data.map(({ td1heading, td2heading, td0file, td0filea, td3heading3}:{[key in string]: string},ind:number)=>(
								<tr key={`${ind}`}>
									<td>
										<div>
												<Image src={td0file} alt='Header Logo' height={rowSvgSize} width={rowSvgSize} priority={true} loading='eager'/>
										</div>
										<div>
												<Image src={td0filea} alt='Header Logo' height={rowSvgSize} width={rowSvgSize} priority={true} loading='eager'/>
										</div>
									</td>
									<td>{td1heading}</td>
									<td>{td2heading}</td>
										<td><Image alt='check' src={td3heading3 || '/svg/green-check.svg'} width={23} height={23} priority={true} loading='eager'/></td>
								</tr>
								))
							}
						</tbody>
						<tfoot className={section5.tableFooter}>
							<tr>
								<td></td>
								<td>{everythingReady && (footer[0].heading1 || 'Overall Price')}</td>
								<td>{everythingReady && (footer[0].heading2 || '$150+ per month')}</td>
								<td>{everythingReady && (footer[0].heading3 || '$29 per month')}</td>
							</tr>
						</tfoot>
					</table>

				</div>

			</div>
		</section>
	)
}

export default HomeSection5;