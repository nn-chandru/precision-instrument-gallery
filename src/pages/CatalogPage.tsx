
import React from 'react';
import { FileText, Download, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';

// Define catalog types
type CatalogItem = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  pdfUrl: string;
  category: string;
  date: string;
};

// Sample catalog data
const catalogItems: CatalogItem[] = [
  {
    id: 'cat1',
    title: 'Surgical Scissors Catalog',
    description: 'Complete range of precision surgical scissors for all medical procedures.',
    thumbnail: 'https://images.unsplash.com/photo-1591551776616-cbe18eb7657a?q=80&w=400&auto=format&fit=crop',
    pdfUrl: '/catalogs/scissors-catalog.pdf',
    category: 'scissors',
    date: 'April 2025'
  },
  {
    id: 'cat2',
    title: 'Needle Holders Collection',
    description: 'Premium needle holders for all suturing applications.',
    thumbnail: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?q=80&w=400&auto=format&fit=crop',
    pdfUrl: '/catalogs/needle-holders-catalog.pdf',
    category: 'needle-holders',
    date: 'March 2025'
  },
  {
    id: 'cat3',
    title: 'Forceps Selection Guide',
    description: 'Comprehensive guide to our premium forceps collection.',
    thumbnail: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=400&auto=format&fit=crop',
    pdfUrl: '/catalogs/forceps-catalog.pdf',
    category: 'forceps',
    date: 'February 2025'
  },
  {
    id: 'cat4',
    title: 'Complete Apex Surgical Catalog',
    description: 'Full product range covering all Apex Surgical instruments and equipment.',
    thumbnail: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=400&auto=format&fit=crop',
    pdfUrl: '/catalogs/apex-surgical-catalog.pdf',
    category: 'full-catalog',
    date: 'April 2025'
  }
];

const CatalogPage = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  };

  const openPDF = (pdfUrl: string) => {
    // In a real app, this would be an actual PDF URL
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={handleGoBack} 
          className="mb-4 flex items-center hover:bg-apex-primary/10"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Catalogs</h1>
          <p className="text-gray-600 mb-8">Browse and download our product catalogs and technical documentation.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {catalogItems.map((item) => (
              <Card key={item.id} className="overflow-hidden border border-gray-200 hover:border-apex-primary transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <Button 
                      variant="outline" 
                      className="text-apex-primary border-apex-primary hover:bg-apex-primary/5"
                      onClick={() => openPDF(item.pdfUrl)}
                    >
                      <FileText size={16} className="mr-2" />
                      View Catalog
                    </Button>
                    <Button 
                      variant="ghost" 
                      onClick={() => openPDF(item.pdfUrl)}
                      className="hover:bg-apex-primary/10"
                    >
                      <Download size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Need Custom Product Information?</h2>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Contact our team for customized product information tailored to your specific requirements.
            </p>
            <Button asChild className="bg-apex-primary hover:bg-apex-primary/90">
              <Link to="/contact">Contact Sales Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
