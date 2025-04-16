import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-apex-light to-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-repeat"></div>
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <div className="inline-block bg-[#FFE8E0] px-4 py-1 rounded-full mb-4">
              <span className="text-[#F97316] font-medium">Professional Surgical Tools</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Precision Surgical Instruments
              <span className="block text-[#9b5de5] mt-2">For Medical Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              High-quality, durable surgical instruments crafted for precision and reliability in medical procedures.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#9b5de5] hover:bg-[#8A4DD3] text-white px-6 py-3">
                <Link to="/products" className="flex items-center">
                  Browse Products <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative z-10 bg-white rounded-lg shadow-xl p-4 rotate-2 transform transition-transform hover:rotate-0 duration-300">
              <img 
                src="/lovable-uploads/surgical-instruments-hero.jpg" 
                alt="Professional Surgical Instruments" 
                className="w-full h-auto rounded"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1584555613483-3b107aa8ac89?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>
            <div className="absolute top-8 -right-8 w-64 h-64 bg-[#9b5de5]/20 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#F97316]/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#F97316]/10 rounded-full"></div>
      <div className="absolute top-1/2 right-0 w-24 h-24 bg-[#9b5de5]/10 rounded-full transform -translate-x-1/2"></div>
    </div>
  );
};

export default Hero;
