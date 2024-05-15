'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Menu, Popover, Transition, Disclosure } from '@headlessui/react'

import { Button } from './Button'
import { Container } from './Container'
import logo from '@/images/logo.png'
import logoIcon from '@/images/logo-icon.png'
import logoWhite from '@/images/logo-white.png'
import logoIconWhite from '@/images/logo-icon-white.png'
import { useTheme, useToast } from '@/store'
import { useShallow } from 'zustand/react/shallow'
import DarkModeIcon from "@/images/dark-mode-icon.svg"
import LightModeIcon from "@/images/light-mode-icon.svg"

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const pages = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Case study', href: '/work/horizons-in-perspective' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Blog post',
    href: '/blog/how-i-use-tailwind-to-design-from-scratch',
  },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme(useShallow((state) => ({ toggleTheme: state.toggleTheme, theme: state.theme })));
  const showToast = useToast(state => state.showToast)
  const handleModeSwitch = () => {
    toggleTheme();
  };

  function MenuIcon({ open }) {
    return (
      <span className="relative h-3.5 w-4">
        <span
          className={clsx(
            'absolute block h-0.5 rotate-0 transform rounded-full bg-slate-700 dark:bg-gray-300 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900 dark:group-hover:bg-gray-300',
            open ? 'left-1/2 top-1.5 w-0' : 'left-0 top-0 w-full'
          )}
        />
        <span
          className={clsx(
            'absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-slate-700 dark:bg-gray-300 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900 dark:group-hover:bg-gray-300',
            open ? 'rotate-45' : 'rotate-0'
          )}
        />
        <span
          className={clsx(
            'absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-slate-700 dark:bg-gray-300 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900 dark:group-hover:bg-gray-300',
            open ? '-rotate-45' : 'rotate-0'
          )}
        />
        <span
          className={clsx(
            'absolute block h-0.5 rotate-0 transform rounded-full bg-slate-700 dark:bg-gray-300 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900 dark:group-hover:bg-gray-300',
            open ? 'left-1/2 top-1.5 w-0' : 'left-0 top-3 w-full'
          )}
        />
      </span>
    )
  }

  function MobileNav() {
    return (
      <Popover>
        <Popover.Button
          className="group relative z-50 flex cursor-pointer items-center justify-center rounded-full bg-slate-100/80 dark:bg-gray-950 p-3 shadow-sm shadow-sky-100/50 dark:shadow-none ring-1 ring-slate-900/5 dark:ring-gray-800 ease-in-out hover:bg-slate-200/60 focus:outline-none md:hidden"
          aria-label="Toggle Navigation"
        >
          {({ open }) => <MenuIcon open={open} />}
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 z-20 bg-slate-900 bg-opacity-50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100 "
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100 "
            leaveTo="opacity-0 scale-90"
          >
            <Popover.Panel
              as="div"
              className="absolute inset-x-0 top-full z-30 mt-4 origin-top overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-600/90 backdrop-blur-md px-6 py-7 shadow-xl shadow-sky-100/40 dark:shadow-sky-100/10 ring-1 ring-slate-900/10"
            >
              <div>
                <div className="flex flex-col">
                  {links.map((link) => (
                    <Link
                      key={`${link.label}-mobile`}
                      href={link.href}
                      className="block text-base font-semibold text-slate-700 dark:text-gray-200 duration-200 hover:text-slate-900 py-2"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Disclosure as="div" className="relative">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={clsx(
                            'group flex w-full items-center gap-2 text-base font-semibold duration-200 ease-in-out pt-2',
                            open
                              ? 'text-slate-900 dark:text-gray-200'
                              : 'text-slate-700 hover:text-slate-900 dark:text-gray-200'
                          )}
                        >
                          <span>Pages</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={clsx(
                              'h-5 w-5 duration-300',
                              open
                                ? 'rotate-90 text-slate-900 dark:text-gray-200'
                                : 'text-slate-700 group-hover:text-slate-700 dark:text-gray-200 dark:group-hover:text-slate-200'
                            )}
                            aria-hidden="true">
                            <path
                              fill-rule="evenodd"
                              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                              clip-rule="evenodd">
                            </path>
                          </svg>
                        </Disclosure.Button>

                        <Disclosure.Panel className="z-20 space-y-4 px-3">
                          {pages.map((subLink) => (
                            <div
                              className="mt-4"
                              key={`${subLink.label}-dropdown-desktop`}
                            >
                              <Link
                                href={subLink.href}
                                className="block text-md font-medium text-slate-700 transition duration-200 ease-in-out hover:text-slate-900 dark:text-gray-200"
                              >
                                {subLink.label}
                              </Link>
                            </div>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    )
  }

  return (
    <header className="h-20 sm:h-24 border-b border-slate-200/80 dark:border-gray-800 bg-white dark:bg-gray-950">
      <Container className="flex h-full w-full items-center">
        <nav className="relative z-40 flex w-full items-center justify-between gap-4">
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              aria-label="Home"
              className="flex flex-shrink-0 items-center"
            >
              {
                theme === "light" ?
                  <>
                    <Image
                      src={logo}
                      alt=""
                      className="hidden h-8 w-auto sm:h-9 lg:block lg:h-10"
                    />

                    <Image
                      src={logoIcon}
                      alt=""
                      className="block h-8 w-auto lg:hidden"
                    />
                  </>
                  :
                  <>
                    <Image
                      src={logoWhite}
                      alt=""
                      className="hidden h-8 w-auto sm:h-9 lg:block lg:h-10"
                    />

                    <Image
                      src={logoIconWhite}
                      alt=""
                      className="block h-8 w-auto lg:hidden"
                    />
                  </>
              }
            </Link>
          </div>
          <div className="hidden items-center md:flex md:space-x-6 lg:space-x-8">
            {links.map((link) => (
              <Link
                key={`${link.label}-desktop`}
                href={link.href}
                className={clsx(
                  'relative duration-200 after:absolute after:-bottom-2.5 after:left-1/2 after:h-0.5 after:w-4 after:-translate-x-1/2 after:rounded-full after:bg-slate-900 dark:after:bg-slate-200 after:opacity-0 after:content-[""] text-slate-100',
                  pathname == link.href
                    ? 'font-semibold text-slate-900 dark:text-slate-100 after:opacity-100'
                    : 'font-medium text-slate-700 hover:text-slate-900 dark:text-slate-500 hover:after:opacity-25'
                )}
              >
                {link.label}
              </Link>
            ))}

            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button
                    className={clsx(
                      'flex items-center font-medium outline-none duration-200 ease-in-out focus:outline-none',
                      open
                        ? 'text-slate-900 dark:text-slate-300'
                        : 'text-slate-700  hover:text-slate-900 dark:text-slate-500'
                    )}
                  >
                    <span>Pages</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className={clsx(
                        'ml-2 h-5 w-5 duration-300',
                        open
                          ? 'rotate-180 text-slate-900 dark:text-slate-500'
                          : 'text-slate-600'
                      )}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>

                  <Menu.Items className="absolute right-0 z-20 mt-3 w-52 space-y-1 rounded-lg bg-white p-2.5 outline-none drop-shadow filter focus:outline-none">
                    {pages.map((subLink, i) => (
                      <Menu.Item key={`${subLink.label}-dropdown-desktop`}>
                        <Link
                          href={subLink.href}
                          className={clsx(
                            'block px-5 py-3.5 font-medium',
                            pathname == subLink.href
                              ? 'bg-slate-100/60 text-slate-900 dark:text-slate-500'
                              : 'rounded-md text-slate-700 transition duration-300 ease-in-out hover:bg-slate-50 hover:text-slate-900 dark:text-slate-200'
                          )}
                        >
                          {subLink.label}
                        </Link>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </>
              )}
            </Menu>
          </div>
          <div className="flex items-center ml-auto md:ml-0">
            <Button variant="secondary" href="/contact">
              Book a call
            </Button>
            <div className="ml-4 md:hidden">
              <MobileNav />
            </div>
          </div>

          {/* <label className="inline-flex items-center cursor-pointer">
            <input onChange={handleModeSwitch} type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label> */}
          <button
            onClick={handleModeSwitch}
            className='p-2 rounded-full'
          >
            <Image
              src={theme === "light" ? DarkModeIcon : LightModeIcon}
              alt='theme mode icon'
            />
          </button>
        </nav>
      </Container>
    </header>
  )
}

