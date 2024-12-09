import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router";
import { ModeToggle } from "@/components/mode-toggle";

const navitems = [
  { name: "Beranda", to: "/" },
  { name: "Tentang", to: "/about" },
  { name: "Kontak", to: "/contact" },
  {
    name: "Layanan",
    child: [
      { name: "Galeri", to: "/gallery" },
      { name: "Matakuliah Arsip", to: "/archive" },
      { name: "Kembangkan Skill", to: "/skill" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-theme shadow-lg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center ">
            <Link to="/" className="font-bold text-xl text-white">
              <span className="hidden md:inline">
                HUKUM EKONOMI <span className="text-green-500">SYARIAH</span>
              </span>
              <span className="md:hidden">
                KELAS <span className="text-green-500">HES</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            {navitems.map((item, index) => (
              <div key={index} className="relative group">
                {item.child ? (
                  <>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="text-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          {item.child.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.to}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className="text-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <ModeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navitems.map((item, index) => (
              <div key={index}>
                {item.child ? (
                  <div>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="text-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                    >
                      {item.name}
                    </button>
                    {isDropdownOpen && (
                      <div className="pl-4">
                        {item.child.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.to}
                            className="text-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-sm"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.to}
                    className="text-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex justify-end">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
