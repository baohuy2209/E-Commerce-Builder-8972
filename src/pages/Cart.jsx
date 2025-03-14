import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { FiTrash2 } from 'react-icons/fi';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h2>
        
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              {cartItems.map(item => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-between py-4 border-b last:border-0"
                >
                  <div className="flex items-center">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="text-lg font-medium text-gray-800">
                Total: ${total.toFixed(2)}
              </div>
              <div className="space-x-4">
                <button
                  onClick={clearCart}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Clear Cart
                </button>
                <button
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}