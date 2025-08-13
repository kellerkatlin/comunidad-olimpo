import About from "@/components/About";
import BookSession from "@/components/BookSession";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div
      // className="bg-gradient-total"
      >
        <About />
        <BookSession />
        <Services />
        <Events />
      </div>
      <Footer />
    </div>
  );
}
