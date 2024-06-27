import { useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  const [expense,setExpense] = useState({
    title:'',
    category:'',
    amount:'',
  })

  const [errors,setErrors] = useState("")

  const validate = (form) => {
    let errorMsg = {}
    if(!expense.title){
      errorMsg.title = "Title is Required"
    }
    if(!expense.category){
      errorMsg.category = "Category is Required"
    }
    if(!expense.amount){
      errorMsg.amount = "Amount is Required"
    }
    setErrors(errorMsg)
    return errorMsg
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(expense)
    if(Object.keys(validation).length) return 
    setExpenses((prevState) => [
      ...prevState,
      {
        id:crypto.randomUUID(),
        ...expense
      }
    ])
  }

  const handleChange = (e) => {
    const {name,value} = e.target
    setExpense((prevState)=>({...prevState,[name]:value}))
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" value={expense.title} onChange={handleChange}/>

      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" value={expense.category} onChange={handleChange}>
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
        <input id="amount" name="amount" value={expense.amount} onChange={handleChange}/>
      </div>
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
}
