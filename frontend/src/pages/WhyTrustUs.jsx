import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Shield, Eye, MessageSquare, Home, FileCheck, Award, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const WhyTrustUs = () => {
  const trustReasons = [
    {
      icon: Eye,
      title: "Honest, No-Pressure Inspections",
      description: "We believe in giving you the full picture without sales tactics. Our inspections are thorough, educational, and designed to help you understand exactly what's happening under your home. We'll tell you what we find - even if the answer is that you don't need anything done.",
      highlights: [
        "No high-pressure sales tactics",
        "Honest assessments every time",
        "We'll tell you if you don't need work done",
        "Transparent about what we find"
      ]
    },
    {
      icon: MessageSquare,
      title: "Clear Explanations & Recommendations",
      description: "We take the time to explain everything in plain language. You'll understand what's causing the issue, what your options are, and why we're recommending a particular solution. We want you to feel confident in your decisions, not confused or rushed.",
      highlights: [
        "Plain-language explanations",
        "Multiple options when available",
        "Answers to all your questions",
        "No jargon or confusion"
      ]
    },
    {
      icon: Shield,
      title: "Crawlspace-Focused Expertise",
      description: "This is all we do. While other companies treat crawlspace work as a side service, we've made it our specialty. That focus means deeper expertise, better solutions, and more efficient work. We know crawlspaces inside and out.",
      highlights: [
        "Dedicated crawlspace specialists",
        "Deep knowledge of moisture issues",
        "Experience with all crawlspace types",
        "Up-to-date on best practices"
      ]
    },
    {
      icon: Home,
      title: "Experience with Homeowners",
      description: "Whether you're living in your forever home or just trying to protect your investment, we understand your concerns. We've helped homeowners across the Upstate deal with moisture problems, odors, pest concerns, and structural issues. We treat every home like our own.",
      highlights: [
        "Understanding of homeowner concerns",
        "Respectful of your home and property",
        "Flexible scheduling",
        "Long-term relationship focus"
      ]
    },
    {
      icon: FileCheck,
      title: "Trusted by Buyers & Sellers",
      description: "Real estate transactions move fast, and crawlspace issues can derail a sale. We work with buyers and sellers to provide quick, accurate inspections and clear reports. Realtors trust us to give honest assessments that help deals close smoothly.",
      highlights: [
        "Fast turnaround for transactions",
        "Clear, professional reports",
        "Trusted by local realtors",
        "Unbiased assessments"
      ]
    },
    {
      icon: Award,
      title: "CL-100 Inspection Expertise",
      description: "We're experienced with CL-100 (Wood Infestation) inspections and understand what's required for South Carolina real estate transactions. Whether you need a report for closing or want to address issues proactively, we've got the expertise to help.",
      highlights: [
        "CL-100 certified knowledge",
        "SC real estate requirements",
        "Quick report delivery",
        "Clear remediation guidance"
      ]
    }
  ];

  const commitments = [
    "We show up on time",
    "We explain before we recommend",
    "We never push unnecessary services",
    "We stand behind our work",
    "We treat your home with respect",
    "We're always available to answer questions"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Homeowners Trust JHS
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We built our business on honesty, expertise, and treating every homeowner the way we'd want to be treated. Here's what sets us apart.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-6 w-6 text-tennessee-orange-600" />
            <span className="text-lg font-semibold text-tennessee-orange-600">
              Insured, Licensed & Trusted
            </span>
          </div>
        </div>
      </section>

      {/* Main Trust Points */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tennessee-orange-600 mb-4 text-center">
            What Makes Us Different
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We're not just another contractor. We're crawlspace specialists who believe in doing right by every homeowner.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {trustReasons.map((reason, index) => (
              <Card key={index} className="border-gray-200 hover:border-tennessee-orange-500 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-tennessee-orange-100 p-3 rounded-lg flex-shrink-0">
                      <reason.icon className="h-7 w-7 text-tennessee-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-tennessee-orange-600 mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {reason.description}
                      </p>
                      <ul className="space-y-2">
                        {reason.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-center gap-2 text-gray-600">
                            <CheckCircle className="h-4 w-4 text-tennessee-orange-600 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-tennessee-orange-600 mb-4 text-center">
            Our Promise to You
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            Every homeowner deserves a contractor they can trust. Here's what you can expect when you work with JHS Crawlspace Specialist.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-4">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-center gap-3 p-3">
                  <div className="bg-tennessee-orange-600 rounded-full p-1 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg text-gray-800 font-medium">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tennessee-orange-600 mb-10">
            What Our Customers Say
          </h2>

          <div className="bg-gray-50 rounded-xl p-8 md:p-10 border border-gray-200">
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
              "Nathan did an outstanding job from start to finish; prompt estimate, excellent work, great price. Highly recommended."
            </blockquote>
            <p className="text-tennessee-orange-600 font-semibold text-lg">
              — Philip Dorroll
            </p>
          </div>

          <div className="mt-8">
            <Button
              variant="outline"
              className="border-tennessee-orange-600 text-tennessee-orange-600 hover:bg-tennessee-orange-600 hover:text-white transition-all duration-300"
              onClick={() => window.location.href = '/testimonials'}
            >
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Local Business Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tennessee-orange-600 mb-6">
            Local, Family-Owned Business
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            JHS Crawlspace Specialist is owned and operated by <span className="text-tennessee-orange-600 font-semibold">Nathan and Kristen Johnson</span>. We live and work in the Upstate of South Carolina, and our reputation matters to us.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            When you call JHS, you're not getting a call center - you're talking directly to the people who will be working on your home. That's the way it should be.
          </p>
          <p className="text-xl font-semibold text-tennessee-orange-600 mb-4">
            Serving Spartanburg, Greenville, Greer, Boiling Springs, and surrounding areas.
          </p>
          <p className="text-gray-600">
            <Link to="/service-areas" className="text-tennessee-orange-600 hover:underline font-medium">View all service areas</Link> | <Link to="/services" className="text-tennessee-orange-600 hover:underline font-medium">See our services</Link>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-tennessee-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Schedule Your Free Crawlspace Inspection
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            No pressure, no obligation. Just honest answers about what's happening under your home. Call us today to schedule your free inspection.
          </p>
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
              onClick={() => window.location.href = '/contact'}
            >
              Request a Quote Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyTrustUs;
