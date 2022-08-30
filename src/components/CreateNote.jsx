import React, { useState, useEffect } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const CreateNote = (props) => {
  let characterLimit = 50;
  const randomInteger = (pow) => {
    return Math.floor(Math.random() * pow);
  };
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    id: randomInteger(1000),
    title: "",
    body: "",
    createdAt: new Date(),
    archived: false,
  });

  // const maxCharacter = (limit) => {
  //   const characterLimit = 50 - limit.length;
  //   return characterLimit;
  // };
  const titleHandler = (event) => {
    if (event.target.value.length <= 50) {
      setNote((prevNote) => {
        return {
          ...prevNote,
          title: event.target.value,
        };
      });
    }
  };
  const bodyHandler = (event) => {
    setNote((prevNote) => {
      return {
        ...prevNote,
        body: event.target.value,
      };
    });
  };

  function handleExpanded() {
    setExpanded(true);
  }

  const setId = (prevState) => {
    console.log(prevState);
    prevState.map((n) => {
      n == "" ? (n.id = 1) : n[n.length - 1].id + 1;
    });
  };

  function submitButton(event) {
    props.onAdd(note);
    console.log("note: ", note);
    setNote({
      title: "",
      body: "",
    });

    event.preventDefault();
  }

  return (
    <div>
      <form className="relative">
        <div className="border border-gray-300 dark:border-0 rounded-lg shadow-sm overflow-hidden">
          {isExpanded && (
            <div className="relative">
              <input
                type="text"
                value={note.title}
                placeholder="Title"
                name="title"
                required
                className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0 text-gray-900 bg-white dark:bg-slate-700/60 dark:placeholder-slate-400 dark:text-white"
                onChange={titleHandler}
              />
              <span className="absolute bottom-0 right-0 pr-3 flex items-center pointer-events-none text-xs text-gray-300 dark:text-slate-600">
                Remaing character: {characterLimit - note.title.length}
              </span>
            </div>
          )}
          <textarea
            onClick={handleExpanded}
            name="body"
            value={note.body}
            placeholder="Add your note here..."
            className="block w-full border-0 py-2 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm text-gray-900 bg-white dark:bg-slate-700/60 dark:placeholder-slate-400 dark:text-white"
            onChange={bodyHandler}
            rows={isExpanded ? 3 : 2}
          ></textarea>
          <div className="p-2 bg-gray-100 dark:bg-slate-800 flex justify-end">
            <button
              type="button"
              onClick={submitButton}
              className="relative bg-gray-500 hover:bg-slate-700 focus:outline-none text-sm text-white font-semibold py-1.5 px-2 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto"
            >
              Add Note
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
