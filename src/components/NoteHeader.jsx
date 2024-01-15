import NoteSearch from "./NoteSearch";

function NoteHeader({ searchNote }) {
  return (
    <header className="note-app__header">
      <div className="note-app__header-logo">
        <h1>CatatanQ</h1>
      </div>
      <NoteSearch searchNote={searchNote} />
    </header>
  );
}

export default NoteHeader;