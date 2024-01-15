import React, { useState } from "react";

const NewNote = ({ newNote }) => {
  const [note, setNote] = useState({
    title: '',
    body: '',
    titleMaxLength: 50,
  });

  const onKeyUpTitleEventHandler = (e) => {
    const title = e.target.value;
    const titleMaxLength = Math.max(50 - title.length, 0);
    setNote({ ...note, title, titleMaxLength });
  };

  const onChangeTitleEventHandler = (e) => {
    setNote({ ...note, title: e.target.value });
  };

  const onChangeBodyEventHandler = (e) => {
    setNote({ ...note, body: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    newNote(note);
    setNote({
      title: '',
      body: '',
      titleMaxLength: 50,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="note-add">
      <div>
        <div className="note-add__title-label">
          <p align="right" className="note-add__textarea-character">
            <small>Sisa karakter: {note.titleMaxLength}</small>
          </p>
        </div>
        <input
          type="text"
          id="title"
          placeholder="Tulis Judul Catatan...."
          className="note-add__input"
          value={note.title}
          maxLength={50}
          onChange={onChangeTitleEventHandler}
          onKeyUp={onKeyUpTitleEventHandler}
        />
      </div>
      <div>
        <textarea
          cols="30"
          id="body"
          rows="10"
          placeholder="Tulis catatan kamu disini...."
          className="note-add__textarea"
          value={note.body}
          onChange={onChangeBodyEventHandler}
        ></textarea>
      </div>
      <button type="submit" className="note-add__button-save">
        Buat
      </button>
    </form>
  );
};

export default NewNote;
