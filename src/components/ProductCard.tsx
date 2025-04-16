import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';

type ProductCardProps = {
  id: string;
  name: string;
  image: string;
  category: string;
  description?: string;
  pdfUrl?: string;
};

const ProductCard = ({ id, name, image, category, description, pdfUrl }: ProductCardProps) => {
  return (
    <div className="group">
      <Link to={`/products/${category}/${id}`} className="block">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100">
          <div className="h-48 overflow-hidden bg-gradient-to-br from-apex-light to-white flex items-center justify-center p-4">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900 truncate group-hover:text-apex-primary transition-colors">{name}</h3>
            {description && (
              <p className="mt-1 text-sm text-gray-500 line-clamp-2">{description}</p>
            )}
            <div className="mt-2 flex items-center justify-between">
              <Badge className="bg-apex-primary/10 text-apex-primary hover:bg-apex-primary/20">
                {category}
              </Badge>
              {pdfUrl && (
                <a 
                  href={pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-apex-primary hover:text-apex-primary/80 flex items-center gap-1 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FileText size={16} />
                  <span>PDF</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
