import NoteItem from "./NoteItem";

function NoteList({ notes, type, deleteNote, moveNote, archiveNote }) {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <div className="note-list-empty">
          <h4>Belum ada Catatan</h4>
        </div>
      ) : (
        notes.map((note) => (
          <NoteItem
            type={type}
            deleteNote={deleteNote}
            moveNote={moveNote}
            archiveNote={archiveNote}
            key={note.id}
            {...note}
          />
        ))
      )}
    </div>
  );
}

export default NoteList;
