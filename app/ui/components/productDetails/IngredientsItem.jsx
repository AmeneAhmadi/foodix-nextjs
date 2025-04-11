export default function IngredientsItem({ text }) {
  return (
    <li className="flex items-center gap-2 sm:gap-3 text-[var(--text-color)] text-sm sm:text-base">
      <div className="w-1.5 h-1.5 bg-black"></div>
      {text}
    </li>
  );
}
// This component is used to display an ingredient item in a list.
// It takes a prop 'text' which is the text to be displayed for the ingredient.