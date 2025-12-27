import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission for now
    toast({
      title: "Quote Request Sent!",
      description: "We\'ll contact you within 24 hours.",
    });
    setFormData({ name: '', phone: '', email: '', address: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const expectations = [
    'Free inspection or quote',
    'Clear explanation of what\'s needed',
    'No pressure and no obligation',
    'Honest recommendations'
  ];

  const idealFor = [
    'Notice moisture or musty odors',
    'Are buying or selling a home',
    'Need CL-100 or inspection repairs',
    'Want an honest second opinion'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Request a Free Crawlspace Quote
          </h1>
          <p className="text-xl text-gray-600">
            Honest inspections. No pressure. Clear recommendations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Not sure what your crawlspace needs?
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  We offer free crawlspace inspections and straightforward recommendations based on your home - not sales pressure.
                </p>
                <p className="text-lg text-gray-700">
                  Whether you\'re dealing with moisture, odors, vapor barrier issues, sump pumps, or just want peace of mind, we\'re happy to take a look.
                </p>
              </div>

              <Card className="mb-8 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {expectations.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">This Is For Homeowners Who</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {idealFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Form & Contact */}
            <div>
              <Card className="border-gray-200 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Request Your Free Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
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
                        rows={4}
                        className="border-gray-300"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6 transition-all duration-300"
                    >
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Direct Contact Options */}
              <div className="space-y-4">
                <Card className="border-gray-200 hover:border-orange-500 transition-all duration-300 cursor-pointer" onClick={() => window.location.href = 'tel:8648049384'}>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Call us directly</p>
                      <p className="text-lg font-semibold text-gray-900">(864) 804-9384</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 hover:border-orange-500 transition-all duration-300 cursor-pointer" onClick={() => window.location.href = 'mailto:jhscrawlspace@gmail.com'}>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email us</p>
                      <p className="text-lg font-semibold text-gray-900">jhscrawlspace@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Service areas</p>
                      <p className="text-gray-900">Spartanburg, Greenville & Upstate SC</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">
            Trusted by homeowners and realtors across the Upstate of South Carolina.
          </p>
          <p className="text-gray-600">
            Read our customer reviews to see what others say about working with JHS.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;