/**
 * Takes last note id and increments or defaults to one.
 *
 * @param {*} lastNoteId
 */
export const generateNoteId = lastNoteId => {
  if (!lastNoteId) {
    return 1;
  }
  return ++lastNoteId;
};
