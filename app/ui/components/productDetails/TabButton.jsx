export default function TabButton({ label, isActive, onClick }) {
  return (
    <button
      className={`font-hanken px-2 sm:px-4 py-2 text-sm sm:text-xl font-medium cursor-pointer capitalize ${
        isActive
          ? "text-[var(--primary-color)] border-b-3 border-[var(--primary-color)]"
          : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
