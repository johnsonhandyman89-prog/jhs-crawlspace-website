import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Phone, Mail, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import headerTestimonialsImage from '../assets/images/header-testimonials.png';

const Testimonials = () => {
  const reviews = [
    {
      text: "Nathan did an outstanding job from start to finish; prompt estimate, excellent work, great price. Highly recommended.",
      author: "Philip Dorroll",
      rating: 5
    },
    {
      text: "The very best experience with this company. Nathan has exemplary customer service and quality of work. Extremely satisfied!!! He deserves 10 stars!!",
      author: "Sharon Carroll",
      rating: 5
    },
    {
      text: "JHS Crawlspace Specialist did an amazing job on our home! Nathan and his team were professional, on time, and explained everything about our crawlspace encapsulation process. They installed a high quality vapor barrier and sealed the vents.",
      author: "Cyndal Hayes",
      rating: 5
    },
    {
      text: "We had moisture and odor issues under our house and called JHS Crawlspace Specialist. They explained everything clearly and did a full encapsulation with a clean vapor barrier. Great experience from start to finish, our crawlspace looks brand new!",
      author: "Felicia Parrish",
      rating: 5
    },
    {
      text: "Nathan did a great job for me! He was able to evaluate the scope of work needed, make recommendations, and complete the job in a timely manner. I would definitely recommend him!",
      author: "Keith Felker",
      rating: 5
    },
    {
      text: "Super reliable and easy to work with. They fixed my crawlspace the right way and I couldn't be happier with the outcome.",
      author: "Nate Pierce",
      rating: 5
    },
    {
      text: "Very good company to deal with. They are very reliable and honest also do great work. Highly recommend them.",
      author: "Joseph Enos Jr",
      rating: 5
    },
    {
      text: "Real problem solvers! Professional, efficient, and reasonably priced. Highly recommend!",
      author: "Herb Eplee",
      rating: 5
    },
    {
      text: "Professional, timely, and very reasonably priced.",
      author: "Jeremy Bridges",
      rating: 5
    },
    {
      text: "Fair pricing, quality service, and great people to deal with.",
      author: "Corrine Mays",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full">
        <img
          src={headerTestimonialsImage}
          alt="Testimonials"
          className="w-full h-auto"
        />
      </section>

      {/* Reviews Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {reviews.map((review, index) => (
              <Card key={index} className="border-gray-200 hover:border-tennessee-orange-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-tennessee-orange-500 text-tennessee-orange-500" />
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
              className="border-tennessee-orange-600 text-tennessee-orange-600 hover:bg-tennessee-orange-600 hover:text-white transition-all duration-300"
              onClick={() => window.open('https://www.google.com/search?q=JHS+Crawlspace+Specialist+Reviews', '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              See All Reviews on Google
            </Button>
          </div>
        </div>
      </section>

      {/* How Reviews Are Collected */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-tennessee-orange-600 mb-6 text-center">
            How Our Reviews Are Collected
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Our reviews come from real homeowners we've worked with across the Upstate of South Carolina. We don't edit or script feedback, and we never offer incentives for reviews. What you see here reflects real experiences.
          </p>
          <div className="text-center">
            <p className="text-xl font-semibold text-tennessee-orange-600 mb-4">
              Insured, Licensed and Trusted
            </p>
            <p className="text-gray-600">
              <Link to="/why-trust-us" className="text-tennessee-orange-600 hover:underline font-medium">Learn more about why homeowners trust us</Link> | <Link to="/services" className="text-tennessee-orange-600 hover:underline font-medium">View our services</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-hero-vapor-barrier bg-overlay-orange py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Experience Our Service?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-tennessee-orange-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
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
