import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const RootLayout = () => (
  <div className="min-h-screen bg-neutral-50 text-neutral-900">
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default RootLayout;
