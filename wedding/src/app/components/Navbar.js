import Link from 'next/link';

export default function NavBar() {
    return  (
        <nav className=''>
            <ul className=''>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/our-story">Our Story</Link></li>
                <li><Link href="/wedding-details">Wedding Day</Link></li>
                <li><Link href="/wedding-party">Wedding Party</Link></li>
                <li><Link href="/travel">Travel details</Link></li>
            </ul>
        </nav>
    );
}