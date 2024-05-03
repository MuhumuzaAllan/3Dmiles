import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ContactForm from '../../components/ContactForm';

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">Connect!</span>{' '}
          </motion.h2>
          {/* form */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;