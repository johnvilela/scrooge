import { Card, CardHeader } from '@/components/ui/card';

export default function ForgotPasswordPage() {
  return (
    <main className="h-screen grid place-items-center">
      <Card>
        <CardHeader>
          <CardHeader className="text-4xl font-bold">
            Forgot your password?
          </CardHeader>
        </CardHeader>
      </Card>
    </main>
  );
}
