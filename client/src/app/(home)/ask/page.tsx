'use client'
import Markdown from 'react-markdown'
import { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { TbHistoryToggle } from 'react-icons/tb'
import { FeedCard } from '@/components/cards/Question'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import { toast } from 'sonner'

export default function Page() {
	const [query, setQuery] = useState('')
	const [response, setResponse] = useState('Your res goes here ...')
	const [isLoading, setIsLoading] = useState(false)
	const [questions, setQuestions] = useState<
		{ question: string; answer: string; _id: string }[]
	>([])

	async function handleFetch() {
		// Define the data you want to send in the request body
		const postData = {
			question: query
		}

		// Define the API endpoint URL
		const apiUrl = 'http://localhost:5000/api/questions'

		// Make the POST request using Axios and await the response
		try {
			setIsLoading(true)
			const response = await axios.post(apiUrl, postData)

			toast.success('Your query has been sent to the AI')

			setQuery('')
			setResponse(response.data.answer)

			setIsLoading(false)
			getAllQuestions()
		} catch (err: any) {
			toast.error(err.response.data.message)
		}
	}

	async function getAllQuestions() {
		const apiUrl = 'http://localhost:5000/api/questions'
		try {
			const response = await axios.get(apiUrl)
			setQuestions(response.data.reverse())
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
				<div className='max-h-[25rem] min-h-[12rem] overflow-y-auto rounded-md bg-slate-50 p-4 text-sm text-slate-500 dark:bg-gray-800 md:flex-1'>
                <Markdown>{response}</Markdown>
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
					{questions.map((curr) => (
						<FeedCard
							key={curr._id}
							question={curr.question}
							answer={curr.answer}
						/>
					))}
				</div>
			</div>

			<div
				className={`fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-80 ${
					isLoading ? 'visible' : 'hidden'
				}`}
			>
				Loading ...
				<div role='status'>
					<svg
						aria-hidden='true'
						className='mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600'
						viewBox='0 0 100 101'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
							fill='currentColor'
						/>
						<path
							d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
							fill='currentFill'
						/>
					</svg>
					<span className='sr-only'>Loading...</span>
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
