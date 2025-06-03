import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsappFloatButton = () => {
  return (
  <motion.a
  href="https://wa.me/+79776235749"
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: 'spring', stiffness: 300 }}
  className="fixed bottom-5 right-5 z-[9999] bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-xl"
>
 

      <FaWhatsapp size={28} />
    </motion.a>
  );
};

export default WhatsappFloatButton;
