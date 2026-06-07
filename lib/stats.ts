import { events } from "../data/events";

export function getStats() {
  return {
    totalEvents: events.length,

    totalCountries: new Set(
      events.map((e) => e.country)
    ).size,

    totalContinents: new Set(
      events.map((e) => e.continent)
    ).size,

    totalCategories: new Set(
      events.map((e) => e.category)
    ).size,
  };
}