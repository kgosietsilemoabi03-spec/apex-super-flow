import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { WalletPage } from './pages/Wallet';
import { MarketplacePage } from './pages/Marketplace';
import { FreightPage } from './pages/Freight';
import { SafetyPage } from './pages/Safety';
import { ChatPage } from './pages/Chat';
import { AcademyPage } from './pages/Academy';
import { FinancingPage } from './pages/Financing';
import { AuctionsPage } from './pages/Auctions';
import { BusManagementPage } from './pages/BusManagement';
import { LogisticsPortalPage } from './pages/LogisticsPortal';
import { RentalPage } from './pages/Rental';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="freight" element={<FreightPage />} />
          <Route path="safety" element={<SafetyPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="academy" element={<AcademyPage />} />
          <Route path="financing" element={<FinancingPage />} />
          <Route path="auctions" element={<AuctionsPage />} />
          <Route path="bus-management" element={<BusManagementPage />} />
          <Route path="logistics" element={<LogisticsPortalPage />} />
          <Route path="rental" element={<RentalPage />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
