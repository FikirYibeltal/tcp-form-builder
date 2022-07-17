import { Logo } from 'assets/icons/svg/Logo'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.scss'

const LINKS = [
    { name: 'Privacy Policy', path: '/' },
    { name: 'Terms & Conditions', path: '/' },
    { name: 'Website', path: '/' },
    { name: 'Website', path: '/' },
]
export const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className='footer'>
            <div>
                <Logo />
                <h4>
                    The Most advanced Trade Finance Platform build specifically for Emerging Markets
                    that lets you access capital on your own terms.
                </h4>
            </div>
            <div>
                <h2>Contact Us</h2>
                <h4>
                    DD-15-134-004 - 007, Level 15, Wework Hub71, Al Khatem Tower, ADGM Square, Al
                    Maryah Island, Abu Dhabi, United Arab Emirates;
                </h4>
            </div>
            <div>
                <h2>Links</h2>
                <div className='links'>
                    {LINKS.map((link, index) => (
                        <h4 onClick={() => navigate(link.path)} key={index}>
                            {link.name}
                        </h4>
                    ))}
                </div>
            </div>
        </div>
    )
}
