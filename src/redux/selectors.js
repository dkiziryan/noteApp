/**
 * returns notes
 *
 * @param {object} state
 */
export const getNotes = state => {
  if (!state || !state.notes) {
    return undefined;
  }
  return state.notes;
};

/**
 * Returns the last note
 *
 * @param {object} state
 */
export const getLastNote = state => {
  if (!state || !state.notes) {
    return undefined;
  }
  return state.notes[state.notes.length - 1];
};

/**
 * returns the currently selected note
 *
 * @param {object} state
 */
export const getSelectedNote = state => {
  if (!state || !state.selectedNote) {
    return undefined;
  }
  return state.selectedNote;
};

/**
 * returns the error
 *
 * @param {object} state
 */
export const getError = state => {
  if (!state) {
    return undefined;
  }
  return state.error;
};
