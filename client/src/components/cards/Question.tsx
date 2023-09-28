'use client'

import { useState } from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'

interface IFeedCardProps {
	question: string
	answer: string
}
export const FeedCard = ({ question, answer }: IFeedCardProps) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className='flex min-h-[15rem] w-full  flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800'>
			<div>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-emerald-600 dark:text-white truncate'>
					{question}
				</h5>
				<Accordion type='single' collapsible className='w-full'>
					<AccordionItem value='item-1'>
						<AccordionTrigger
							onClick={() => setIsOpen((prev) => !prev)}
						>
							<div className='line-clamp-5 text-start text-sm font-[400]'>
								{isOpen ? 'Show less...' : answer}
							</div>
						</AccordionTrigger>
						<AccordionContent>{answer}</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	)
}
