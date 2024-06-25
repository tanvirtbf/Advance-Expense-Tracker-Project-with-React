import { useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  const [title,setTitle] = useState("")
  const [category,setCategory] = useState("")
  const [amount,setAmount] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {id:crypto.randomUUID(), title,category,amount}
    setExpenses((prevState)=> [...prevState, data])
  };


  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" value={amount} onChange={(e)=> setAmount(e.target.value)} />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
