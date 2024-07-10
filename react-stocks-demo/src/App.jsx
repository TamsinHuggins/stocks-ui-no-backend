import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PurchaseStock from "./components/PurchaseStock/PurchaseStock";
import Transactions from "./components/Transactions/Transactions";
import { useState } from "react";
import { buyDummyStock } from "./data/dummyData";

function App() {
  const [newTransID, setNewTransID] = useState(4); // hard coded at 4 as the backend will take over this functionality

  const handleBuy = (ticker, volume) => {
    setNewTransID((id) => id + 1);
    buyDummyStock(newTransID, ticker, volume);
  };

  return (
    <div>
      <Transactions />
      <PurchaseStock buyFunc={handleBuy} />
    </div>
  );
}

export default App;

{
  /* <BrowserRouter>
  <Routes>
    <Route path="transactions" element={<Transactions />} />
    <Route path="buy" element={<PurchaseStock buyFunc={handleBuy} />} />
  </Routes>
</BrowserRouter>; */
}
