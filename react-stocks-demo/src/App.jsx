import "./App.css";
import PurchaseStock from "./components/PurchaseStock/PurchaseStock";
import OrderTable from "./components/OrderTable/OrderTable";
import { useState } from "react";
import { buyDummyStock } from "./data/dummyData";

function App() {
  const [bought, setBought] = useState(0); // currently can only be used once per page load

  const handleBuy = (ticker, quantity) => {
    setBought(1);
    buyDummyStock(ticker, quantity);
  };

  return (
    <div>
      <OrderTable />
      <PurchaseStock buyFunc={handleBuy} />
    </div>
  );
}

export default App;
