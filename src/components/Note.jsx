import React from "react";
import { useState } from "react";
import {
  TrashIcon,
  PencilIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/solid";

const Note = ({
  id,
  title,
  body,
  date,
  archived,
  setNote,
  deleteNote,
  archiveNote,
}) => {
  const [noteBody, setNoteBody] = useState(body);
  const [noteTitle, setNoteTitle] = useState(title);
  const [noteDate] = useState(date);
  const [editMode, setEditMode] = useState(false);

  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNote(id, noteBody, noteTitle, noteDate);
    setEditMode(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 sm:p-4 bg-white text-gray-900 border dark:border-0 dark:bg-slate-700 dark:text-slate-300 rounded-lg h-80 font-sans flex flex-col shadow-sm dark:shadow-transparent gap-y-2"
    >
      {!editMode ? (
        <div className="flex flex-col items-center">
          <div className="outline-none w-full bg-transparent text-center px-2 text-2xl font-bold tracking-wider break-words">
            {title}
          </div>
          <p className="text-xs text-gray-300 dark:text-slate-500">
            {showFormattedDate(date)}
          </p>
        </div>
      ) : (
        <input
          value={noteTitle}
          className="outline-none w-full bg-transparent text-center px-2 text-2xl font-bold tracking-wider "
          onChange={(e) => setNoteTitle(e.target.value)}
        />
      )}

      {!editMode ? (
        <div className="outline-none bg-transparent text-justify flex-grow text-sm break-words overflow-y-auto">
          {body}
        </div>
      ) : (
        <textarea
          className="outline-none w-full bg-transparent text-justify flex-grow text-sm"
          onChange={(e) => setNoteBody(e.target.value)}
          defaultValue={noteBody}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
        ></textarea>
      )}

      <div className="flex justify-between items-center">
        <div className="w-full flex gap-x-2">
          {/* <button
            type="button"
            onClick={() => setEditMode(true)}
            className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PencilIcon className="h-5 w-5" aria-hidden="true" />
          </button> */}
          <button
            type="button"
            onClick={() => archiveNote(id)}
            className="w-full inline-flex justify-center items-center p-1 border border-transparent rounded-md shadow-sm text-white sm:bg-yellow-700 hover:bg-yellow-800 focus:outline-none"
          >
            <ArchiveBoxIcon className="h-5 w-5 mr-2" aria-hidden="true" />{" "}
            {archived ? (
              <span className="hidden lg:block">Unarchive</span>
            ) : (
              <span className="hidden lg:block">Archive</span>
            )}
          </button>
          <button
            type="button"
            onClick={() => deleteNote(id)}
            className="w-full inline-flex justify-center items-center p-1 border border-transparent rounded-md shadow-sm text-white bg-red-700 hover:bg-red-800 focus:outline-none"
          >
            <TrashIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            <span className="hidden lg:block">Delete</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Note;
