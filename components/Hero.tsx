type HeroProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function Hero({ search, setSearch }: HeroProps) {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mb-4 rounded-full border border-blue-500 px-4 py-2 text-sm text-blue-400">
        20+ Historical Events • 6 Continents
      </div>

      <h1 className="max-w-5xl text-6xl font-extrabold leading-tight">
        Explore Human History
      </h1>

      <h2 className="mt-4 max-w-4xl text-3xl font-semibold text-zinc-300">
        Discover the Events That Changed the World
      </h2>

      <p className="mt-6 max-w-3xl text-lg text-zinc-400">
        Travel through revolutions, wars, empires, discoveries,
        disasters, and political movements that shaped civilization.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="/timeline"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
        >
          Explore Timeline
        </a>

        <a
          href="/search"
          className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold transition hover:border-blue-500"
        >
          Search Events
        </a>
      </div>

      <input
        type="text"
        placeholder="Search historical events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-10 w-full max-w-2xl rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white"
      />
    </section>
  );
}