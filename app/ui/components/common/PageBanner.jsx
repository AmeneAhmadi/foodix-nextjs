import Link from "next/link";

export default function PageBanner({ title, subtitles }) {
  return (
    <div className="page-banner w-full h-[350px] flex flex-col justify-center items-center mt-24 gap-8">
      <h1 className="text-5xl sm:text-7xl font-bold text-white capitalize text-center">{title}</h1>
      <div className="flex items-center justify-center">
        {subtitles.map((item, index) => (
          <div key={index} className="flex items-center">
            <Link
              href={`/${item.link}`}
              className="capitalize text-white font-hanken text-lg"
            >
              {item.page}
            </Link>
            {index < subtitles.length - 1 && (
              <span
                className="mx-2 text-white font-hanken text-lg"
              >
                -
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
