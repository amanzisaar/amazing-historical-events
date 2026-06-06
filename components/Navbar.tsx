export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-zinc-800">
      <h1 className="text-xl font-bold">
        Amazing Historical Events
      </h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/timeline">Timeline</a>
        <a href="/search">Search</a>
        <a href="/profile">Profile</a>
      </div>
    </nav>
  );
}