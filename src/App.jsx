import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";

function App() {
  const [expenses,setExpenses] = useState(expenseData)

  const handleSubmit = (title,category,amount) => {
    setExpenses((prevState)=> [...prevState, {id:crypto.randomUUID(), title, category, amount}])
  }



  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm handleSubmit={handleSubmit}  />
          <ExpenseTable expenses={expenses} />
        </div>
      </main>
    </>
  );
}

export default App;
