export default function PreparationItem({ text }) {
  return (
    <li className="flex items-center gap-3 text-[var(--text-color)]">
      <div className="w-1.5 h-1.5 bg-black"></div>
      {text}
    </li>
  );
}
// This component renders a preparation step item with a bullet point.
// It takes a 'text' prop and displays it alongside a bullet point.
