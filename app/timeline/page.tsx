import Link from "next/link";
import { events } from "../../data/events";

export default function TimelinePage() {
  const sortedEvents = [...events].sort(
    (a, b) => a.year - b.year
  );

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-12 text-center text-5xl font-bold">
          Historical Timeline
        </h1>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-5 top-0 h-full w-1 bg-zinc-800"></div>

          <div className="space-y-10">
            {sortedEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="relative block ml-16 rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500 hover:bg-zinc-800"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-14 top-8 h-5 w-5 rounded-full bg-blue-500"></div>

                <p className="font-semibold text-blue-500">
                  {event.year}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
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
      </div>
    </main>
  );
}