import { getStats } from "../../lib/stats";

export default function StatsPage() {
  const stats = getStats();

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-center text-5xl font-bold">
          Project Statistics
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-zinc-900 p-6">
            <h2>Total Events</h2>
            <p className="text-4xl font-bold">
              {stats.totalEvents}
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h2>Countries</h2>
            <p className="text-4xl font-bold">
              {stats.totalCountries}
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h2>Continents</h2>
            <p className="text-4xl font-bold">
              {stats.totalContinents}
            </p>
          </div>

          <div className="rounded-xl bg-zinc-900 p-6">
            <h2>Categories</h2>
            <p className="text-4xl font-bold">
              {stats.totalCategories}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}