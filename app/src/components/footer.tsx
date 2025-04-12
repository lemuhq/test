'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa';
import LogoSVG from '../../../public/logo.svg';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2E646F] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 pb-8 border-b border-white/20">
          {/* Logo and newsletter description */}
          <div className="mb-6 md:mb-0 md:max-w-xs">
            <div className="mb-2">
              <Image 
                src={LogoSVG} 
                alt="Sustained" 
                width={130} 
                height={26} 
                className="brightness-0 invert" 
              />
            </div>
            <p className="text-sm text-white/80">
              Enter your email address to receive updates on new courses.
            </p>
          </div>
          
          {/* Newsletter form */}
          <div className="w-full md:w-auto md:flex-1 md:max-w-md ml-0 md:ml-auto">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full rounded-md border-0 bg-black/50 py-3 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button className="absolute right-1 top-1 bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition">
                Submit
              </button>
            </div>
            <div className="mt-2 flex items-center">
              <input type="checkbox" id="updates" className="h-4 w-4 border-gray-300 rounded text-green-400 focus:ring-green-400" />
              <label htmlFor="updates" className="ml-2 text-sm text-white/90">
                I agree to receive email updates
              </label>
            </div>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="font-medium text-base mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/careers" className="text-sm text-white/80 hover:text-white">Careers</Link></li>
              <li><Link href="/terms" className="text-sm text-white/80 hover:text-white">Terms</Link></li>
              <li><Link href="/support" className="text-sm text-white/80 hover:text-white">Support</Link></li>
            </ul>
          </div>
          
          {/* Explore section */}
          <div>
            <h3 className="font-medium text-base mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/mentors" className="text-sm text-white/80 hover:text-white">Mentors</Link></li>
              <li><Link href="/forums" className="text-sm text-white/80 hover:text-white">Forums</Link></li>
              <li><Link href="/business" className="text-sm text-white/80 hover:text-white">Epikho Business</Link></li>
            </ul>
          </div>
          
          {/* Social section */}
          <div>
            <h3 className="font-medium text-base mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white flex items-center">
                  <FaFacebookF className="mr-2 text-green-400" /> Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white flex items-center">
                  <FaTwitter className="mr-2 text-green-400" /> Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white flex items-center">
                  <FaInstagram className="mr-2 text-green-400" /> Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white flex items-center">
                  <FaLinkedinIn className="mr-2 text-green-400" /> LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white flex items-center">
                  <FaYoutube className="mr-2 text-green-400" /> Youtube
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Download section */}
          <div>
            <h3 className="font-medium text-base mb-4">Download</h3>
            <div className="space-y-2">
              <Link href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition w-full max-w-[150px]">
                <FaApple className="text-xl mr-2" />
                <div>
                  <div className="text-[8px] leading-none">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Link>
              <Link href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition w-full max-w-[150px]">
                <FaGooglePlay className="text-xl mr-2" />
                <div>
                  <div className="text-[8px] leading-none">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
