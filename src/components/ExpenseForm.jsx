import React, { useEffect, useRef } from "react";

const ExpenseForm = ({setExpenses}) => {
  const titleRef = useRef(null)
  const categoryRef = useRef(null)
  const amountRef = useRef(null)

  console.log(titleRef.current)

  function submitForm(e){
    e.preventDefault();
    let formData = {
      id: crypto.randomUUID(),
      title: titleRef.current.value,
      category: categoryRef.current.value,
      amount: amountRef.current.value,
    }
    setExpenses((prevState) => [...prevState, formData])
  } 

  return (
    <form className="expense-form" onSubmit={(e)=> submitForm(e)}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" ref={titleRef} />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" ref={categoryRef} >
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
        <input id="amount" name="amount" ref={amountRef} />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
