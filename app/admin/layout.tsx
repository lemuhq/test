'use client';

import Link from 'next/link';
import { FiHome, FiSettings, FiLogOut } from 'react-icons/fi';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md z-10">
        <div className="flex flex-col h-full">
          {/* Logo */}
          {/* <div className="px-6 py-4 border-b border-gray-100">
            <Link href="/admin" className="flex items-center">
              <span className="text-2xl font-semibold text-green-600">Sustainversity</span>
            </Link>
          </div> */}

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 mt-20">
            <Link href="/admin" className="flex items-center px-4 py-3 text-gray-700 bg-green-50 rounded-lg">
              <FiHome className="w-5 h-5 mr-3 text-green-600" />
              <span className="text-sm font-medium text-black">Dashboard</span>
            </Link>

            <div className="pt-4 mt-4 border-t border-gray-100">
              {/* <Link href="/dashboard" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                <FiHome className="w-5 h-5 mr-3 text-gray-500" />
                <span className="text-sm font-medium text-black">Back to User Dashboard</span>
              </Link> */}
              
              <Link href="/admin/settings" className="flex items-center px-4 py-3 mt-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <FiSettings className="w-5 h-5 mr-3 text-gray-500" />
                <span className="text-sm font-medium text-black">Settings</span>
              </Link>

              <Link href="/auth/login" className="flex items-center px-4 py-3 mt-1 text-gray-600 hover:bg-gray-50 rounded-lg">
                <FiLogOut className="w-5 h-5 mr-3 text-gray-500" />
                <span className="text-sm font-medium text-black">Logout</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 pl-64">
        {children}
      </div>
    </div>
  );
} 