import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import type { InferGetServerSidePropsType, NextPage } from 'next'
import Header from '@/components/Header'

import Head from 'next/head'
import Footer from '@/components/Footer'

import section1Css from '@/styles/privacy-policy/section1.module.css'
import section2Css from '@/styles/privacy-policy/section2.module.css'

// Only first section uses data from server-side to save load time.
const Bspan: FC<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>> = (props)=> (
	<span {...props} className="font-sans-bold">
		{props.children}
	</span>
)

const PrivacyPolicy: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({}) => {
	// console.log(section1);
	return (
	<>

		<Head>
			<title>Trinitio</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>

		<Header />

		<main>
			{/* Top section */}
			<section className="relative">
				{/* <div className={section1Css.section1_blue_overlay}></div> */}
				<div className={section1Css.text_container}>
					<h2>{'Privacy Policy'}</h2>
				</div>
			</section>

			<section className={section2Css.section2}>
				<div className={section2Css.section2_container}>

					<div className={section2Css.data_container}>
						<div>
							<h3>PRIVACY NOTICE</h3>
						</div>
						<div>
							<h4>Last updated July 23, 2021</h4>

							<p>
								Thank you for choosing to be part of our community at Trinitar Solutions LLP
								(
								<Bspan>
									&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;
								</Bspan>
								)
								. We are committed to protecting your personal information and your right to
								privacy. If you have any questions or concerns about this privacy notice, or our
								practices with regards to your personal information, please contact us at
								support@trinitio.com.
							</p>

							<p>
								When you visit our website <a>https://trinitio.com</a> (the <Bspan>
									&quot;Website&quot;</Bspan>)
								, and more generally, use any of our services
								(the <Bspan>&quot;Services&quot;</Bspan>, which include the Website),
								we appreciate that you are trusting us with your personal information. We take your
								privacy very seriously. In this privacy notice, we seek to explain to you in the
								clearest way possible what information we collect, how we use it and what rights you
								have in relation to it. We hope you take some time to read through it carefully, as
								it is important. If there are any terms in this privacy notice that you do not agree
								with, please discontinue use of our Services immediately.
							</p>

							<p>
								This privacy notice applies to all information collected through our Services
								(which, as described above, includes our Website ), as well as, any related
								services, sales, marketing or events.
							</p>

							<p>
								<Bspan>
									Please read this privacy notice carefully as it will help you understand what we
									do with the information that we collect.
								</Bspan>
							</p>
						</div>
					</div>

					<div className={section2Css.data_container}>
						<div>
							<h3>1. WHAT INFORMATION DO WE COLLECT?</h3>
						</div>
						<div>
							<h4>Personal information you disclose to us</h4>

							<p>
								<i>
									<Bspan>In Short:</Bspan> We collect personal information that you provide to us.
								</i>
							</p>

							<p>
								We collect personal information that you voluntarily provide to us when you register
								on the Website, express an interest in obtaining information about us or our
								products and Services, when you participate in activities on the Website or
								otherwise when you contact us.
							</p>

							<p>
								The personal information that we collect depends on the context of your interactions
								with us and the Website , the choices you make and the products and features you
								use. The personal information we collect may include the following:
							</p>

							<p>
								<Bspan>Personal Information Provided by You.</Bspan> We collect names; phone
								numbers; email addresses; usernames; passwords; and other similar information.
							</p>

							<p>
								<Bspan>Payment Data.</Bspan> We may collect data necessary to process your payment
								if you make purchases, such as your payment instrument number (such as a credit card
								number), and the security code associated with your payment instrument. All payment
								data is stored by FastSpring LLC . You may find their privacy notice link(s) here:
								&nbsp;
								<a href="https://fastspring.com/privacy/">https://fastspring.com/privacy/</a> .
							</p>

							<p>
								<Bspan>Social Media Login Data.</Bspan> We may provide you with the option to
								register with us using your existing social media account details, like your
								Facebook, Twitter or other social media account. If you choose to register in this
								way, we will collect the information described in the section called &quot;<a>HOW DO
									WE HANDLE YOUR SOCIAL LOGINS?</a>&quot; below.
							</p>

							<p>All personal information that you provide to us must be true, complete and accurate,
								and you must notify us of any changes to such personal information.</p>


							<h4>
								Information automatically collected
							</h4>

							<p>
								<i>
									<Bspan>In Short:</Bspan> Some information — such as your Internet Protocol (IP)
									address and/or browser and device characteristics — is collected automatically
									when you visit our Website .
								</i>
							</p>
							<p>
								We automatically collect certain information when you visit, use or navigate the
								Website. This information does not reveal your specific identity (like your name or
								contact information) but may include device and usage information, such as your IP
								address, browser and device characteristics, operating system, language preferences,
								referring URLs, device name, country, location, information about how and when you
								use our Website and other technical information. This information is primarily
								needed to maintain the security and operation of our Website, and for our internal
								analytics and reporting purposes.
							</p>
							<p>
								Like many businesses, we also collect information through cookies and similar
								technologies. You can find out more about this in our Cookie Notice:
								<a>https://trinitio.com/cookie-policy.</a>
							</p>
							<p>
								The information we collect includes:
							</p>
							<ul>
								<li>
									Log and Usage Data. Log and usage data is service-related, diagnostic, usage and
									performance information our servers automatically collect when you access or use
									our Website and which we record in log files. Depending on how you interact with
									us, this log data may include your IP address, device information, browser type
									and settings and information about your activity in the Website (such as the
									date/time stamps associated with your usage, pages and files viewed, searches
									and other actions you take such as which features you use), device event
									information (such as system activity, error reports (sometimes called &apos;crash
									dumps&apos;) and hardware settings).
								</li>
								<li>
									Device Data. We collect device data such as information about your computer,
									phone, tablet or other device you use to access the Website. Depending on the
									device used, this device data may include information such as your IP address
									(or proxy server), device and application identification numbers, location,
									browser type, hardware model Internet service provider and/or mobile carrier,
									operating system and system configuration information.
								</li>
								<li>
									Location Data. We collect location data such as information about your device&apos;s
									location, which can be either precise or imprecise. How much information we
									collect depends on the type and settings of the device you use to access the
									Website. For example, we may use GPS and other technologies to collect
									geolocation data that tells us your current location (based on your IP address).
									You can opt out of allowing us to collect this information either by refusing
									access to the information or by disabling your Location setting on your device.
									Note however, if you choose to opt out, you may not be able to use certain
									aspects of the Services.
								</li>
							</ul>
						</div>
					</div>

					<div className={section2Css.data_container}>
						<div>
							<h3>2. HOW DO WE USE YOUR INFORMATION?</h3>
						</div>
						<div>
							<p>
								<i>
									<Bspan>In Short:</Bspan> We process your information for purposes based on
									legitimate business interests, the
									fulfillment of
									our contract with you, compliance with our legal obligations, and/or your consent.
								</i>
							</p>
							<p>
								We use personal information collected via our Website for a variety of business purposes
								described below. We
								process your personal information for these purposes in reliance on our legitimate
								business interests, in order
								to enter into or perform a contract with you, with your consent, and/or for compliance
								with our legal
								obligations. We indicate the specific processing grounds we rely on next to each purpose
								listed below.
							</p>
							<p>
								We use the information we collect or receive:
							</p>
								<ul>
								<li>
									<Bspan>To facilitate account creation and logon process.</Bspan> If you choose to
									link your account with us
									to a third-party account (such as your Google or Facebook account), we use the
									information you allowed us to
									collect from those third parties to facilitate account creation and logon process
									for the performance of the
									contract. See the section below headed &quot;HOW DO WE HANDLE YOUR SOCIAL LOGINS?&quot; for
									further information.To
									facilitate account creation and logon process. If you choose to link your account
									with us to a
									third-party account (such as your Google or Facebook account), we use the
									information you allowed us to
									collect from those third parties to facilitate account creation and logon process
									for the performance of the
									contract. See the section below headed &quot;<a> DO WE HANDLE YOUR SOCIAL
										LOGINS?</a>&quot; for further information.
								</li>
								<li>
									<Bspan>To post testimonials.</Bspan> We post testimonials on our Website that may
									contain personal information.
									Prior to
									posting a testimonial, we will obtain your consent to use your name and the content
									of the testimonial. If you
									wish to update, or delete your testimonial, please contact us at
									support@trinitio.com and be sure to include
									your name, testimonial location, and contact information.
								</li>
								<li>
									<Bspan>Request feedback.</Bspan> We may use your information to request
									feedback and to contact you about your use of our Website.
								</li>
								<li>
									<Bspan>To enable user-to-user communications.</Bspan> We may use your information in order to enable
									user-to-user
									communications with each user&apos;s consent.
								</li>
								<li>
									<Bspan>To manage user accounts.</Bspan> We may use your information for the purposes of managing our account and
									keeping it in
									working order.
								</li>
								<li>
									<Bspan>To send administrative information to you.</Bspan> We may use your personal information to send you
									product,
									service
									and new feature information and/or information about changes to our terms, conditions, and policies.
								</li>
								<li>
									<Bspan>To protect our Services.</Bspan> We may use your information as part of our efforts to keep our Website
									safe and secure
									(for example, for fraud monitoring and prevention).
								</li>
								<li>
									<Bspan>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory
										requirements or in connection with our contract.</Bspan>
								</li>
								<li>
									<Bspan>To respond to legal requests and prevent harm.</Bspan> If we receive a subpoena or other legal request,
									we may need to
									inspect the data we hold to determine how to respond.
								</li>
								<li>
									<Bspan>Fulfill and manage your orders.</Bspan> We may use your information to fulfill and manage your orders,
									payments,
									returns, and exchanges made through the Website.
								</li>
								<li>
									<Bspan>Administer prize draws and competitions.</Bspan> We may use your information to administer prize draws
									and competitions
									when you elect to participate in our competitions.
								</li>
								<li>
									<Bspan>To deliver and facilitate delivery of services to the user.</Bspan> We may use your information to
									provide you
									with the
									requested service.
								</li>
								<li>
									<Bspan>To respond to user inquiries/offer support to users.</Bspan> We may use your information to respond to
									your inquiries
									and solve any potential issues you might have with the use of our Services
								</li>
								<li>
									<Bspan>To send you marketing and promotional communications.</Bspan> We and/or our third-party marketing
									partners may
									use the
									personal information you send to us for our marketing purposes, if this is in accordance with your marketing
									preferences. For example, when expressing an interest in obtaining information about us or our Website,
									subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can
									opt-out of our marketing emails at any time (see the &quot;<a>WHAT ARE YOUR PRIVACY RIGHTS?</a>&quot; below).
								</li>
								<li>
									<Bspan>Deliver targeted advertising to you.</Bspan> We may use your information to develop and display
									personalized content
									and advertising (and work with third parties who do so) tailored to your interests and/or location and to
									measure its effectiveness. For more information see our Cookie Notice:
									<a>https://trinitio.com/cookie-policy</a>
								</li>
								</ul>

								
						</div>
					</div>

			

					<div className={section2Css.data_container}>
						<div>
							<h3>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h3>
						</div>
						<div>
							<p>
								<i>
									<Bspan>In Short:</Bspan> We only share information with your consent, to comply with laws, to provide you with
									services, to
									protect your rights, or to fulfill business obligations.
								</i>
							</p>
							<p>
								We may process or share your data that we hold based on the following legal basis:
							</p>

							<ul>
								<li>
									<Bspan>Consent:</Bspan> We may process your data if you have given us specific consent to use your personal information for a
									specific purpose.
								</li>
								<li>
									<Bspan>Legitimate Interests:</Bspan> We may process your data when it is reasonably necessary to achieve our legitimate
									business interests.
								</li>
								<li>
									<Bspan>Performance of a Contract:</Bspan> Where we have entered into a contract with you, we may process your personal
									information to fulfill the terms of our contract.
								</li>
								<li>
									<Bspan>Legal Obligations:</Bspan> We may disclose your information where we are legally required to do so in
											order to
										comply
									with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in
									response to a court order or a subpoena (including in response to public authorities to meet national security
									or law enforcement requirements).
								</li>
								<li>
									<Bspan>Vital Interests:</Bspan> We may disclose your information where we believe it is necessary to
									investigate, prevent, or
									take action regarding potential violations of our policies, suspected fraud, situations involving potential
									threats to the safety of any person and illegal activities, or as evidence in litigation in which we are
									involved.
								</li>
							</ul>
							<p>
								More specifically, we may need to process your data or share your personal information in the following
								situations:
							</p>
							<ul>
								<li>
									<Bspan>Business Transfers.</Bspan> We may share or transfer your information in connection with, or during
									negotiations of,
									any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another
									company.
								</li>
							</ul>

						</div>
					</div>

					<div className={section2Css.data_container}>
						<div>
							<h3>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>
						</div>
						<div>
							<p>
								<i>
									<Bspan>In Short:</Bspan> We may use cookies and other tracking technologies to collect and store your information.
								</i>
							</p>
							<p>
								We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store
								information. Specific information about how we use such technologies and how you can refuse certain cookies is
								set out in our Cookie Notice: <a>https://trinitio.com/cookie-policy</a>.
							</p>
						</div>
					</div>

					<div className={section2Css.data_container}>
						<div>
							<h3>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h3>
						</div>
						<div>
							<p>
								<i>
									<Bspan>In Short:</Bspan> If you choose to register or log in to our services using a social media account, we may have access
									to certain information about you.
								</i>
							</p>
							<p>
								Our Website offers you the ability to register and login using your third-party social media account details
								(like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile
								information about you from your social media provider. The profile information we receive may vary depending on
								the social media provider concerned, but will often include your name, email address, friends list, profile
								picture as well as other information you choose to make public on such social media platform.
							</p>
							<p>
								We will use the information we receive only for the purposes that are described in this privacy notice or that
								are otherwise made clear to you on the relevant Website. Please note that we do not control, and are not
								responsible for, other uses of your personal information by your third-party social media provider. We
								recommend that you review their privacy notice to understand how they collect, use and share your personal
								information, and how you can set your privacy preferences on their sites and apps.
							</p>
						</div>
					</div>

					<div className={section2Css.data_container}>
						<div>
							<h3>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
						</div>
						<div>
							<p>
								<i>
									<Bspan>In Short:</Bspan> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy
									notice unless otherwise required by law.
								</i>
							</p>
							<p>
								We will only keep your personal information for as long as it is necessary for the purposes set out in this
								privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or
								other legal requirements). No purpose in this notice will require us keeping your personal information for
								longer than the period of time in which users have an account with us.
							</p>
							<p>
								When we have no ongoing legitimate business need to process your personal information, we will either delete or
								anonymize such information, or, if this is not possible (for example, because your personal information has
								been stored in backup archives), then we will securely store your personal information and isolate it from any
								further processing until deletion is possible.
							</p>
						</div>
					</div>
					
					<div className={section2Css.data_container}>
						<div>
							<h3>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
						</div>
						<div>
							<p>
								<i>
									<Bspan>In Short:</Bspan> We aim to protect your personal information through a system of organizational and technical
									security measures.
								</i>
							</p>
							<p>
								We have implemented appropriate technical and organizational security measures designed to protect the security
								of any personal information we process. However, despite our safeguards and efforts to secure your information,
								no electronic transmission over the Internet or information storage technology can be guaranteed to be 100%
								secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties
								will not be able to defeat our security, and improperly collect, access, steal, or modify your information.
								Although we will do our best to protect your personal information, transmission of personal information to and
								from our Website is at your own risk. You should only access the Website within a secure environment.
							</p>
						</div>
					
					</div>

					<div className={section2Css.data_container}>
						<div>
							<h3>8. DO WE COLLECT INFORMATION FROM MINORS?</h3>
						</div>
						<div>
							<p>
								<i>
									<Bspan>In Short:</Bspan> We do not knowingly collect data from or market to children under 18 years of age.
								</i>
							</p>
							<p>
								We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you
								represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such
								minor dependent’s use of the Website. If we learn that personal information from users less than 18 years of
								age has been collected, we will deactivate the account and take reasonable measures to promptly delete such
								data from our records. If you become aware of any data we may have collected from children under age 18, please
								contact us at support@trinitio.com.
							</p>
						</div>
					</div>

					<div className={section2Css.data_container}>
						<div>
							<h3>9. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
						</div>
						<div>
							<p>
								<i>
									<Bspan>In Short:</Bspan> In some regions, such as the European Economic Area (EEA) and United Kingdom (UK), you have rights
									that allow you greater access to and control over your personal information. You may review, change, or
									terminate your account at any time.
								</i>
							</p>
							<p>
								In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may
								include the right (i) to request access and obtain a copy of your personal information, (ii) to request
								rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if
								applicable, to data portability. In certain circumstances, you may also have the right to object to the
								processing of your personal information. To make such a request, please use the <a>contact details</a> provided below.
								We will consider and act upon any request in accordance with applicable data protection laws.
							</p>
							<p>
								If we are relying on your consent to process your personal information, you have the right to withdraw your
								consent at any time. Please note however that this will not affect the lawfulness of the processing before its
								withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful
								processing grounds other than consent.
								If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal information,
								you also have the right to complain to your local data protection supervisory authority. You can find their
								contact details here: <a>http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>
							</p>
							<p>
								If you are a resident in Switzerland, the contact details for the data protection authorities are available
								here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">https://www.edoeb.admin.ch/edoeb/en/home.html</a>.
							</p>
							<p>
								If you have questions or comments about your privacy rights, you may email us at support@trinitio.com.
							</p>
							
							<h4>Account Information</h4>
							<p>
								If you would at any time like to review or change the information in your account or terminate your account,
								you can:
							</p>
							<ul>
								<li>
									Log in to your account settings and update your user account.
								</li>
								<li>
									Contact us using the contact information provided.
								</li>
							</ul>
							<p>
								Upon your request to terminate your account, we will deactivate or delete your account and information from our
								active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems,
								assist with any investigations, enforce our Terms of Use and/or comply with applicable legal requirements.
							</p>
							<p>
								<Bspan><u>Cookies and similar technologies:</u></Bspan> Most Web browsers are set to accept cookies by default. If you prefer, you
								can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies
								or reject cookies, this could affect certain features or services of our Website. To opt-out of interest-based
								advertising by advertisers on our Website visit <a>http://www.aboutads.info/choices/</a>. For further information,
								please see our Cookie Notice: <a>https://trinitio.com/cookie-policy</a>.
							</p>
							<p>
								<Bspan><u>Opting out of email marketing:</u></Bspan> You can unsubscribe from our marketing email list at any time by clicking on the
								unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then
								be removed from the marketing email list — however, we may still communicate with you, for example to send you
								service-related emails that are necessary for the administration and use of your account, to respond to service
								requests, or for other non-marketing purposes. To otherwise opt-out, you may:
							</p>
							<ul>
								<li>
									Contact us using the contact information provided.
								</li>
								<li>
									Access your account settings and update your preferences.
								</li>
							</ul>
						</div>
					</div>

					<div className={section2Css.data_container}>
						<div>
							<h3>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
						</div>
						<div>
							<p>
								Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;)
								feature or setting you can activate to signal your privacy preference not to have data about your online
								browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and
								implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any
								other mechanism that automatically communicates your choice not to be tracked online. If a standard for online
								tracking is adopted that we must follow in the future, we will inform you about that practice in a revised
								version of this privacy notice.
							</p>
						</div>
					</div>

					<div className={section2Css.data_container}>
						<div>
							<h3>11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h3>
						</div>
						<div>
							<p>
								<i>
									<Bspan>In Short:</Bspan> Yes, if you are a resident of California, you are granted specific rights regarding access to your
									personal information.
								</i>
							</p>
							<p>
								California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law, permits our users who are
								California residents to request and obtain from us, once a year and free of charge, information about
								categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the
								names and addresses of all third parties with which we shared personal information in the immediately preceding
								calendar year. If you are a California resident and would like to make such a request, please submit your
								request in writing to us using the contact information provided below.
							</p>
							<p>
								If you are under 18 years of age, reside in California, and have a registered account with the Website, you
								have the right to request removal of unwanted data that you publicly post on the Website. To request removal of
								such data, please contact us using the contact information provided below, and include the email address
								associated with your account and a statement that you reside in California. We will make sure the data is not
								publicly displayed on the Website, but please be aware that the data may not be completely or comprehensively
								removed from all our systems (e.g. backups, etc.).
							</p>
							
							<h4>CCPA Privacy Notice</h4>
							<p>
								The California Code of Regulations defines a &quot;resident&quot; as:
							</p>
							<ol>
								<li>
										every individual who is in the State of California for other than a temporary or transitory purpose and
								</li>
								<li>
										every individual who is domiciled in the State of California who is outside the State of California for a
									temporary or transitory purpose
								</li>
							</ol>
							<p>
								All other individuals are defined as &quot;non-residents.&quot;
							</p>
							<p>
								If this definition of &quot;resident&quot; applies to you, we must adhere to certain rights and obligations regarding
								your personal information.
							</p>
							<p>
								<Bspan>What categories of personal information do we collect?</Bspan>
							</p>
							<p>
								We have collected the following categories of personal information in the past twelve (12) months:
							</p>

							<div className="overflow-x-scroll">
								{/* Table start */}
								<table className='table-auto min-w-[786px] table-normal divide-y text-left'>
									<thead>
										<tr>
											<th>Category</th>
											<th>Examples</th>
											<th>Collected</th>
										</tr>
									</thead>
									<tbody className='divide-y divide-[#00000009]'>
										<tr>
											<td>A. Identifiers</td>
											<td>
												Contact details, such as real name, alias, postal address, telephone or mobile contact
												number, unique personal identifier, online identifier, Internet Protocol address,
												email address and account name
											</td>
											<td>
												NO
											</td>
										</tr>
										<tr>
											<td>B. Personal information categories listed in the California Customer Records statute</td>
											<td>
												Name, contact information, education, employment, employment history and financial information
											</td>
											<td>
												YES
											</td>
										</tr>
										<tr>
											<td>C. Protected classification characteristics under California or federal law</td>
											<td>
												Gender and date of birth
											</td>
											<td>
												NO
											</td>
										</tr>
										<tr>
											<td>D. Commercial information</td>
											<td>
												Transaction information, purchase history, financial details and payment information
											</td>
											<td>
												NO
											</td>
										</tr>
										<tr>
											<td>E. Biometric information</td>
											<td>
												Fingerprints and voiceprints
											</td>
											<td>
												NO
											</td>
										</tr>
										<tr>
											<td>F. Internet or other similar network activity</td>
											<td>
												Browsing history, search history, online behavior, interest data, and interactions
												with our and other websites, applications, systems and advertisements
											</td>
											<td>
												NO
											</td>
										</tr>
										<tr>
											<td>G. Geolocation data</td>
											<td>
												Device location
											</td>
											<td>
												NO
											</td>
										</tr>
										<tr>
											<td>H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
											<td>
												Images and audio, video or call recordings created in connection with our business activities
											</td>
											<td>
												NO
											</td>
										</tr>
										<tr>
											<td>I. Professional or employment-related information</td>
											<td>
												Business contact details in order to provide you our services at a business level, job title 
												as well as work history and professional qualifications if you apply for a job with us
											</td>
											<td>
												NO
											</td>
										</tr>
										<tr>
											<td>J. Education Information</td>
											<td>
												Student records and directory information
											</td>
											<td>
												NO
											</td>
										</tr>
										<tr>
											<td>K. Inferences drawn from other personal information</td>
											<td>
												Inferences drawn from any of the collected personal information listed above to create a profile
													or summary about, for example, an individual’s preferences and characteristics
											</td>
											<td>
												NO
											</td>
										</tr>
									</tbody>
								</table>
								{/* table end  */}
							</div>
							<p>
								We may also collect other personal information outside of these categories instances where you interact with us in-person, online, or by phone or mail in the context of:
							</p>
							<ul>
								<li>
									Receiving help through our customer support channels;
								</li>
								<li>
									Participation in customer surveys or contests; and
								</li>
								<li>
									Facilitation in the delivery of our Services and to respond to your inquiries.
								</li>
							</ul>

							<h4>How do we use and share your personal information?</h4>

							<p>
								More information about our data collection and sharing practices can be found in this privacy notice and our Cookie Notice: <a href='https://trinitio.com/cookie-policy'>https://trinitio.com/cookie-policy.</a>
							</p>
							<p>
								You may contact us by visiting <a href='https://trinitio.com/contact'>https://trinitio.com/contact</a>, or by referring to the contact details at the bottom of this document
							</p>
							<p>
								If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.
							</p>

							<h4>Will your information be shared with anyone else?</h4>

							<p>
								We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.
							</p>
							<p>
								We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be &quot;selling&quot; of your personal data.
							</p>
							<p>
								We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be &quot;selling&quot; of your personal data.
							</p>
							<p>
								Trinitar Solutions LLP has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding 12 months. Trinitar Solutions LLP will not sell personal information in the future belonging to website visitors, users and other consumers.
							</p>

							<h4>Your rights with respect to your personal data</h4>

							<p>
								<u>Right to request deletion of the data - Request to delete</u>
							</p>
							<p>
								You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation or any processing that may be required to protect against illegal activities.
							</p>
							<p>
								<u>Right to be informed - Request to know</u>
							</p>
							<p>
								Depending on the circumstances, you have a right to know:
							</p>
							<ul>
								<li>
									whether we collect and use your personal information;
								</li>
								<li>
									the categories of personal information that we collect;
								</li>
								<li>
									the purposes for which the collected personal information is used;
								</li>
								<li>
									whether we sell your personal information to third parties;
								</li>
								<li>
									the categories of personal information that we sold or disclosed for a business purpose;
								</li>
								<li>
									the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and
								</li>
								<li>
									the business or commercial purpose for collecting or selling personal information.
								</li>
							</ul>
							<p>
								In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
							</p>
							<p>
								<u>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</u>
							</p>
							<p>
								We will not discriminate against you if you exercise your privacy rights.
							</p>
							<p>
								<u>Verification process</u>
							</p>
							<p>
								Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
							</p>
							<p>
								We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. If, however, we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity, and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.
							</p>
							<p>
								<u>Other privacy rights</u>
							</p>
							<ul>
								<li>
									you may object to the processing of your personal data
								</li>
								<li>
									you may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the data
								</li>
								<li>
									you can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.
								</li>
								<li>
									you may request to opt-out from future selling of your personal information to third parties. Upon receiving a request to opt-out, we will act upon the request as soon as feasibly possible, but no later than 15 days from the date of the request submission.
								</li>
							</ul>
							<p>
								To exercise these rights, you can contact us by visiting <a href='https://trinitio.com/contact'>https://trinitio.com/contact</a>, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.
							</p>
						</div>
					</div>


					<div className={section2Css.data_container}>
						<div>
							<h3>12. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
						</div>
						<div>
							<p>
								<u>
									<Bspan>In Short:</Bspan> Yes, we will update this notice as necessary to stay compliant with relevant laws.
								</u>
							</p>
							<p>
								We may update this privacy notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
							</p>
						</div>
					</div>

					<div className={section2Css.data_container}>
						<div>
							<h3>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
						</div>
						<div>
							<p>
								If you have questions or comments about this notice, you may email us at support@trinitio.com or by post to:
							</p>
							<p>
								Trinitar Solutions LLP 99A/3 South Street Chatrapatti, TamilNadu 626102  India
							</p>
						</div>
					</div>

					<div className={section2Css.data_container}>
						<div>
							<h3>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
						</div>
						<div>
							<p>
								Based on the applicable laws of your country, you may have the right to request access to the personal
								 information we collect from you, change that information, or delete it in some circumstances. 
								 To request to review, update, or delete your personal information, please 
								 visit: <a href='https://trinitio.com/contact'>https://trinitio.com/contact</a>.
							</p>
							<p>
								This privacy policy was created using <a>Termly’s Privacy Policy Generator</a>.
							</p>
						</div>
					</div>


				</div>
			</section>
		</main>

		<Footer />
	</>
	)
}

export const getServerSideProps = function ({
}) {
	return {
		props: {}, // will be passed to the page component as props
	}
}

export default PrivacyPolicy