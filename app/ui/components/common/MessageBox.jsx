

'use client'
import { IoClose } from "react-icons/io5";

export default function MessageBox({ text, type, onClose }) {
  const bgColor =
    type === 'success'
      ? 'bg-[var(--secondary-color)]'
      : type === 'danger'
      ? 'bg-[var(--primary-color)]'
      : type === 'warning'
      ? 'bg-[var(--orange-color)]'
      : 'bg-gray-500'

  return (
    <div
      className={`fixed top-1/3 left-1/2 -translate-x-1/2 z-1000 px-6 py-3 rounded-xl text-white shadow-2xl flex items-center justify-between w-[50%] min-w-[100px] min-h-[100px] ${bgColor}`}
    >
      <span>{text}</span>
      <button onClick={onClose} className="ml-4">
        <IoClose className="w-5 h-5" />
      </button>
    </div>
  )
}
