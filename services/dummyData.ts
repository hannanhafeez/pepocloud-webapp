const free = {
	title: "Free",
	priceMonthly: 0,
	priceYearly: 0,
	buttonTitle: 'Sign up',
	belowButtonText: '(no credit card required)',
	popular: false,

	packages : [
		{
			title: "Appointment scheduling:",
			offeredFeatures: [
				{
					offered: true,
					title: '1 Active event type',
				},
				{
					offered: true,
					title: '1 email Calendar connections per user',
				},
				{
					offered: true,
					title: 'Unlimited One-off meetings',
				},
				{
					offered: true,
					title: 'Unlimited meeting notifications',
				},
				{
					offered: false,
					title: 'Custom branded appointment page',
				},
				{
					offered: false,
					title: 'Meeting email reminders',
				},
			]
		},
		{
			title: "Email marketing:",
			offeredFeatures: [
				{
					offered: true,
					title: '1 Active event type',
				},
				{
					offered: true,
					title: '1 email Calendar connections per user',
				},
				{
					offered: true,
					title: 'Unlimited One-off meetings',
				},
				{
					offered: true,
					title: 'Unlimited meeting notifications',
				},
				{
					offered: false,
					title: 'Custom branded appointment page',
				},
				{
					offered: false,
					title: 'Meeting email reminders',
				},
			]
		},
	]
}

const regular = {
	...free, 
	title: 'Regular', 
	priceMonthly: 29,
	priceYearly: 24,
	buttonTitle: 'Start my free trial'
}
const plus = {
	...free, 
	title: 'Plus', 
	priceMonthly: 39, 
	priceYearly: 32.5,
	buttonTitle: 'Start my free trial', 
	popular: true,
}

const enterprise = {
	...free, 
	title: 'Enterprise', 
	priceMonthly: 50, 
	priceYearly: 41.7,
	buttonTitle: 'Start my free trial',
}

export const packageList = [free, regular, plus, enterprise]

