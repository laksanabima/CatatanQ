function NoteSearch({ searchNote }) {
  return (
    <div className="note-app__header-search">
      <input type="text" placeholder="Cari catatan..." className="note-app__header-search-input" onChange={searchNote} />
    </div>
  );
}

export default NoteSearch;