
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main className="container">
        {/* Contenu des routes enfants */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;