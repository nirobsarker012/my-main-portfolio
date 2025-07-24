import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skill", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "blogs", label: "Blogs" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      for (let item of menuItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="home"
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 px-4 md:px-8 lg:px-20  ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white flex justify-between items-center py-4">
        <Link to="/">
          <h1 className="font-mono text-3xl font-semibold">
            NIROB<span className="animate-ping text-[#55E6C1]">.</span>
          </h1>
        </Link>

        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#55E6C1] ${
                activeSection === item.id ? "text-[#55E6C1]" : ""
              }`}
              onClick={() => handleMenuItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4 text-[24px]">
          <a
            href="https://www.linkedin.com/in/nirob-sarker-a9880b288/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#55E6C1]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nirobsarker012"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#55E6C1]"
          >
            <FaGithub />
          </a>
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#55E6C1] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#55E6C1] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Sidebar + Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-[#101010] text-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <FiX
            className="text-3xl text-[#55E6C1] cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <ul className="flex flex-col items-start pl-6 space-y-6 text-lg">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`hover:text-[#55E6C1] ${
                  activeSection === item.id ? "text-[#55E6C1]" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-start pl-6 pt-10 space-x-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/nirob-sarker-a9880b288/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#55E6C1]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nirobsarker012"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#55E6C1]"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
