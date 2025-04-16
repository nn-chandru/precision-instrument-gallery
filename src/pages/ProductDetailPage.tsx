
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, getCategory } from '@/data/products';
import { ChevronRight, Check, ArrowLeft, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';

const ProductDetailPage = () => {
  const { categorySlug, productId } = useParams<{ categorySlug: string, productId: string }>();
  const product = productId ? getProductById(productId) : null;
  const category = categorySlug ? getCategory(categorySlug) : null;
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">The product you're looking for could not be found.</p>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }
  
  const subcategory = category?.subcategories.find(sub => sub.slug === product.subcategory);
  
  const handleDownloadCatalog = () => {
    // This is a placeholder - in a real app you would link to an actual PDF
    window.open('/product-catalogs/apex-surgical-catalog.pdf', '_blank');
  };

  return (
    <div className="bg-gray-50 py-8">
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
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6 flex-wrap">
          <Link to="/" className="hover:text-apex-primary">Home</Link>
          <ChevronRight className="mx-1" size={16} />
          <Link to="/products" className="hover:text-apex-primary">Products</Link>
          <ChevronRight className="mx-1" size={16} />
          <Link to={`/products/${product.category}`} className="hover:text-apex-primary">
            {category?.name}
          </Link>
          <ChevronRight className="mx-1" size={16} />
          <span className="text-apex-primary">{product.name}</span>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-apex-light to-white rounded-lg p-8 flex items-center justify-center">
              <img src={product.image} alt={product.name} className="max-h-80 w-auto object-contain" />
            </div>
            
            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="mb-4 flex items-center">
                <span className="text-sm font-medium text-apex-primary bg-apex-primary/10 px-3 py-1 rounded-full">
                  {subcategory?.name || product.subcategory}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-apex-primary mr-2 mt-1 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4">
                <Button asChild className="bg-apex-primary hover:bg-apex-primary/90">
                  <Link to="/contact">Request Information</Link>
                </Button>
                <Button variant="outline" className="flex items-center gap-2" onClick={handleDownloadCatalog}>
                  <FileText size={16} />
                  Download Catalog
                </Button>
              </div>
            </div>
          </div>
          
          {/* Detailed Information Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="details">
              <TabsList className="mb-6">
                <TabsTrigger value="details">Detailed Description</TabsTrigger>
                <TabsTrigger value="specs">Technical Specifications</TabsTrigger>
                <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="text-gray-600">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Details</h3>
                  <p className="mb-4">{product.detailedDescription || product.description}</p>
                  <p>All Apex Surgical instruments come with our commitment to quality and precision. Each instrument is meticulously crafted to meet the demanding requirements of modern medical procedures.</p>
                </Card>
              </TabsContent>
              
              <TabsContent value="specs">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                  {product.technicalSpecs ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.technicalSpecs).map(([key, value]) => (
                        <div key={key} className="border-b pb-2">
                          <span className="font-medium">{key}:</span> {value}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>Technical specifications for this product are available upon request. Please contact our sales team for detailed information.</p>
                  )}
                </Card>
              </TabsContent>
              
              <TabsContent value="usage">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Usage Guidelines</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-apex-primary mr-2 mt-1" size={16} />
                      <span>Clean thoroughly after each use according to your facility's protocol</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-apex-primary mr-2 mt-1" size={16} />
                      <span>Inspect for damage before each use</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-apex-primary mr-2 mt-1" size={16} />
                      <span>Sterilize using appropriate methods for the material</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-apex-primary mr-2 mt-1" size={16} />
                      <span>Store in dry, clean conditions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-apex-primary mr-2 mt-1" size={16} />
                      <span>Regular maintenance ensures optimal performance and longevity</span>
                    </li>
                  </ul>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
