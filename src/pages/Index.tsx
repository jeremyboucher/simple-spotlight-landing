
import { useEffect, useState } from 'react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center relative overflow-hidden px-6">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-slate-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className={`text-center z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Logo */}
        <div className="mb-8 transition-transform duration-300 hover:scale-105">
          <img 
            src="/lovable-uploads/3d9e1d4c-4dae-4256-884a-9c3f652caad2.png" 
            alt="insanelyGreat Logo" 
            className="mx-auto max-w-md w-full h-auto drop-shadow-sm"
          />
        </div>

        {/* Tagline */}
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-slate-600 text-lg md:text-xl font-light tracking-wide max-w-lg mx-auto leading-relaxed px-4">
            Crafting exceptional experiences with passion and precision
          </p>
        </div>

        {/* Subtle call-to-action */}
        <div className={`mt-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center space-x-2 text-slate-500 text-sm font-medium hover:text-slate-700 transition-colors duration-300 cursor-pointer group">
            <span>Something great is coming</span>
            <div className="w-1 h-1 bg-slate-400 rounded-full animate-pulse group-hover:bg-slate-600 transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-slate-300 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-slate-300 rounded-full animate-pulse delay-200"></div>
          <div className="w-2 h-2 bg-slate-300 rounded-full animate-pulse delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
