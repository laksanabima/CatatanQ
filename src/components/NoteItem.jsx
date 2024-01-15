import { showFormattedDate } from "../utils";

function NoteItem({ id, title, body, createdAt, type, deleteNote, moveNote, archiveNote }) {
  const isArchiveType = type === 'archive';

  const secondButton = (
    <button
      type="submit"
      className={isArchiveType ? "note-item__button-move" : "note-item__button-archive"}
      onClick={() => (isArchiveType ? moveNote(id) : archiveNote(id))}
    >
      {isArchiveType ? "Pindah ke Catatan Aktif" : "Arsipkan Catatan"}
    </button>
  );

  return (
    <div className="note-item">
      <h3 className="note-item__title">{title}</h3>
      <div className="note-item__date">{showFormattedDate(createdAt)}</div>
      <div className="note-item__body">{body}</div>
      <div className="note-item__button-wrap">
        <div className="note-item__button">
          <button type="submit" className="note-item__button-delete" onClick={() => deleteNote(id)}>
            Hapus Catatan
          </button>
          {secondButton}
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
