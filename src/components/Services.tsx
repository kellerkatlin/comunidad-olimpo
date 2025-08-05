import { Button } from "@/components/ui/button";
import personalCoaching from "../../public/personal-coaching.jpg";
import workshop from "../../public/workshop.jpg";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "PERSONAL EMPOWERMENT",
      image: personalCoaching,
      position: "left",
    },
    {
      title: "PUBLIC SPEAKING",
      image: workshop,
      position: "right",
    },
    {
      title: "WORKSHOPS",
      image: personalCoaching,
      position: "left",
    },
  ];

  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-cyan-400 text-lg font-medium italic mb-4">
            Services
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
            EMPOWERING PEOPLE
            <br />
            THROUGH EXPERIENCE
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-medium-gray">
            <p className="text-lg leading-relaxed">
              Your own goals form a life-cycle that delivers constant learning
              experiences for you to grow.
            </p>
            <p className="text-lg leading-relaxed">
              You can gain a new business, a new love or a new life style
              through this personal journey.
            </p>
            <p className="text-lg leading-relaxed">
              Your own goals form this is the life of opportunity.
            </p>
          </div>
          <Button className="bg-dark-text hover:bg-dark-text/90 text-white px-8 py-3 text-lg mt-8">
            VIEW ALL
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-card overflow-hidden hover:shadow-soft transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-text mb-4">
                  {service.title}
                </h3>
                <p className="text-medium-gray mb-4 text-sm leading-relaxed">
                  Your own goals form this is life-cycle that delivers constant
                  learning experiences for you to grow. You can gain a new
                  business.
                </p>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-4 right-4 w-6 h-6 border border-cyan-primary opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
