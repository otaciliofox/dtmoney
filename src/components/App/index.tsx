import { GlobalStyle } from '../../styles/global';
import { Header } from '../Header';
import { Dashboard } from '../Dashboard'
import { useState } from 'react';
import NewTransactionModal from '../NewTransactionModal';
import { TransactionsProvider } from '../../hooks/useTransactions';

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
};