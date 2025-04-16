
import { Award, Clock, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About PrecisionMed</h1>
            <p className="text-xl text-gray-600">
              Delivering exceptional surgical instruments to medical professionals worldwide for over 25 years.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1998 by a team of surgical instrument experts and medical professionals, PrecisionMed has grown from a small workshop to a global supplier of premium surgical instruments.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission has always been clear: to provide healthcare professionals with instruments of exceptional quality that enhance precision and improve patient outcomes.
            </p>
            <p className="text-gray-600">
              We combine traditional craftsmanship with modern manufacturing techniques to ensure that every instrument meets the highest standards of quality and reliability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="/placeholder.svg" 
              alt="PrecisionMed Workshop" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Globe className="mx-auto text-medical-600 mb-3" size={32} />
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="mx-auto text-medical-600 mb-3" size={32} />
            <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Award className="mx-auto text-medical-600 mb-3" size={32} />
            <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
            <div className="text-gray-600">Product Variants</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="mx-auto text-medical-600 mb-3" size={32} />
            <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
        </div>
        
        {/* Quality Section */}
        <div className="bg-white p-8 rounded-lg shadow-md my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Commitment to Quality</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Material Selection</h3>
              <p className="text-gray-600 mb-6">
                We use only the highest grade stainless steel and other materials, sourced from trusted suppliers who share our commitment to quality and sustainability.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Craftmanship</h3>
              <p className="text-gray-600 mb-6">
                Our master craftsmen have decades of experience in creating precision instruments. Each piece is hand-finished and inspected before leaving our workshop.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Control</h3>
              <p className="text-gray-600 mb-6">
                Every instrument undergoes rigorous testing and quality control checks to ensure it meets our exacting standards for precision, durability, and performance.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                We actively seek feedback from medical professionals and invest in research to continuously improve our designs and manufacturing processes.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience PrecisionMed Quality?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our extensive catalog or contact our team to discuss your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-medical-600 hover:bg-medical-700" size="lg">
              <Link to="/products">View Our Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
