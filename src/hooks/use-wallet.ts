import { useState, useEffect } from 'react';

interface WalletState {
  balance: number;
  loyaltyPoints: number;
  transactions: Array<{
    id: string;
    type: 'deposit' | 'payment' | 'transfer' | 'reward';
    amount: number;
    description: string;
    date: string;
  }>;
}

const STORAGE_KEY = 'apex_wallet_state';

const initialState: WalletState = {
  balance: 1250.50,
  loyaltyPoints: 450,
  transactions: [
    { id: '1', type: 'payment', amount: -45.00, description: 'Ride to Airport', date: new Date().toISOString() },
    { id: '2', type: 'reward', amount: 10.00, description: 'Referral Bonus', date: new Date(Date.now() - 86400000).toISOString() },
    { id: '3', type: 'deposit', amount: 500.00, description: 'Bank Transfer', date: new Date(Date.now() - 172800000).toISOString() },
  ]
};

export function useWallet() {
  const [state, setState] = useState<WalletState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const addTransaction = (type: WalletState['transactions'][0]['type'], amount: number, description: string) => {
    const newTransaction = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      amount,
      description,
      date: new Date().toISOString(),
    };
    setState(prev => ({
      ...prev,
      balance: prev.balance + amount,
      transactions: [newTransaction, ...prev.transactions],
    }));
  };

  const addLoyaltyPoints = (points: number) => {
    setState(prev => ({
      ...prev,
      loyaltyPoints: prev.loyaltyPoints + points,
    }));
  };

  return { ...state, addTransaction, addLoyaltyPoints };
}
