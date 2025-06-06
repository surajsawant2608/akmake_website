import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import React from "react";

// Navigation with children
const navigation = [
  { name: "Home", path: "/" },
  {
    name: "Products",
    children: [
      { name: "FIBC Liner Opener", path: "/products/liner-opener-machine" },
      { name: "FIBC Bag Cleaning Machine", path: "/products/fibc-bag-cleaning" },
      { name: "Automatic FIBC Baffle Punching/Cutting Machine", path: "/products/fibc-baffle-punch-machine" },
      { name: "Hydraulic Bale Press Machine", path: "/products/hydaulic-bale-press" },
      { name: "Belt Cutting Machine", path: "/products/fibc-belt-cutting" },
      { name: "Auto Form Fit Machine (PE Bottle Shape Liner Sealing Machine)", path: "/products/auto-form-fit-machine" },
      { name: "Jumbo Bag Fabric Cutting Machine - 1400 FCM", path: "/products/jumbo-bag-fabric-cutting" },
      { name: "Jumbo Bag Fabric Cutting Machine - 2200 FCM", path: "/products/jumbo-bag-fabric-cutting-2200" },
      { name: "Jumbo Bag Fabric Cutting Machine with Baffle Punch", path: "/products/jumbo-bag-fabric-with-baffle" },
      
    ],
  },
  { name: "About", path: "/about" },
  { name: "Contact Us", path: "/contact-us" },
  // { name: "Careers", path: "/careers" },
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
              <a href="/">
              <img src={logo} alt="Logo" className="h-12" />
              <span className="text-xl font-semibold text-black"></span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) =>
                item.children ? (
                  <div className="relative group" key={item.name}>
                    <button className="text-black font-medium hover:text-orange-600 transition inline-flex items-center gap-x-1">
                      {item.name}
                      <svg
                        className="w-4 h-4 transform transition-transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div className="absolute z-10 hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded-lg min-w-[250px] max-h-[70vh] sm:max-h-[60vh] md:max-h-[85vh] overflow-y-auto">
                      <div className="p-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-black font-medium hover:text-orange-600 transition"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <DisclosureButton className="p-2 rounded-md text-black hover:bg-black/10 focus:ring-1 focus:ring-slate-500">
                {open ? (
                  <XMarkIcon className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="w-5 h-5" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel as={React.Fragment}>
            {({ close }) => (
              <div className="md:hidden absolute top-16 left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg border border-white/50 rounded-lg p-4 max-h-[85vh] overflow-y-auto">
                <div className="flex flex-col space-y-2">
                  {navigation.map((item) =>
                    item.children ? (
                      <Disclosure key={item.name} as="div" className="w-full">
                        {({ open: subOpen }) => (
                          <>
                            <DisclosureButton className="w-full flex justify-between items-center px-4 py-2 text-left text-black hover:text-orange-600 font-medium rounded-lg min-w-[250px] max-h-[70vh] sm:max-h-[60vh] md:max-h-[85vh] overflow-y-auto">
                              {item.name}
                              <ChevronDownIcon
                                className={`w-4 h-4 transition-transform ${
                                  subOpen ? "rotate-180" : ""
                                }`}
                              />
                            </DisclosureButton>
                            <DisclosurePanel className="pl-6 pt-1 pb-2 space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.path}
                                  onClick={() => close()}
                                  className="block px-2 py-1 text-sm text-gray-800 hover:text-orange-500"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => close()}
                        className="px-4 py-2 rounded-lg text-black hover:text-orange-500"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            )}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
