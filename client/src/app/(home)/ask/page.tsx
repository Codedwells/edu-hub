'use client'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { TbHistoryToggle } from 'react-icons/tb'

export default function Page() {
	return (
		<section className='mx-auto mb-[5rem] mt-[5rem] px-4 h-fit  md:w-[80%] lg:mt-[7rem] lg:w-[65%]'>
			<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
				Got a query? Ask an AI
			</h3>

			<div className='flex  flex-col gap-4 mt-4 lg:flex-row'>
				<div className='md:flex-1'>
					<QueryBar />
				</div>
				<div className='min-h-[12rem] rounded-md bg-slate-50 p-4 text-sm text-slate-500 md:flex-1'>
					Your res goes here ...
				</div>
			</div>

			<div>
				<div className='flex items-center mt-[3rem] gap-2'>
					<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight select-none'>
						Recent
					</h3>
                    <TbHistoryToggle size={22} className="dark:text-emerald-600"/>
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
