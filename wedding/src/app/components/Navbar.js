import Link from 'next/link';

export default function NavBar() {
    return  (
        <nav className="w-full p-4 bg-[var(--primary-color)] text-white shadow-md">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <h1 className="text-xl charm-bold">Our Wedding</h1>
                <ul className="flex gap-6 text-lg">
                <li>
                    <Link href="/" className="hover:underline">
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="/our-story" className="hover:underline">
                    Our Story
                    </Link>
                </li>
                <li>
                    <Link href="/wedding-details" className="hover:underline">
                    Wedding Details
                    </Link>
                </li>
                <li>
                    <Link href="/travel" className="hover:underline">
                    Travel
                    </Link>
                </li>
                <li>
                    <Link href="/wedding-party" className="hover:underline">
                    Wedding Party
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
  );
}
    