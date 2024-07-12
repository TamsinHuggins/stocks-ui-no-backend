# React Stock Portfolio UI 

Demo react stock portfolio UI, backend is simulated using dummy data.

## Run the Demo

```
git clone https://github.com/TamsinHuggins/stocks-ui-no-backend.git
cd react-stocks-demo
npm install
npm run dev

```


## Features
### Transactions Component
- Stock purchase transactions displayed (will become a GET request when backend is hooked up)
- Component re-rendered when new stock is purchased


### PurchaseStock Component
- Finds avilable stocks and their current prices (will become a GET request when backend is hooked up)
- Stock ticker can be selected from drop down
- "Buy Stock" menu appears when stock ticker selected 
-  Purchase volume can be selected via input box
- Transactions array updated with new transaction based on chosen ticker and volume (will become a POST request when backend is hooked up)

### Behaviour


![transactions](https://github.com/user-attachments/assets/304a3967-66d5-43ce-8a55-1974278ab116)
