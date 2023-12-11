import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  const keepMatches = (note) => note.doesMatchSearch;
  const searchMatches = props.notes.filter(keepMatches);

  const renderNote = (note) => (
    <Note
      key={note.id}
      note={note}
      onType={props.onType}
      removeNote={props.removeNote}
    />
  );
  const noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
