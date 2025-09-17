
"use client";
import React, { useState } from 'react';
import {
  Globe,
  Home,
  Landmark,
  Building2,
  LineChart,
  Shield,
  FileText,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const mainNav = [
  { href: '/national', icon: Home, label: 'National Dashboard' },
  { href: '/agent', icon: Landmark, label: 'Enawuga Agent Portal' },
  { href: '/pfi', icon: Building2, label: 'PFI Workbenches' },
  { href: '/sme', icon: LineChart, label: 'SME Dashboard' },
];

const adminNav = [
  { href: '/esx', icon: Shield, label: 'ESX Dashboard' },
  { href: '/nbe', icon: FileText, label: 'NBE Dashboard' },
  { href: '/ecma', icon: DollarSign, label: 'ECMA Dashboard' },
  { href: '/mof', icon: DollarSign, label: 'MoF Workbench' },
];

export function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-10 hidden sm:flex flex-col border-r ${open ? 'bg-gray-900' : 'bg-gray-950'} transition-all duration-300 ${open ? 'w-56 max-w-xs' : 'w-14'} min-h-screen`}
    >
  <div className="flex h-16 items-center border-b px-2 justify-between">
        <a href="#" className={`flex items-center font-semibold ${open ? 'gap-2 text-lg' : 'justify-center'}`} style={{width: open ? 'auto' : '100%', color: open ? 'var(--primary)' : '#fff'}}>
          <Globe className="h-6 w-6 text-primary" />
          {open && <span style={{whiteSpace: 'nowrap', fontSize: '1.1rem'}}>Unity OS v3.1</span>}
        </a>
        <button
          aria-label={open ? 'Collapse menu' : 'Expand menu'}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto rounded-full p-2 hover:bg-gray-800 text-gray-400"
          style={{marginLeft: open ? 'auto' : 0}}
        >
          {open ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className={`grid items-start ${open ? 'px-3' : 'px-1'} font-medium`}>
          {mainNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center rounded-lg py-2 transition-all hover:text-white hover:bg-primary ${open ? 'gap-3 px-3 text-base text-gray-200' : 'justify-center px-1 text-xs text-gray-300'}`}
              style={{width: open ? '100%' : '100%', minWidth: 0, background: open ? 'transparent' : 'inherit'}}
            >
              <item.icon className="h-4 w-4" />
              {open && <span style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.label}</span>}
            </a>
          ))}
          <div className="my-2 border-t border-gray-700"></div>
          {adminNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center rounded-lg py-2 text-gray-400 transition-all hover:text-gray-50 hover:bg-gray-800 ${open ? 'gap-3 px-3 text-base' : 'justify-center px-1 text-xs'}`}
              style={{width: open ? '100%' : '100%', minWidth: 0}}
            >
              <item.icon className="h-4 w-4" />
              {open && <span style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.label}</span>}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
