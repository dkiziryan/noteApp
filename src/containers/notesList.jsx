import { connect } from "react-redux";
import NotesList from "./../components/notesList";
import { getNotes } from "./../redux/selectors";
import * as notesActions from "./../redux/actions";

const mapStateToProps = state => {
  return {
    notes: getNotes(state)
  };
};

const mapDispatchToProps = {
  selectNote: notesActions.selectNote,
  newNote: notesActions.newNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesList);
