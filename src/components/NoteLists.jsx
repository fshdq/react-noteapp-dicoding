import React from "react";
import Note from "./Note";
import { DocumentIcon } from "@heroicons/react/24/solid";

const NoteLists = ({ notes, deleteNote, archiveNote }) => {
  return (
    <div
      className={
        notes.length === 0
          ? "w-full"
          : "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
      }
    >
      {notes.length === 0 ? (
        <div className="relative flex flex-col items-center w-full border-2 border-gray-300 text-gray-900 dark:border-slate-700 dark:text-slate-700 border-dashed rounded-lg p-12 text-center">
          <DocumentIcon className="h-20 w-20" aria-hidden="true" />
          <span className="mt-2 block text-sm font-medium">
            No Archived Notes
          </span>
        </div>
      ) : (
        notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            date={note.createdAt}
            archived={note.archived}
            deleteNote={deleteNote}
            archiveNote={archiveNote}
          />
        ))
      )}
    </div>
  );
};

export default NoteLists;
