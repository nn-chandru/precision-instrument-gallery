
import { Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'white';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ variant = 'default', showText = true, size = 'md' }: LogoProps) => {
  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 32,
  };
  
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl md:text-3xl',
  };
  
  const colorClasses = variant === 'white' 
    ? 'text-white' 
    : 'text-apex-primary';

  return (
    <div className={`flex items-center gap-2 font-bold ${colorClasses}`}>
      <div className={`flex items-center justify-center rounded-md p-1 ${variant === 'white' ? 'bg-white/10' : 'bg-apex-primary/10'}`}>
        <Stethoscope size={iconSizes[size]} strokeWidth={2.5} className={variant === 'white' ? 'text-white' : 'text-apex-primary'} />
      </div>
      {showText && (
        <span className={`${textSizes[size]} font-bold tracking-tight`}>
          Apex<span className="text-apex-secondary">Surgicals</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
