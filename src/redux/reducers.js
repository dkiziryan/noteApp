import * as noteActions from "./actions";

export const initialState = {
  notes: [],
  selectedNote: null,
  error: ""
};

/**
 * Main note reducer to handle the state changes.
 *
 */
export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case noteActions.FETCH_NOTES_SUCCESS:
      return { ...state, notes: action.payload.notes.data };
    case noteActions.ADD_NOTE_SUCCESS:
      const noteArray = [...state.notes];
      const addedNote = action.payload.notes;
      noteArray.push(addedNote);
      return { ...state, notes: noteArray, selectedNote: addedNote };
    case noteActions.UPDATE_NOTE_SUCCESS:
      const updatedNoteId = action.payload.notes.id;
      const copyOfNotes = [...state.notes];
      const updatedNoteIndex = copyOfNotes.findIndex(
        note => note.id === updatedNoteId
      );
      copyOfNotes[updatedNoteIndex] = action.payload.notes;
      return { ...state, notes: copyOfNotes };
    case noteActions.DELETE_NOTE_SUCCESS:
      const noteId = action.payload.noteId;
      const newNotes = [...state.notes];
      newNotes.splice(newNotes.findIndex(note => note.id === noteId), 1);
      return { ...state, notes: newNotes, selectedNote: null };
    case noteActions.SELECT_NOTE:
      return { ...state, selectedNote: action.payload.note };
    case noteActions.NEW_NOTE:
      return { ...state, selectedNote: null };
    case noteActions.ERROR:
      return { ...state, error: action.payload.errorMessage };
    default:
      return state;
  }
};
