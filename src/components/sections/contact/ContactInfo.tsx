
import { motion } from 'framer-motion';
import { contactInfo } from './contactData';
import { fadeInUp, slideInLeft } from './animations';
import { infiniteQueryOptions } from '@tanstack/react-query';

const ContactInfo = () => {
  return (
    <motion.div variants={slideInLeft}  initial="hidden" animate="visible">
      <div className="bg-white h-full dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={fadeInUp}
              className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 group"
            >
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <info.icon className="w-5 h-5 text-white" />
              </div>
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                <p className="text-gray-900 dark:text-white font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {info.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
