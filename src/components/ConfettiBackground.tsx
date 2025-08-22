import { useEffect, useState } from 'react';

interface Confetti {
  id: number;
  left: number;
  color: string;
  delay: number;
}

const ConfettiBackground = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    const colors = ['hsl(320, 70%, 60%)', 'hsl(280, 70%, 65%)', 'hsl(50, 90%, 70%)', 'hsl(340, 80%, 75%)', 'hsl(45, 100%, 75%)'];
    
    const generateConfetti = () => {
      const newConfetti: Confetti[] = [];
      for (let i = 0; i < 25; i++) {
        newConfetti.push({
          id: i,
          left: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 3,
        });
      }
      setConfetti(newConfetti);
    };

    generateConfetti();
    const interval = setInterval(generateConfetti, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti absolute"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiBackground;