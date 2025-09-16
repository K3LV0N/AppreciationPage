import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MessageModal({ message, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
    >
      <motion.div
        initial={{ y: 20, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        className="relative w-full max-w-lg p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <FaTimes size={22} />
        </button>

        <h2 className="text-2xl font-bold mb-4">From: {message.name}</h2>
        <p className="text-lg text-gray-700 whitespace-pre-line">
          {message.text}
        </p>
      </motion.div>
    </motion.div>
  );
}
