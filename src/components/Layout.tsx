
import { ReactNode } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-1 w-full bg-gradient-to-r from-apex-primary via-apex-secondary to-apex-accent"></div>
      <Navbar />
      <ScrollArea className="flex-grow">
        <main className="flex-grow">{children}</main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default Layout;
