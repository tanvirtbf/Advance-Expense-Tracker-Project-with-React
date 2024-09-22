import React, { useState } from "react";

const ExpenseForm = ({handleSubmit}) => {
  const [title,setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [amount,setAmount] = useState('')

  function submitForm(e){
    e.preventDefault();
    handleSubmit(title,category,amount)
  } 

  return (
    <form className="expense-form" onSubmit={(e)=> submitForm(e)}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" value={category} onChange={(e)=> setCategory(e.target.value)} >
          <option value="" hidden>Select Category</option>
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
};

export default ExpenseForm;
