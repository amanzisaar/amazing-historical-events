import Link from "next/link";
import { events } from "../data/events";

type Props = {
  currentSlug: string;
};

export default function EventNavigation({
  currentSlug,
}: Props) {
  const currentIndex = events.findIndex(
    (event) => event.slug === currentSlug
  );

  const previousEvent =
    currentIndex > 0
      ? events[currentIndex - 1]
      : null;

  const nextEvent =
    currentIndex < events.length - 1
      ? events[currentIndex + 1]
      : null;

  return (
    <div className="mt-12 flex justify-between">
      {previousEvent ? (
        <Link
          href={`/events/${previousEvent.slug}`}
          className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 hover:border-blue-500"
        >
          ← {previousEvent.title}
        </Link>
      ) : (
        <div></div>
      )}

      {nextEvent ? (
        <Link
          href={`/events/${nextEvent.slug}`}
          className="rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 hover:border-blue-500"
        >
          {nextEvent.title} →
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}