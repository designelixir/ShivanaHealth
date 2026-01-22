'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from "next/image"

export default function Logo({ onAnimationComplete }: { onAnimationComplete?: () => void }){
    const logoIconRef = useRef<HTMLDivElement>(null)
    const logoTopRef = useRef<HTMLSpanElement>(null)
    const logoBottomRef = useRef<HTMLSpanElement>(null)
    const taglineRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (onAnimationComplete) {
                    onAnimationComplete()
                }
            }
        })

        const topText = logoTopRef.current
        const bottomText = logoBottomRef.current
        const logoIcon = logoIconRef.current
        const tagline = taglineRef.current

        if (!topText || !bottomText || !logoIcon || !tagline) return

        // Wrap each letter in a span
        topText.innerHTML = topText.textContent?.split('').map(char => 
            `<span class="letter">${char}</span>`
        ).join('') || ''
        
        bottomText.innerHTML = bottomText.textContent?.split('').map(char => 
            `<span class="letter ">${char}</span>`
        ).join('') || ''

        const topLetters = topText.querySelectorAll('.letter')
        const bottomLetters = bottomText.querySelectorAll('.letter')

        // Set initial states
        gsap.set([topLetters, bottomLetters, tagline], { opacity: 0, y: -20 })
        gsap.set(logoIcon, { opacity: 0, y: 50 })

        // Animate logo icon first (from below with fade)
        tl.to(logoIcon, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        })
        // Then animate letters with gradient fade effect
        .to(topLetters, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
        }, '-=0.2')
        .to(bottomLetters, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
        }, '-=0.3')
        // Animate tagline last
        .to(tagline, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
        }, '-=0.2')
    }, [onAnimationComplete])

    return(
        <div id="heroLogo" className="flex-center-center flex-column basic-padding">
            <div ref={logoIconRef}>
                <Image src="/shivana-health-icon.svg" alt="Shivana Health logo icon" height={200} width={200}/>
            </div>
            <h1 className="logo-title centered-text flex-center-center" style={{ overflow: 'visible' }}>
                <span ref={logoTopRef} className="logo-top" >Shivana</span> <br />
                <span ref={logoBottomRef} className="logo-bottom">Health</span>
            </h1>
            <h3 ref={taglineRef} className='cream-text no-text-spacing centered-text tagline' > Transform Your Pain Into Purpose </h3>
        </div>
    )
}