type HeroProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function Hero({ search, setSearch }: HeroProps) {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="max-w-4xl text-5xl font-bold">
        Discover the Stories That Shaped Human History
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-zinc-400">
        Explore evidence-backed historical events from around the world,
        organized by continent, country, and timeline.
      </p>

      <input
        type="text"
        placeholder="Search historical events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-8 w-full max-w-xl rounded-lg border border-zinc-700 bg-zinc-900 p-4 text-white"
      />
      <p className="mt-4 text-zinc-400">Current Search: {search}</p>
    </section>
  );
}
