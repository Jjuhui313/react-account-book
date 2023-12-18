import React from "react";

function Form({
  value,
  setValue,
  expense,
  setExpense,
  handleSubmit,
  isEditing,
  setIsEditing,
  editedTitle,
  setEditedTitle,
  editedCost,
  setEditedCost,
}) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleExpenseChange = (e) => {
    setExpense(e.target.value);
  };

  if (isEditing) {
    return (
      <form>
        <div className="flex">
          <div className="flex flex-col w-1/2 mr-4">
            <label className="text-my-color-orange" htmlFor="value">
              지출 항목
            </label>
            <input
              type="text"
              name="value"
              className="border-b border-gray-200 border-b-gray-500"
              id="value"
              onChange={handleChange}
              value={editedTitle || ""}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-my-color-orange" htmlFor="expense">
              비용
            </label>
            <input
              type="number"
              name="expense"
              className="border-b border-gray-200 border-b-gray-500"
              id="expense"
              min="0"
              onChange={handleExpenseChange}
              value={editedCost || ""}
            />
          </div>
        </div>

        <button
          className="text-xs p-2 px-4 border-2 text-white bg-my-color-lime hover:shadow"
          onClick={() => setIsEditing(false)}
        >
          수정
        </button>
      </form>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className="flex flex-col w-1/2 mr-4">
            <label className="text-my-color-orange" htmlFor="value">
              지출 항목
            </label>
            <input
              type="text"
              name="value"
              className="border-b border-gray-200 border-b-gray-500"
              id="value"
              placeholder="예) 렌트비"
              onChange={handleChange}
              value={value}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-my-color-orange" htmlFor="expense">
              비용
            </label>
            <input
              type="number"
              name="expense"
              className="border-b border-gray-200 border-b-gray-500"
              id="expense"
              min="0"
              placeholder="0"
              onChange={handleExpenseChange}
              value={expense}
            />
          </div>
        </div>

        <input
          className="text-xs p-2 px-4 border-2 text-white bg-my-color-lime hover:shadow"
          type="submit"
          value="제출"
        />
      </form>
    );
  }
}

export default Form;
