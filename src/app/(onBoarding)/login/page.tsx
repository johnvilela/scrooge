import { Card, CardHeader } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <main className="h-screen grid place-items-center">
      <Card>
        <CardHeader>
          <CardHeader className="text-4xl font-bold">Welcome back!</CardHeader>
        </CardHeader>
      </Card>
    </main>
  );
}
