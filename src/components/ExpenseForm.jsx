import { useState } from "react";

//Validation
export default function ExpenseForm({ setExpenses }) {
  const [expense,setExpense] = useState({
    title:'',
    category:'',
    amount:'',
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses((prevState)=>[
      ...prevState,
      {id:crypto.randomUUID(),...expense}
    ])
  };

  const handleChange = (e)=>{
    const {name,value} = e.target
    setExpense((prevState)=>({...prevState,[name]:value}))
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" onChange={handleChange} />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" onChange={handleChange}>
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
        <input id="amount" name="amount" onChange={handleChange} />
      </div>
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
}
