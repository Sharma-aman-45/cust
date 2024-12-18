import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    comment: "Working with MESH TECH DIGITAL transformed our online presence. Their attention to detail and innovative solutions exceeded our expectations."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, InnovateCo",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    comment: "Exceptional service and outstanding results. The team's expertise in web development helped us achieve our digital goals."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, GrowthLabs",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    comment: "The most professional and creative team we've worked with. They delivered our project on time and with exceptional quality."
  }
];

const ClientReviews = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-light to-white dark:from-dark dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Client Reviews</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">What our clients say about us</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg dark:text-white">{review.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;