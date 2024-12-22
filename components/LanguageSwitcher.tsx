"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false); // Cierra el menú al seleccionar un idioma
  };

  const currentLanguage = i18n.language;
  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ];

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Botón principal */}
      <button
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200 hover:text-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
        aria-haspopup="true"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Globe className="w-5 h-5 mr-2 text-indigo-500" />
        {languages.find((lang) => lang.code === currentLanguage)?.label || "Language"}
        <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute right-0 z-20 w-44 mt-2 origin-top-right bg-white border border-gray-200 rounded-lg shadow-lg"
          role="menu"
        >
          <ul className="py-1">
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-150 hover:bg-indigo-100 ${
                  currentLanguage === lang.code ? "text-indigo-600 font-bold" : "text-gray-800"
                }`}
              >
                <span className="mr-3">{lang.flag}</span>
                {lang.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
