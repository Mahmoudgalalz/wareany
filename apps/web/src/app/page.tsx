import { NavBar } from '@/components/nav-bar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="w-full flex flex-col items-center justify-center  gap-8">
        <div className="h-3/5 w-full">
          <Image
            src="/heroplaceholder.png"
            alt="Wareany Logo"
            width={500}
            height={500}
            className=" w-full  h-full max-h-[60dvh] object-cover"
            priority
          />
        </div>
        <div className=" flex flex-col items-center justify-center h-2/5">
          <span className="font-dancingScript ~text-lg/xl">Welcome To</span>
          <h1 className="font-playfair ~text-3xl/4xl">Wareany</h1>
          <p className="mt-1">Your AI-powered Styler.</p>
          <Link href="/login">
            <Button className="!bg-primary ~text-base/xl px-6 mt-2 font-semibold">
              Get Started
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}
