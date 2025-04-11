export default function Reviews() {
  return (
    <div className="flex flex-col w-full h-[400px] items-center justify-center py-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full"></div>
        <h3 className="text-lg sm:text-xl font-bold">John Doe</h3>
      </div>
      <p className="font-hanken text-[var(--text-color)] text-base sm:text-lg leading-relaxed mt-2">
        The Chicken Skewers were absolutely delicious! The chicken was tender
        and juicy, and the bell peppers added a nice crunch. I will definitely
        be ordering this again.
      </p>
    </div>
  );
}
