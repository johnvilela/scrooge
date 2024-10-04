import { Card, CardHeader } from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <main className="h-screen grid place-items-center">
      <Card>
        <CardHeader>
          <CardHeader className="text-4xl font-bold">Dashboard</CardHeader>
        </CardHeader>
      </Card>
    </main>
  );
}
