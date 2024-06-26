import { useRef, useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  const [data, setData] = useState({
    id: crypto.randomUUID(),
    title: "",
    category: "",
    amount: "",
  });

  const myRef = useRef("hello")
  console.log(myRef)

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses((prevState) => [...prevState, data]);
    setData((prevState) => ({
      ...prevState,
      title: "",
      category: "",
      amount: "",
    }));
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={data.title}
          onChange={(e) =>
            setData((prevState) => ({ ...prevState, title: e.target.value }))
          }
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={data.category}
          onChange={(e) =>
            setData((prevState) => ({ ...prevState, category: e.target.value }))
          }
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
          value={data.amount}
          onChange={(e) =>
            setData((prevState) => ({ ...prevState, amount: e.target.value }))
          }
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
