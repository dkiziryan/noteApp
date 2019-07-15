import { createLogic } from "redux-logic";
import axios from "axios";
import * as actions from "./redux/actions";
import * as constants from "./constants";
import * as noteUtils from "./utils/utils";
import * as noteSelectors from "./redux/selectors";

/**
 * Logic to get notes from server and then dispatch action
 * to add success full note return value to store or
 * throw error.
 */
const fetchNotes = createLogic({
  type: actions.FETCH_NOTES,
  process({ getState, action }, dispatch, done) {
    axios
      .get(constants.NOTES_LOCAL)
      .then(data => dispatch(actions.fetchNotesSuccess(data)))
      .catch(err => {
        console.error(err);
        dispatch(actions.error(constants.FETCH_NOTES_FAILED));
      })
      .then(() => done());
  }
});

/**
 * Logic to add note and then dispatch action
 * to add success full note return value to store or
 * throw error.
 */
const addNote = createLogic({
  type: actions.ADD_NOTE,
  validate({ getState, action }, allow, reject) {
    const { title, body, created_by } = action.payload;
    if (!title || !body || !created_by) {
      reject();
    } else {
      allow(action);
    }
  },
  process({ getState, action }, dispatch, done) {
    const { title, body, created_by } = action.payload;
    const lastNote = noteSelectors.getLastNote(getState());
    const lastNoteId = lastNote ? lastNote.id : undefined;
    const noteId = noteUtils.generateNoteId(lastNoteId);

    if (noteId) {
      dispatch(
        actions.addNoteSuccess({
          id: noteId,
          title,
          body,
          created_at: Date.now(),
          created_by
        })
      );
    } else {
      dispatch(actions.error(constants.ADD_NOTE_FAILED));
    }

    // axios
    //   .post(constants.NOTES_URL, { title, body, created_by })
    //   .then(data => {
    //     dispatch(actions.addNoteSuccess(data));
    //   })
    //   .catch(err => {
    //     dispatch(actions.error(constants.ADD_NOTE_FAILED));
    //   })
    //   .then(() => done());
  }
});

/**
 * Logic to update note and then dispatch action
 * to add successfull updated note return value to store or
 * throw error.
 */
const updateNote = createLogic({
  type: actions.UPDATE_NOTE,
  validate({ getState, action }, allow, reject) {
    const { id, title, body } = action.payload;
    if (!id || !title || !body) {
      reject();
    } else {
      allow(action);
    }
  },
  process({ getState, action }, dispatch, done) {
    const { id, title, body, edited_by } = action.payload;
    dispatch(
      actions.updateNoteSuccess({
        id,
        title,
        body,
        created_at: Date.now(),
        edited_by
      })
    );

    // axios
    //   .post(constants.NOTES_URL + id, { title, body, edited_by })
    //   .then(data => {
    //     dispatch(actions.updateNoteSuccess(data));
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     dispatch(actions.error(constants.UPDATE_NOTE_FAILED));
    //   })
    //   .then(() => done());
  }
});

/**
 * Logic to delete note and then dispatch action
 * to delete note in store or
 * throw error.
 */
const deleteNote = createLogic({
  type: actions.DELETE_NOTE,
  validate({ getState, action }, allow, reject) {
    const { id } = action.payload;
    if (!id) {
      reject();
    } else {
      allow(action);
    }
  },
  process({ getState, action }, dispatch, done) {
    const { id } = action.payload;

    if (id) {
      dispatch(actions.deleteNoteSuccess(id));
    } else {
      dispatch(actions.error(constants.DELETE_NOTE_FAILED));
    }

    // axios
    //   .delete(constants.NOTES_URL + id, { id })
    //   .then(data => {
    //     dispatch(actions.deleteNoteSuccess(id));
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     dispatch(actions.error(constants.DELETE_NOTE_FAILED));
    //   })
    //   .then(() => done());
  }
});

export default [addNote, fetchNotes, updateNote, deleteNote];
