import Image from 'next/image'
import splashImage from '../../../public/edu_splash.svg'
import {
	MdOutlineKeyboardDoubleArrowDown,
	MdOutlineWhatshot
} from 'react-icons/md'
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
			<div className='px-4'>
				<h1
					className={`font-Poppins select-none text-center text-4xl font-bold tracking-tight sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]`}
				>
					The AI <span className='text-emerald-600'>Education</span>{' '}
					Hub
				</h1>
				<h4 className='mx-auto mt-4 line-clamp-3 max-w-[20rem] select-none scroll-m-20 text-center font-Montserrat text-lg font-[500] tracking-tight text-gray-400 md:max-w-[30rem]'>
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

			<div className='mb-[8rem] mt-[4rem] flex flex-col flex-wrap  items-center justify-center gap-4 md:flex-row md:space-y-0 md:px-4 lg:space-x-4'>
				<HomeCard
					title='AI Powered Solutions'
					description='We use artificial intelligence to provide solutions to problems.This makes it fast and efficient'
					image={splashImage}
				/>

				<HomeCard
					title='Stored Solutions'
					description='We store solutions to problems for easy access.No need to remember your query to get a previous solution'
					image={splashImage}
				/>

				<HomeCard
					title='Global Search'
					description='Search for solutions to problems from other users around the world and get solutions other users have provided'
					image={splashImage}
				/>

				<HomeCard
					title='Global Question Feed'
					description='View questions from other users around the world and provide solutions to them,or learn from the solutions provided by other users'
					image={splashImage}
				/>
			</div>

			<div className='mb-[8rem] mt-[12rem]'>
				<CallToAction />
			</div>

			<div className='mx-4 mb-[8rem] grid rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:grid-cols-2 lg:mx-[20%]'>
				<TestimonialCard
					image={splashImage}
					title='This is my custom title'
					name='Jason Blew'
					description='This is my custom description'
					role='CTO unknown corp'
				/>

				<TestimonialCard
					image={splashImage}
					title='This is my custom title'
					name='Jason Blew'
					description='This is my custom description'
					role='CTO unknown corp'
				/>

				<TestimonialCard
					image={splashImage}
					title='This is my custom title'
					name='Jason Blew'
					description='This is my custom description'
					role='CTO unknown corp'
				/>

				<TestimonialCard
					image={splashImage}
					title='This is my custom title'
					name='Jason Blew'
					description='This is my custom description'
					role='CTO unknown corp'
				/>
			</div>
		</section>
	)
}

interface IHomeCardProps {
	title: string
	description: string
	image: any
}

const HomeCard = ({ title, description, image }: IHomeCardProps) => {
	return (
		<Card className='w-[350px] dark:bg-gray-800'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='flex items-center justify-center'>
					<Image
						src={image.src}
						alt='Card image'
						width={250}
						height={250}
					/>
				</div>
			</CardContent>
		</Card>
	)
}

interface ITestimonialCardProps {
	title: string
	description: string
	image: any
	name: string
	role: string
}

const TestimonialCard = ({
	title,
	description,
	image,
	name,
	role
}: ITestimonialCardProps) => {
	return (
		<figure className='flex flex-col items-center justify-center border-b border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800 md:rounded-t-none md:rounded-tl-lg md:border-r'>
			<blockquote className='mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400 lg:mb-8'>
				<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
					{title}
				</h3>
				<p className='my-4'>{description}</p>
			</blockquote>
			<figcaption className='flex items-center justify-center space-x-3'>
				<Image
					className='rounded-full'
					width={50}
					height={50}
					src={image.src}
					alt='profile picture'
				/>
				<div className='space-y-0.5 text-left font-medium dark:text-white'>
					<div>{name}</div>
					<div className='text-sm text-gray-500 dark:text-gray-400'>
						{role}
					</div>
				</div>
			</figcaption>
		</figure>
	)
}

const CallToAction = () => {
	return (
		<div className='w-full border border-gray-700 border-transparent bg-white p-4 text-center dark:bg-gray-800  dark:shadow sm:p-8'>
			<h5 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
				Learn faster from anywhere
			</h5>
			<p className='mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg'>
				Fill your mind with knowledge from anywhere in the world, at any
				time of the day.The easiest way to learn.
			</p>
			<div className='items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0'>
				<a
					href='#'
					className='inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto'
				>
					<MdOutlineWhatshot size={35} />

					<div className='text-left'>
						<div className='mb-1 text-xs'>Get in on</div>
						<div className='-mt-1 font-sans text-sm font-semibold'>
							Get Started
						</div>
					</div>
				</a>
			</div>
		</div>
	)
}
