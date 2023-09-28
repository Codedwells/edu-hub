'use client'
import { FeedCard } from '@/components/cards/Question'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { TbHistoryToggle } from 'react-icons/tb'

export default function Page() {
	return (
		<section className='mx-auto mb-[5rem] mt-[5rem] h-fit px-4 w-screen  md:w-[80%] lg:mt-[7rem] lg:w-[65%]'>
			<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
				Got a query? Ask an AI
			</h3>

			<div className='mt-4  flex flex-col gap-4 lg:flex-row'>
				<div className='md:flex-1'>
					<QueryBar />
				</div>
				<div className='min-h-[12rem] rounded-md bg-slate-50 p-4 text-sm text-slate-500 md:flex-1'>
					Your res goes here ...
				</div>
			</div>

			<div>
				<div className='mt-[3rem] flex items-center gap-2'>
					<h3 className='select-none scroll-m-20 text-2xl font-semibold tracking-tight'>
						Recent
					</h3>
					<TbHistoryToggle
						size={22}
						className='dark:text-emerald-600'
					/>
				</div>

				<div className='mx-auto mt-[2rem] md:w-full flex flex-col items-center justify-center gap-6'>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((curr) => (
						<FeedCard
							key={curr}
							question='This is my wonderful playground that I can ask right now'
							answer='Here are the biggest enterprise technology
							acquisitions of 2021 so far, in reverse
							chronological order.Here are the biggest enterprise
							technology acquisitions of 2021 so far, in reverse
							chronological order.Here are the biggest enterprise
							technology acquisitions of 2021 so far, in reverse
							chronological order.Here are the biggest enterprise
							technology acquisitions of 2021 so far, in reverse
							chronological order.ere are the biggest enterprise
							technology acquisitions of 2021 so far, in reverse
							chronological order.ere are the biggest enterprise
							technology acquisitions of 2021 so far, in reverse
							chronological order.ere are the biggest enterprise
							technology acquisitions of 2021 so far, in reverse
							chronological order.ere are the biggest enterprise
							technology acquisitions of 2021 so far, in reverse
							chronological order.ere are the biggest enterprise
							technology acquisitions of 2021 so far, in reverse
							chronological order.Here are the biggest enterprise
							technology acquisitions of 2021 so far, in reverse
							chronological order.Here are the biggest enterprise
							technology acquisitions of 2021 so far, in reverse
							chronological order.Here are the biggest enterprise
							technology acquisitions of 2021 so far, in reverse
							chronological order.Here are the biggest enterprise
							technology acquisitions of 2021 so far, in reverse
							chronological order.Here are the biggest enterprise
							technology acquisitions of 2021 so far, in reverse
							chronological order.
'
						/>
					))}
				</div>
			</div>
		</section>
	)
}

const QueryBar = () => {
	return (
		<div className='grid w-full gap-1.5'>
			<Label htmlFor='message-2'>Your Query</Label>
			<Textarea
				placeholder='Type your query here.'
				id='message-2'
				rows={12}
			/>
			<p className='text-sm text-muted-foreground'>
				Your query might be recorded for future improvements.
			</p>
			<Button className='mt-4 w-full'>Send</Button>
		</div>
	)
}
