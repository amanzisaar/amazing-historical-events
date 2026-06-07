import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-zinc-800 px-8 py-4">
      <Link href="/" className="text-xl font-bold">
        Amazing Historical Events
      </Link>

      <div className="flex gap-6">
        <Link href="/">Home</Link>

        <Link href="/timeline">Timeline</Link>

        <Link href="/continents">Continents</Link>

        <Link href="/nations">Countries</Link>

        <a href="/stats">Stats</a>

        <a href="/about">About</a>

        <Link href="/search">Search</Link>

        <Link href="/categories">Categories</Link>

        <Link href="/saved-events">Saved</Link>

        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}
