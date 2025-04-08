import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import React from "react";


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
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/30 shadow-lg border-b border-white/50"
    >
      {({ open }) => (
        <>
          <div className="w-full flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-12" />
              <span className="text-xl font-semibold text-black"></span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-black font-medium hover:text-orange-600 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <DisclosureButton className="p-2 rounded-md text-black hover:bg-black/10 focus:ring-1 focus:ring-slate-500">
                {open ? (
                  <XMarkIcon className="w-3 h-3 font-bold" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="w-3 h-3 font-bold" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>
          </div>

          {/* Mobile Menu (Dropdown) */}
          <DisclosurePanel as={React.Fragment}>
            {({ close }) => (
              <div className="md:hidden absolute top-16 left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg border border-white/50 rounded-lg p-4">
                <div className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => close()}
                      className="px-4 py-2 rounded-lg text-black hover:text-orange-500"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}