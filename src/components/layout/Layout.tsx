import { Footer } from 'components/footer/Footer'
import { SideBar } from 'components/sidebar/SideBar'
import React from 'react'
import './Layout.scss'
export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='main'>
            <div className='main-body'>
                <SideBar />
                {children}
            </div>
            <Footer />
        </div>
    )
}
