export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-5xl font-bold">
          About Amazing Historical Events
        </h1>

        <p className="mb-6 text-lg text-zinc-300">
          Amazing Historical Events is a platform dedicated to
          documenting important moments in human history.
        </p>

        <p className="mb-6 text-lg text-zinc-300">
          Events are organized by continent, country,
          category, and timeline so learners can easily
          discover connections across civilizations.
        </p>

        <p className="text-lg text-zinc-300">
          Our goal is to make history accessible,
          structured, and engaging for everyone.
        </p>
      </div>
    </main>
  );
}