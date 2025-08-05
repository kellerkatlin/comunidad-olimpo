import { Button } from "@/components/ui/button";
import retreat from "../../public/retreat.jpg";
import Image from "next/image";

const Events = () => {
  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-cyan-400 text-lg font-medium italic">
                Events
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-text">
                UPCOMING WORKSHOPS
                <br />& RETREATS
              </h2>
            </div>

            <div className="space-y-4 text-medium-gray">
              <p className="text-lg leading-relaxed">
                Your own goals form this is life-cycle that delivers constant
              </p>
              <p className="text-lg leading-relaxed">
                You can gain a new business, a new love or a new life style
                through this personal journey.
              </p>
              <p className="text-lg leading-relaxed">
                Your own goals form this is the life of opportunity. Your own
                goal-lines.
              </p>
            </div>

            <Button className="bg-dark-text hover:bg-dark-text/90 text-white px-8 py-3 text-lg mt-8">
              EXPLORE
            </Button>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large image */}
            <div className="col-span-2 relative">
              <Image
                src={retreat}
                alt="Workshop retreat setting"
                className="w-full h-64 object-cover rounded-lg shadow-card"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded px-3 py-2">
                <p className="text-dark-text font-medium text-sm">
                  MINDFULNESS RETREAT
                </p>
              </div>
            </div>

            {/* Small images */}
            <div className="relative">
              <Image
                src={retreat}
                alt="Coaching session"
                className="w-full h-32 object-cover rounded-lg shadow-card"
              />
              <div className="absolute inset-0 bg-cyan-primary/20 rounded-lg"></div>
            </div>

            <div className="relative">
              <Image
                src={retreat}
                alt="Group workshop"
                className="w-full h-32 object-cover rounded-lg shadow-card"
              />
              <div className="absolute inset-0 bg-lime-accent/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
