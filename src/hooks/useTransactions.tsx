import { createContext, useEffect, useState, useContext } from 'react';
import { api } from '../services/api';

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions));
    }, []);

    async function createTransaction(transactionInput: Transaction) {
        const response = await api.post('/transactions', transactionInput);
        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}


export function useTransactions() {
    const context = useContext(TransactionsContext);
    return context;
}