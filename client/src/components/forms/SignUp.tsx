'use client'

import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Label } from '../ui/label'
import Link from 'next/link'
import { Button } from '../ui/button'

const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	return (
		<form className='rounded-md border px-8 py-[3rem] shadow dark:bg-gray-800 dark:border-gray-600'>
			<div className='flex items-center justify-center'>
				<Link
					href='/'
					className='scroll-m-20 text-2xl font-semibold tracking-tight'
				>
					Edu Hub
				</Link>
			</div>

			<p className='text-center text-base text-muted-foreground'>
				Enter your details below.
			</p>

			<div className='mt-[2rem] flex flex-col space-y-2'>
				<div className='grid w-full max-w-sm items-center gap-1.5'>
					<Label htmlFor='name'>Name</Label>
					<Input
						type='text'
						placeholder='Name'
						{...register('name')}
					/>
				</div>

				<div className='grid w-full max-w-sm items-center gap-1.5'>
					<Label htmlFor='email'>Email</Label>
					<Input
						type='email'
						placeholder='Email'
						{...register('email')}
					/>
				</div>

				<div className='grid w-full max-w-sm items-center gap-1.5'>
					<Label htmlFor='phone'>Phone</Label>
					<Input
						type='phone'
						placeholder='Phone'
						{...register('phone')}
					/>
				</div>

				<div className='grid w-full max-w-sm items-center gap-1.5'>
					<Label htmlFor='password'>Password</Label>
					<Input
						type='password'
						placeholder='Password'
						{...register('password')}
					/>
				</div>

				<div className='grid w-full max-w-sm items-center gap-1.5'>
					<Label htmlFor='confirmPassword'>Confirm Password</Label>
					<Input
						type='text'
						placeholder='Confirm Password'
						{...register('confirmPassword')}
					/>
				</div>
			</div>

			<Button className='mt-4 w-full'>Sign Up</Button>

			<p className='mt-4 text-center text-sm font-[500] text-[#9FA2B4]'>
				Already have an account?{' '}
				<Link
					href={'/flow/login'}
					className='capitalize text-emerald-500 hover:text-emerald-600 active:text-emerald-500'
				>
					Login
				</Link>
			</p>
		</form>
	)
}

export default SignUpForm
