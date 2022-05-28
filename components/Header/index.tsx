// import AlertSvg from '../svg/alert'

import React, { FC, useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { NextRouter, useRouter } from "next/router"
import useWindowPosition from "hooks/useWindowPosition"

const linkStyles = " block mt-4 lg:inline-block lg:mt-0 mr-6 "
const activeClasses = " text-app_green "
const linkHoverClasses = " hover:text-app_green "

const isActiveLink = (router: NextRouter, str: string) => linkStyles + (router.asPath === `${str}` ? activeClasses : '')
const isAboutActiveLink = (router: NextRouter, str: string) => linkStyles + (router.asPath.split('/')[1] === `${str}` ? activeClasses : '')

enum PageNames {
	home = "/",
	features = "/features",
	pricing = "/pricing",
}

type HeaderProps = {
	yOffsetForTintChange?: number
}

const Header: React.FC<HeaderProps> = ({yOffsetForTintChange = 265})=> {
	const router = useRouter()
	const dropDownDivRef = useRef<HTMLDivElement>(null)
	
	const onToggleClicked = useCallback(
		() => dropDownDivRef.current?.classList.toggle("hidden"),
		[]
	)

	const { y: scrollY = 0 } = useWindowPosition({ throttle: 20 }) || {};	
	
	return (
		<header className=' bg-white shadow-md sticky top-0 z-10'>
			<nav className="container mx-auto  flex items-center justify-between flex-wrap pt-6 pb-4 transition-all duration-500">
				
				{/* Left Logo */}
				<Link href={PageNames.home} passHref>
					<a className="relative self-stretch w-[250px]  aspect-[6/2] mr-6 hover:cursor-pointer">
						<Image src={'/svg/pepocloud.svg'} alt='Header Logo' layout='fill' priority
							className="-ml-1"
						/>
					</a>
				</Link>

				{/* Hamburger menu button */}
				<div className="block lg:hidden">
					<button className="flex items-center px-3 py-2 border rounded border-app_green hover:border-transparent text-app_green hover:text-white hover:bg-app_green"
						onClick={onToggleClicked}
					>
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
					</button>
				</div>

				{/* Link container */}
				<div ref={dropDownDivRef} className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
					
					<div className="text-base font-sans-semibold lg:flex lg:justify-center lg:flex-grow">
						<Link href={PageNames.features}>
							<a className={isActiveLink(router, PageNames.features) + linkHoverClasses}>
								Feature
							</a>
						</Link>
						<Link href={PageNames.pricing}>
							<a className={isActiveLink(router, PageNames.pricing) + linkHoverClasses}>
								Pricing
							</a>
						</Link>
						<Link href="/blog">
							<a className={isActiveLink(router, "/blog") + linkHoverClasses}>
								Blog
							</a>
						</Link>
						<Link href="/help">
							<a className={isActiveLink(router, "/help") + linkHoverClasses}>
								Help Center
							</a>
						</Link>
						<Link href="/about">
							<a className={isAboutActiveLink(router, "about") + linkHoverClasses}>
								About
							</a>
						</Link>
					</div>

					<div className='text-base font-sans-semibold '>
						<Link href="/">
							<a className="block mt-4 lg:inline-block lg:mt-0 hover:text-app_green mr-6">
								Login
							</a>
						</Link>
						<a href={'/'} className="inline-block px-6 py-4 leading-none border rounded-lg text-app_green border-app_green hover:border-transparent hover:text-white hover:bg-app_green mt-4 lg:mt-0">
							Sign up for free
						</a>
					</div>

					{
						(router.asPath.split('/')[1] === 'about') &&
						<div className="overflow-x-scroll lg:hidden">
							<div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-center mt-4 lg:top-[110px] min-h-[70px] bg-[rgba(255,255,255,0.5)]">
								<SubHeader router={router} greenLinks/>
							</div>
						</div>
					}
				</div>
				

			</nav>

			{
				(router.asPath.split('/')[1] === 'about') &&
				<div className="hidden absolute top-[100px]  w-full min-h-[70px] lg:flex justify-center items-center gap-4 bg-[rgba(255,255,255,0.7)]">
						<SubHeader router={router} greenLinks={scrollY > yOffsetForTintChange}/>
				</div>
			}
		</header>
	)
}


const subLinkStyles = " font-sans-medium text-15 xs:text-base text-center px-2 "
const activeWhiteSubClasses = " text-white border-b-4 border-app_green "
const activeGreenSubClasses = " text-app_green border-b-4 border-app_green "
const subLinkHoverClasses = " hover:text-white "
const subLinkHoverGreenClasses = " hover:text-app_green "

const isActiveSublink = (
	router: NextRouter, str: string, greenLinks: boolean
) => 	subLinkStyles + 
				(router.asPath.split('/')[2] === `${str}` ? (greenLinks ? activeGreenSubClasses : activeWhiteSubClasses) : '') +
				(greenLinks ? subLinkHoverGreenClasses : subLinkHoverClasses)

const SubHeader: FC<{ router: NextRouter, greenLinks?: boolean}> = ({router, greenLinks=false}) => {

	return(
		<>
			<Link href={'/about/who-we-are'}>
				<a className={isActiveSublink(router, 'who-we-are', greenLinks)}>
					Who we are & Why we developed this
				</a>
			</Link>
			<Link href={'/about/great-software'}>
				<a className={isActiveSublink(router, 'great-software', greenLinks)}>
					Great software
				</a>
			</Link>
			<Link href={'/about/employee-welfare'}>
				<a className={isActiveSublink(router, 'employee-welfare', greenLinks)}>
					Employee welfare
				</a>
			</Link>
			<Link href={'/about/giving-back'}>
				<a className={isActiveSublink(router, 'giving-back', greenLinks)}>
					Giving back
				</a>
			</Link>
			<Link href={'/about/our-team'}>
				<a className={isActiveSublink(router, 'our-team', greenLinks)}>
					Our Team
				</a>
			</Link>
			<Link href={'/about/why-us'}>
				<a className={ isActiveSublink(router, 'why-us', greenLinks)}>
					Why Us
				</a>
			</Link>
		</>
	)
}

export default Header;
