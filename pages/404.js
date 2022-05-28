import { useRouter } from "next/router"

export default function Custom404() {
	const router = useRouter()
	return (
		<div className="flex gap-4 p-4 flex-col items-center justify-center min-h-screen bg-app_blue text-white text-center">
			<h1 className="font-sans font-extrabold text-[16rem] leading-[16rem]">404</h1>
			
			<h2 className="font-sans font-extrabold text-[2rem]">Oops! This Page is Not Found.</h2>
			
			<h3 className="font-sans text-[19px]">The requested page dose not exist</h3>
			
			<button className="btn bg-gray-300 rounded-md p-2 text-black text-base"
				onClick={()=> router.push('/')}
			>
				Back to Home
			</button>
		</div>
	)
}