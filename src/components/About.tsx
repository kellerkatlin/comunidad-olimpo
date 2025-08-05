import { Button } from "@/components/ui/button";
import coachSpeaking from "../../public/coach-speaking.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-cyan-400 text-lg font-medium italic">
                About Us
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-text">
                PERSONAL GROWTH
                <br />& COACHING
              </h2>
            </div>

            <div className="space-y-4 text-medium-gray">
              <p className="text-lg leading-relaxed">
                Your own goals form a life-cycle that delivers constant learning
                experiences for you to grow.
              </p>
              <p className="text-lg leading-relaxed">
                You can gain a new business, a new love or a new life style
                through this personal journey.
              </p>
              <p className="text-lg leading-relaxed">
                Your own goals form this to live the life of opportunity.
              </p>
            </div>

            <Button className="bg-dark-text hover:bg-dark-text/90 text-white px-8 py-3 text-lg mt-8">
              READ MORE
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              <Image
                src={coachSpeaking}
                alt="Professional speaker presenting"
                className="w-full h-auto rounded-lg shadow-card object-cover"
              />
              {/* Decorative frame elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-primary"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-lime-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
