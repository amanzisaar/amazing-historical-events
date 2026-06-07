import Link from "next/link";

const continents = [
  "Asia",
  "Europe",
  "Africa",
  "North America",
  "South America",
  "Oceania",
  "Global",
];

export default function ContinentsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-center text-5xl font-bold">
          Continents
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {continents.map((continent) => (
            <Link
              key={continent}
              href={`/continents/${continent.toLowerCase().replaceAll(" ", "-")}`}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500"
            >
              <h2 className="text-2xl font-bold">
                {continent}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}