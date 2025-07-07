//import React, { Children } from 'react';
//import Header from '../components/Header.tsx';
//import Footer from '../components/Footer.tsx';
//
//
//
//
//
//function MainLayout ({children}: MainLayouts){
//    return(
//        <div className='flex flex-col min-h-screen'>
//            <Header/>
//            <main className='flex-grown'>{children}</main>
//            <Footer/>
//        </div>
//    );
//};
//
//export default MainLayout

import Header from '../components/Header';
import Footer from '../components/Footer';
import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;





