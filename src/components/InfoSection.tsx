
import { Brain, Shield, Award } from 'lucide-react';

const InfoSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PrecisionMed?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For over 25 years, we've been providing healthcare professionals with the highest quality surgical instruments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-medical-100 rounded-full mb-4">
              <Award className="text-medical-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              Our instruments are crafted from the finest materials, ensuring durability and precision in every procedure.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-medical-100 rounded-full mb-4">
              <Brain className="text-medical-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Craftsmanship</h3>
            <p className="text-gray-600">
              Each instrument is meticulously designed and tested by skilled craftsmen with decades of experience.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-medical-100 rounded-full mb-4">
              <Shield className="text-medical-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Globally</h3>
            <p className="text-gray-600">
              Medical professionals in over 50 countries rely on our instruments for critical procedures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
