"use client";

type SaveEventButtonProps = {
  eventSlug: string;
};

export default function SaveEventButton({ eventSlug }: SaveEventButtonProps) {
  const handleSave = () => {
    const savedEvents = JSON.parse(localStorage.getItem("savedEvents") || "[]");

    if (!savedEvents.includes(eventSlug)) {
      savedEvents.push(eventSlug);

      localStorage.setItem("savedEvents", JSON.stringify(savedEvents));

      alert("Event saved!");
    } else {
      alert("Event already saved!");
    }
  };

  return (
    <button
      onClick={handleSave}
      className="rounded-lg bg-blue-600 px-4 py-2 font-medium hover:bg-blue-500"
    >
      Save Event
    </button>
  );
}
