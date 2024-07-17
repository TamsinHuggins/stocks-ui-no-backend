import { getDummyOrders } from "../../data/dummyData";
import OrderTableRow from "./OrderTableRow";

const OrderTable = () => {
  const dummyOrders = getDummyOrders();

  return (
    <div>
      <h1>Orders</h1>
      <table className="OrderTable">
        <thead>
          <tr>
            <th>Created</th>
            <th> Status </th>
            <th> Type</th>
            <th> Ticker</th>
            <th> Quantity</th>
            <th> Price</th>
          </tr>
        </thead>
        <tbody>
          {dummyOrders.map((transaction, key) => (
            <OrderTableRow key={key} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
