"use client";
import Link from "next/link";
import { useState } from "react";
import { events } from "../../data/events";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.continent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-center text-5xl font-bold">
          Search Historical Events
        </h1>

        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-10 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none"
        />

        <div className="grid gap-6">
          {filteredEvents.length === 0 ? (
            <p className="text-center text-zinc-400">No events found.</p>
          ) : (
            filteredEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500"
              >
                <h2 className="text-2xl font-bold">{event.title}</h2>

                <p className="mt-2 text-zinc-400">{event.country}</p>

                <p className="mt-4">{event.summary}</p>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
