import Logo from "./components/Logo";
import Image from "next/image";
import Link from "next/link";
import IntroText from "./components/Home/IntroText";
import OurApproach from "./components/Home/OurApproach";
import OurStory from "./components/Home/OurStory";
import Services from "./components/Home/Services";
import Hero from "./components/Home/Hero";



export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <IntroText></IntroText>
      <OurApproach></OurApproach>
      <OurStory></OurStory>
      <Services></Services>
    </main>
  );
}
