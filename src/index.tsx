import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { v4 } from 'uuid';
import { App } from './components/App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: v4(),
          title: 'exemplo de entrada',
          typeTransaction: 'deposit',
          category: 'exemples',
          ammount: 6000,
          createdAt: new Date().toLocaleDateString('pt-br'),
        },
        {
          id: v4(),
          title: 'exemplo de saida',
          typeTransaction: 'withdraw',
          category: 'exemples',
          ammount: 1100,
          createdAt: new Date().toLocaleDateString('pt-br'),
        }
      ],
    })
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);