import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="dark-green-bg flex-center-center flex-column ">
            <div className="flex-start-spacebetween full-width flex-wrap basic-padding">
                <div className="flex-center-start full-width footer-logo-wrapper">
                    <Image src="/shivana-health-logo-wide.svg" height={100} width={300} alt="Shivana Health Logo"/>
                </div>
                <div className="flex-end-end footer-contact full-width flex-column">
                    <Link href="/contact" target="_blank" className="no-link-styling">
                        <button className="copper-button">Contact Us</button>
                    </Link>
                    
                </div>
            </div>
            <div className="flex-center-center flex-column basic-padding green-gradient-reverse full-width">
                <Link href="https://www.instagram.com/shivanahealth" target="_blank">
                    <Image src="/instagram.svg" height={25} width={25} alt="instagram icon"/>
                </Link>
                <Link href="https://designelixir.studio?utf-source=shivanahealth" className="no-link-styling" style={{opacity: '0.4'}}><p className="small-text centered-text cream-text">Made with &hearts; by Design Elixir Studio</p></Link>
            </div>
        </footer>
    )
}