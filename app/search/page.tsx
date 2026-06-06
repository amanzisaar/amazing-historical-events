"use client";

import Link from "next/link";
import { useState } from "react";
import { events } from "../../data/events";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.continent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesContinent =
      selectedContinent === "All" ||
      event.continent === selectedContinent;

    const matchesCategory =
      selectedCategory === "All" ||
      event.category === selectedCategory;

    return (
      matchesSearch &&
      matchesContinent &&
      matchesCategory
    );
  });

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
          className="mb-8 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none"
        />

        {/* Continent Filters */}
        <div className="mb-6 flex gap-3">
          <button
            onClick={() => setSelectedContinent("All")}
            className={`rounded-lg px-4 py-2 ${
              selectedContinent === "All"
                ? "bg-blue-600"
                : "bg-zinc-800"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setSelectedContinent("Asia")}
            className={`rounded-lg px-4 py-2 ${
              selectedContinent === "Asia"
                ? "bg-blue-600"
                : "bg-zinc-800"
            }`}
          >
            Asia
          </button>

          <button
            onClick={() => setSelectedContinent("Europe")}
            className={`rounded-lg px-4 py-2 ${
              selectedContinent === "Europe"
                ? "bg-blue-600"
                : "bg-zinc-800"
            }`}
          >
            Europe
          </button>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex gap-3">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`rounded-lg px-4 py-2 ${
              selectedCategory === "All"
                ? "bg-blue-600"
                : "bg-zinc-800"
            }`}
          >
            All Categories
          </button>

          <button
            onClick={() => setSelectedCategory("Battle")}
            className={`rounded-lg px-4 py-2 ${
              selectedCategory === "Battle"
                ? "bg-blue-600"
                : "bg-zinc-800"
            }`}
          >
            Battle
          </button>

          <button
            onClick={() => setSelectedCategory("War")}
            className={`rounded-lg px-4 py-2 ${
              selectedCategory === "War"
                ? "bg-blue-600"
                : "bg-zinc-800"
            }`}
          >
            War
          </button>

          <button
            onClick={() => setSelectedCategory("Revolution")}
            className={`rounded-lg px-4 py-2 ${
              selectedCategory === "Revolution"
                ? "bg-blue-600"
                : "bg-zinc-800"
            }`}
          >
            Revolution
          </button>
        </div>

        <div className="grid gap-6">
          {filteredEvents.length === 0 ? (
            <p className="text-center text-zinc-400">
              No events found.
            </p>
          ) : (
            filteredEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500"
              >
                <h2 className="text-2xl font-bold">
                  {event.title}
                </h2>

                <p className="mt-2 text-zinc-400">
                  {event.country}
                </p>

                <p className="mt-2 text-sm text-blue-500">
                  {event.category}
                </p>

                <p className="mt-4">
                  {event.summary}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}