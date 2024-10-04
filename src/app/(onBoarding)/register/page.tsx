import { Card, CardHeader } from '@/components/ui/card';

export default function RegisterPage() {
  return (
    <main className="h-screen grid place-items-center">
      <Card>
        <CardHeader>
          <CardHeader className="text-4xl font-bold">
            Create your account
          </CardHeader>
        </CardHeader>
      </Card>
    </main>
  );
}
