import { motion } from "framer-motion"; // Definisikan varian animasi

// Definisikan varian animasi
const animations = {
  // Kondisi awal (sebelum masuk)
  initial: { opacity: 0, y: 10 },
  // Kondisi saat animasi masuk selesai
  animate: { opacity: 1, y: 0 },
  // Kondisi saat animasi keluar
  exit: { opacity: 0, y: -50 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }} // Durasi animasi
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
