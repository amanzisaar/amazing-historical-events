type ContinentCardProps = {
  continent: string;
  onClick: () => void;
  isSelected: boolean;
};

export default function ContinentCard({
  continent,
  onClick,
  isSelected,
}: ContinentCardProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl p-8 text-lg transition
      ${
        isSelected
          ? "bg-blue-600 text-white"
          : "bg-zinc-900 hover:bg-zinc-800"
      }`}
    >
      {continent}
    </button>
  );
}