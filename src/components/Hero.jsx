import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dark mb-6 leading-tight">
              Transform Your <span className="text-primary">Digital Presence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Expert web development and digital solutions to help your business thrive in the modern digital landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary inline-flex items-center">
                Start Your Project
                <HiArrowRight className="ml-2" />
              </a>
              <a href="/projects" className="btn-secondary">
                View Our Work
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-soft p-6 md:p-8">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
                alt="Digital Solutions"
                className="rounded-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-lg">
                <p className="font-display font-bold">10+ Years Experience</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-accent/10 rounded-2xl transform rotate-3"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;