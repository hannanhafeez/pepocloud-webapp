const testBaseUrl: {url?:string} =  {
	// url: 'http://192.168.18.23:8080'				// Comment this line to switch to ebmacshost api
}

const baseUrl = testBaseUrl.url || 'https://api-trinitio-lemj9.ondigitalocean.app'

const extension = '/api'

export const URL = baseUrl + extension

export const HOME = {
	section1:{
		heading: URL + '/commonheading/homeLandingtext',
		subHeading: URL + '/commonheading/subHomeLandingtext',
		bullets: URL + '/commonheading/homeLandingListtext',
		logo: URL + '/logo/homeLandingtext',
		all: URL + '/home/section1'
	},
	
	// Section 2 = Trusted By
	
	section3:{	// Recognized By
		heading: URL + '/commonheading/RecognizedBy',
		images: URL + '/logo/recognizedBy',
	},
	
	section4:{	// Grow Your Sales With Trinitio
		heading: URL + '/commonheading/GrowSales',
		image: URL + '/logo/growYourSales',
		cards: URL + '/comonheadingwithdescription/growYourSales',
	},
	
	section5:{	// Table Section
		header: URL + "/home/section5/header",
		body: URL + "/home/section5a",
		footer: URL + "/home/section5/footer",
	},
	
	section6:{	// Welcome to Trinitio Family
		heading: URL + '/commonheading/WelcomeToTrinitio',
		description: URL + '/commonheading/WelcomeToTrinitiodesc',
		image: URL + '/logo/WelcomeToTrinitio',
	},
	
	section7:{	// Welcome to Trinitio Family
		heading: URL + '/commonheading/TrinitioIntegrations',
		description: URL + '/commonheading/TrinitioIntegrationsSubHeading',
		image: URL + '/logo/trinitioIntegration',
	},
	
	section8:{	
		// Appointment Scheduling Made Easy (Bullet Section 1)
		heading1: URL + '/commonheading/BulletSection1Heading',
		bullets1: URL + '/commonheading/BulletSection1HeadingList',
		image1: URL + '/logo/BulletSection1Heading',
		
		// Send Emails tou Your Contacts (Bullet Section 2)
		heading2: URL + '/commonheading/BulletSection2Heading',
		bullets2: URL + '/commonheading/BulletSection2HeadingList',
		image2: URL + '/logo/BulletSection2Heading',

		// Get in Touch With Your Visitors (Bullet Section 3)
		heading3: URL + '/commonheading/BulletSection3Heading',
		bullets3: URL + '/commonheading/BulletSection3HeadingList',
		image3: URL + '/logo/BulletSection3Heading',
	},

}

export const FEATURES = {
	headingSection: {
		heading: URL + '',
	},
	section2: {		// Appointment Scheduling made Easy
		heading: URL + '/commonheading/FeatureSection1Heading',
		cards: URL + '/features/ase',
	},
	section3: {		// Appointment Scheduling made Easy
		heading: URL + '/commonheading/FeatureSection2Heading',
		cards: URL + '/features/sendemailstoyourcontects',
	},
	section4: {		// Appointment Scheduling made Easy
		heading: URL + '/commonheading/FeatureSection3Heading',
		cards: URL + '/features/getintouch',
	},

}

export const PRICING = {
	headingSection: {
		heading: URL + '',
	},
	section2: {		
		// heading: URL + '/commonheading/FeatureSection1Heading',
		// cards: URL + '/features/ase',
	},
	frequentlyAsked: {		// Appointment Scheduling made Easy
		heading: URL + '/commonheading/FrequentlyAsked',
		cards: URL + '/pricing/faq',
	},

	section4: { 	// Blue Image
		img: URL + "/logo/pricingSection4",
	}

}


export const COMMON = {
	trustedBy:{
		heading: URL + '/commonheading/TrustedBy',
		images: URL + '/logo/trusted',
	},

	whyTrinitio:{
		heading: URL + '/commonheading/WhyTrinitio',
		image: URL + '/logo/whytrinto',
		cards: URL + '/whoarewe/trinito',
	},
	
	storiesFrom:{
		heading: URL + '/commonheading/Stories',
		cards: URL + '/whoarewe/storyformcustomer',
	},
	
	testimonials:{
		heading: URL + '/commonheading/Testimonials',
		cards: URL + '/whoarewe/testimonials',
	},
	
	rocketSectoin:{
		everything: URL + '/nayc',
	},
	
}