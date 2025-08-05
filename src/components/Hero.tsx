import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-section relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border border-cyan-400 opacity-30"></div>
      <div className="absolute top-40 right-10 w-6 h-6 border border-lime-400 opacity-50"></div>
      <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-cyan-400 opacity-20 rounded-full"></div>
      <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-lime-400 opacity-40 rounded-full"></div>

      {/* Flying birds decoration */}
      <div className="absolute top-32 right-1/4 text-medium-gray opacity-40">
        <svg
          width="60"
          height="40"
          viewBox="0 0 60 40"
          className="animate-pulse"
        >
          <path
            d="M10,20 Q20,10 30,20 Q40,30 50,20"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M15,25 Q25,15 35,25 Q45,35 55,25"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M5,15 Q15,5 25,15 Q35,25 45,15"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-light mb-6">
            <span className="text-cyan-400 italic font-semibold">
              Your Infinite
            </span>
            <span className="text-lime-300 italic font-semibold"> Life</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-medium-gray mb-8 font-light tracking-wide">
            WE LEAD WITH LOVE AND COMPASSION
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-cyan-400 hover:bg-cyan-light text-white px-8 py-3 text-lg shadow-soft"
            >
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-dark-text text-dark-text hover:bg-dark-text hover:text-white px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
