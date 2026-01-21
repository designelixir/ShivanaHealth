'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function OurServices(){
    const h2Ref = useRef<HTMLHeadingElement>(null)
    const h3Ref = useRef<HTMLHeadingElement>(null)
    const card1Ref = useRef<HTMLDivElement>(null)
    const card2Ref = useRef<HTMLDivElement>(null)
    const card3Ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!h2Ref.current || !h3Ref.current || !card1Ref.current || !card2Ref.current || !card3Ref.current) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: h2Ref.current,
                start: 'top bottom-=100px',
                toggleActions: 'play none none none'
            }
        })

        // Set initial states
        gsap.set([h2Ref.current, h3Ref.current, card1Ref.current, card2Ref.current, card3Ref.current], { opacity: 0 })

        // Animate sequence
        tl.to(h2Ref.current, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        })
        .to(h3Ref.current, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.4')
        .to(card1Ref.current, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.2')
        .to(card2Ref.current, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.3')
        .to(card3Ref.current, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.3')
    }, [])

    return(
        <section className="section-padding cream-bg">
            <h2 ref={h2Ref} className="copper-text">Our Services</h2>
            
            <div className="flex-start-start card-wrapper">
              <div ref={card1Ref} className="card copper-card flex-start-start flex-column">
                <Image src="/analyze.svg" height={50} width={50} alt="DNA icon"/>
                <p>In-Person Evaluation + Program Creation</p>
              </div>
              <div ref={card2Ref} className="card copper-card flex-start-start flex-column">
                <Image src="/treat.svg" height={50} width={50} alt="DNA icon"/>
                <p>In-Person Treatment Sessions</p>
              </div>
              <div ref={card3Ref} className="card copper-card flex-start-start flex-column">
                <Image src="/virtual.svg" height={50} width={50} alt="DNA icon"/>
                <p>Virtual Consultations by Request</p>
              </div>
            </div>
        </section>
    )
}