import Link from 'next/link'
import { FiLogIn } from 'react-icons/fi'
import { TbBrandFeedly } from 'react-icons/tb'
import { ModeToggle } from './theme/theme-toggle'

const MainNav = ({ classNames }: { classNames?: string }) => {
	return (
		<nav className={`${classNames}`}>
			<ul className='flex select-none items-center bg-white justify-between p-2 px-8 shadow-md shadow-gray-200 dark:bg-transparent dark:border-b dark:shadow-none'>
				<li>
					<Link href='/' className='text-xl font-[600]'>
						Edu Hub
					</Link>
				</li>

				<div className='flex items-center space-x-2'>
					<li className='flex items-center cursor-pointer underline-offset-2 space-x-1 hover:underline active:opacity-70'>
						<TbBrandFeedly />
						<p className='text-sm'>
							Feeds
						</p>
					</li>
					<li>
						<ModeToggle />
					</li>
					<li className='rounded border p-2.5 hover:bg-slate-50 active:bg-white'>
						<FiLogIn className='cursor-pointer' />
					</li>
				</div>
			</ul>
		</nav>
	)
}

export default MainNav
