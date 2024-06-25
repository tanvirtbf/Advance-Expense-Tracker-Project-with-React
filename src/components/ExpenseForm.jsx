export default function ExpenseForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = {}
    for(const [key,value] of formData.entries()){
      data[key] = value
    }
    console.log(data)
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title"/>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category">
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
        <input id="amount" name="amount"/>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
