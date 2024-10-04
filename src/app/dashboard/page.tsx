import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <main className="h-screen grid place-items-center">
      <Card>
        <CardHeader>
          <h1 className="text-4xl font-bold">Dashboard</h1>
        </CardHeader>
        <CardContent>
          <p>USER: username</p>
          <Button>Logout</Button>
        </CardContent>
      </Card>
    </main>
  );
}
