import React, { useState, useEffect } from "react";
import NoteLists from "../components/NoteLists";
import { getInitialData } from "../utils/index";
import useLocalStorage from "use-local-storage";
import { localStorageKey, setLocalStorage } from "../utils/helper.js";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Archives = () => {
  const [notes, setNotes] = useLocalStorage(localStorageKey, getInitialData());
  const [searchQuery, setSearchQuery] = useState("");
  const [counts, setCounts] = useState(0);

  const onDeleteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    console.log(newNotes);
  };

  const onArchiveHandler = (id) => {
    console.log("note id: ", id);
    notes.map((note) => {
      if (note.id === id) {
        setNotes([...notes, (note.archived = !note.archived)]);
      }
    });
  };

  // const onArchiveHandler = (id) => {
  //   const targetIndex = notes.findIndex((note) => note.id === id);
  //   const targetNote = notes[targetIndex];

  //   const newNotes = [
  //     {
  //       ...targetNote,
  //       archived: !targetNote.archived,
  //     },
  //   ];
  //   notes.splice(targetIndex, 1);
  //   setNotes(notes.concat(newNotes));
  //   console.log(notes);
  // };

  return (
    <div className="flex flex-col min-w-screen min-h-screen px-8">
      <div className="w-full flex justify-end mb-10">
        <div className="relative flex items-center w-60">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search note"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="shadow-sm block w-full pr-12 sm:text-sm border-gray-300 dark:bg-slate-700/60 dark:placeholder-slate-400 dark:text-white dark:border-0 rounded-md"
          />
          <div className="absolute inset-y-0 right-0 flex p-1.5">
            <MagnifyingGlassIcon
              className="w-7 h-7 ml-2  text-gray-500"
              placeholder="search"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-4">
        <NoteLists
          notes={notes
            .filter((note) => note.archived === true)
            .filter((note) =>
              note.title.toLowerCase().includes(searchQuery.toLowerCase())
            )}
          archiveNote={onArchiveHandler}
          deleteNote={onDeleteHandler}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
};

export default Archives;
