'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import Logo from "../Logo"
import Link from "next/link"

export default function Hero(){
    const buttonContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!buttonContainerRef.current) return

        // Set initial state
        gsap.set(buttonContainerRef.current, { opacity: 0 })
        
        // Fade in buttons after logo animation completes
        // Logo animation takes: 0.8s (icon) + 0.6s (top letters) + 0.6s (bottom letters) = ~2s total
        gsap.to(buttonContainerRef.current, {
            opacity: 1,
            duration: 0.8,
            delay: 2,
            ease: 'power2.out'
        })
    }, [])

    return(
        <section className="home-hero fade-in flex-center-center">
            <div className="flex-center-center flex-column green-gradient-transparent" style={{ height: "100%"}}>
                <div className="flex-center-center no-flex-grow">
                    <Logo />
                </div>
                
                <div ref={buttonContainerRef} className="flex-center-center button-container no-flex-grow">
                    <Link href="https://www.instagram.com/shivanahealth" target="_blank" className="no-link-styling">
                        <button className="copper-button">Contact Us</button>
                    </Link>
                    <Link href="#Services" className="no-link-styling">
                        <button className="copper-outline-button">Services</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}