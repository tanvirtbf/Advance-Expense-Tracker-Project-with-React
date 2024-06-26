import { useRef, useState } from "react";


//Validation
export default function ExpenseForm({ setExpenses }) {

  const titleRef = useRef("")
  const categoryRef = useRef("")
  const amountRef = useRef("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(titleRef.current.value)

    let data = {
      id:crypto.randomUUID(),
      title:titleRef.current.value,
      category:categoryRef.current.value,
      amount:amountRef.current.value,
    }
    setExpenses((prevState) => [...prevState, data]);
    titleRef.current.value=""
    categoryRef.current.value=""
    amountRef.current.value=""
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          ref={titleRef}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          ref={categoryRef}
        >
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
        <input
          id="amount"
          ref={amountRef}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
