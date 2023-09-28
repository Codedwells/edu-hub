'use client'
import { FeedCard } from '@/components/cards/Question'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useEffect, useState } from 'react'
import { TbHistoryToggle } from 'react-icons/tb'
import axios from 'axios'
import { toast } from 'sonner'

export default function Page() {
	const [query, setQuery] = useState('')
	const [response, setResponse] = useState('Your res goes here ...')
	const [questions, setQuestions] = useState<
		{ question: string; answer: string; _id: string }[]
	>([])


	async function handleFetch() {
		// Define the data you want to send in the request body
		const postData = {
			question: query
		}

		// Define the API endpoint URL
		const apiUrl = '/api/questions'

		// Make the POST request using Axios and await the response
		try {
			const response = await axios.post(apiUrl, postData)

			toast.success(response.data.answer)
			setResponse(response.data.answer)
		} catch (err: any) {
			toast.error(err.response.data.message)
		}
	}

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
		<section className='mx-auto mb-[5rem] mt-[5rem] h-fit w-screen px-4  md:w-[80%] lg:mt-[7rem] lg:w-[65%]'>
			<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
				Got a query? Ask an AI
			</h3>

			<div className='mt-4  flex flex-col gap-4 lg:flex-row'>
				<div className='md:flex-1'>
					<QueryBar setQuery={setQuery} onSubmit={handleFetch} />
				</div>
				<div className='min-h-[12rem] rounded-md bg-slate-50 p-4 text-sm text-slate-500 dark:bg-gray-800 md:flex-1'>
					{response}
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

				<div className='mx-auto mt-[2rem] flex flex-col items-center justify-center gap-6 md:w-full'>
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
							chronological orderk
'
						/>
					))}
				</div>
			</div>
		</section>
	)
}

interface IQueryBarProps {
	setQuery: React.Dispatch<React.SetStateAction<string>>
	onSubmit: () => void
}
const QueryBar = ({ setQuery, onSubmit }: IQueryBarProps) => {
	return (
		<div className='grid w-full gap-1.5'>
			<Label htmlFor='message-2'>Your Query</Label>
			<Textarea
				onChange={(e) => setQuery(e.target.value)}
				placeholder='Type your query here.'
				id='message-2'
				rows={12}
				className='dark:bg-gray-800'
			/>
			<p className='text-sm text-muted-foreground'>
				Your query might be recorded for future improvements.
			</p>
			<Button onClick={onSubmit} className='mt-4 w-full'>
				Send
			</Button>
		</div>
	)
}
