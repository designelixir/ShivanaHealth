'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Services(){
    const h2Ref = useRef<HTMLHeadingElement>(null)
    const card1Ref = useRef<HTMLDivElement>(null)
    const card2Ref = useRef<HTMLDivElement>(null)
    const card3Ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!h2Ref.current || !card1Ref.current || !card2Ref.current || !card3Ref.current) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: h2Ref.current,
                start: 'top bottom-=100px',
                toggleActions: 'play none none none'
            }
        })

        // Set initial states
        gsap.set([h2Ref.current, card1Ref.current, card2Ref.current, card3Ref.current], { opacity: 0 })

        // Animate sequence
        tl.to(h2Ref.current, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        })
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
        <section className="section-padding cream-bg" id="Services">
            <h2 ref={h2Ref} className="centered-text">Services</h2>
            <div className="flex-start-start card-wrapper">
                <div ref={card1Ref} className="image-card-wrapper">
                    <div className="image-card" style={{backgroundImage: 'url("/plants.jpg")'}}> </div>
                    <h3 className="centered-text">In-Person Evaluation + Program creation </h3>
                </div>
                <div ref={card2Ref} className="image-card-wrapper">
                    <div className="image-card" style={{backgroundImage: 'url("/plants.jpg")'}}> </div>
                    <h3 className="centered-text">In-Person Treatment Sessions </h3>
                </div>
                <div ref={card3Ref} className="image-card-wrapper">
                    <div className="image-card" style={{backgroundImage: 'url("/plants.jpg")'}}> </div>
                    <h3 className="centered-text">Virtual Consultations by Request </h3>
                </div>
            </div>
        </section>
    )
}