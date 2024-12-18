import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, features, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card group"
    >
      <div className="text-primary text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon />
      </div>
      <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-600">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;