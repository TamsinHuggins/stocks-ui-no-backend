import { getDummyTransactions } from "../../data/dummyData";
import TransactionTableRow from "./TransactionTableRow";

const Transactions = () => {
  const dummyTransactions = getDummyTransactions();

  console.log(dummyTransactions);

  return (
    <div>
      <h1>Transaction History</h1>
      <table className="transactionsTable">
        <thead>
          <tr>
            <th>ID</th>
            <th> Ticker </th>
            <th> Purchase Price</th>
            <th>Volume</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {dummyTransactions.map((transaction) => (
            <TransactionTableRow
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
