/* eslint-disable */
import React from "react";

const renderTransactions = (transactions) => {
  return transactions.map(t => {
    return (
      
      <tr key={t.id}>
        <td> {t.posted_at} </td>
        <td> {t.description} </td>
        <td> {t.category} </td>
        <td> {t.amount} </td>
      </tr>
    );
  });
};

const TransactionsList = ({transactions}) => {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Posted At</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {renderTransactions(transactions)}
      </tbody>
    </table>
  );
};

export default TransactionsList;
