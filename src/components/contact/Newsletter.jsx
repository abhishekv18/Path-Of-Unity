import React, { useState } from 'react';
import { Mail, Sparkles, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDove, FaPrayingHands } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.div 
      className="max-w-md mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="text-center mb-8">
        <motion.div 
          className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-3"
          variants={itemVariants}
        >
          <FaDove className="text-3xl text-purple-600" />
        </motion.div>
        <motion.h2 
          className="text-3xl font-semibold text-purple-800 mb-2 font-serif"
          variants={itemVariants}
        >
          Sacred Updates
        </motion.h2>
        <motion.p 
          className="text-purple-600"
          variants={itemVariants}
        >
          Stay connected with divine wisdom
        </motion.p>
      </div>
      
      <motion.div 
        className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-lg border border-purple-100 relative overflow-hidden"
        variants={itemVariants}
        whileHover={{ y: -3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Floating elements */}
        {isHovered && (
          <>
            <motion.div 
              className="absolute text-purple-200 text-opacity-60"
              initial={{ x: -30, y: 20, rotate: -15, opacity: 0 }}
              animate={{ x: 10, y: 40, rotate: 5, opacity: 1 }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
              style={{ left: '10%', top: '20%' }}
            >
              <Sparkles size={20} />
            </motion.div>
            <motion.div 
              className="absolute text-purple-200 text-opacity-60"
              initial={{ x: 40, y: 80, rotate: 25, opacity: 0 }}
              animate={{ x: 20, y: 60, rotate: -5, opacity: 1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              style={{ right: '15%', bottom: '15%' }}
            >
              <Heart size={20} />
            </motion.div>
          </>
        )}

        <div className="relative z-10">
          <motion.div 
            className="flex items-center justify-center mb-5"
            variants={itemVariants}
          >
            <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-inner">
              <Mail className="w-6 h-6 text-purple-600" strokeWidth={1.5} />
            </div>
            <h3 className="ml-3 text-xl font-medium text-purple-800">
              Divine Newsletter
            </h3>
          </motion.div>
          
          <motion.p 
            className="text-purple-700 mb-6 text-center leading-relaxed"
            variants={itemVariants}
          >
            Receive <span className="font-medium">monthly spiritual insights</span>, sacred event invitations, and{" "}
            <span className="font-medium">blessed resources</span> directly to your inbox.
          </motion.p>
          
          <AnimatePresence mode="wait">
            {isSubscribed ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 flex items-center justify-center space-x-2 mb-4"
              >
                <FaPrayingHands className="text-green-600" />
                <span>Thank you for joining our sacred circle! Blessings will soon find their way to you.</span>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your sacred email address"
                    required
                    className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-purple-400 bg-white bg-opacity-70 transition-all duration-300 placeholder-purple-300"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Join Our Circle</span>
                    <Sparkles className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
          
          <motion.p 
            className="text-xs text-purple-400 mt-4 text-center"
            variants={itemVariants}
          >
            <span className="inline-block mx-1">✦</span>
            We honor your sacred privacy
            <span className="inline-block mx-1">✦</span>
          </motion.p>
        </div>
      </motion.div>

      <motion.div 
        className="mt-6 text-center text-purple-300 text-sm"
        animate={{ 
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity 
        }}
      >
        "Wisdom shared is wisdom multiplied"
      </motion.div>
    </motion.div>
  );
};

export default Newsletter;