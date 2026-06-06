import Link from "next/link";
import { events } from "../../../data/events";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({
  params,
}: Props) {
  const { category } = await params;

  const filteredEvents = events.filter(
    (event) =>
      event.category.toLowerCase() ===
      category.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-center text-5xl font-bold">
          {category}
        </h1>

        <div className="grid gap-6">
          {filteredEvents.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.slug}`}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <h2 className="text-2xl font-bold">
                {event.title}
              </h2>

              <p className="mt-2 text-zinc-400">
                {event.country}
              </p>

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