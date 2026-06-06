"use client";

import { useEffect, useState } from "react";
import { events } from "../../data/events";

export default function ProfilePage() {
  const [savedCount, setSavedCount] = useState(0);
  const [favoriteContinent, setFavoriteContinent] = useState("None");

  useEffect(() => {
    const savedSlugs = JSON.parse(
      localStorage.getItem("savedEvents") || "[]"
    );

    setSavedCount(savedSlugs.length);

    const savedEvents = events.filter((event) =>
      savedSlugs.includes(event.slug)
    );

    const continentCounts: Record<string, number> = {};

    savedEvents.forEach((event) => {
      continentCounts[event.continent] =
        (continentCounts[event.continent] || 0) + 1;
    });

    let favorite = "None";
    let maxCount = 0;

    Object.entries(continentCounts).forEach(
      ([continent, count]) => {
        if (count > maxCount) {
          favorite = continent;
          maxCount = count;
        }
      }
    );

    setFavoriteContinent(favorite);
  }, []);

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-center text-5xl font-bold">
          Profile
        </h1>

        <div className="space-y-6">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-2xl font-bold">
              Saved Events
            </h2>

            <p className="mt-2 text-4xl text-blue-500">
              {savedCount}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-2xl font-bold">
              Favorite Continent
            </h2>

            <p className="mt-2 text-4xl text-blue-500">
              {favoriteContinent}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-2xl font-bold">
              Total Historical Events
            </h2>

            <p className="mt-2 text-4xl text-blue-500">
              {events.length}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}