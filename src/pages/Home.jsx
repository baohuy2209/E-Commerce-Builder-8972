import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to ShopQuest
          </h1>
          <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg">
            Discover amazing products at great prices
          </p>
          <div className="mt-8">
            <Link
              to="/products"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}