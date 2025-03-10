import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const navigation = [
    { name: t('navbar.about'), href: '#about' },
    { name: t('navbar.projects'), href: '#projects' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Disclosure as="nav" className="bg-white shadow-md fixed w-full z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Logo and desktop navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <a href="/" className="text-xl font-bold text-gray-800">
                Brian Belaj | Portfolio
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      'text-gray-800 hover:bg-gray-100 hover:text-gray-900 rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* Language selector */}
              <div className="ml-4">
                <button onClick={() => i18n.changeLanguage('it')} className="text-sm font-medium text-gray-800 px-2">
                  🇮🇹 IT
                </button>
                <button onClick={() => i18n.changeLanguage('en')} className="text-sm font-medium text-gray-800 px-2">
                  🇬🇧 EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                'block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-gray-900'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          {/* Mobile Language Selector */}
          <div className="flex justify-center pt-2">
            <button onClick={() => i18n.changeLanguage('it')} className="text-sm font-medium text-gray-800 px-2">
              🇮🇹 IT
            </button>
            <button onClick={() => i18n.changeLanguage('en')} className="text-sm font-medium text-gray-800 px-2">
              🇬🇧 EN
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
