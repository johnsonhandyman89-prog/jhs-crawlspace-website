import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Shield, Award, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
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
            Honest inspections. No pressure. Solutions that actually make sense.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Crawlspace Problems Don't Fix Themselves
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-8">
            Moisture, open vents, and poor ground coverage can lead to mold, odors, wood rot, and higher energy bills.
          </p>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            At JHS Crawlspace Specialist, we inspect first and recommend only what your crawlspace actually needs - not a one-size-fits-all encapsulation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-gray-200 hover:border-orange-500 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
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
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Homeowners Choose JHS Crawlspace Specialist
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <p className="text-lg text-gray-700 font-medium">
                    {factor.text}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-lg text-gray-700 mt-12 font-medium">
            Solutions that make sense for your home
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Proudly Serving the Upstate of South Carolina
          </h2>
          <p className="text-lg text-gray-700">
            Spartanburg, Greenville, Greer, Boiling Springs, Moore, Roebuck, Duncan, Inman, Wellford, and surrounding areas.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Crawlspace work done right. Built to last a lifetime.
          </h2>
          <p className="text-xl text-white mb-8">
            Every home we protect is treated like our own. Family-owned, locally trusted.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
            onClick={() => window.location.href = 'tel:8648049384'}
          >
            <Phone className="mr-2 h-5 w-5" />
            Request a Free Inspection
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;