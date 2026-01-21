'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function OurStory(){
    const bioPicRef = useRef<HTMLDivElement>(null)
    const h2Ref = useRef<HTMLHeadingElement>(null)
    const h3FirstRef = useRef<HTMLHeadingElement>(null)
    const h3SecondRef = useRef<HTMLHeadingElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (!bioPicRef.current || !h2Ref.current || !h3FirstRef.current || !h3SecondRef.current || !buttonRef.current) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: bioPicRef.current,
                start: 'top bottom-=100px',
                toggleActions: 'play none none none'
            }
        })

        // Set initial states
        gsap.set(bioPicRef.current, { opacity: 0, x: -50 })
        gsap.set([h2Ref.current, h3FirstRef.current, h3SecondRef.current, buttonRef.current], { opacity: 0 })

        // Animate sequence
        tl.to(bioPicRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out'
        })
        .to(h2Ref.current, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.3')
        .to(h3FirstRef.current, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.4')
        .to(h3SecondRef.current, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.5')
        .to(buttonRef.current, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.4')
    }, [])

    return(
        <section className="flex-start-start bio-pic-container light-green-bg">
            <div ref={bioPicRef} className="bio-pic-wrapper basic-padding cream-bg">
                <div className="bio-pic flex-center-center"></div>
            </div>
            <div className="basic-padding bio-pic-text">
                <h2 ref={h2Ref} className="cream-text">Our Story</h2>
                <h3 ref={h3FirstRef} className="cream-text">Shivana Health was born out of a growing and unavoidable knowledge that our health and wellness systems are lacking. The health industrial complex requires we go through a fundamentally ignorant system in which insurance corporations are the gatekeepers of care. Even more alarming is that medical ideology born out of this system leaves much critical knowledge and root cause treatment out of the equation completely. Our current wellness culture often emphasizes trends and fails to provide proper context and rigor in it's claims. </h3>
                <h3 ref={h3SecondRef} className="cream-text">We aim to operate outside of this system and provide an innovative framework integrating clinical science, research backed recommendations with holistic techniques and intuitive healing principles. Our founder, Dr Shivana Krishnan carries with her 15 years of experience, a clinical doctorate in physical therapy from Emory University, extensive education in neuroscience, neuropsychology and function medicine, and is shaped and inspired by the values instilled by her Indian-Hindu heritage that contains so much intuitive wisdom within it.</h3>
                <Link href="/contact" target="_blank" className="no-link-styling">
                        <button className="copper-button">Contact Us</button>
                    </Link>
            </div>
        </section>
    )
}