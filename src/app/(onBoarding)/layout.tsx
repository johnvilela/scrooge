import Image from 'next/image';
import { ReactNode } from 'react';

export default function OnBoardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const imgs = [
    'https://picsum.photos/id/112/2100/1400',
    'https://picsum.photos/id/155/1632/1088',
    'https://picsum.photos/id/165/1000/666',
  ];

  return (
    <main className="h-screen flex bg-muted/40">
      <div className="bg-background p-12 max-w-md w-full flex flex-col justify-center">
        {children}
      </div>
      <div className="flex-1 relative">
        <Image src={imgs[1]} alt="Onboarding" fill />
      </div>
    </main>
  );
}
