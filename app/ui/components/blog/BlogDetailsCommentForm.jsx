import clsx from "clsx";
import { useInView } from "react-intersection-observer";

export default function BlogDetailsCommentForm() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={clsx(
        "w-full",
        inView ? "animate-fadeInUp opacity-100" : "opacity-0"
      )}
    >
      <div className="rounded-lg bg-[#f7f7f7] p-8">
        <h2 className="text-2xl font-bold">Leave a Comment</h2>
        <p className="font-hanken mt-4">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="font-hanken mt-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <input
              type="text"
              placeholder="Enter Name"
              className="border border-gray-300 px-6 py-5 rounded-lg w-full lg:w-1/2 bg-white focus:ring-1 outline-[var(--primary-color)] transition-all duration-200"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 px-6 py-5 rounded-lg w-full lg:w-1/2 bg-white focus:ring-1 outline-[var(--primary-color)] transition-all duration-200"
            />
          </div>
          <textarea
            className="resize-none border border-gray-300 px-6 py-2 rounded-lg w-full mt-7 bg-white focus:ring-1 outline-[var(--primary-color)] transition-all duration-200"
            placeholder="Write your Comment"
            rows={5}
          ></textarea>
          <div className="mt-4">
            <button className="cursor-pointer inline-block px-11 py-4 mt-4 bg-[var(--primary-color)] text-white font-semibold uppercase text-xl rounded-lg hover:bg-[var(--secondary-color)] transition duration-300">
              post your comment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
