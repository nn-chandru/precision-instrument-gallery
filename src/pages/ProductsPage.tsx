import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { categories, getProductsByCategory, getCategory } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductsPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const category = categorySlug ? getCategory(categorySlug) : null;
  const products = categorySlug ? getProductsByCategory(categorySlug) : [];
  
  const filteredProducts = activeFilter 
    ? products.filter(product => product.subcategory === activeFilter)
    : products;
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter === activeFilter ? null : filter);
  };

  const handleGoBack = () => {
    navigate(-1);
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
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-apex-primary">Home</Link>
          <ChevronRight className="mx-1" size={16} />
          <Link to="/products" className="hover:text-apex-primary">Products</Link>
          {categorySlug && (
            <>
              <ChevronRight className="mx-1" size={16} />
              <span className="text-apex-primary">{category?.name}</span>
            </>
          )}
        </div>

        {!categorySlug ? (
          // All Categories View
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">All Product Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div key={category.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h2>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <Link 
                      to={`/products/${category.slug}`}
                      className="text-apex-primary hover:text-apex-secondary font-medium flex items-center"
                    >
                      View Products <ChevronRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Category View
          <>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{category?.name}</h1>
                <p className="text-gray-600">{category?.description}</p>
              </div>
            </div>
            
            {/* Subcategory Filters */}
            {category && category.subcategories.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-medium text-gray-900 mb-3">Filter by Type</h2>
                <div className="flex flex-wrap gap-2">
                  {category.subcategories.map((subcat) => (
                    <button
                      key={subcat.slug}
                      onClick={() => handleFilterChange(subcat.slug)}
                      className={`px-4 py-2 rounded-full text-sm ${
                        activeFilter === subcat.slug
                          ? 'bg-apex-primary text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {subcat.name}
                    </button>
                  ))}
                  {activeFilter && (
                    <button
                      onClick={() => setActiveFilter(null)}
                      className="px-4 py-2 rounded-full text-sm bg-gray-200 text-gray-700 hover:bg-gray-300"
                    >
                      Clear Filter
                    </button>
                  )}
                </div>
              </div>
            )}
            
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    category={product.category}
                    description={product.description}
                    pdfUrl={product.pdfUrl}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
