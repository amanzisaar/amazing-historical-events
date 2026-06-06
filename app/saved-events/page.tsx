"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { events } from "../../data/events";

export default function SavedEventsPage() {
  const [savedEvents, setSavedEvents] = useState<typeof events>([]);

  function removeEvent(slug: string) {
    const savedSlugs = JSON.parse(localStorage.getItem("savedEvents") || "[]");

    const updatedSlugs = savedSlugs.filter(
      (savedSlug: string) => savedSlug !== slug,
    );

    localStorage.setItem("savedEvents", JSON.stringify(updatedSlugs));

    const updatedEvents = savedEvents.filter((event) => event.slug !== slug);

    setSavedEvents(updatedEvents);
  }

  useEffect(() => {
    const savedSlugs = JSON.parse(localStorage.getItem("savedEvents") || "[]");

    const savedEventObjects = events.filter((event) =>
      savedSlugs.includes(event.slug),
    );

    setSavedEvents(savedEventObjects);
  }, []);

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-center text-5xl font-bold">Saved Events</h1>

        {savedEvents.length === 0 ? (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <p className="text-zinc-400">No saved events yet.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {savedEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500"
              >
                <h2 className="text-2xl font-bold">{event.title}</h2>

                <p className="mt-2 text-zinc-400">{event.country}</p>

                <p className="mt-4">{event.summary}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeEvent(event.slug);
                  }}
                  className="mt-4 rounded-lg bg-red-600 px-4 py-2"
                >
                  Remove
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
