import { useState, useCallback } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

function App() {
  const [accountData, setAccountData] = useState([]);
  const [value, setValue] = useState("");
  const [expense, setExpense] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedCost, setEditedCost] = useState(0);

  const handleDelete = useCallback(
    (id) => {
      let newAccountData = accountData.filter((data) => data.id !== id);
      setAccountData(newAccountData);
    },
    [accountData]
  );

  const handleEdit = useCallback(
    (id) => {
      console.log("handleEdit 호출");
      const selectedData = accountData.find((data) => data.id === id);

      setEditedTitle(selectedData.title);
      setEditedCost(selectedData.cost);
      setIsEditing(true);
    },
    [accountData]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      const updatedData = accountData.map((data) =>
        data.id === editedTitle
          ? { ...data, title: value, cost: expense }
          : data
      );
      setAccountData(updatedData);
      setIsEditing(false);
    } else {
      let newAccountData = {
        id: Date.now(),
        title: value,
        cost: expense,
      };

      setAccountData((prev) => [...prev, newAccountData]);
    }

    setValue("");
    setExpense(0);
    setEditedTitle("");
    setEditedCost(0);
  };

  const handleRemoveClick = (e) => {
    setAccountData([]);
  };

  return (
    <div className="w-screen">
      <header className="text-2xl ml-4 mt-5 font-bold flex">
        <h1>예산 계산기</h1>
      </header>

      <div className="flex items-center justify-center ">
        <div className="w-full p-6 m-4 bg-white lg:w-3/4 lg:max-w-lg">
          <Form
            expense={expense}
            setExpense={setExpense}
            handleSubmit={handleSubmit}
            value={value}
            setValue={setValue}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            editedTitle={editedTitle}
            setEditedTitle={setEditedTitle}
            editedCost={editedCost}
            setEditedCost={setEditedCost}
          />
          <Lists
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            accountData={accountData}
            setAccountData={setAccountData}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            editedTitle={editedTitle}
            setEditedTitle={setEditedTitle}
          />
          <button
            className="text-xs p-2 px-4 border-2 text-white bg-my-color-lime hover:shadow"
            onClick={handleRemoveClick}
          >
            목록 지우기
          </button>
        </div>
      </div>
      <h2 className="text-2xl text-right mr-4">총지출: </h2>
    </div>
  );
}

export default App;
