import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="h-screen grid place-items-center">
      <Card>
        <CardHeader>
          <CardHeader className="text-4xl font-bold">SCROOGE</CardHeader>
        </CardHeader>
        <CardContent>
          <Button className="w-full" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
