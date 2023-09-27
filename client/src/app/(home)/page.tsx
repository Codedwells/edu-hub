import Image from 'next/image'
import splashImage from '../../../public/edu_splash.svg'
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'

export default function Home() {
	return (
		<section className='lg:mt-38 mt-32'>
			<div>
				<h1
					className={`font-Poppins select-none text-center text-4xl font-bold tracking-tight sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]`}
				>
					The AI <span className='text-emerald-600'>Education</span>{' '}
					Hub
				</h1>
				<h4 className='mx-auto mt-4 line-clamp-3 max-w-[30rem] select-none scroll-m-20 text-center font-Montserrat text-lg font-[500] tracking-tight text-gray-400'>
					The AI Education Hub is a platform for students to learn and
					access information efficiently.
				</h4>
			</div>

			<Image
				src={splashImage.src}
				width={700}
				height={700}
				alt='edu hub splash image'
				className='mx-auto'
			/>

			<div className='flex animate-bounce cursor-pointer items-center justify-center text-gray-700 transition-transform duration-1000 hover:opacity-80 dark:text-white'>
				<p className='text-lg font-[500]'>Learn more</p>
				<MdOutlineKeyboardDoubleArrowDown size={18} />
			</div>

			<div className='mb-[8rem] mt-[4rem] space-x-4 flex flex-col md:flex-row items-center justify-center'>
				<HomeCard
					title='AI Powered Solutions'
					description='We use artificial intelligence to provide solutions to problems'
					image='Card content'
					footer='card footer'
				/>

				<HomeCard
					title='Stored Solutions'
					description='We store solutions to problems for easy access.No need to remember your query'
					image='Card content'
					footer='card footer'
				/>

				<HomeCard
					title='Global Search'
					description='Search for solutions to problems from other users around the world'
					image='Card content'
					footer='card footer'
				/>
			</div>
		</section>
	)
}

interface IHomeCardProps {
	title: string
	description: string
	image: string
	footer: string
}

const HomeCard = ({ title, description, image, footer }: IHomeCardProps) => {
	return (
		<Card className='w-[350px]'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<p>{image}</p>
			</CardContent>
			<CardFooter>
				<p>{footer}</p>
			</CardFooter>
		</Card>
	)
}
