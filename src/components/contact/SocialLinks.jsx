import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaDove, FaPrayingHands, FaHandsHelping } from 'react-icons/fa';

const SocialLinks = () => {
  const socialPlatforms = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: 'https://facebook.com/laity',
      color: 'bg-blue-100 hover:bg-blue-200 text-blue-600'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://twitter.com/laity',
      color: 'bg-sky-100 hover:bg-sky-200 text-sky-600'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://instagram.com/laity',
      color: 'bg-pink-100 hover:bg-pink-200 text-pink-600'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: 'https://youtube.com/laity',
      color: 'bg-red-100 hover:bg-red-200 text-red-600'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/company/laity',
      color: 'bg-blue-200 hover:bg-blue-300 text-blue-700'
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="max-w-md mx-auto text-center"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div className="mb-10" variants={item}>
        <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-full mb-4">
          <FaDove className="text-3xl text-purple-600" />
        </div>
        <h2 className="text-3xl font-semibold text-purple-800 mb-2 font-serif">Sacred Connections</h2>
        <p className="text-purple-600">Join our spiritual community across the digital realm</p>
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center gap-5 mb-10"
        variants={container}
      >
        {socialPlatforms.map((platform) => (
          <motion.a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-5 rounded-full transition-all duration-300 group relative overflow-hidden ${platform.color}`}
            aria-label={`Follow us on ${platform.name}`}
            variants={item}
            whileHover={{ 
              y: -5,
              scale: 1.1,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <platform.icon 
              className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
              strokeWidth={1.5} 
            />
            <motion.div 
              className="absolute inset-0 bg-white bg-opacity-20"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </motion.div>

      <motion.div className="mt-8" variants={item}>
        <div className="flex justify-center space-x-3 mb-4">
          <FaPrayingHands className="text-purple-400" />
          <FaHandsHelping className="text-purple-400" />
          <FaPrayingHands className="text-purple-400" />
        </div>
        <p className="text-purple-700 mb-2">Follow us for daily spiritual nourishment</p>
        <motion.p 
          className="text-sm text-purple-400 inline-block px-3 py-1 bg-purple-50 rounded-full"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        >
          #SacredCommunity #DivineConnections
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SocialLinks;