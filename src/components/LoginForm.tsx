import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState('');

  const getHintMessage = () => {
    if (attempts >= 6) {
      return "full ghajini mode you are in rn! its 'cleaning' duh!";
    } else if (attempts >= 3) {
      return "you love doing it, and it revolves around your house";
    }
    return "username is your name and password is one thing you like doing the most";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username.toLowerCase() === 'anusha' && password.toLowerCase() === 'cleaning') {
      onLogin();
    } else {
      setAttempts(prev => prev + 1);
      setError('Invalid credentials. Try again!');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <Card className="w-full max-w-md birthday-shadow backdrop-blur-sm bg-card/90">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold birthday-gradient bg-clip-text text-transparent">
            🎉 Birthday Login
          </CardTitle>
          <CardDescription className="text-lg">
            Enter your details to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-base font-medium">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 text-base"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-base font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-base"
                required
              />
            </div>

            {error && (
              <div className="text-destructive text-sm text-center font-medium">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full h-12 text-base birthday-gradient border-0 glow-shadow">
              Login
            </Button>
            
            <div className="text-center text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
              💡 Hint: {getHintMessage()}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;