import React from "react";
import "./notesList.css";

const NotesList = props => {
  if (!props || !props.notes) {
    return null;
  }

  /**
   * Calls action to select note
   *
   * @param {object} note
   */
  // get rid of this...
  const handleSelectedNote = note => {
    props.selectNote(note);
  };

  /**
   * calls action to add new note
   */
  const handleAddNewNote = () => {
    props.newNote();
  };

  const notes = props.notes.map(r => (
    <li className="noteItem" onClick={() => handleSelectedNote(r)} key={r.id}>
      {r.body}
    </li>
  ));
  return (
    <ul className="notesList">
      {notes}
      <li onClick={() => handleAddNewNote()}>New Note</li>
    </ul>
  );
};

export default NotesList;
