import { useState } from 'react';
import ConfettiBackground from '@/components/ConfettiBackground';
import LoginForm from '@/components/LoginForm';
import BirthdayPage from '@/components/BirthdayPage';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ConfettiBackground />
      
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <BirthdayPage />
      )}
    </div>
  );
};

export default Index;
