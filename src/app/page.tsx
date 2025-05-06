import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex font-[family-name:var(--font-geist-sans)] text-gray-900 dark:text-gray-100 bg-white dark:bg-black">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen p-6 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111] flex flex-col gap-8">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Image
            src="/logo.png" // Replace with your logo
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4 text-lg font-medium">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/illustration" className="hover:underline">Illustration</Link>
          <Link href="/graphic-design" className="hover:underline">Graphic Design</Link>
          <Link href="/animation" className="hover:underline">Animation</Link>
          <Link href="/request" className="hover:underline">Request A Quote</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center p-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Design by Tuffy</h1>
        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
          Illustrator and designer based in California, inspired by old-school comic illustration, pop art, street art, and retro aesthetics. 
          My work is also shaped by a love for film, classic animation, novels, music, and minimalism. 
          I aim to bring a playful spirit to my designs by keeping an open mind and embracing experimentation throughout my creative process.
        </p>
      </main>
    </div>
  );
}
