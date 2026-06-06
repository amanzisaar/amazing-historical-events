import { events } from "../../../data/events";
import Image from "next/image";
import SaveEventButton from "../../../components/SaveEventButton";
import RelatedEvents from "../../../components/RelatedEvents";
type EventPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;

  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <main className="min-h-screen bg-black p-10 text-white">
        <h1>Event Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-8 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-6xl font-bold">{event.title}</h1>
        <Image
          src={event.heroImage}
          alt={event.title}
          width={1200}
          height={600}
          className="mb-8 rounded-xl"
        />
        <div className="flex gap-6 text-zinc-400">
          <span>{event.year}</span>
          <span>{event.country}</span>
          <span>{event.continent}</span>
        </div>

        <div className="mt-4 inline-block rounded-full bg-blue-600 px-4 py-2 text-sm">
          {event.category}
        </div>

        <div className="mt-6">
          <SaveEventButton eventSlug={event.slug} />
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-3xl font-semibold">Summary</h2>

          <p className="text-lg text-zinc-300">{event.summary}</p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-3xl font-semibold">Story</h2>

          <p className="leading-8 text-zinc-300">{event.story}</p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-3xl font-semibold">Key Figures</h2>

          <ul className="list-disc space-y-2 pl-6 text-zinc-300">
            {event.keyFigures.map((person) => (
              <li key={person}>{person}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-3xl font-semibold">Causes</h2>

          <ul className="list-disc space-y-2 pl-6 text-zinc-300">
            {event.causes.map((cause) => (
              <li key={cause}>{cause}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-semibold">Consequences</h2>

          <ul className="list-disc space-y-2 pl-6 text-zinc-300">
            {event.consequences.map((consequence) => (
              <li key={consequence}>{consequence}</li>
            ))}
          </ul>
        </section>
        <RelatedEvents currentSlug={event.slug} />
      </div>
    </main>
  );
}
