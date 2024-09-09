import Link from "next/link";

export default function Header() {
    return <header className='w-full grid grid-cols-3 p-4 border-b border-b-gray-600'>
        <div>
            Moons Software
        </div>
        <div className='grid grid-cols-4'>
            <Link href='/'>
                Home
            </Link>
            <Link href='./about'>
                About us
            </Link>
            <Link href='./processes'>
                Our processes
            </Link>
            <Link href='./contacts'>
                Contacts
            </Link>
        </div>
    </header>
}
