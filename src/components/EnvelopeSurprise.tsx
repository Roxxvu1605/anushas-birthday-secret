import { useState } from 'react';
import { Card } from '@/components/ui/card';

const EnvelopeSurprise = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-6 mt-8">
      <div 
        className={`relative cursor-pointer transition-all duration-500 ${isOpen ? 'envelope-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Envelope body */}
        <div className="w-16 h-12 envelope-gradient envelope-shadow rounded-sm relative">
          {/* Envelope flap */}
          <div className="envelope-flap absolute top-0 left-0 w-full h-8 bg-birthday-gold border-l-8 border-r-8 border-t-8 border-transparent border-t-birthday-gold transform-gpu">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-transparent border-b-birthday-gold"></div>
          </div>
          
          {/* Envelope icon */}
          <div className="absolute inset-0 flex items-center justify-center text-birthday-purple text-xl">
            ✉️
          </div>
        </div>
        
        {/* Click hint */}
        {!isOpen && (
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap animate-pulse">
            Tap to open
          </div>
        )}
      </div>

      {/* Surprise content */}
      {isOpen && (
        <Card className="w-full max-w-sm p-6 text-center birthday-shadow fade-in">
          <div className="space-y-4">
            {/* Placeholder for image */}
            <div className="w-full h-48 bg-gradient-to-br from-birthday-pink to-birthday-purple rounded-lg flex items-center justify-center text-white font-medium">
              📸 Your Special Photo
              <br />
              <span className="text-sm opacity-80">(Replace this placeholder)</span>
            </div>
            
            <p className="text-base font-medium text-foreground">
              just a picture for you to get crazy! lol.
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default EnvelopeSurprise;