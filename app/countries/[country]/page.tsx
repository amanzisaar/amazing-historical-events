import Link from "next/link";
import { events } from "../../../data/events";

type Props = {
  params: Promise<{
    country: string;
  }>;
};

export default async function CountryPage({
  params,
}: Props) {
  const { country } = await params;

  const formattedCountry = country
    .replaceAll("-", " ")
    .toLowerCase();

  const countryEvents = events.filter(
    (event) =>
      event.country.toLowerCase() ===
      formattedCountry
  );

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-center text-5xl font-bold capitalize">
          {formattedCountry}
        </h1>

        <div className="grid gap-6">
          {countryEvents.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.slug}`}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500"
            >
              <h2 className="text-2xl font-bold">
                {event.title}
              </h2>

              <p className="mt-4">
                {event.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}