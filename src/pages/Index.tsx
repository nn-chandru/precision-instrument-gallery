
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/products';
import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div>
      <Hero />
      
      {/* Featured Categories Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Product Categories</h2>
            <Link to="/products" className="text-apex-primary hover:text-apex-secondary font-medium flex items-center">
              View All <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((category) => (
              <CategoryCard 
                key={category.slug}
                name={category.name}
                image={category.image}
                slug={category.slug}
                count={category.subcategories.length}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Catalog Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-apex-pale px-4 py-1 rounded-full mb-4">
              <span className="text-apex-secondary font-medium">Browse Our Catalogs</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Catalogs & Documentation</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Download our comprehensive product catalogs containing detailed specifications, 
              usage guidelines, and ordering information for our complete range of surgical instruments.
            </p>
            
            <Button asChild size="lg" className="bg-apex-primary hover:bg-apex-primary/90 mb-8">
              <Link to="/catalog" className="flex items-center">
                <FileText className="mr-2" size={20} />
                View All Catalogs
              </Link>
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">General Catalog</h3>
                <p className="text-gray-600 mb-4">
                  Complete overview of our entire product line, including all categories of surgical instruments.
                </p>
                <Button asChild variant="outline" className="text-apex-primary border-apex-primary hover:bg-apex-primary/5">
                  <Link to="/catalog" className="flex items-center">
                    <FileText className="mr-2" size={16} />
                    Download PDF
                  </Link>
                </Button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialty Catalogs</h3>
                <p className="text-gray-600 mb-4">
                  Specialized catalogs for each instrument category with detailed technical specifications.
                </p>
                <Button asChild variant="outline" className="text-apex-primary border-apex-primary hover:bg-apex-primary/5">
                  <Link to="/catalog" className="flex items-center">
                    <FileText className="mr-2" size={16} />
                    Browse Collection
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <InfoSection />
      
      {/* CTA Section */}
      <div className="bg-apex-pale py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Enhance Your Medical Practice?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Browse our extensive catalog of precision surgical instruments or contact us for personalized assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-apex-primary hover:bg-apex-primary/90">
              <Link to="/products" className="flex items-center">
                Browse Catalog <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-apex-primary text-apex-primary hover:bg-apex-primary/10">
              <Link to="/contact" className="flex items-center">Contact Sales Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
