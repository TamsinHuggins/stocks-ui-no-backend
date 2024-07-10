const TransactionTableRow = (props) => {
  console.log("from trans table", props.transaction);
  return (
    <tr key={props.transaction.id}>
      <td>{props.transaction.id}</td>
      <td>{props.transaction.ticker}</td>
      <td>{props.transaction.purchasePrice}</td>
      <td>{props.transaction.volume}</td>
      <td>{props.transaction.date.toLocaleString()}</td>
    </tr>
  );
};

export default TransactionTableRow;
