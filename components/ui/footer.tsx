import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="flex items-center md:col-span-4">
              <img className="flex w-full mr-2" src="/images/goraya1.png" alt="Logo" />
            </div>

            {/* 3rd block */}
            <div className="flex items-center md:col-span-4">
              <img className="h-8 w-8 mr-2" src="/logo.png" alt="Logo" />
              <span className="text-white font-semibold">87-ag-Agri @ PBG - Faisalabad</span>
            </div>

{/* 2nd block */}
<div className="flex items-center md:col-span-4">
              <img className="flex w-full mr-2" src="/images/goraya3.png" alt="Image2" />
              
            </div>


          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              {/* Social links */}
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; 2024 - Naeem Goraya All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  );
}
