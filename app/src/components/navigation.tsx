'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoSVG from '../../../public/logo.svg';
import { usePathname } from 'next/navigation';
import { FiSearch, FiShoppingCart, FiChevronRight, FiMenu, FiX } from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';

// Interface for navigation links
interface NavItem {
  label: string;
  href: string;
  isDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

// Reusable NavLink component
const NavLink: React.FC<{ item: NavItem; isMobile?: boolean }> = ({ item, isMobile = false }) => {
  const pathname = usePathname();
  const isActive = pathname === item.href || 
    (item.dropdownItems?.some(dropItem => pathname === dropItem.href) ?? false);
  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen && !isMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isMobile]);
  
  if (item.isDropdown) {
    // Mobile dropdown
    if (isMobile) {
      return (
        <div className="w-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full py-4 border-b border-gray-100"
            style={{ 
              color: isActive ? '#15B67A' : '#000000', 
              fontSize: '18px',
              fontFamily: 'var(--font-inter)'
            }}
          >
            {item.label}
            <span style={{ 
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease'
            }}>
              <BiChevronDown size={20} />
            </span>
          </button>
          
          {isOpen && (
            <div className="pl-4 py-2">
              {item.dropdownItems?.map((dropdownItem, idx) => (
                <Link 
                  key={idx} 
                  href={dropdownItem.href}
                  className="flex items-center justify-between w-full py-3"
                  style={{
                    color: pathname === dropdownItem.href ? '#15B67A' : '#000000',
                    fontSize: '16px',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 'normal'
                  }}
                >
                  <span>{dropdownItem.label}</span>
                  <FiChevronRight size={18} color={pathname === dropdownItem.href ? '#15B67A' : '#000000'} />
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    // Desktop dropdown
    return (
      <div className="flex flex-col items-center relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center"
          style={{ 
            color: isActive ? '#15B67A' : '#000000', 
            fontSize: '20px',
            fontFamily: 'var(--font-inter)'
          }}
        >
          {item.label}
          <span className="ml-1 inline-flex items-center" style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }}>
            <BiChevronDown size={20} />
          </span>
        </button>
        
        {isActive && (
          <div className="w-full h-1 bg-[#15B67A] rounded-full mt-1"></div>
        )}
        
        {isOpen && (
          <div className="absolute top-full left-0 mt-4 w-80 bg-white rounded-xl shadow-xl z-10 py-4 overflow-hidden">
            {item.dropdownItems?.map((dropdownItem, idx) => (
              <Link 
                key={idx} 
                href={dropdownItem.href}
                className="flex items-center justify-between w-full px-8 py-5 border-b border-gray-100 last:border-0 hover:bg-gray-50"
                style={{
                  color: '#000000',
                  fontSize: '18px',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 'normal'
                }}
              >
                <span>{dropdownItem.label}</span>
                <FiChevronRight size={24} color="#15B67A" />
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  // Mobile regular link
  if (isMobile) {
    return (
      <Link 
        href={item.href} 
        className="block w-full py-4 border-b border-gray-100"
        style={{ 
          color: isActive ? '#15B67A' : '#000000', 
          fontSize: '18px',
          fontFamily: 'var(--font-inter)'
        }}
      >
        {item.label}
      </Link>
    );
  }
  
  // Desktop regular link
  return (
    <div className="flex flex-col items-center">
      <Link 
        href={item.href} 
        style={{ 
          color: isActive ? '#15B67A' : '#000000', 
          fontSize: '20px',
          fontFamily: 'var(--font-inter)'
        }}
      >
        {item.label}
      </Link>
      {isActive && (
        <div className="w-full h-1 bg-[#15B67A] rounded-full mt-1"></div>
      )}
    </div>
  );
};

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close mobile menu when window resizes above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) { // lg breakpoint
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);
  
  // Define navigation links
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Company', href: '/company' },
    { 
      label: 'Resources', 
      href: '/resources',
      isDropdown: true,
      dropdownItems: [
        { label: 'Library', href: '/resources/library' },
        { label: 'Find a Mentor', href: '/resources/mentor' },
        { label: 'Community', href: '/resources/community' },
        { label: 'Explore Playground', href: '/resources/playground' }
      ]
    },
    { label: 'Community', href: '/community' }
  ];
  
  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 h-[80px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src={LogoSVG} 
                alt="SustainVersity Logo" 
                width={184} 
                height={36} 
                className="mr-2"
              />
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <FiX size={24} color="#000000" /> : <FiMenu size={24} color="#15B67A" />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <NavLink key={`nav-${index}`} item={item} />
            ))}
          </div>
          
          {/* Desktop Search, Cart, and Authentication */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-[#000000] ">
              <FiSearch size={20} />
            </button>
            
            <Link href="/auth/login" className="ml-4 flex items-center gap-1">
              <FiShoppingCart size={20} color="#15B67A" />
              <span className="bg-[#15B67A] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
            </Link>
            
            <div className="ml-6 flex items-center gap-3">
              <Link 
                href="/auth/login" 
                className="px-4 py-2 rounded-md text-[#15B67A] border border-[#15B67A] hover:bg-[#15B67A] hover:text-white transition-all"
              >
                Sign In
              </Link>
              <Link 
                href="/auth/register" 
                className="px-4 py-2 rounded-md bg-[#15B67A] text-white hover:bg-[#12a16c] transition-all"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 pt-[80px] flex flex-col">
            <div className="flex-1 overflow-y-auto px-4 py-6">
              {navItems.map((item, index) => (
                <NavLink key={`mobile-nav-${index}`} item={item} isMobile />
              ))}
              
              <div className="mt-6 flex flex-col gap-3">
                <Link 
                  href="/auth/login" 
                  className="w-full px-4 py-3 rounded-md text-[#15B67A] border border-[#15B67A] text-center"
                >
                  Sign In
                </Link>
                <Link 
                  href="/auth/register" 
                  className="w-full px-4 py-3 rounded-md bg-[#15B67A] text-white text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
