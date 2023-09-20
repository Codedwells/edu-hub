import { Router } from 'express'

const router = Router()

function predictNextTick(history: number[]): {
	history: number[]
	prediction: 'even' | 'odd'
	evens: number[]
	odds: number[]
} {
	let evens: number[] = []
	let odds: number[] = []

	for (let i = 0; i < history.length; i++) {
		if (Number(String(history[i]).split('.')[1]) % 2 === 1) {
			odds.push(history[i])
		} else {
			evens.push(history[i])
		}
	}

	return {
		history: history.reverse(), // Reverses to have sense of natural order.
		prediction: evens.length > odds.length ? 'even' : 'odd',
		evens,
		odds
	}
}

router.get('/', async (_, res) => {
	try {
		res.status(200).json({
			status: 'success',
			message: 'Lucky fool you got history',
			data:""
		})
	} catch (err: any) {
		console.log(err.message)
	}
})

export default router
