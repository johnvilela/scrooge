import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <div className="p-32 flex flex-col gap-4">
        <Input label="Name" id="name" error="something went wrong" />
        <Button>Click Me</Button>
      </div>
    </>
  );
}
