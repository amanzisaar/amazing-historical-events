import { events } from "../data/events";

export function getAllEvents() {
  return events;
}

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}