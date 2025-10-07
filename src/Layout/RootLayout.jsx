import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div className="min-h-screen w-full h-full flex flex-col">
      <Navbar></Navbar>
      <div className="flex-1 container mx-auto px-[3%] md:px-0">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
