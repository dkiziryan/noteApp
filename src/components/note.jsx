import React from "react";
import "./note.css";

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: "",
      bodyValue: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleUpdateNote = this.handleUpdateNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.titleValue !== this.props.titleValue &&
      prevProps.bodyValue !== this.props.bodyValue
    ) {
      this.setState({
        titleValue: this.props.titleValue,
        bodyValue: this.props.bodyValue
      });
    }
  }

  /**
   * Saves title input value to state
   *
   * @param {object} e
   */
  handleInputChange(e) {
    this.setState({ titleValue: e.target.value });
  }

  /**
   * Saves text area values to sate
   *
   * @param {object} e
   */
  handleTextAreaChange(e) {
    this.setState({ bodyValue: e.target.value });
  }

  /**
   * Calls action to add a new note.
   *
   * @param {object} e
   */
  handleSubmit(e) {
    e.preventDefault();
    this.props.addNote(this.state.titleValue, this.state.bodyValue);
  }

  /**
   * calls action to update note.
   */
  handleUpdateNote() {
    this.props.updateNote(
      this.props.selectedNote.id,
      this.state.titleValue,
      this.state.bodyValue
    );
  }

  /**
   * calls action to delete note
   */
  handleDeleteNote() {
    this.props.deleteNote(this.props.selectedNote.id);
  }

  render() {
    return (
      <form className="noteContainer" onSubmit={this.handleSubmit}>
        <div>
          <input
            placeholder="Note Title"
            className="noteInput"
            value={this.state.titleValue}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <textarea
            placeholder="Note Body"
            className="noteTextarea"
            value={this.state.bodyValue}
            onChange={this.handleTextAreaChange}
          />
        </div>
        <div>
          {!this.props.selectedNote ? (
            <input
              className="noteButton"
              type="submit"
              value="Add Note"
              disabled={this.props.error}
            />
          ) : (
            <div>
              <input
                className="noteButton"
                value="Update Note"
                disabled={this.props.error}
                type="button"
                onClick={this.handleUpdateNote}
              />
              <input
                className="noteButton"
                value="Delete Note"
                disabled={this.props.error}
                type="button"
                onClick={this.handleDeleteNote}
              />
            </div>
          )}
        </div>
        {this.props.error && (
          <div className="error">Error: {this.props.error}</div>
        )}
      </form>
    );
  }
}
