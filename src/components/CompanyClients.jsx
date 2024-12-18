import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const clients = [
  {
    id: 1,
    name: "TechCorp Global",
    logo: "TC",
    industry: "Technology"
  },
  {
    id: 2,
    name: "InnovatePro",
    logo: "IP",
    industry: "Innovation"
  },
  {
    id: 3,
    name: "Digital Dynamics",
    logo: "DD",
    industry: "Digital Services"
  },
  {
    id: 4,
    name: "Future Systems",
    logo: "FS",
    industry: "Technology"
  },
  {
    id: 5,
    name: "Smart Solutions",
    logo: "SS",
    industry: "Solutions"
  },
  {
    id: 6,
    name: "Tech Ventures",
    logo: "TV",
    industry: "Ventures"
  }
];

const CompanyClients = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateLogos = async () => {
      await controls.start({ x: '-100%' });
      controls.set({ x: '100%' });
      animateLogos();
    };

    animateLogos();
  }, [controls]);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Our Clients</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Trusted by leading companies worldwide</p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-8">
            {[...Array(2)].map((_, setIndex) => (
              <motion.div
                key={setIndex}
                className="flex space-x-8"
                animate={controls}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {clients.map((client) => (
                  <div
                    key={`${setIndex}-${client.id}`}
                    className="flex-shrink-0 w-48 h-32 card flex items-center justify-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary dark:text-white mb-2">
                        {client.logo}
                      </div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        {client.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {client.industry}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyClients;