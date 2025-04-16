
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

type CategoryCardProps = {
  name: string;
  image: string;
  slug: string;
  count: number;
};

const CategoryCard = ({ name, image, slug, count }: CategoryCardProps) => {
  // Generate a random gradient class for each card
  const gradientClasses = [
    "from-apex-primary/80 to-apex-accent/80",
    "from-apex-secondary/80 to-apex-pale/80",
    "from-apex-accent/80 to-apex-primary/80",
    "from-apex-secondary/70 to-apex-accent/70",
  ];
  
  const randomGradient = gradientClasses[Math.floor(Math.random() * gradientClasses.length)];
  
  return (
    <Link to={`/products/${slug}`} className="group">
      <div className="relative rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-lg">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${randomGradient}`}></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-semibold">{name}</h3>
          <Badge variant="outline" className="mt-2 bg-white/20 text-white border-white/40">
            {count} products
          </Badge>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
