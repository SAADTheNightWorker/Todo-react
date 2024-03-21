import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  console.log(placeholder);

  const AddTodo = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      alert("Please enter your work");
    } else {
      const newTodo = { item: input };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const Delete = (index) => {
    const todoList = [...todos];
    todoList.splice(index, 1);
    setTodos(todoList);
  };

  const Update = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].item = update;
    setPlaceholder(""); // Reset placeholder after updating
    setTodos(updatedTodos);
    setEdit(false);
  };

  return (
    <div className="flex justify-center items-center relative h-screen">
      <div className="w-full max-w-[640px] border p-32 rounded-lg relative">
        <h1 className="text-5xl absolute top-2 left-5 text-[#ffffff] font-medium">
          Todo React
        </h1>

        <div className="flex bg-[#fff] rounded-lg transition-all">
          <input
            className="flex-1 w-full p-3 outline-none rounded-lg text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your todo"
          />

          <button
            onClick={AddTodo}
            className="pr-4 font-semibold cursor-pointer p-2 hover:bg-[#212121] hover:duration-200"
          >
            ADD
          </button>
        </div>

        <ul className="pt-10 font-semibold text-[#fff] relative flex flex-col justify-start items-center w-full">
          {todos.length === 0 && (
            <h2 className="text-5xl absolute top-2 left-5 text-[#ffffff] font-medium">
              Enter Your Work
            </h2>
          )}
          {todos.map((todo, index) => (
            <li
              key={index}
              className="pb-5 border-b w-full flex justify-start my-4 items-center"
            >
              {edit ? (
                <input
                  onChange={(e) => setUpdate(e.target.value)}
                  className="-ml-[120px] w-48 outline-none rounded-lg text-md text-black p-4"
                  value={update}
                  placeholder="Enter updated todo"
                />
              ) : (
                todo.item
              )}

              <button
                onClick={() => Delete(index)}
                className="border rounded-lg font-sans text-black hover:bg-transparent hover:text-white bg-[#fff] mt-3 ml-[62%] px-5 cursor-pointer p-3 hover:transition-all hover:duration-[.3s]"
              >
                Delete
              </button>

              {edit ? (
                <button
                  onClick={() => Update(index)}
                  className="border rounded-lg font-sans text-black hover:bg-transparent hover:text-white bg-[#fff] mt-3 ml-2 animate-pulse px-5 cursor-pointer p-3 hover:transition-all hover:duration-[.3s]"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEdit(true);
                    setUpdate(todo.item);
                    setPlaceholder(todo.item);
                  }}
                  className="border rounded-lg font-sans text-black hover:bg-transparent hover:text-white bg-[#fff] mt-3 ml-2 animate-pulse px-5 cursor-pointer p-3 hover:transition-all hover:duration-[.3s]"
                >
                  Edit
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
