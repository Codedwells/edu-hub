'use client'

import MainNav from '@/components/main-nav'
import MainFooter from '@/components/navbars/main-footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className='flex flex-col min-h-screen'>
        <MainNav/>
        {children}
        <MainFooter className={'mt-auto border bg-neutral-100 text-center text-neutral-500 lg:text-left dark:bg-transparent'} />
      </main>
    </>
  )
}

export default Layout
