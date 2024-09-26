
import { useState } from "react";
import Input from "./Input";

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

      <Input className="input-container" label="Title" id="title" name="title" value={expense.title} onChange={commonFunction} errors={errors.title} />

      <Input className="input-container" label="Category" id="category" name="category" value={expense.category} onChange={commonFunction} errors={errors. category} type="select" />

      <Input className="input-container" label="Amount" id="amount" name="amount" value={expense.amount} onChange={commonFunction} errors={errors.amount} />

      <button className="add-btn">Add</button>

    </form>
  );
};

export default ExpenseForm;









