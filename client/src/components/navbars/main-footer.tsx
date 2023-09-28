import { SiVim } from 'react-icons/si'

const MainFooter = ({ className }: { className?: string }) => {
	return (
		<footer
			className={`flex flex-col justify-between p-2 px-[3rem] lg:px-[4rem] text-center text-sm md:flex-row md:space-x-6 md:p-4 lg:text-sm ${className}`}
		>
			<p>Edu Hub &copy; 2023</p>
			<p className='flex items-center justify-center gap-2'>
				Made in{' '}
				<span>
					<SiVim  size={23}/>
				</span>
			</p>
		</footer>
	)
}

export default MainFooter
