import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  // We pass a FUNCTION to useState. It runs only once when the app starts.
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("InkFlowTransactions");
    // If we find data, parse it. If not, return empty array [].
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("InkFlowTransactions", JSON.stringify(transactions));
  }, [transactions]);

  // INPUT STATES

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  // CHALLENGE 1: Add a new transaction
  const addTransaction = () => {
    // TODO: 
    // 1. Create a new object 

    const newTransaction = {
      id: Date.now(),
      text: text,
      amount: Number(amount)
    };
    setTransactions([...transactions, newTransaction]);
    setText("");
    setAmount(0);
    console.log("Add me!");
  };

  //Delete a transaction
  const deleteTransaction = (id) => {
    // TODO:
    setTransactions(transactions.filter(t => t.id !== id));

    console.log("Delete item:", id);
  };

  // THE MATH SECTION
  const amounts = transactions.map(transaction => transaction.amount);

  // 1. Calculate Total Balance
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // 2. Calculate Income (Only positive numbers)
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // 3. Calculate Expense (Only negative numbers)
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="container">
      <h1>InkFlow Finance</h1>

      {/* BALANCE CARD */}
      <div className="balance-card">
        <h2>Your Balance</h2>
        <h1>${total}</h1>
      </div>

      {/* INCOME/EXPENSE ROW */}
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expense}</p>
        </div>
      </div>

      {/* NEW TRANSACTION FORM */}
      <h3>Add New Transaction</h3>
      <div className="form-control">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount (-negative = expense)"
        />
        <button className="btn" onClick={addTransaction}>Add Transaction</button>
      </div>

      {/* HISTORY LIST */}
      <h3>History</h3>
      <ul className="list">
        {transactions.map(t => (
          <li key={t.id} className={t.amount < 0 ? 'minus' : 'plus'}>
            {t.text} <span>{t.amount < 0 ? "-" : "+"}${Math.abs(t.amount)}</span>
            <button onClick={() => deleteTransaction(t.id)} className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App