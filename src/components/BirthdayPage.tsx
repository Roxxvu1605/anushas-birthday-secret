import { useState, useEffect, useRef } from 'react';
import TypewriterText from './TypewriterText';
import EnvelopeSurprise from './EnvelopeSurprise';

const BirthdayPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const birthdayMessage = "Happy Birthday! ✨ Wishing you a day filled with laughter, smiles, and all the little things that make you happiest. You truly bring a special energy wherever you go, and the office feels brighter with you around. Hope this year brings you endless joy and success!";

  useEffect(() => {
    // Start message after a brief delay
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    // Try to play background music (will need user interaction on most browsers)
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log('Autoplay prevented - user interaction needed');
      });
    }

    return () => clearTimeout(timer);
  }, []);

  const handleMessageComplete = () => {
    setTimeout(() => {
      setShowEnvelope(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col relative z-10">
      {/* Background music */}
      <audio ref={audioRef} loop>
        <source src="/birthday-song.mp3" type="audio/mpeg" />
        {/* Add your MP3 file to the public folder */}
      </audio>

      {/* Top section - Photo */}
      <div className="h-1/3 flex items-center justify-center p-4 pt-8">
        <div className="w-full max-w-sm">
          <div className="aspect-square w-full bg-gradient-to-br from-birthday-primary to-birthday-secondary rounded-2xl birthday-shadow flex items-center justify-center text-white font-bold text-lg bounce-in">
            📷 Your Beautiful Photo
            <br />
            <span className="text-sm font-normal opacity-80">(Replace this placeholder)</span>
          </div>
        </div>
      </div>

      {/* Bottom section - Message and surprise */}
      <div className="h-2/3 flex flex-col justify-center p-6 space-y-8">
        <div className="text-center">
          {showMessage && (
            <div className="text-lg leading-relaxed font-medium text-foreground fade-in">
              <TypewriterText 
                text={birthdayMessage}
                speed={30}
                onComplete={handleMessageComplete}
              />
            </div>
          )}
        </div>

        {showEnvelope && (
          <div className="flex justify-center bounce-in">
            <EnvelopeSurprise />
          </div>
        )}

        {/* Music control hint */}
        <div className="text-center text-xs text-muted-foreground">
          🎵 Background music: Add birthday-song.mp3 to public folder
        </div>
      </div>
    </div>
  );
};

export default BirthdayPage;