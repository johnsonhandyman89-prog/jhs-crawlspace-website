import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Services = () => {
  const services = [
    {
      title: 'Crawlspace Vapor Barriers',
      description: 'Moisture rises from the ground and gets trapped under your home. A properly installed vapor barrier with 100% ground coverage is the first and most important step in controlling crawlspace moisture.',
      details: 'We install durable vapor barriers designed to protect your home's structure and improve overall air quality.'
    },
    {
      title: 'Dehumidifiers & Moisture Control',
      description: 'When humidity stays high, mold and odors can develop. Crawlspace dehumidifiers help maintain proper moisture levels and protect wood framing, insulation, and flooring above.',
      details: 'We size and place systems correctly - not oversized, not undersized.'
    },
    {
      title: 'Mold & Odor Control',
      description: 'Mold and musty odors are usually symptoms of moisture problems. Our treatment focuses on addressing the cause while safely treating affected areas to improve crawlspace conditions.',
      details: ''
    },
    {
      title: 'Vent Sealing & Crawlspace Doors',
      description: 'Open or poorly sealed vents allow outside air, moisture, and pests into the crawlspace. We properly seal vents and install tight crawlspace access doors to help stabilize the crawlspace environment.',
      details: ''
    },
    {
      title: 'Full Encapsulation',
      description: 'Not every home needs full encapsulation. When conditions call for it, encapsulation can provide long-term moisture control and energy efficiency.',
      details: 'We only recommend encapsulation when it truly makes sense for the home.'
    },
    {
      title: 'Sump Pumps & Battery Backup Systems',
      description: 'Sump pumps are designed to remove water from the crawlspace before it can cause damage. When groundwater or heavy rain enters the crawlspace, a properly installed sump pump helps keep the area dry and protected.',
      details: 'Battery backup systems are critical during power outages. If the power goes out during a storm, a standard sump pump becomes useless without a backup. A battery backup system allows the pump to continue operating when you need it most. We install and service sump pumps and battery backup systems to provide added protection and peace of mind - especially during severe weather and extended power outages.'
    },
    {
      title: 'Free Crawlspace Inspections',
      description: 'We provide honest evaluations with clear explanations, photos when needed, and no pressure. Whether you\'re a homeowner, buyer, seller, or realtor - we\'re happy to take a look.',
      details: ''
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Crawlspace Services
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Moisture Control Solutions That Make Sense
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Serving Spartanburg, Greenville, and the Upstate of South Carolina
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">
            Every crawlspace is different. Some need simple moisture control, while others require more involved solutions.
          </p>
          <p className="text-lg text-gray-700">
            At JHS Crawlspace Specialist, we <span className="text-orange-600 font-semibold">inspect first</span> and recommend only what your crawlspace actually needs - <span className="text-orange-600 font-semibold">no pressure</span> and <span className="text-orange-600 font-semibold">no unnecessary upsells</span>.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="border-gray-200 hover:border-orange-500 transition-all duration-300">
                <CardHeader className="bg-white">
                  <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="bg-white pt-6">
                  <p className="text-gray-700 text-lg mb-4">
                    {service.description}
                  </p>
                  {service.details && (
                    <p className="text-gray-600">
                      {service.details}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Service Areas
          </h2>
          <p className="text-lg text-gray-700">
            Spartanburg, Greenville, Greer, Boiling Springs, Moore, Roebuck, Duncan, Inman, Wellford, and surrounding Upstate SC areas.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Schedule a Free Inspection
          </h2>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
            onClick={() => window.location.href = 'tel:8648049384'}
          >
            <Phone className="mr-2 h-5 w-5" />
            Call (864) 804-9384
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;