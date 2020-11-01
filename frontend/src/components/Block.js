import React from 'react';
import { MILLISECONDS_PY } from '../config'
import Transaction from './Transaction';

function Block({ block }) {
  const { timestamp, hash, data } = block
  const hashDisplay = hash.length > 15 ? `${hash.substring(0, 15)}...` : hash
  const timestampDisplay = new Date(timestamp/ MILLISECONDS_PY).toLocaleString()

  return (
    <div className="Block">
      <div>Hash: {hashDisplay}</div>
      <div>Timestamp: {timestampDisplay}</div>
      <div>
        {
          data.map(transaction => (
            <div key={transaction.id}>
              <hr/>
              <Transaction transaction={transaction} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Block