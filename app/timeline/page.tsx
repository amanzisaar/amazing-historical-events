import { events } from "../../data/events";

export default function TimelinePage() {
  const sortedEvents = [...events].sort((a, b) => a.year - b.year);

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-center text-5xl font-bold">
          Historical Timeline
        </h1>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-1 bg-zinc-800"></div>

          <div className="space-y-8">
            {sortedEvents.map((event) => (
              <div
                key={event.id}
                className="relative ml-12 rounded-xl border border-zinc-800 bg-zinc-900 p-6"
              >
                <div className="absolute -left-10 top-8 h-5 w-5 rounded-full bg-blue-500"></div>
                <p className="text-blue-500 font-semibold">{event.year}</p>

                <h2 className="mt-2 text-2xl font-bold">{event.title}</h2>

                <p className="mt-2 text-zinc-400">{event.country}</p>

                <p className="mt-4">{event.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
