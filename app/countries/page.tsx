import Link from "next/link";
import { events } from "../../data/events";

export default function CountriesPage() {
  const countries = [...new Set(events.map((e) => e.country))];

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-center text-5xl font-bold">
          Countries
        </h1>

        

        <div className="grid gap-6 md:grid-cols-2">
          {countries.map((country) => (
            <Link
              key={country}
              href={`/countries/${country
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500"
            >
              <h2 className="text-2xl font-bold">
                {country}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}