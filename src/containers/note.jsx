import { connect } from "react-redux";
import Note from "./../components/note";
import * as notesActions from "./../redux/actions";
import * as noteSelectors from "./../redux/selectors";

const mapStateToProps = state => {
  const selectedNote = noteSelectors.getSelectedNote(state);
  const error = noteSelectors.getError(state);
  return {
    selectedNote,
    titleValue: selectedNote ? selectedNote.title : "",
    bodyValue: selectedNote ? selectedNote.body : "",
    error
  };
};

const mapDispatchToProps = {
  addNote: notesActions.addNote,
  deleteNote: notesActions.deleteNote,
  updateNote: notesActions.updateNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
