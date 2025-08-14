import About from "@/components/About";
import Benefits from "@/components/Benefits";
import BookSession from "@/components/BookSession";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import GuaranteeFaq from "@/components/GuaranteeFaq";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import SecondCta from "@/components/SecondCta";
import Testimonials from "@/components/Testimonies";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div
      // className="bg-gradient-total"
      >
        <About />
        {/* <BookSession /> */}
        <Benefits />
        {/* <Events /> */}
        <GuaranteeFaq />
        <Testimonials />
        <SecondCta />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}
