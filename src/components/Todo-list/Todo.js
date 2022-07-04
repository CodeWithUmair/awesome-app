import React, { useState, useEffect } from "react";
import "./Todo.css";
import todo from "../Todo-list/icons8-list.gif";

// Get the Data from Local Storage
const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log("lists");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  // Add items from List:-

  const addItem = () => {
    if (!inputData) {
      alert("Please fill data");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);

      setInputData("");

      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  // Add items from List (Enter) Button.
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
      if (!inputData) {
        alert("Please fill data");
      } else if (inputData && !toggleSubmit) {
        setItems(
          items.map((elem) => {
            if (elem.id === isEditItem) {
              return { ...elem, name: inputData };
            }
            return elem;
          })
        );
        setToggleSubmit(true);

        setInputData("");

        setIsEditItem(null);
      } else {
        const allInputData = {
          id: new Date().getTime().toString(),
          name: inputData,
        };
        setItems([...items, allInputData]);
        setInputData("");
      }
    }
  };

  // Edit items from List:-
  const editItem = (id) => {
    let newEditItems = items.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditItems);

    setToggleSubmit(false);

    setInputData(newEditItems.name);

    setIsEditItem(id);
  };

  // Delete items from List:-

  const deleteItem = (index) => {
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });

    setItems(updateditems);
  };

  // Remove All items from List:-
  const removeAll = () => {
    alert(`Are you sure to clear all data?`);
    setItems([]);
  };

  // Add Data to local storage
  useEffect(() => {
    document.title = `Todo-List 📃`;
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="TodoImage" />
            <figcaption> Add your List here👇 </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            {toggleSubmit ? (
              <i
                className="fa fa-plus add-btn"
                title="Add Item"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="far fa-edit add-btn"
                title="Update Item"
                onClick={addItem}
              ></i>
            )}
          </div>
          <div className="showItems">
            {items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3> {elem.name} </h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="Edit Item"
                      onClick={() => editItem(elem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(elem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span> Check List </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
