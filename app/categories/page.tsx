import Link from "next/link";
import { events } from "../../data/events";

export default function CategoriesPage() {
  const categories = [...new Set(events.map((e) => e.category))];

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-center text-5xl font-bold">
          Historical Categories
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => {
            const count = events.filter(
              (event) => event.category === category
            ).length;

            return (
              <Link
                key={category}
                href={`/categories/${category.toLowerCase()}`}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500"
              >
                <h2 className="text-2xl font-bold">
                  {category}
                </h2>

                <p className="mt-2 text-zinc-400">
                  {count} events
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}