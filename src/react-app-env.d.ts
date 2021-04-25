/// <reference types="react-scripts" />

interface ReactProps {
	children: ReactNode;
}

interface HeaderProps {
	onOpenNewTransactionModal: () => void;
}

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

interface RadioBoxProps {
	isActive: boolean;
	activeColor: 'green' | 'red';
}

interface Transaction {
	id: string;
	title: string;
	ammount: number;
	typeTransaction: string;
	category: string;
	createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
	children: ReactNode;
}

interface TransactionsContextData {
	transactions: Transaction[];
	createTransaction: (transaction: Transaction) => Promise<void>;
}
