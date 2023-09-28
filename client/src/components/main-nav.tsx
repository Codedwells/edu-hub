import Link from 'next/link'
import { BsStars } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { TbBrandFeedly } from 'react-icons/tb'
import { ModeToggle } from './theme/theme-toggle'

const MainNav = ({ classNames }: { classNames?: string }) => {
	return (
		<nav className={`${classNames}`}>
			<ul
				className={`flex select-none items-center justify-between border-b bg-white p-2 px-8 dark:bg-gray-800`}
			>
				<li>
					<Link href='/' className='select-none text-xl font-[600]'>
						Edu Hub
					</Link>
				</li>

				<div className='flex items-center space-x-2'>
					<Link
						href='/ask'
						className='flex cursor-pointer items-center space-x-1 decoration-emerald-500 underline-offset-2  hover:underline active:opacity-70'
					>
						<BsStars className='text-yellow-500 dark:text-emerald-600' />
						<p className='text-sm'>Ask</p>
					</Link>

					<Link
						href='/feed'
						className='flex cursor-pointer items-center space-x-1 underline-offset-2  hover:underline active:opacity-70'
					>
						<TbBrandFeedly className='dark:text-emerald-600' />
						<p className='text-sm'>Feeds</p>
					</Link>

					<li>
						<ModeToggle />
					</li>

					<Link
						href={'/flow/login'}
						className='rounded border p-2.5 hover:bg-emerald-50 active:bg-white dark:bg-[#020817] dark:hover:bg-gray-900'
					>
						<FiLogIn className='cursor-pointer' />
					</Link>
				</div>
			</ul>
		</nav>
	)
}

export default MainNav
