import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const ServiceAreas = () => {
  const primaryAreas = [
    {
      name: 'Spartanburg',
      description: 'Our home base - serving Spartanburg and all surrounding neighborhoods. Many older homes here experience moisture buildup due to humid summers and red clay soil that holds water close to foundations. Whether you live near downtown Spartanburg, in the historic districts, or one of the newer developments, we understand the unique crawlspace challenges this area presents.'
    },
    {
      name: 'Greenville',
      description: 'Full crawlspace services throughout the Greenville area. Greenville homeowners often notice musty odors or higher indoor humidity — common signs of crawlspace moisture issues in homes built on our region\'s sloped terrain. From Augusta Road to Pleasantburg, we help families protect their homes from ground moisture and improve indoor air quality.'
    },
    {
      name: 'Greer',
      description: 'Conveniently located between Spartanburg and Greenville. Homes in Greer frequently benefit from improved ground coverage and ventilation, especially in neighborhoods with older construction or heavy tree cover. If you\'ve noticed dampness under your home or a musty smell in certain rooms, we can help identify the cause and recommend practical solutions.'
    }
  ];

  const additionalAreas = [
    {
      name: 'Boiling Springs',
      description: 'Growing neighborhoods here often see crawlspace ventilation issues, especially in newer developments built on reclaimed land. If your home was built in the last 10-15 years and you\'re noticing humidity issues, a crawlspace inspection can help pinpoint the problem.'
    },
    {
      name: 'Moore',
      description: 'Rural properties in Moore commonly deal with standing water and ground moisture from nearby creeks and low-lying areas. We often work with homeowners here who want to improve conditions before moisture leads to bigger problems.'
    },
    {
      name: 'Roebuck',
      description: 'Older homes in Roebuck can develop musty smells and elevated humidity from inadequate vapor barriers. Many homes in this area were built before modern moisture control standards, making professional assessment valuable.'
    },
    {
      name: 'Duncan',
      description: 'Duncan homeowners often experience humidity concerns during warmer months, particularly in homes without proper crawlspace sealing. A well-installed vapor barrier can make a noticeable difference in comfort and air quality.'
    },
    {
      name: 'Inman',
      description: 'Properties near Inman frequently need moisture control due to the area\'s mix of clay-heavy soils and seasonal rain. We help homeowners here protect their crawlspaces before minor issues become major repairs.'
    },
    {
      name: 'Wellford',
      description: 'Crawlspaces in Wellford homes can trap moisture, leading to odor and air quality concerns if left untreated. Regular inspections help catch problems early while solutions are still straightforward.'
    },
    {
      name: 'Lyman',
      description: 'Homes in Lyman often benefit from improved ground coverage to combat the humid conditions common in this area. Proper vapor barrier installation helps keep moisture out and improves conditions throughout the home.'
    },
    {
      name: 'Reidville',
      description: 'Reidville properties sometimes struggle with excess moisture from seasonal groundwater and dense soil. We work with homeowners to find the right balance of moisture control for their specific situation.'
    },
    {
      name: 'Woodruff',
      description: 'Older construction in Woodruff frequently has open vents or thin vapor barriers that allow humidity into the crawlspace. Updating these elements can significantly improve indoor comfort and protect wood structures.'
    },
    {
      name: 'Simpsonville',
      description: 'Simpsonville homeowners often notice signs of crawlspace moisture, especially in homes with mature landscaping and shaded foundations. We help families address these issues before they affect indoor air quality or structural integrity.'
    },
    {
      name: 'Mauldin',
      description: 'Many Mauldin homes experience elevated indoor humidity tied to crawlspace conditions, particularly during summer. Proper moisture management in the crawlspace often resolves comfort issues upstairs.'
    },
    {
      name: 'Taylors',
      description: 'Crawlspaces in Taylors can develop moisture problems from poor drainage and the area\'s naturally humid climate. We offer honest assessments and practical solutions tailored to each home\'s needs.'
    },
    {
      name: 'Travelers Rest',
      description: 'Homes near the mountains in Travelers Rest may see groundwater seepage and damp crawlspaces during rainy seasons. The unique terrain here requires experienced assessment to find the right moisture control approach.'
    },
    {
      name: 'Fountain Inn',
      description: 'Fountain Inn properties often face moisture buildup in crawlspaces due to older construction methods and regional humidity. We help homeowners understand their options and choose solutions that fit their budget.'
    },
    {
      name: 'Landrum',
      description: 'Landrum homeowners sometimes deal with cool, damp crawlspaces, particularly in foothill properties with less sun exposure. Proper vapor barriers and moisture control can protect these homes year-round.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service Areas
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Proudly Serving the <span className="text-tennessee-orange-600 font-semibold">Upstate of South Carolina</span>
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Local, owner-operated crawlspace services for Spartanburg, Greenville, and surrounding communities.
          </p>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tennessee-orange-600 mb-12 text-center">
            Primary Service Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {primaryAreas.map((area, index) => (
              <Card key={index} className="border-gray-200 hover:border-tennessee-orange-500 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-tennessee-orange-100 rounded-full mb-4">
                    <MapPin className="h-8 w-8 text-tennessee-orange-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-tennessee-orange-600 mb-3">
                    {area.name}
                  </h3>
                  <p className="text-gray-600">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tennessee-orange-600 mb-6 text-center">
            We Also Serve
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            And many more communities throughout the Upstate region
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {additionalAreas.map((area, index) => (
              <div key={index} className="group bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-tennessee-orange-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{area.name}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2 leading-snug">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tennessee-orange-600 mb-6">
            Why Local Matters
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            JHS Crawlspace Specialist is a local, family-owned business. We understand the unique challenges of crawlspaces in the Upstate - from our red clay soil to our humid summers. Learn more about <Link to="/why-trust-us" className="text-tennessee-orange-600 hover:underline font-medium">why homeowners trust us</Link>.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            When you call us, you're talking directly to the owner. No call centers, no salespeople - just honest advice and quality work from someone who lives and works in your community.
          </p>
          <p className="text-lg text-gray-700">
            <span className="text-tennessee-orange-600 font-semibold">We treat every home like it's our own.</span> See <Link to="/testimonials" className="text-tennessee-orange-600 hover:underline font-medium">what our customers say</Link> about working with us.
          </p>
        </div>
      </section>

      {/* Don't See Your Area */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-tennessee-orange-600 mb-6">
            Don't See Your Area Listed?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We may still be able to help! Give us a call and we'll let you know if we can serve your location.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-tennessee-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for a Free Crawlspace Inspection?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us today to schedule your free, no-pressure inspection.
          </p>
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

export default ServiceAreas;
