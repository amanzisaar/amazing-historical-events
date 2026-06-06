import { events } from "../../../data/events";
import Image from "next/image";

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

        <section className="mb-10">
          <h2 className="mb-4 text-3xl font-semibold">Summary</h2>

          <p className="text-lg text-zinc-300">{event.summary}</p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-semibold">Story</h2>

          <p className="leading-8 text-zinc-300">{event.story}</p>
        </section>
      </div>
    </main>
  );
}
