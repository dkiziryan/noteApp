import React from "react";
import "./App.css";
import Note from "./containers/note";
import NotesList from "./containers/notesList";

import store from "./store";
import * as actions from "./redux/actions";

// Fetch the notes from the server here
store.dispatch(actions.fetchNotes());

function App() {
  return (
    <div className="container">
      <NotesList />
      <Note />
    </div>
  );
}

export default App;
