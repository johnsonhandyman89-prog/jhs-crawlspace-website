import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Shield, Award, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Home = () => {
  const { toast } = useToast();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const handleServiceClick = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setFormData(prev => ({
      ...prev,
      message: `I'm interested in: ${serviceTitle}`
    }));
    setIsQuoteModalOpen(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const submitData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(submitData).toString(),
      });

      toast({
        title: "Quote Request Sent!",
        description: "We will contact you within 24 hours.",
      });
      setFormData({ name: '', phone: '', email: '', address: '', message: '' });
      setIsQuoteModalOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your request. Please call us at (864) 804-9384.",
        variant: "destructive",
      });
    }
  };

  const services = [
    {
      title: 'Crawlspace Vapor Barriers',
      description: '100% ground coverage to control moisture at the source.'
    },
    {
      title: 'Dehumidifiers & Moisture Control',
      description: 'Proper sizing and placement - no guesswork.'
    },
    {
      title: 'Mold & Odor Control',
      description: 'Targeted treatment for moisture issues.'
    },
    {
      title: 'Vent Sealing & Crawlspace Doors',
      description: 'Keep moisture and pests out.'
    },
    {
      title: 'Full Encapsulation',
      description: 'Complete protection when needed.'
    },
    {
      title: 'Free Crawlspace Inspections',
      description: 'Honest evaluations with no pressure.'
    }
  ];

  const trustFactors = [
    { icon: Shield, text: 'Local & owner-operated' },
    { icon: CheckCircle, text: 'Free, honest inspections' },
    { icon: Award, text: 'CL-100 inspection experience' },
    { icon: Users, text: 'No upselling' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Crawlspace Moisture & Vapor Barrier Specialists
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Upstate South Carolina
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            <span className="text-tennessee-orange-600 font-semibold">Honest inspections.</span> <span className="text-tennessee-orange-600 font-semibold">No pressure.</span> Solutions that actually make sense.
          </p>
          <Button 
            size="lg" 
            className="bg-tennessee-orange-600 hover:bg-tennessee-orange-700 text-white text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => window.location.href = 'tel:8648049384'}
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now: (864) 804-9384
          </Button>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tennessee-orange-600 mb-6 text-center">
            Crawlspace Problems Don't Fix Themselves
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-8">
            Moisture, open vents, and poor ground coverage can lead to <span className="text-tennessee-orange-600 font-semibold">mold</span>, <span className="text-tennessee-orange-600 font-semibold">odors</span>, <span className="text-tennessee-orange-600 font-semibold">wood rot</span>, and <span className="text-tennessee-orange-600 font-semibold">higher energy bills</span>.
          </p>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            At JHS Crawlspace Specialist, we <span className="text-tennessee-orange-600 font-semibold">inspect first</span> and recommend only what your crawlspace actually needs - not a one-size-fits-all encapsulation. <Link to="/services" className="text-tennessee-orange-600 hover:underline font-medium">Explore our services</Link> to learn more about our approach.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tennessee-orange-600 mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:border-tennessee-orange-500 transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => handleServiceClick(service.title)}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-tennessee-orange-700 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                  <p className="text-tennessee-orange-600 text-sm mt-3 font-medium">
                    Click to request a free quote →
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg"
                className="border-tennessee-orange-600 text-tennessee-orange-600 hover:bg-tennessee-orange-600 hover:text-white transition-all duration-300"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Feature Image */}
          <div className="mb-12">
            <img
              src="https://customer-assets.emergentagent.com/job_f3a16e62-6e6f-4451-8594-0c0b92e67168/artifacts/3m5wultu_43E57321-1818-4248-A749-8812FD3EC5CE.png"
              alt="Crawlspace vapor barrier installation before and after - JHS Crawlspace Specialist moisture control services in Spartanburg and Greenville SC"
              className="rounded-lg shadow-xl w-full max-w-4xl mx-auto mb-12"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-tennessee-orange-600 mb-12 text-center">
            Why Homeowners Choose JHS Crawlspace Specialist
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-tennessee-orange-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-tennessee-orange-600" />
                  </div>
                  <p className="text-lg text-gray-700 font-medium">
                    {factor.text}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-lg text-gray-700 text-center mt-12 font-medium">
            Solutions that make sense <span className="text-tennessee-orange-600 font-semibold">for your home</span>
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tennessee-orange-600 mb-6">
            Proudly Serving the Upstate of South Carolina
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-tennessee-orange-600 font-semibold">Spartanburg, Greenville, Greer, Boiling Springs, Moore, Roebuck, Duncan, Inman, Wellford</span>, and surrounding areas.
          </p>
          <p className="text-gray-600">
            <Link to="/service-areas" className="text-tennessee-orange-600 hover:underline font-medium">See all service areas</Link> or <Link to="/contact" className="text-tennessee-orange-600 hover:underline font-medium">contact us</Link> to schedule your free inspection.
          </p>
        </div>
      </section>

      {/* Selling Your Home Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-tennessee-orange-600 mb-4">
            Selling Your Home or Working With a Realtor?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            JHS Crawlspace Specialist helps homeowners and real estate professionals correct crawlspace issues that can delay inspections or closings. We address moisture, ground coverage, ventilation, and humidity concerns with clear documentation and efficient turnaround — helping homes move to the closing table with confidence.
          </p>
          <p className="text-gray-700">
            Our team is experienced with CL-100 (Wood Infestation Report) requirements and understands what inspectors look for in South Carolina real estate transactions. Whether you need pre-listing corrections or post-inspection repairs, we provide fast, professional service to keep your sale on track.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tennessee-orange-600 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What causes crawlspace moisture problems?
              </h3>
              <p className="text-gray-700">
                Crawlspace moisture typically comes from three sources: ground moisture evaporating through exposed dirt floors, humid outside air entering through open vents, and water intrusion from poor drainage or grading. In the Upstate of South Carolina, our humid climate and clay-heavy soils make ground moisture especially common.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is a vapor barrier and why do I need one?
              </h3>
              <p className="text-gray-700">
                A vapor barrier is a durable plastic liner installed over the dirt floor of your crawlspace. It prevents ground moisture from evaporating into the crawlspace air, which helps reduce humidity, odors, and the conditions that lead to mold and wood rot. A properly installed vapor barrier with 100% ground coverage is often the most effective first step in crawlspace moisture control.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does a crawlspace service typically take?
              </h3>
              <p className="text-gray-700">
                Most crawlspace services can be completed in one day, depending on size and conditions. We provide a clear timeline during your inspection.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do I need full encapsulation, or will a vapor barrier help?
              </h3>
              <p className="text-gray-700">
                Not every crawlspace requires full encapsulation. Many homes see major improvement with proper ground coverage, sealing, and moisture control. We recommend only what your crawlspace actually needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Will this help with odors and high humidity in my home?
              </h3>
              <p className="text-gray-700">
                Yes. Crawlspace moisture is a common cause of musty odors and elevated indoor humidity. Up to 50% of the air you breathe on the first floor comes from your crawlspace, so addressing moisture issues below often improves air quality and comfort throughout the home.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                When do I need a dehumidifier in my crawlspace?
              </h3>
              <p className="text-gray-700">
                A crawlspace dehumidifier is recommended when humidity levels remain high even after installing a vapor barrier and sealing vents. This is common in homes built on low-lying lots, near water, or in areas with high seasonal humidity. We measure humidity levels during your inspection and recommend a dehumidifier only when it's truly needed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is this work important when selling a home?
              </h3>
              <p className="text-gray-700">
                Absolutely. Crawlspace conditions are commonly flagged during home inspections and CL-100 (Wood Infestation) reports in South Carolina. Addressing moisture, vapor barrier, and ventilation issues before listing — or quickly after an inspection — helps avoid delays and renegotiations that can jeopardize a sale.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer free inspections?
              </h3>
              <p className="text-gray-700">
                Yes. We provide free, no-obligation crawlspace inspections for homeowners throughout the Upstate of South Carolina. We'll explain what we find, discuss your options, and give you honest recommendations — even if that means you don't need any work done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-tennessee-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Crawlspace work done right. Built to last a lifetime.
          </h2>
          <p className="text-xl text-white mb-8">
            Every home we protect is treated like our own. Family-owned, locally trusted.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-tennessee-orange-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
            onClick={() => window.location.href = 'tel:8648049384'}
          >
            <Phone className="mr-2 h-5 w-5" />
            Request a Free Inspection
          </Button>
        </div>
      </section>

      {/* Quote Request Modal */}
      <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl text-gray-900">Request Your Free Quote</DialogTitle>
            <DialogDescription className="text-gray-600">
              {selectedService ? `Interested in: ${selectedService}` : 'Fill out the form below and we will contact you within 24 hours.'}
            </DialogDescription>
          </DialogHeader>
          <form
            action="/"
            className="space-y-4"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div style={{ display: 'none' }}>
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone *
              </label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Address
              </label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your crawlspace concerns
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="border-gray-300"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-tennessee-orange-600 hover:bg-tennessee-orange-700 text-white text-lg py-6 transition-all duration-300"
            >
              Submit Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;