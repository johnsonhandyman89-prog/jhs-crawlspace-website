import React from 'react';
import { Star, Phone, Mail, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Testimonials = () => {
  const reviews = [
    {
      text: "NAthan has exemplary customer service and quality of work.",
      author: "Sharon Carroll",
      rating: 5
    },
    {
      text: "Fair pricing, quality service, and great people to deal with.",
      author: "Corrine Mays",
      rating: 5
    },
    {
      text: "Great experience from start to finish our crawlspace looks brand new!",
      author: "Felicia Parrish",
      rating: 5
    },
    {
      text: "Professional service and honest pricing. Nathan explained everything clearly and didn't try to upsell unnecessary work.",
      author: "Google Reviewer",
      rating: 5
    },
    {
      text: "Best crawlspace specialist in the Upstate! Quick response, thorough inspection, and quality work.",
      author: "Google Reviewer",
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

          {/* Actual Google Review Screenshots */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Real Google Reviews
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img 
                src="https://lh3.googleusercontent.com/sitesv/AAzXCke-yNU_X834279UIMFSzHSb_wu_E3h8Wu8eJnDoF0exL38QFfKpMshDhi2Y2SQxhrhFJhfeVsr_BntS78ug5-vaAYDv5q2g3htaVaqabaipEma9i_PI2h-PRwokNh8XvittEIUimAQ9OH0XBRfjXJUIR4GuxssZiPnJ5SIxua6PZj0AX0t7vMKWYHoZFOq2BQctCz7u3s5lIJREzwPTDSKFXbH_iicK8QGnmvU=w1280"
                alt="Customer Review 1"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
              />
              <img 
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkfwQNpMH3o5rpMPLDBjYXhNyN4j20HNwfkO8OdzI959k68kqTWEweQWYoDiboAjeEk5gM3Lk9VXh6-bTam4KBjj6QN374z3544uQEWsjmkp9aWdq-cEDI9xnNThgNCoMgKqnfmcvL9aAPtE4RLlaO7O8c6OyOlFqort0zWVg-LAnHa4DcnbGSJIdk-EPvNuTG77_pq1xBSOlsgWcfiCKae9HIvrS7lwbc8IKxk=w1280"
                alt="Customer Review 2"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
              />
              <img 
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkf2_7LWnDjPZ_FDRldHgNo4s4kzI_S-fLKAB9Q5oLDlMl33mkqhjAAMNsJ9sLtgTteEFdTbdd1NfW3ziC81S_VNZaQAX1mcRqO6KUOIfnn3Wy4G0O3qQeIU_boI74uNNcGEa1r-2J2VK6E1Zd1-OhasEB5lwiqpCRPoQQ89NIP8h6dSzKAJyjcCEtryysEGsRnZJSaXDhpfCj2YzHN7a-RAtWTX2OelzK6vZz0=w1280"
                alt="Customer Review 3"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
              />
              <img 
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkfO4uxs7kN5YAIGNOZ6PgVvJJbKKlCx4gUTWFh3MEntkVVCTUF_z3cJrW5-25hptHqsb0BtO_Qak8i36V0laCN0VCMHRsLh5yW7oMazGz48ezhfSHvineD1VJFuy7_oz-y7zjg10xHi_uZrWB3ZW8MUNLEfbNJlxcugA4oUwkv59g3CgChmXOydi8XtidKa2iwhGL6o3NEeqyt0uUewZr6ixbZQwGj6_6ASr5A=w1280"
                alt="Customer Review 4"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
              />
              <img 
                src="https://lh3.googleusercontent.com/sitesv/AAzXCketTyzCSP8_esH2L71u9KlD6FtGXXmYUlOjPYTPEDp93IihmDeMLhRXqnBSjKMZSBUk-E0uHv4OlXy4ja546SEeMmQYAh3wo_H02zhoo9c1-s489nlxJ7aJVLMkCllOiL6_D0PDYDKjc6WWIo9nwg9tmuzg1iS_OddlXMq5QmrWAFAm-AtXFGw5RhXUzbe7r0Uwgg3drTKaSIcCYyDpfV-_nw_YerW8xKRFuqs=w1280"
                alt="Customer Review 5"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
              />
              <img 
                src="https://lh3.googleusercontent.com/sitesv/AAzXCkfCFXnQBPRqWszoUYeJs7-qUI9Zh2yTYGj1UqPq9p-Os0YxQ5-tvYY9UoRQ5sH0LgYECxJUUhJUedeiv0THeRp78-opOtNicRAGcwXpMsG75U546czllZYJwZUdDPGj0S3_Y4R9_69LUvq9qfpHOvFImsSIU5Bw_75XM79B00h_sHx9J0fnB5uwBiT5-Cs1qMgWKg1E1PFClkqCZYz2trB9n3o1w8EMvKzoof4=w1280"
                alt="Customer Review 6"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
              />
            </div>
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