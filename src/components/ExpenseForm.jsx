import ErrorMsg from "./ErrorMsg";

//Validation
export default function ExpenseForm({ setExpenses }) {
  const handleSubmit = (e) => {};

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title"  />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" >
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
        <input id="amount"  />
      </div>
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
}
