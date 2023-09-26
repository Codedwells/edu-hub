import Image from 'next/image'
import splashImage from '../../../public/edu_graph.svg'
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'

export default function Home() {
	return (
		<section className='mt-32'>
			<div>
				<h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl'>
					The AI Education Hub
				</h1>
				<h4 className='mx-auto mt-4 line-clamp-3 max-w-[25rem] scroll-m-20 text-center text-base font-semibold tracking-tight text-gray-400'>
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

			<div className='flex items-center justify-center text-gray-700 animate-bounce transition-transform duration-1000 dark:text-white'>
				<p className='text-lg font-[500]'>Learn more</p>
				<MdOutlineKeyboardDoubleArrowDown size={18} />
			</div>

            <p className='mb-[8rem]'></p>
		</section>
	)
}
