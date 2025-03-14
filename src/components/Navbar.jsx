import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartItems } = useCart();
  
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            ShopQuest
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-primary">Products</Link>
            <Link to="/cart" className="relative">
              <FiShoppingCart className="w-6 h-6 text-gray-700 hover:text-primary" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}