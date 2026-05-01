import Image from "next/image";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Programs from "./components/Programs";
import Benefits from "./components/Benefits";
import Instructors from "./components/Instructors";
import HomeAchievements from "./components/HomeAchievements";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
    <Hero />
    <Introduction />
    <Programs />
    <Benefits />
    <Instructors />
    <HomeAchievements />
    <Testimonials />
    <FAQ />
    </>
  );
}
