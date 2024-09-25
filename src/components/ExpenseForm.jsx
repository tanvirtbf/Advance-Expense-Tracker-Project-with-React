import { useState } from "react";

const ExpenseForm = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors,setErrors] = useState({})

  function validate(form){
    let formErrors = {}
    if(form.title===''){
      formErrors.title = 'Title is Required!'
    }
    if(form.category===''){
      formErrors.category = 'Category is Required!'
    }
    if(form.amount===''){
      formErrors.amount = 'Amount is Required!'
    }
    setErrors(formErrors)
    return formErrors
  }

  function submitForm(e) {
    e.preventDefault();

    const validationResult = validate(expense)
    if(Object.keys(validationResult).length) return 

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({ title: "", category: "", amount: "" });
  }

  function commonFunction(e) {
    setExpense((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    setErrors((prevState)=> ({
      ...prevState, 
      [e.target.name]: '',
    }))
  }

  return (
    <form className="expense-form" onSubmit={(e) => submitForm(e)}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={commonFunction}
        />
        <p className="error">{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={commonFunction}
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
        <p className="error">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={commonFunction}
        />
        <p className="error">{errors.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
