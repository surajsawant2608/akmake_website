import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  // { name: "R&D", path: "/rnd" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Careers", path: "/careers" },
  // { name: "Privacy & Policies", path: "/privacy-policies" },
];

export default function Navbar() {
  return (
      <Disclosure as="nav" className="bg-white border-gray-200 dark:bg-gray-900">
      {({ open }) => (
        <>
          <div className="w-screen ml-[20px] flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Logo on the left */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <img src={logo} alt="Logo" className="h-9" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <DisclosureButton className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="w-5 h-5" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden w-full mr-[30px] md:block md:w-auto">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="md:hidden">
            <div className="flex flex-col space-y-2 mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-4 py-2 rounded-lg transition relative text-white hover:shadow-lg hover:text-orange-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>

  );
}
