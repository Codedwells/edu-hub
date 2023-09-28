'use client'

import { FeedCard } from '@/components/cards/Question'
import axios from 'axios'
import { LucidePackageSearch } from 'lucide-react'
import { useEffect, useState } from 'react'
import { MdDynamicFeed } from 'react-icons/md'
import { toast } from 'sonner'
export default function Page() {
    const [questions, setQuestions] = useState<{question:string;answer:string;_id:string}[]>([])
	async function getAllQuestions() {
		const apiUrl = '/api/questions'
		try {
			const response = await axios.get(apiUrl)
			console.log(response.data)
            setQuestions(response.data)
		} catch (err: any) {
			toast.error(err.response.data.message)
		}
	}

	useEffect(() => {
		getAllQuestions()
	}, [])

	return (
		<section className='my-[5rem]'>
			<div className='mx-auto flex max-w-[30rem] flex-col items-center justify-center gap-2 px-4'>
				<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
					The Edu Feed
				</h3>

				<SeachBar />
			</div>

			<div className='mx-auto mt-[2rem] flex flex-col items-center justify-center gap-6 px-4 lg:w-[50%]'>
				<div className='flex w-full items-center gap-2'>
					<h3 className='scroll-m-20 text-start text-2xl font-semibold tracking-tight'>
						Global message feed
					</h3>
					<MdDynamicFeed
						size={22}
						className='dark:text-emerald-500'
					/>
				</div>
				{questions.map((curr) => (
					<FeedCard
						key={curr._id}
						question={curr.question}
						answer={curr.answer}					/>
				))}
			</div>
		</section>
	)
}

const SeachBar = () => {
	return (
		<form className='flex items-center'>
			<label htmlFor='simple-search' className='sr-only'>
				Search
			</label>
			<div className='relative w-full'>
				<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
					<LucidePackageSearch
						size={22}
						className='text-emerald-700'
					/>
				</div>
				<input
					type='text'
					id='simple-search'
					className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-emerald-500 dark:focus:ring-emerald-500'
					placeholder='Search branch name...'
					required
				/>
			</div>
			<button
				type='submit'
				className='ml-2 rounded-lg border border-emerald-700 bg-emerald-700 p-2.5 text-sm font-medium text-white hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
			>
				<svg
					className='h-4 w-4'
					aria-hidden='true'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 20 20'
				>
					<path
						stroke='currentColor'
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
					/>
				</svg>
				<span className='sr-only'>Search</span>
			</button>
		</form>
	)
}
