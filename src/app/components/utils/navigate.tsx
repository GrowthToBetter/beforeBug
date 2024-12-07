"use client";

import React from "react";
import Image from "next/image";
import Icon from "@/../public/icon.jpg";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Logo from "@/../public/Logo.png";
import { usePathname } from "next/navigation";
import { NewPressButton } from "./buttons";

interface NavbarProps {
  href?: string;
  title: string;
}

export function Sidebar() {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  };
  const link: NavbarProps[] = [
    {
      title: "Dashboard",
      href: "#dashboard",
    },
    {
      title: "Kanban",
      href: "#kanban",
    },
    {
      title: "Inbox",
      href: "#inbox",
    },
    {
      title: "Users",
      href: "#users",
    },
    {
      title: "Products",
      href: "#products",
    },
    {
      title: "Sign In",
      href: "#signin",
    },
    {
      title: "Sign Up",
      href: "#signup",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target=""
                data-drawer-toggle=""
                aria-controls=""
                type="button"
                onClick={handleClick}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              {modal && (
                <>
                  <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>
                  <div className="fixed inset-0 z-50 w-64 h-full pt-20 transition-transform translate-x-0 bg-white border-r  border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                      <ul className="space-y-2 font-medium">
                        <li>
                          <button onClick={handleClick}>Close</button>
                        </li>
                        {link.map((item, index) => (
                          <li key={index + 1}>
                            <a
                              href={item.href}
                              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                              <svg
                                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6Z" />
                              </svg>
                              <span className="ms-3">{item.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <Image
                  src={Icon}
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                  width={32}
                  height={32}
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Flowbite
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="w-8 h-8 rounded-full"
                      src={Icon}
                      alt="user photo"
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {link.map((item, index) => (
              <li key={index + 1}>
                <a
                  href={item.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6Z" />
                  </svg>
                  <span className="ms-3">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

export function Navbar() {
  const [modal, setModal] = useState(false);
  const { data: session, status } = useSession();
  const pathname=usePathname();
  if(pathname =="/AccessDenied") return null;
  const handleClick = () => {
    setModal(!modal);
  };

  const link: NavbarProps[] = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "Fitur",
      href: "#about",
    },
    {
      title: "Tentang Kami",
      href: "#services",
    },
    {
      title: "Pengembang",
      href: "#contact",
    },
  ];
  return (
    <section className="fixed z-50 w-full">
      <nav className="bg-transparent flex justify-around py-8 items-center">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={64} height={64} />
          </Link>
        </div>
        <div className="bg-white rounded-full h-16 px-8 drop-shadow-shadow-2 ">
          <button
            title="Hamburg"
            className="size-8 xl:hidden w-full h-full mx-auto"
            onClick={handleClick}
          >
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#36888f"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#36888f"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#36888f"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {modal && (
            <div className="xl:hidden">
              <div className="fixed z-50 bg-white text-brand-color-800 rounded-3xl right-0  p-8">
                <ul className="flex flex-col gap-8">
                  {link.map((item, index) => (
                    <li
                      key={index + 1}
                      className="hover:text-brand-color-500 duration-500"
                    >
                      <a href={item.href}>{item.title}</a>
                    </li>
                  ))}
                  <li>
                    <NewPressButton variant="secondary" className="">
                      Gabung
                    </NewPressButton>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <ul className="hidden xl:flex gap-16 justify-center items-center h-full ">
            {link.map((item, index) => (
              <li
                key={index + 1}
                className="text-black hover:underline hover:underline-offset-4 hover:text-brand-color-600 duration-500"
              >
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {status == "authenticated" ? (
          <NewPressButton
            type="button"
            variant="primary"
            onClick={() => signOut({ callbackUrl: "/signin" })}
          >
            <Image
              src={session?.user?.image as string}
              alt="user image"
              width={36}
              height={36}
              className="rounded-full"
            />
          </NewPressButton>
        ) : (
          <NewPressButton
            variant="primary"
            onClick={() => {
              signIn();
            }}
            className="xl:block hidden"
          >
            Yuk Gabung !
          </NewPressButton>
        )}
      </nav>
    </section>
  );
}
