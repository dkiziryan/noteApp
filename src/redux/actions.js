/*
 * action types
 */
export const FETCH_NOTES = "FETCH_NOTES";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const NEW_NOTE = "NEW_NOTE";
export const ADD_NOTE = "ADD_NOTE";
export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS";
export const DELETE_NOTE = "DELETE_NOTE";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const UPDATE_NOTE_SUCCESS = "UPDATE_NOTE_SUCCESS";
export const SELECT_NOTE = "SELECT_NOTE";
export const ERROR = "ERROR";

/**
 * fetches notes from server
 */
export const fetchNotes = () => {
  return { type: FETCH_NOTES };
};

/**
 * Once notes are fetched successfully we call this action
 * to save the notes to the store.
 *
 * @param {object} notes notes object returned from server
 */
export const fetchNotesSuccess = notes => {
  return {
    type: FETCH_NOTES_SUCCESS,
    payload: {
      notes
    }
  };
};

/**
 * Adds a new note, defaults created_by
 *
 * @param {string} title note title
 * @param {string} body note body
 */
export const addNote = (title, body) => {
  return {
    type: ADD_NOTE,
    payload: {
      title,
      body,
      created_by: "Dennis"
    }
  };
};

/**
 * Once note is added succesfully we pass the
 * return data from the promise via action to store
 *
 * @param {object} notes notes object returned from server
 */
export const addNoteSuccess = notes => {
  return {
    type: ADD_NOTE_SUCCESS,
    payload: {
      notes
    }
  };
};

/**
 * Deletes the note
 *
 * @param {number} id id of note
 */
export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    payload: {
      id
    }
  };
};

/**
 * After succesfful deletion we pass the return data
 * from the promise to the store
 *
 * @param {number} noteId id of note
 */
export const deleteNoteSuccess = noteId => {
  return {
    type: DELETE_NOTE_SUCCESS,
    payload: {
      noteId
    }
  };
};

/**
 * Action to update note.
 *
 * @param {number} id id of note
 * @param {string} title title of note
 * @param {string} body body of note
 */
export const updateNote = (id, title, body) => {
  return {
    type: UPDATE_NOTE,
    payload: {
      id,
      title,
      body,
      edited_by: "Dennis"
    }
  };
};

/**
 * Aftern successful update we pass the data from the
 * promise via action to update the store
 *
 * @param {object} notes notes returned from server
 */
export const updateNoteSuccess = notes => {
  return {
    type: UPDATE_NOTE_SUCCESS,
    payload: {
      notes
    }
  };
};

/**
 * Action when note is selected.
 *
 * @param {object} note the note object
 */
export const selectNote = note => {
  return {
    type: SELECT_NOTE,
    payload: {
      note
    }
  };
};

/**
 * Action for when we want to add a new note
 */
export const newNote = () => {
  return {
    type: NEW_NOTE
  };
};

/**
 * Error action that passes the erroMessage to store.
 *
 * @param {string} errorMessage string error message
 */
export const error = errorMessage => {
  return {
    type: ERROR,
    payload: {
      errorMessage
    }
  };
};
