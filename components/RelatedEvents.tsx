import Link from "next/link";
import { events } from "../data/events";

type Props = {
  currentSlug: string;
};

export default function RelatedEvents({ currentSlug }: Props) {
  const relatedEvents = events.filter(
    (event) => event.slug !== currentSlug
  );

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-3xl font-bold text-white">
        Related Events
      </h2>

      <div className="grid gap-4">
        {relatedEvents.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.slug}`}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 transition hover:border-blue-500"
          >
            <h3 className="text-xl font-semibold">
              {event.title}
            </h3>

            <p className="mt-2 text-zinc-400">
              {event.summary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}