import { motion } from "framer-motion";

export default function EnvelopeCard({ name, isOpen, onOpen, onClose }) {
  const handleClick = () => {
    if (!isOpen) {
      onOpen();
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Envelope container */}
      <div
        onClick={handleClick}
        className="relative w-32 h-24 cursor-pointer"
      >
        {/* Envelope body */}
        <div className="absolute bottom-0 w-full h-3/4 bg-pink-300 rounded-b-md shadow-md"></div>

        {/* Flap (animated) */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? 180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-1/2 bg-pink-400 origin-top rounded-t-md shadow"
        />
      </div>

      {/* Sender name always visible */}
      <p className="mt-2 font-medium text-black">{name}</p>
    </div>
  );
}
