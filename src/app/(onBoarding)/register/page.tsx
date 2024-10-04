import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function RegisterPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-2">Want to track your money?</h1>
      <p>Create your account and get started!</p>
      <form className="flex flex-col gap-2 mt-8">
        <Input label="Name" type="text" />
        <Input label="Email" type="email" />
        <Input label="Password" type="password" />
        <Button type="submit">Start tracking</Button>
      </form>
    </>
  );
}
