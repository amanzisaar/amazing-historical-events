import FeaturedEventCard from "./FeaturedEventCard";

type Event = {
  id: number;
  slug: string;
  title: string;
  continent: string;
  country: string;
  year: number;
  category: string;
  summary: string;
  story: string;
  heroImage: string;
};

type FeaturedEventsSectionProps = {
  filteredEvents: Event[];
};

export default function FeaturedEventsSection({
  filteredEvents,
}: FeaturedEventsSectionProps) {
  return (
    <section className="px-6 pb-24">
      <h2 className="mb-8 text-center text-3xl font-semibold">
        Featured Events
      </h2>

      {filteredEvents.length === 0 ? (
        <div className="text-center text-zinc-400">
          No historical events found.
        </div>
      ) : (
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {filteredEvents.map((event) => (
            <FeaturedEventCard
              key={event.id}
              slug={event.slug}
              title={event.title}
              year={event.year}
              country={event.country}
              description={event.summary}
            />
          ))}
        </div>
      )}
    </section>
  );
}
