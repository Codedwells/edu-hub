const MainFooter = ({ className }: { className?: string }) => {
	return (
		<footer
			className={`px-[3rem] flex flex-col justify-between p-2 text-center text-sm md:flex-row md:space-x-6 md:p-4 lg:text-sm ${className}`}
		>
			<p>Edu Hub &copy; 2023</p>
			<p className=''>An AT Hackathon Project 2023</p>
		</footer>
	)
}

export default MainFooter
