import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
      <p>Enter your credentials to login</p>
      <form className="flex flex-col gap-2 mt-8">
        <Input label="Email" type="email" />
        <Input label="Password" type="password" />
        <Button
          variant="link"
          className="text-xs p-0 h-auto justify-end mb-4"
          asChild
        >
          <Link href={'/forgot-password'}>Forgot password?</Link>
        </Button>
        <Button type="submit">Login</Button>
        <Button variant="ghost" asChild>
          <Link href={'/register'}>{"Don't have an account? Register"}</Link>
        </Button>
      </form>
    </>
  );
}
