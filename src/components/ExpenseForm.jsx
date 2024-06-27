import { useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  const [expense,setExpense] = useState({
    title:'',
    category:'',
    amount:'',
  })
  const [errors,setErrors] = useState("")

  const validate = (formData)=>{
    let errorMsg = {}
    if(!formData.title) errorMsg.title="Title Required"
    if(!formData.category) errorMsg.category="Category Required"
    if(!formData.amount) errorMsg.amount="Amount Required"

    setErrors(errorMsg)
    return errorMsg
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(expense)
    if(Object.keys(validation).length) return 
    setExpenses((prevState)=>[
      ...prevState,
      {id:crypto.randomUUID(),...expense}
    ])
  };

  const handleChange = (e)=>{
    const {name,value} = e.target
    setExpense((prevState)=>({...prevState,[name]:value}))
    setErrors({})
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" value={expense.title} onChange={handleChange} />
        {
          errors.title && <span style={{color:'red'}}>{errors.title}</span>
        }
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
        {errors.category && <span style={{color:'red'}}>{errors.category}</span>}
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount" value={expense.amount} onChange={handleChange} />
        {errors.amount && <span style={{color:'red'}}>{errors.amount}</span>}
      </div>
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
}
