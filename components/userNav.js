"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const UserNav = () => {
  const [mobileView, setMobileView] = useState(false);
  // const [showLogo, setShowLogo] = useState(true);

  const toggleMenu = () => {
    setMobileView(!mobileView);
    // setShowLogo(!showLogo);
  };

  return (
    <nav>
      <div className="bg-white h-14 px-5 flex justify-between items-center shadow-md border-b-2 border-gray-600/40">
        <Link href="/dashboard" className="text-lg cursor-pointer">
          <Image src="/logo.svg" height={60} width={60} alt="mible logo" />
        </Link>
        <ul className="hidden md:flex md:items-center">
          <li className="hover:text-gray-600 p-4 text-lg">
            <Link href="/dashboard" className="">
              Journal
            </Link>
          </li>
          <li className="hover:text-gray-600 p-4 text-lg">
            <Link href="#" className="">
              Resources
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-600 p-4 text-lg">
              Help
            </Link>
          </li>
          <li>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <Link href="/dashboard/account">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35"
                viewBox="0 -960 960 960"
                width="35"
              >
                <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
              </svg>
            </Link>
          </li>
        </ul>
        <svg
          className="hover:cursor-pointer md:hidden"
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          height="35"
          viewBox="0 -960 960 960"
          width="45"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
      {/* mobile navbar */}
      <div className="">
        <ul
          className={`md:hidden ${
            mobileView
              ? "z-20 flex flex-col fixed top-0 right-0 w-4/5 h-full bg-white/60 shadow-md backdrop-blur-sm"
              : "hidden"
          }`}
        >
          <li onClick={toggleMenu} className="cursor-pointer py-4 px-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35"
              viewBox="0 -960 960 960"
              width="35"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </li>
          <li className="hover:text-gray-600 p-4 text-lg">
            <Link href="#" className="">
              Daily Journal
            </Link>
          </li>
          <li className="hover:text-gray-600 p-4 text-lg">
            <Link href="#" className="">
              Reminders
            </Link>
          </li>
          <li className="hover:text-gray-600 p-4 text-lg">
            <Link href="#" className="">
              Quotes
            </Link>
          </li>
          <li className="hover:text-gray-600 p-4 text-lg">
            <Link href="#" className="">
              To-do
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserNav;
