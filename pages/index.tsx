import type { InferGetServerSidePropsType, NextPage } from 'next'
import Header from '@/components/Header'

import HomeSection1 from '@/components/Sections/home/HomeSection1'
import HomeSection3 from '@/components/Sections/home/HomeSection3'
import HomeSection4 from '@/components/Sections/home/HomeSection4'
import HomeSection5 from '@/components/Sections/home/HomeSection5'
import HomeSection6 from '@/components/Sections/home/HomeSection6'
import HomeSection7 from '@/components/Sections/home/HomeSection7'
import HomeSection8 from '@/components/Sections/home/HomeSection8'
import Footer from '@/components/Footer'
import RocketSection from '@/components/Sections/common/RocketSection'
import WhySection from '@/components/Sections/common/WhySection'
import StoriesSection from '@/components/Sections/common/StoriesSection'
import TestimonialsSection from '@/components/Sections/common/TestimonialsSection'
import TrustedBySection from '@/components/Sections/common/TrustedBySection'
import fetchJson, { JSONResponse } from 'lib/fetchJson'
import { HOME } from '@/services/ServiceUrl'
import Head from 'next/head'


// Only first section uses data from server-side to save load time.

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({section1}) => {
	// console.log(section1);
	return (
		<>
			<Head>
				<title>Trinitio</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Header/>

			<main>
				<HomeSection1 heading={section1?.heading} subHeading={section1?.subHeading} img={section1?.img} bulk={section1?.bulk}/>
				<TrustedBySection/>
				<HomeSection3/>
				<HomeSection4/>
				<HomeSection5/>
				<HomeSection6/>
				<HomeSection7/>
				<HomeSection8/>
				<WhySection/>
				<StoriesSection/>
				<TestimonialsSection/>
				<RocketSection/>  
			</main>

			<Footer/>
		</>
	)
}

export const getServerSideProps = async function ({
}) {
	try {
		// const res = (await fetchJson(HOME.section1.logo)) as JSONResponse;
		const promiseAll = await Promise.all([
			(fetchJson(HOME.section1.heading)) as JSONResponse,
			(fetchJson(HOME.section1.subHeading)) as JSONResponse,
			(fetchJson(HOME.section1.logo)) as JSONResponse,
			(fetchJson(HOME.section1.all)) as JSONResponse
		])

		// console.log(promiseAll);
		
		if(!promiseAll[0].error){ //assuming that if one link resolves, every link will resolve!
			return {
				props:{
					section1:{
						heading: promiseAll[0][0].title,
						subHeading:promiseAll[1][0].title,
						img: ((promiseAll[2][0] as JSONResponse).file),		// Has image Section 1
						bulk: promiseAll[3]									// Has all the data below subheading Section 1
					}
				}
			}
		}
	} catch(e:any) {
		console.log(e);
	}
	return {
		props: {}, // will be passed to the page component as props
	}
}

export default Home
