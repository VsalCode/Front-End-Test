import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 lg:px-8">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-black">Lyf-)</div>
        <div className="hidden md:block text-gray-600">/ isurance@tiropay.au</div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="secondary" className="hidden md:inline-flex">
          Log In
        </Button>
        <Button variant="primary">
          Get Started
        </Button>
        <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};