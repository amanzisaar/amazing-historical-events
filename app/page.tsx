"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedEventsSection from "../components/FeaturedEventsSection";
import ContinentsSection from "../components/ContinentsSection";
import { events } from "../data/events";
export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");
  const continents = [
    "Asia",
    "Europe",
    "Africa",
    "North America",
    "South America",
    "Oceania",
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesContinent =
      selectedContinent === "" || event.continent === selectedContinent;

    return matchesSearch && matchesContinent;
  });

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero search={search} setSearch={setSearch} />
      <ContinentsSection
        continents={continents}
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
      />
      <FeaturedEventsSection filteredEvents={filteredEvents} />
    </main>
  );
}
