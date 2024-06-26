import { useRef, useState } from "react";
import ErrorMsg from "./ErrorMsg";

//Validation
export default function ExpenseForm({ setExpenses }) {
  const [isNull, setIsNull] = useState({
    isTitle: true,
    isCategory: true,
    isAmount: true,
  });

  const titleRef = useRef("");
  const categoryRef = useRef("");
  const amountRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(titleRef.current.value)

    if (titleRef.current.value === "")
      setIsNull((prev) => ({ ...prev, isTitle: false }));
    if (categoryRef.current.value === "")
      setIsNull((prev) => ({ ...prev, isCategory: false }));
    if (amountRef.current.value === "")
      setIsNull((prev) => ({ ...prev, isAmount: false }));

    let data = {
      id: crypto.randomUUID(),
      title: titleRef.current.value,
      category: categoryRef.current.value,
      amount: amountRef.current.value,
    };

    if (isNull.isTitle===true || isNull.isCategory===true || isNull.isAmount===true) {
      setExpenses((prevState) => [...prevState, data]);
      titleRef.current.value = "";
      categoryRef.current.value = "";
      amountRef.current.value = "";
    }

  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" ref={titleRef} />
        {!isNull.isTitle && <ErrorMsg errorMsg={"Title Required"} />}
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" ref={categoryRef}>
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
        {!isNull.isCategory && <ErrorMsg errorMsg={"Category Required"} />}
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" ref={amountRef} />
        {!isNull.isAmount && <ErrorMsg errorMsg={"Amount Required"} />}
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
