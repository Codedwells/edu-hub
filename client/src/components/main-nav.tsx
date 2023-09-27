import Link from 'next/link'
import { FiLogIn } from 'react-icons/fi'
import { TbBrandFeedly } from 'react-icons/tb'
import { ModeToggle } from './theme/theme-toggle'

const MainNav = ({ classNames }: { classNames?: string }) => {
	return (
		<nav className={`${classNames}`}>
			<ul
				className={`flex select-none items-center bg-white justify-between border-b p-2 px-8 dark:bg-transparent`}
			>
				<li>
					<Link href='/' className='text-xl select-none font-[600]'>
						Edu Hub
					</Link>
				</li>

				<div className='flex items-center space-x-2'>
					<li className='flex cursor-pointer items-center space-x-1 underline-offset-2 decoration-emerald-500  hover:underline active:opacity-70'>
						<TbBrandFeedly />
						<p className='text-sm'>Feeds</p>
					</li>

					<li>
						<ModeToggle />
					</li>

					<li className='rounded border p-2.5 hover:bg-emerald-50 active:bg-white'>
						<FiLogIn className='cursor-pointer' />
					</li>
				</div>
			</ul>
		</nav>
	)
}

export default MainNav
