import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '../components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-team bg-overlay-dark py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About JHS Crawlspace Specialist
          </h1>
          <p className="text-xl text-gray-200">
            <span className="text-tennessee-orange-400 font-semibold">Honest crawlspace solutions</span> for Upstate South Carolina homeowners
          </p>
          <p className="text-lg text-gray-100 mt-4">
            We specialize exclusively in crawlspace moisture control, vapor barriers, and related solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <span className="text-tennessee-orange-600">Honest Work.</span> <span className="text-tennessee-orange-600">Practical Solutions.</span> <span className="text-tennessee-orange-600">No Pressure.</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              JHS Crawlspace Specialist was started with a simple goal - to give homeowners an <span className="text-tennessee-orange-600 font-semibold">honest option</span> when it comes to crawlspace moisture problems. Not every crawlspace needs full encapsulation, and not every issue requires an expensive solution.
            </p>
            <p className="text-lg text-gray-700">
              We focus on identifying the real cause of moisture, odors, and related issues, then recommending <span className="text-tennessee-orange-600 font-semibold">only what actually makes sense</span> for the home. Our inspections are straightforward, <span className="text-tennessee-orange-600 font-semibold">pressure-free</span>, and based on experience - not sales quotas.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-tennessee-orange-600 mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Every home is different. Some crawlspaces need basic moisture control, while others require more involved solutions. Having worked under hundreds of Upstate South Carolina homes, we have seen the range of conditions and know what tends to work in this area. We take the time to explain what is happening, why it is happening, and what options make sense - without pushing unnecessary work.
            </p>
            <p className="text-lg text-gray-700">
              Homeowners, buyers, sellers, and realtors trust us because we keep things clear, honest, and practical.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-tennessee-orange-600 mb-6">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              JHS Crawlspace Specialist is a <span className="text-tennessee-orange-600 font-semibold">local, family-owned business</span> operated by Nathan and Kristen Johnson. We take pride in serving our community and treating every home like our own.
            </p>
            <p className="text-lg text-gray-700">
              Our reputation is built on showing up, doing the job right, and standing behind our work.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="mb-12">
            <img
              src="https://customer-assets.emergentagent.com/job_f3a16e62-6e6f-4451-8594-0c0b92e67168/artifacts/8y2zdypk_IMG_6755.jpeg"
              alt="Nathan and Kristen Johnson - JHS Crawlspace Specialist owners providing crawlspace encapsulation and vapor barrier services in Upstate South Carolina"
              className="rounded-lg shadow-lg w-full max-w-2xl mx-auto"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-tennessee-orange-600 mb-6 text-center">
              Serving the Upstate of South Carolina
            </h2>
            <p className="text-lg text-gray-700 text-center">
              Spartanburg, Greenville, Greer, Boiling Springs, Moore, Roebuck, Duncan, Inman, Wellford, and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hero-crawlspace bg-overlay-orange py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Request a Free Inspection
          </h2>
          <Button
            size="lg"
            className="bg-white text-tennessee-orange-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
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

export default About;