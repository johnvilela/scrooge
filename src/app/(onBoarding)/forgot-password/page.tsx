import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ForgotPasswordPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Forgot your password?</h1>
      <p>
        {
          "Enter your email and we'll send the instructions to reset your password"
        }
      </p>
      <form className="flex flex-col gap-2 mt-8">
        <Input label="Email" type="email" />
        <Button type="submit">Send instructions</Button>
      </form>
    </>
  );
}
