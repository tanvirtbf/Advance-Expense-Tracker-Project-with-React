import React, { useState } from "react";

const ExpenseForm = ({handleSubmit}) => {

  function submitForm(e){
    e.preventDefault();
    const {title,category,amount} = getFormData(e.target)
    handleSubmit(title,category,amount)
  } 

  function getFormData(form){
    const formData = new FormData(form)
    let data = {}
    for(let [key,value] of formData.entries()){
      data[key] = value
    }
    return data
  }

  return (
    <form className="expense-form" onSubmit={(e)=> submitForm(e)}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" >
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
        <input id="amount" name="amount" />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
