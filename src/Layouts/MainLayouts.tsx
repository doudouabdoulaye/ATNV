import Header from '../components/Header';
import Footer from '../components/Footer';

import { Outlet } from 'react-router-dom'; // Assurez-vous d'importer Outlet pour les routes imbriquées



function MainLayout() {
  return (
   <> 
    <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
   </>
  );
}

export default MainLayout;





