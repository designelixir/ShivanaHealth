'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function IntroText(){
    const textRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (!textRef.current) return

        gsap.fromTo(textRef.current, 
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top bottom-=100px',
                    toggleActions: 'play none none none'
                }
            }
        )
    }, [])

    return(
        <section className="section-padding dark-green-bg cream-text">
            <h3 ref={textRef} className="centered-text">
                Shivana Health is a new kind of physical therapy. Traditional therapy models focus on the physical part of healing from an injury and there is often little insight about a root cause or prevention leading to lackluster outcomes. We have developed an integrative approach that extends to root cause identification, lifestyle factors, personal development and transformation so you can thrive at home and in your community. Your first session, you'll get an assessment, diagnosis and plan tailored to you. Next, one on one treatment sessions are expertly delivered utilizing our innovative framework applied to each client. Through merging the latest clinical science with intuitive and holistic principles, we improve function and provide valuable insights that can truly transform your pain into purpose.


            </h3>
        </section>
    )
}