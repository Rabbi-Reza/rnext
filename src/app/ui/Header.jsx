import Link from "next/link";
export default function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-[#020617] text-white">
            <h1 className="text-lg font-bold">
                <Link href="/">Server Action 2.0</Link>
            </h1>
            <nav className="flex space-x-6">
                <Link href="/">Home</Link>
                <Link href="/form">Form</Link>
            </nav>
        </header>
    );
}
