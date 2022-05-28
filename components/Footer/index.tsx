// import AlertSvg from '../svg/alert'

import Image from "next/image"
import React, { useCallback, useRef } from "react"
import css from '@/styles/Footer.module.css'
import Link from "next/link"

type FooterProps = {
}

const Footer: React.FC<FooterProps> = ({ }) => {
	const dropDownDivRef = useRef<HTMLDivElement>(null)


	return (
		<footer className='bg-footer_grey shadow-md sticky top-0'>
			<div className="container mx-auto pt-10 md:pt-[7.5rem] lg:pt-28 flex flex-col items-stretch gap-y-6 2xl:gap-9">
				
				<div className="flex flex-col md:flex-row min-h-[100px] gap-8">
					<div className="flex-1 flex flex-col gap-6 ">
						{/* Left Logo */}
						<div className="flex items-center text-white mr-6 -ml-1">
							<Image src={'/svg/trinitio-logo.svg'} alt='Header Logo' height={42} width={195} />
						</div>
						<q className="font-sans-semibold text-[28px] text-app_blue">
							{"Schedule meeting, "}
							<span className="text-app_green">
								email marketing,
							</span>
							{" live chat - all work together"}
						</q>
					</div>
					
					<div className="flex-[4] grid grid-flow-col grid-rows-2 sm:grid-rows-1 gap-8 sm:gap-4">
						<div className={css.vertical_section}>
							<h2>About</h2>
							<ul>
								<li><Link href="/about">About Trinitio</Link></li>
								<li><a href="">Contact Sales</a></li>
								<li><a href="">Career</a></li>
								<li><a href="">Security</a></li>
								<li><Link href="/privacy-policy">Privacy Policy</Link></li>
								<li><Link href="/terms-of-use">Terms of Use</Link></li>
							</ul>
						</div>
						
						<div className={css.vertical_section}>
							<h2>Support</h2>
							<ul>
								<li><a href="">Help Center</a></li>
								<li><a href="">Video Tutorials</a></li>
								<li><a href="">Cookie Setting</a></li>
							</ul>
						</div>
						
						<div className={css.vertical_section}>
							<h2>Solutions</h2>
							<ul>
								<li><a href="">Customer Success</a></li>
								<li><a href="">Sales</a></li>
								<li><a href="">Recruiting</a></li>
								<li><a href="">Education</a></li>
								<li><a href="">Individuals</a></li>
							</ul>
						</div>
						
						<div className={css.vertical_section}>
							<h2>Popular Features</h2>
							<ul>
								<li><a href="">Notification</a></li>
								<li><a href="">Mobile App</a></li>
								<li><a href="">Availability</a></li>
								<li><a href="">Education</a></li>
								<li><a href="">Individuals</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div className="h-0.25 bg-gray-200 mt-8 mb-4"></div>

				<div className="flex flex-col lg:flex-row items-center gap-6">
					<div className="text-center lg:text-left">
						<h2 className="font-sans-bold text-app_blue text-[24px]">Enter the fold</h2>
						<h4 className="font-sans-medium text-dark text-17">Subscribe to our newsletter.</h4>
					</div>

					<div className={css.input_container}>
						<input type="email" name="email" id="email" placeholder={`What's your email?`}/>
						
						<button type="submit">
							Subscribe
						</button>
					</div>

					<div className={css.social_link_container}>
						<a href="#">
							<Image alt="twitter" src={'/svg/twitter.svg'} objectFit="contain" 
								height={25} width={40} layout="fixed"
							/>
						</a>
						
						<a href="#">
							<Image alt="facebook" src={'/svg/facebook.svg'} objectFit="contain" 
								height={25} width={40} layout="fixed"
							/>
						</a>
						
						<a href="">
							<Image alt="group" src={'/svg/group.svg'} objectFit="contain" 
								height={25} width={40} layout="fixed"
							 />	
						</a>
						
						<a href="">
							<Image alt="youtube" src={'/svg/youtube.svg'} objectFit="contain" 
								height={25} width={40} layout="fixed"
							/>
						</a>
					</div>
				</div>

				<div className={css.bottom_link_container}>
					<Link href="/terms-of-use">Terms of Use</Link>
					<Link href="/privacy-policy">Privacy Policy</Link>
					<a href="">Cookie Policy</a>
					<a href="">©PageSpeedy 2021</a>
				</div>

			</div>
		</footer>
	)
}

export default Footer;
