import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex flex-col md:flex-row md:items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/assets/favicon.png" alt="Logo" className="h-10 w-auto mr-2" />
        <span className="font-bold text-lg cursor-pointer">Hindalya</span>
      </div>
      
      {/* Navigation */}
      <nav className="md:flex md:space-x-4">
        <Link href="/">
          <span className="cursor-pointer hover:text-gray-300">Home</span>
        </Link>
        <div className="relative">
          <span className="cursor-pointer hover:text-gray-300">Courses</span>
          <div className="absolute hidden mt-2 w-36 bg-white rounded shadow-lg z-10">
            {/* Dropdown items */}
            <Link href="/dropdown1">
              <span className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Dropdown Item 1</span>
            </Link>
            <Link href="/dropdown2">
              <span className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Dropdown Item 2</span>
            </Link>
          </div>
        </div>
        <Link href="/about">
          <span className="cursor-pointer hover:text-gray-300">About</span>
        </Link>
        <Link href="/contact">
          <span className="cursor-pointer hover:text-gray-300">Contact</span>
        </Link>
      </nav>
      
      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        {/* Add your hamburger menu icon here */}
      </div>
    </header>
  );
};

export default Header;
