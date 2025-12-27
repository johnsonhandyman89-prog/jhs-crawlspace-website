import React from 'react';
import { Star, Phone, Mail, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Testimonials = () => {
  const reviews = [
    {
      text: "Professional service and honest pricing. Nathan explained everything clearly and didn't try to upsell unnecessary work.",
      author: "Local Homeowner",
      rating: 5
    },
    {
      text: "Best crawlspace specialist in the Upstate! Quick response, thorough inspection, and quality work.",
      author: "Spartanburg Customer",
      rating: 5
    },
    {
      text: "Nathan was professional, knowledgeable, and provided excellent service. Highly recommend JHS Crawlspace Specialist!",
      author: "Greenville Homeowner",
      rating: 5
    },
    {
      text: "Great experience from start to finish. Free inspection, fair pricing, and quality workmanship.",
      author: "Greer Customer",
      rating: 5
    },
    {
      text: "Honest, reliable, and does great work. Finally found a crawlspace specialist I can trust!",
      author: "Boiling Springs Homeowner",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Are Saying About Us
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-8 w-8 fill-orange-500 text-orange-500" />
            ))}
          </div>
          <p className="text-xl text-gray-600">
            5.0 Average Rating - Real reviews from local Upstate homeowners
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {reviews.map((review, index) => (
              <Card key={index} className="border-gray-200 hover:border-orange-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-4 italic">
                    "{review.text}"
                  </p>
                  <p className="text-gray-600 font-medium">
                    - {review.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="text-center mb-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300"
              onClick={() => window.open('https://www.google.com/search?q=JHS+Crawlspace+Specialist+Reviews', '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              See More Reviews on Google
            </Button>
          </div>
        </div>
      </section>

      {/* How Reviews Are Collected */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            How Our Reviews Are Collected
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Our reviews come from real homeowners we've worked with across the Upstate of South Carolina. We don't edit or script feedback, and we never offer incentives for reviews. What you see here reflects real experiences.
          </p>
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900">
              Insured, Licensed and Trusted
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Experience Our Service?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
              onClick={() => window.location.href = 'tel:8648049384'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (864) 804-9384
            </Button>
            <Button 
              size="lg" 
              className="bg-gray-900 text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
              onClick={() => window.location.href = 'mailto:jhscrawlspace@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;