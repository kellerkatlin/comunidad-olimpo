import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const BookSession = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-cyan-primary text-lg font-medium italic mb-4">
            Book Session
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-6">
            WE ARE HERE
            <br />
            TO HELP
          </h2>
        </div>

        <Card className="max-w-4xl mx-auto shadow-card">
          <CardContent className="p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-dark-text font-medium">
                  NAME OF EXPERT
                </Label>
                <Input
                  id="name"
                  placeholder="Enter expert name"
                  className="border-border focus:ring-cyan-primary focus:border-cyan-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-dark-text font-medium">
                  DATE OF SESSION
                </Label>
                <Input
                  id="date"
                  type="date"
                  className="border-border focus:ring-cyan-primary focus:border-cyan-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="text-dark-text font-medium">
                  TIME OF SESSION
                </Label>
                <Input
                  id="time"
                  type="time"
                  className="border-border focus:ring-cyan-primary focus:border-cyan-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-dark-text font-medium">
                  YOUR PHONE NUMBER
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="border-border focus:ring-cyan-primary focus:border-cyan-primary"
                />
              </div>

              <div className="md:col-span-2 flex justify-center mt-8">
                <Button
                  type="submit"
                  className="bg-dark-text hover:bg-dark-text/90 text-white px-12 py-3 text-lg"
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookSession;
