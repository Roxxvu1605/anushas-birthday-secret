import { useState } from 'react';

const EnvelopeSurprise = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsExpanded(true);
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsExpanded(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 200);
    }
  };

  return (
    <>
      {/* Small envelope icon */}
      {!isOpen && (
        <div className="flex flex-col items-center space-y-4">
          <div 
            className="envelope-closed relative"
            onClick={handleEnvelopeClick}
          >
            {/* Main envelope body */}
            <div className="w-20 h-14 bg-crimson envelope-shadow rounded-sm relative overflow-hidden">
              {/* Envelope back triangle patterns */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-crimson to-crimson-dark"></div>
                {/* Corner triangles for realistic envelope look */}
                <div className="absolute top-0 left-0 border-l-10 border-b-7 border-l-crimson-dark border-b-transparent"></div>
                <div className="absolute top-0 right-0 border-r-10 border-b-7 border-r-crimson-dark border-b-transparent"></div>
              </div>
              
              {/* Envelope flap */}
              <div className="absolute -top-1 left-0 right-0 h-8 bg-crimson-dark transform rotate-0 origin-bottom">
                <div className="w-full h-full relative">
                  <div className="absolute top-0 left-0 border-l-10 border-t-8 border-l-transparent border-t-crimson-dark"></div>
                  <div className="absolute top-0 right-0 border-r-10 border-t-8 border-r-transparent border-t-crimson-dark"></div>
                  <div className="absolute top-0 left-10 right-10 h-8 bg-crimson-dark"></div>
                </div>
              </div>

              {/* Wax seal */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-birthday-gold rounded-full border-2 border-birthday-accent flex items-center justify-center text-xs">
                💝
              </div>
            </div>
            
            {/* Click hint */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap animate-pulse">
              Tap to open
            </div>
          </div>
        </div>
      )}

      {/* Full-screen envelope modal */}
      {isOpen && (
        <div className="envelope-modal" onClick={handleBackdropClick}>
          <div className={`envelope-content ${isExpanded ? 'opened' : ''}`}>
            {/* Large envelope body */}
            <div className="envelope-body">
              {/* Envelope flap */}
              <div className="envelope-flap-large"></div>
              
              {/* Interior content */}
              <div className="envelope-interior">
                <div className="space-y-4 text-center">
                  {/* Placeholder for image */}
                  <div className="w-full max-w-xs h-40 bg-gradient-to-br from-birthday-pink to-birthday-purple rounded-lg flex items-center justify-center text-white font-medium text-sm">
                    📸 Your Special Photo
                    <br />
                    <span className="text-xs opacity-80">(Replace this placeholder)</span>
                  </div>
                  
                  <p className="text-base font-medium text-foreground">
                    just a picture for you to get crazy! lol.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EnvelopeSurprise;