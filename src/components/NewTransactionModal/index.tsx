import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { v4 } from 'uuid';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions';

import { Container, TransactionsTypeContainer, RadioBox } from './styles';
Modal.setAppElement('#root');

function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const { createTransaction } = useTransactions();
  const [typeTransaction, setTypeTransaction] = useState('deposit');
  const [title, setTitle] = useState('');
  const [ammount, setAmmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      id: v4(),
      title,
      typeTransaction,
      category,
      ammount,
      createdAt: new Date().toLocaleDateString('pt-br'),
    });

    setTypeTransaction('deposit');
    setTitle('');
    setAmmount(0);
    setCategory('');

    onRequestClose();
  }

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >

        <button onClick={onRequestClose} className="react-modal-close">
          <img src={closeImg} alt="fechar modal" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Transação</h2>
          <input
            placeholder="Titulo"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <input
            type="number"
            placeholder="Valor"
            value={ammount}
            onChange={event => setAmmount(Number(event.target.value))}
          />

          <TransactionsTypeContainer>
            <RadioBox
              isActive={typeTransaction === 'deposit'}
              activeColor="green"
              type="button"
              onClick={() => setTypeTransaction('deposit')}
            >
              <img src={incomeImg} alt="entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
              isActive={typeTransaction === 'withdraw'}
              activeColor="red"
              type="button"
              onClick={() => setTypeTransaction('withdraw')}
            >
              <img src={outcomeImg} alt="saida" />
              <span>Saida</span>
            </RadioBox>
          </TransactionsTypeContainer>

          <input
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />
          <button type="submit" >Cadastrar</button>
        </Container>
      </Modal>
    </Container>
  );
};

export default NewTransactionModal;
