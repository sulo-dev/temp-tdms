import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Ticketing from './pages/Ticketing';
import PaketWisata from './pages/PaketWisata';
import Homestay from './pages/Homestay';
import SewaAlat from './pages/SewaAlat';
import MerchantUMKM from './pages/MerchantUMKM';
import EventSeni from './pages/EventSeni';
import Keuangan from './pages/Keuangan';
import Laporan from './pages/Laporan';
import type { UserRole } from './types';

export default function App() {
  const [role, setRole] = useState<UserRole>('Admin');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout currentRole={role} setRole={setRole} />}>
          
          <Route index element={<Dashboard />} />
          
          <Route path="loket" element={['Admin', 'Kasir'].includes(role) ? <Ticketing /> : <Navigate to="/" />} />
          
          <Route path="paket" element={['Admin', 'Pemandu'].includes(role) ? <PaketWisata /> : <Navigate to="/" />} />

          <Route path="homestay" element={['Admin', 'Pengelola'].includes(role) ? <Homestay /> : <Navigate to="/" />} />

          {/* Menambahkan 5 Halaman Baru */}
          <Route path="alat" element={['Admin', 'Kasir'].includes(role) ? <SewaAlat /> : <Navigate to="/" />} />
          
          <Route path="umkm" element={['Admin', 'Pengelola'].includes(role) ? <MerchantUMKM /> : <Navigate to="/" />} />
          
          <Route path="event" element={['Admin'].includes(role) ? <EventSeni /> : <Navigate to="/" />} />
          
          <Route path="keuangan" element={['Admin'].includes(role) ? <Keuangan /> : <Navigate to="/" />} />
          
          <Route path="laporan" element={['Admin'].includes(role) ? <Laporan /> : <Navigate to="/" />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}