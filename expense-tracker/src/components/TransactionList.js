import React, {useContext} from 'react'
import {Transaction} from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  // Acess global context, and use destructuring to get just the transactions
  const { transactions } = useContext(GlobalContext);
  
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction}/>
        ))}
        
      </ul>
    </>
  )
}
