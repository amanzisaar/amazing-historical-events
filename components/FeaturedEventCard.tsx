import Link from "next/link";

type FeaturedEventCardProps = {
  title: string;
  slug: string;
  year: number;
  country: string;
  description: string;
};

export default function FeaturedEventCard({
  title,
  slug,
  year,
  country,
  description,
}: FeaturedEventCardProps) {
  return (
    <Link href={`/events/${slug}`}>
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 hover:border-blue-500 transition">
        <h3 className="text-xl font-bold">{title}</h3>

        <p className="mt-2 text-sm text-zinc-400">
          {year} • {country}
        </p>

        <p className="mt-4 text-zinc-300">{description}</p>
      </div>
    </Link>
  );
}