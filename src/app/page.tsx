import HeroSection from "@/components/HeroSection";
import { main } from "motion/react-client"
import FeaturedCourses from "@/components/FeaturedCourses";
import Testimonialcard from "@/components/Testimonialcards";
import Navbar from "@/components/Navbar";
import Instructors from "@/components/instructors";
import Footer from "@/components/Footer";

// Main component for the home page
export default function Home(){
  return(
    <main className="min-h-screen bg-black antialiased">
<HeroSection />
<Navbar />
<FeaturedCourses/>
<Testimonialcard />
<Instructors />
<Footer/>
    </main>
    
  );
}