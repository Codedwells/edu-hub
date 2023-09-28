import { Button } from '@/components/ui/button'
import { LucidePackageSearch } from 'lucide-react'

export default function Page() {
	return (
		<section className='my-[5rem]'>
			<div className='mx-auto flex max-w-[30rem] flex-col items-center justify-center gap-2 px-4'>
				<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
					The Edu Feed
				</h3>

				<SeachBar />
			</div>

			<div className='mx-auto mt-[2rem] flex flex-col items-center justify-center gap-6 px-4 lg:w-[50%]'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_) => (
					<FeedCard />
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

const FeedCard = () => {
	return (
		<div className='flex flex-col justify-between  min-h-[15rem] w-full rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800'>
			<div>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-emerald-600 dark:text-white'>
					This is my random feed questions
				</h5>

				<p className='line-clamp-3 font-normal text-gray-700 dark:text-gray-400  md:line-clamp-5'>
					Here are the biggest enterprise technology acquisitions of
					2021 so far, in reverse chronological order.
				</p>
			</div>

			<Button className='mt-auto w-full bg-emerald-700 hover:bg-emerald-600'>Read More ...</Button>
		</div>
	)
}
