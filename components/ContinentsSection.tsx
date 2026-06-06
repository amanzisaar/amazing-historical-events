import ContinentCard from "./ContinentCard";

type ContinentsSectionProps = {
  continents: string[];
  selectedContinent: string;
  setSelectedContinent: React.Dispatch<React.SetStateAction<string>>;
};

export default function ContinentsSection({
  continents,
  selectedContinent,
  setSelectedContinent,
}: ContinentsSectionProps) {
  return (
    <section className="px-6 pb-24">
      <h2 className="mb-8 text-center text-3xl font-semibold">
        Browse by Continent
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3">
        {continents.map((continent) => (
          <ContinentCard
            key={continent}
            continent={continent}
            isSelected={selectedContinent === continent}
            onClick={() => setSelectedContinent(continent)}
          />
        ))}
      </div>
    </section>
  );
}
