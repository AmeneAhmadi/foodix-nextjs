"use client";
import { useInView } from "react-intersection-observer";
import MessageBox from "../common/MessageBox";
import { useState } from "react";
import { useReservationContext } from "../../contexts/reservation/ReservationContext";
import clsx from "clsx";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    people: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const { bookingTable } = useReservationContext();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    bookingTable(formData);
    setFormData({ name: "", email: "", phone: "", date: "", people: "" });
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };
  return (
    <div className="w-full">
      <div className={clsx("w-full font-hanken")}>
        <div className="py-12">
          <form onSubmit={handleSubmit}>
            {/* Name and Email */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-7">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="border p-6 w-full rounded-xl bg-white border-gray-400 text-gray-700 outline-[var(--primary-color)]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="border p-6 w-full rounded-xl bg-white border-gray-400 text-gray-700 outline-[var(--primary-color)]"
              />
            </div>

            {/* Phone and Date */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-7 relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone"
                className="border p-6 w-full rounded-xl bg-white border-gray-400 text-gray-700 outline-[var(--primary-color)]"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="border p-6 w-full rounded-xl bg-white border-gray-400 text-gray-700 outline-[var(--primary-color)]"
              />
            </div>

            {/* List of people */}
            <div className="mb-4">
              <select
                name="people"
                value={formData.people}
                onChange={handleChange}
                required
                className="border p-6 w-full rounded-xl bg-white border-gray-400 text-gray-700 outline-[var(--primary-color)]"
              >
                <option value="">Select people</option>
                <option value="people-01">People-01</option>
                <option value="people-02">People-02</option>
                <option value="people-03">People-03</option>
                <option value="people-04">People-04</option>
                <option value="people-05">People-05</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={clsx(
                "font-hanken cursor-pointer bg-[var(--primary-color)] hover:bg-[var(--secondary-color)]",
                "text-white rounded-lg text-xl py-4 px-11 font-bold transition-colors capitalize"
              )}
            >
              Book A Table
            </button>
          </form>
        </div>
      </div>
      {showMessage && (
        <MessageBox
          text="Your reservation has been successfully added. We will contact you soon."
          type="success"
          onClose={() => setShowMessage(false)}
        />
      )}
    </div>
  );
}
